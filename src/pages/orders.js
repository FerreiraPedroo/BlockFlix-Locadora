import { useContext, useState } from "react";
import { ButtonDetails } from "../components/button/button.style";
import { ContainerOrders, CheckOutCard, ContainerMovieInfoLeft, ContainerMovieInfoCenter, Text, TextCart, Button, ImgPoster, Accordion, ContainerOrder, ContainerMovieInfoRight } from "../styles/orders.style"
import { CartMovieContext } from "../context/cartmoviescontext";


export default function Orders() {

    const { orderList } = useContext(CartMovieContext);
    console.log(orderList)

    function AccordionOnCLick(props) {
        props.target.classList.toggle("act");
        const accordionPanel = props.target.nextSibling
        if (accordionPanel.style.maxHeight) {
            accordionPanel.style.maxHeight = null;
        } else {
            accordionPanel.style.maxHeight = accordionPanel.scrollHeight + "px";
        }
    };

    if (orderList.length === 0) {
        return (<><TextCart>Histórico de compras</TextCart><ContainerOrder ><Text font="32" center>Sem histórico</Text></ContainerOrder ></>)
    }
    return (
        <>
            <TextCart>Histórico de compras</TextCart>
            {orderList.map(order => {
                return (
                    <Accordion>
                        <Button w="0" h="48" font="20" className="accordion" onClick={AccordionOnCLick}>Pedido {order.order} - Status: Conluido</Button>
                        <ContainerOrders className="panel">
                            {
                                order.movies.map(orderunit => {
                                    return (
                                        <CheckOutCard>
                                            <ImgPoster src={"https://image.tmdb.org/t/p/w45" + orderunit.poster_path} alt="" />
                                            <ContainerMovieInfoLeft>
                                                <Text font="20">{orderunit.title}</Text>
                                            </ContainerMovieInfoLeft>
                                            <ContainerMovieInfoCenter>
                                                <Text color="silver">Lançamento:<Text> {orderunit.release_date.slice(0, 4)}</Text></Text>
                                                <Text color="silver">Duração:<Text> {orderunit.runtime} minutos</Text></Text>
                                                <Text color="silver">Gênero: <Text> {orderunit.genres.map((genre, index) => {
                                                    return (<Text key={genre.name}>{genre.name}{index === orderunit.genres.length - 1 ? "" : ", "}</Text>)
                                                })}</Text></Text>
                                            </ContainerMovieInfoCenter>
                                            <ContainerMovieInfoRight>
                                                <Text font="20" color="silver">R$<Text font="20"> {(orderunit.ALLPRICES.totalValue).toFixed(2)}</Text></Text>
                                                {/* <Text font="16" color="silver">Descontos:<Text font="16">6.75</Text></Text> */}
                                            </ContainerMovieInfoRight>
                                        </CheckOutCard>
                                    )
                                })
                            }
                        </ContainerOrders>
                    </Accordion>
                )
            })
            }
        </>
    )
}