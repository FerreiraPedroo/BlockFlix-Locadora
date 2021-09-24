import { CardContainer, CardImg, CardInfo, CardTextTitle, CardGroupButton, CardButtonDetails, CardButtonAddCart } from "./card.style";
import { moviePrice } from "../../dados/config";

const imgBaseUrl = "http://image.tmdb.org/t/p/";
const ImgSize = "original"//"w154";

export default function Card ({filme}){
    return (
        <CardContainer>
            <CardImg src={imgBaseUrl + ImgSize + filme.poster_path} />
            <CardInfo>
                <CardTextTitle>{filme.title}</CardTextTitle>
                <CardGroupButton>
                    <CardButtonDetails>Abrir</CardButtonDetails>
                    <CardButtonAddCart>R$ {moviePrice(filme)}</CardButtonAddCart>
                </CardGroupButton>
            </CardInfo>
        </CardContainer>
    )
}