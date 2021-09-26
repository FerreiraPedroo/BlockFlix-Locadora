import { CardContainer, CardImg, CardInfo, CardTextTitle, CardGroupButton, CardButtonDetails, CardButtonAddCart } from "./card.style";
import { moviePrice } from "../../dados/config";
import { Link } from "react-router-dom";

const imgBaseUrl = "http://image.tmdb.org/t/p/";
const ImgSize = "original"//"w154";

export default function Card ({filme}){
    return (
        <CardContainer>
            <CardImg src={imgBaseUrl + ImgSize + filme.poster_path} />
            <CardInfo>
                <CardTextTitle>{filme.title}</CardTextTitle>
                <CardGroupButton>

                    <Link to={"/moviedetails/"+filme.id} >
                    <CardButtonDetails>Abrir</CardButtonDetails>
                    </Link>

                    <Link to={"/checkout"}>
                    <CardButtonAddCart>R$ {moviePrice(filme)}</CardButtonAddCart>
                    </Link>


                </CardGroupButton>
            </CardInfo>
        </CardContainer>
    )
}