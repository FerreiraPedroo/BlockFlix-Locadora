import { useState, useEffect } from "react";
import { ButtonDetails } from "../components/button/button.style"
import {
    ContainerCheckOut, ContainerListCard, CheckOutCard, ContainerMovieInfoLeft, ContainerMovieInfoCenter, ContainerMovieInfoRight, ContainerCart, ContainerCartValue, ContainerCartValueCenter,
    Text, TextCart,
    ImgPoster, 
} from "../styles/checkout.style"


export default function CheckOut() {

    const [cart, setCart] = useState([]);

    return (
        <>
            <TextCart>CARRINHO</TextCart>
            <ContainerCheckOut>

                <ContainerListCard>

                    <CheckOutCard>
                        <ImgPoster src="https://image.tmdb.org/t/p/w92/rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg" alt="" />
                        <ContainerMovieInfoLeft>
                            <Text font="20">Viuva Negra: Marvel Comics</Text>
                            <Text font="16">Seu mundo. Seus segredos. Seu legado.</Text>
                            <Text color="silver">Lançamento:<Text> 2021</Text></Text>
                            <Text color="silver">Duração:<Text> 135 minutos</Text></Text>
                            <Text color="silver">Gênero: <Text> Mistério, Thriller, Terror</Text></Text>
                            <ButtonDetails w="96" h="24">Mais detalhes</ButtonDetails>
                        </ContainerMovieInfoLeft>

                        <ContainerMovieInfoCenter>
                            <Text font="20" color="silver">R$<Text font="20"> 6.75</Text></Text>
                            {/* <Text font="16" color="silver">Descontos:<Text font="16">6.75</Text></Text> */}
                        </ContainerMovieInfoCenter>

                        <ContainerMovieInfoRight>
                            <ButtonDetails w="40" h="40">REM</ButtonDetails>
                        </ContainerMovieInfoRight>

                    </CheckOutCard>

                    <CheckOutCard>
                        <ImgPoster src="https://image.tmdb.org/t/p/w92/rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg" alt="" />
                        <ContainerMovieInfoLeft>
                            <Text font="20">Viuva Negra: Marvel Comics</Text>
                            <Text font="16">Seu mundo. Seus segredos. Seu legado.</Text>
                            <Text color="silver">Lançamento:<Text> 2021</Text></Text>
                            <Text color="silver">Duração:<Text> 135 minutos</Text></Text>
                            <Text color="silver">Gênero: <Text> Mistério, Thriller, Terror</Text></Text>
                            <ButtonDetails w="96" h="32">Mais detalhes</ButtonDetails>
                        </ContainerMovieInfoLeft>

                        <ContainerMovieInfoCenter>
                            <Text font="20" color="silver">R$<Text font="20"> 6.75</Text></Text>
                            {/* <Text font="16" color="silver">Descontos:<Text font="16">6.75</Text></Text> */}
                        </ContainerMovieInfoCenter>

                        <ContainerMovieInfoRight>
                            <ButtonDetails w="40" h="40" center>REM</ButtonDetails>
                        </ContainerMovieInfoRight>

                    </CheckOutCard>

                    <CheckOutCard>
                        <ImgPoster src="https://image.tmdb.org/t/p/w92/rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg" alt="" />
                        <ContainerMovieInfoLeft>
                            <Text font="20">Viuva Negra: Marvel Comics</Text>
                            <Text font="16">Seu mundo. Seus segredos. Seu legado.</Text>
                            <Text color="silver">Lançamento:<Text> 2021</Text></Text>
                            <Text color="silver">Duração:<Text> 135 minutos</Text></Text>
                            <Text color="silver">Gênero: <Text> Mistério, Thriller, Terror</Text></Text>
                            <ButtonDetails w="96" h="32">Mais detalhes</ButtonDetails>
                        </ContainerMovieInfoLeft>

                        <ContainerMovieInfoCenter>
                            <Text font="20" color="silver">R$<Text font="20"> 6.75</Text></Text>
                            {/* <Text font="16" color="silver">Descontos:<Text font="16">6.75</Text></Text> */}
                        </ContainerMovieInfoCenter>

                        <ContainerMovieInfoRight>
                            <ButtonDetails w="40" h="40">REM</ButtonDetails>
                        </ContainerMovieInfoRight>

                    </CheckOutCard>

                    <CheckOutCard>
                        <ImgPoster src="https://image.tmdb.org/t/p/w92/rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg" alt="" />
                        <ContainerMovieInfoLeft>
                            <Text font="20">Viuva Negra: Marvel Comics</Text>
                            <Text font="16">Seu mundo. Seus segredos. Seu legado.</Text>
                            <Text color="silver">Lançamento:<Text> 2021</Text></Text>
                            <Text color="silver">Duração:<Text> 135 minutos</Text></Text>
                            <Text color="silver">Gênero: <Text> Mistério, Thriller, Terror</Text></Text>
                            <ButtonDetails w="96" h="32">Mais detalhes</ButtonDetails>
                        </ContainerMovieInfoLeft>

                        <ContainerMovieInfoCenter>
                            <Text font="20" color="silver">R$<Text font="20"> 6.75</Text></Text>
                            {/* <Text font="16" color="silver">Descontos:<Text font="16">6.75</Text></Text> */}
                        </ContainerMovieInfoCenter>

                        <ContainerMovieInfoRight>
                            <ButtonDetails w="40" h="40">REM</ButtonDetails>
                        </ContainerMovieInfoRight>

                    </CheckOutCard>

                    <CheckOutCard>
                        <ImgPoster src="https://image.tmdb.org/t/p/w92/rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg" alt="" />
                        <ContainerMovieInfoLeft>
                            <Text font="20">Viuva Negra: Marvel Comics</Text>
                            <Text font="16">Seu mundo. Seus segredos. Seu legado.</Text>
                            <Text color="silver">Lançamento:<Text> 2021</Text></Text>
                            <Text color="silver">Duração:<Text> 135 minutos</Text></Text>
                            <Text color="silver">Gênero: <Text> Mistério, Thriller, Terror</Text></Text>
                            <ButtonDetails w="96" h="32">Mais detalhes</ButtonDetails>
                        </ContainerMovieInfoLeft>

                        <ContainerMovieInfoCenter>
                            <Text font="20" color="silver">R$<Text font="20"> 6.75</Text></Text>
                            {/* <Text font="16" color="silver">Descontos:<Text font="16">6.75</Text></Text> */}
                        </ContainerMovieInfoCenter>

                        <ContainerMovieInfoRight>
                            <ButtonDetails w="40" h="40">REM</ButtonDetails>
                        </ContainerMovieInfoRight>

                    </CheckOutCard>

                    <CheckOutCard>
                        <ImgPoster src="https://image.tmdb.org/t/p/w92/rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg" alt="" />
                        <ContainerMovieInfoLeft>
                            <Text font="20">Viuva Negra: Marvel Comics</Text>
                            <Text font="16">Seu mundo. Seus segredos. Seu legado.</Text>
                            <Text color="silver">Lançamento:<Text> 2021</Text></Text>
                            <Text color="silver">Duração:<Text> 135 minutos</Text></Text>
                            <Text color="silver">Gênero: <Text> Mistério, Thriller, Terror</Text></Text>
                            <ButtonDetails w="96" h="32">Mais detalhes</ButtonDetails>
                        </ContainerMovieInfoLeft>

                        <ContainerMovieInfoCenter>
                            <Text font="20" color="silver">R$<Text font="20"> 6.75</Text></Text>
                            {/* <Text font="16" color="silver">Descontos:<Text font="16">6.75</Text></Text> */}
                        </ContainerMovieInfoCenter>

                        <ContainerMovieInfoRight>
                            <ButtonDetails w="40" h="40">REM</ButtonDetails>
                        </ContainerMovieInfoRight>

                    </CheckOutCard>

                    <CheckOutCard>
                        <ImgPoster src="https://image.tmdb.org/t/p/w92/rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg" alt="" />
                        <ContainerMovieInfoLeft>
                            <Text font="20">Viuva Negra: Marvel Comics</Text>
                            <Text font="16">Seu mundo. Seus segredos. Seu legado.</Text>
                            <Text color="silver">Lançamento:<Text> 2021</Text></Text>
                            <Text color="silver">Duração:<Text> 135 minutos</Text></Text>
                            <Text color="silver">Gênero: <Text> Mistério, Thriller, Terror</Text></Text>
                            <ButtonDetails w="96" h="32">Mais detalhes</ButtonDetails>
                        </ContainerMovieInfoLeft>

                        <ContainerMovieInfoCenter>
                            <Text font="20" color="silver">R$<Text font="20"> 6.75</Text></Text>
                            {/* <Text font="16" color="silver">Descontos:<Text font="16">6.75</Text></Text> */}
                        </ContainerMovieInfoCenter>

                        <ContainerMovieInfoRight>
                            <ButtonDetails w="40" h="40">REM</ButtonDetails>
                        </ContainerMovieInfoRight>

                    </CheckOutCard>



                </ContainerListCard>
                <ContainerCart>
                    <Text font="28">Resumo do pedido</Text>

                    <ContainerCartValue>

                        <ContainerCartValueCenter>
                            <Text color="silver">Subtotal </Text>
                            <Text color="silver">| Descontos</Text>
                            <Text ><br></br></Text>
                            <Text font="20">TOTAL</Text>
                        </ContainerCartValueCenter>


                        <ContainerCartValueCenter>
                            <Text>R$ 7,50</Text>
                            <Text>R$ 7,50</Text>
                            <Text><br></br></Text>
                            <Text font="20">R$ 957,50</Text>
                        </ContainerCartValueCenter>



                    </ContainerCartValue>




                    <ButtonDetails w="160" h="40" center>REM</ButtonDetails>
                </ContainerCart>

            </ContainerCheckOut>
        </>
    )
}