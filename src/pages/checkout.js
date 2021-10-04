import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartMovieContext } from "../context/cartmoviescontext";

import { moviePrice, allMovieDiscountPrice } from "../dados/config";

import { ButtonDetails } from "../components/button/button.style";
import {
    ContainerCheckOut, ContainerListCard, CheckOutCard, ContainerMovieInfoLeft, ContainerMovieInfoCenter, ContainerMovieInfoRight, ContainerCart, ContainerCartValue, ContainerCartValueCenter,
    Text, TextCart,
    ImgPoster,
} from "../styles/checkout.style";


export default function CheckOut() {
    const { cartMovieList, setCartMovieList, removeMovieCart } = useContext(CartMovieContext);

    // REMOVER UM ITEM DO CARRINHO
    function removeItemCart(props) {
        removeMovieCart(props.target.id);
    }

    // RESUMO DO PEDIDO
    function cartItensResume() {
        const allValues = allMovieDiscountPrice(cartMovieList);
        console.log("allValues", allValues)
        return (
            <>
                <ContainerCartValueCenter>
                    <Text color="silver" >Subtotal </Text>
                    {allValues.allDiscountValue === 0 ? "" : <Text color="silver">Descontos</Text>}
                    <Text ><br></br></Text>
                    <Text font="20">TOTAL</Text>
                </ContainerCartValueCenter>

                <ContainerCartValueCenter>
                    <Text >R$ {allValues.allMoviesWithoutDiscountValue.toFixed(2)}</Text>
                    {allValues.allDiscountValue === 0 ? "" : (<Text>R$ {allValues.allDiscountValue.toFixed(2)}</Text>)}
                    <Text><br></br></Text>
                    <Text font="20">R$ {allValues.allMoviesWithDiscountValue.toFixed(2)}</Text>
                </ContainerCartValueCenter>
            </>
        )
    }

    // FINALIZA O PEDIDO
    function finishOrder() {
        const orders = localStorage.orders === undefined ? [] : JSON.parse(localStorage.getItem("orders"));
        const calulatingAllPrices = cartMovieList.map(movie => {
            const movieAllValues = moviePrice(movie);
            movie.ALLPRICES = movieAllValues;
            return movie;
        })
        orders.push(
            {
                order: (parseInt(Math.random() * 10000) + 10000),
                date: Date.getTime,
                movies: calulatingAllPrices
            }
        );
        localStorage.setItem("orders", JSON.stringify(orders));
        localStorage.setItem("cartlist", "[]");
        setCartMovieList([]);
    }


    if (cartMovieList.length === 0) {
        return (<><TextCart>Carrinho</TextCart><ContainerCheckOut ><Text font="32" center>Seu carrinho está vasio</Text></ContainerCheckOut ></>)
    }

    return (
        <>
            <TextCart>Carrinho</TextCart>
            <ContainerCheckOut >
                <ContainerListCard>
                    {cartMovieList.map(movie => {
                        const movieAllValues = moviePrice(movie)
                        console.log("movieAllValues", movieAllValues)
                        return (
                            <CheckOutCard key={movie.id}>
                                <ImgPoster src={"https://image.tmdb.org/t/p/w92/" + movie.poster_path} alt="" />
                                <ContainerMovieInfoLeft>
                                    <Text font="20">{movie.title}</Text>
                                    <Text color="silver">Lançamento:<Text> {movie.release_date.slice(0, 4)}</Text></Text>
                                    <Text color="silver">Gênero: {movie.genres.map((genre, index) => {
                                        return <Text >{genre.name}{index === movie.genres.length - 1 ? "" : ", "}</Text>
                                    })}</Text>
                                    <Link to={"/moviedetails/"+movie.id}><ButtonDetails w="96" h="24">Mais detalhes</ButtonDetails></Link>
                                </ContainerMovieInfoLeft>
                                <ContainerMovieInfoCenter>
                                    <Text font="28">R$ {(movieAllValues.totalValue).toFixed(2)}</Text>
                                    {movieAllValues.discountMovieGenre.discountPerGenre.length !== 0 ?
                                        <>
                                            <Text font="16" color="silver" decoration> R$ {(movieAllValues.originalValue).toFixed(2)} </Text>
                                            <Text font="12" color="silver" >Total descontos R$ {(movieAllValues.discountMovieGenre.totalDiscount).toFixed(2)}</Text>
                                            {
                                                movieAllValues.discountMovieGenre.discountPerGenre.map((discount) => {
                                                    return (<><Text font="12" nomargin nowraptext color="silver">&#8226; {discount[0]} R$ {discount[1].toFixed(2)}</Text><Text font="12" nomargin></Text></>)
                                                })
                                            }
                                        </>
                                        : ""
                                    }
                                </ContainerMovieInfoCenter>
                                <ContainerMovieInfoRight>
                                    <ButtonDetails w="40" h="40" id={movie.id} onClick={removeItemCart} font="32" className="material-icons md-48">delete</ButtonDetails>
                                </ContainerMovieInfoRight>
                            </CheckOutCard>
                        )
                    })}
                </ContainerListCard>
                <ContainerCart>
                    <Text font="28">Resumo do pedido</Text>
                    <ContainerCartValue>
                        {cartItensResume()}
                    </ContainerCartValue>
                    <ButtonDetails w="160" h="40" center onClick={finishOrder}>FINALIZAR</ButtonDetails>
                </ContainerCart>
            </ContainerCheckOut>
        </>
    )
}