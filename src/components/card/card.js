import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { CartMovieContext } from "../../context/cartmoviescontext";
import { moviePrice, apiKey, language, movieDetailsReturn, } from "../../dados/config";

import {
    CardContainer, CardImg, CardInfo, CardTextTitle, CardGroupButton,
    CardButtonAddCart, CardTextValue, Text
} from "./card.style";

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

export default function Card({ movie }) {
    // DISPONIBILIZA A FUNÇÃO PARA ADICIONAR FILME NO CARRINHO PELO CONTEXT.
    const movieValue = movie;
    // console.log(movie)
    const { addMovieCart } = useContext(CartMovieContext);
    let movieValues = moviePrice(movieValue);
    // console.log("movieValues", movieValues)
    // console.log("movieValues.discountMovieGenre",movieValues.discountMovieGenre.totalDiscount === 0)

    // HISTORY PARA IR PARA O CHECKOUT DEPOIS DE RECEBER OS DETALHES DO FILME.
    const history = useHistory();

    // ADICIONA O FILME NO CARRINHO, PELO CONTEXT.
    async function addMovie(props) {
        const movieDetails = await movieDetailsReturn(props.target.id, apiKey, language)
        // const { adult, popularity, vote_count, original_language, original_title, video, revenue, videos, homepage, imdb_id, belongs_to_collection, budget, production_companies, production_countries, spoken_languages, ...movieDados } = movieDetails;
        const movieDados = {}
        movieDados.id = movieDetails.id;
        movieDados.title = movieDetails.title;
        movieDados.poster_path = movieDetails.poster_path;
        movieDados.genres = movieDetails.genres;
        movieDados.release_date = movieDetails.release_date;
        movieDados.runtime = movieDetails.runtime;
        movieDados.title = movieDetails.title;
        movieDados.vote_average = movieDetails.vote_average;
        addMovieCart(movieDados)
        history.push("/checkout")
    }

    return (
        <CardContainer>
            <CardImg src={"http://image.tmdb.org/t/p/w154" + movie.poster_path} />
            <CardInfo>
                <CardTextTitle href={"/moviedetails/" + movie.id}>{movie.title}</CardTextTitle>
                {/* <CardTextValue>{movie.release_date.split('-').reverse().join(' / ')}</CardTextValue> */}
                <CardGroupButton>
                    <CardTextValue>
                        R$ {(movieValues.totalValue).toFixed(2)}<br />
                        {movieValues.discountMovieGenre.totalDiscount !== 0 ?<Text>R$ {(movieValues.originalValue).toFixed(2)}</Text>: ""}                       
                    </CardTextValue>
                    <CardButtonAddCart w="32" h="32" font="24" className="material-icons md-24" id={movie.id} onClick={addMovie}>add_shopping_cart</CardButtonAddCart>
                </CardGroupButton>
            </CardInfo>
        </CardContainer>
    )
}