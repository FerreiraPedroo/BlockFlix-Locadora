import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import YouTube from "react-youtube";
import { CartMovieContext } from "../context/cartmoviescontext";
import { apiKey, language, movieDetailsReturn, moviePrice, movieImagensReturn } from "../dados/config";

import Actors from "./moviedetails/actors";
import Poster from "./moviedetails/posters";
import Recommendations from "./moviedetails/recommendations";
import {
    ContainerPage, ContainerCenter, ContainerLeft, ContainerRight, ContainerMiddle,
    TextTitle, TextTagLine, TextInfo, TextTrailer, CartIcon,
    ImgPoster,ButtonAddCart
} from "../styles/moviedetails.style"



export default function MovieDetails() {
    const { id } = useParams();
    const { addMovieCart } = useContext(CartMovieContext)
    const [movieDetailsData, setMovieDetailsData] = useState();
    const [movieImages, setMovieImages] = useState();
    const history = useHistory();
    let movieValues = {};

    useEffect(() => {
        async function movieDetails() {
            const data = await movieDetailsReturn(id, apiKey, language)
            console.log("DATA", data)
            return setMovieDetailsData(data);
        }
        movieDetails()
        async function movieImagens() {
            const data = await movieImagensReturn(id, apiKey, language)
            return setMovieImages(data);
        }
        movieImagens()

    }, [])

    async function addMovie() {
        const movieDados = {}
        movieDados.id = movieDetailsData.id;
        movieDados.title = movieDetailsData.title;
        movieDados.poster_path = movieDetailsData.poster_path;
        movieDados.genres = movieDetailsData.genres;
        movieDados.release_date = movieDetailsData.release_date;
        movieDados.runtime = movieDetailsData.runtime;
        movieDados.title = movieDetailsData.title;
        movieDados.vote_average = movieDetailsData.vote_average;
        addMovieCart(movieDados)
        history.push("/checkout")
    }

    if (movieDetailsData !== undefined) movieValues = moviePrice(movieDetailsData)
    console.log(movieValues)
    if (movieImages === undefined || movieDetailsData === undefined) return (<></>)
    return (
        <ContainerPage>
            <ContainerCenter key={"movieDetailsData.id"} bg={movieImages.backdrops.length !== 0 ? "http://image.tmdb.org/t/p/w1280" + movieImages.backdrops[parseInt(Math.random() * movieImages.backdrops.length)].file_path : ""}>
                <ContainerLeft>
                    <TextTitle>{movieDetailsData.title}</TextTitle>
                    <TextTagLine>{movieDetailsData.tagline}</TextTagLine>
                    <TextInfo F18 grey>{movieDetailsData.release_date.slice(0, 4)}&nbsp; | &nbsp;{movieDetailsData.runtime} minutos</TextInfo>
                    <TextInfo F18 grey>Gêneros:&nbsp;
                        {movieDetailsData.genres.map((genre, index) => {
                            return <TextInfo key={genre.name}>{genre.name}{index === movieDetailsData.genres.length - 1 ? "" : ", "}</TextInfo>
                        })}
                    </TextInfo>
                    {movieDetailsData.overview.length === 0 ? "" : <TextInfo F18 grey>Sinopse:&nbsp; <TextInfo >{movieDetailsData.overview}</TextInfo></TextInfo>}
                </ContainerLeft>
                <ContainerRight>
                    <ImgPoster src={"http://image.tmdb.org/t/p/w300" + movieDetailsData.poster_path} alt="POSTER" />
                    <ButtonAddCart font="18" id={movieDetailsData.id} onClick={addMovie}>
                        <CartIcon className="material-icons md-48">add_shopping_cart</CartIcon>
                        <div>
                            R${movieValues.totalValue.toFixed(2)}
                            <br />
                            {movieValues.discountMovieGenre.totalDiscount === 0 ? "" :
                                <TextInfo decoration grey>
                                    R${movieValues.originalValue.toFixed(2)}
                                </TextInfo>
                            }
                        </div>

                    </ButtonAddCart>
                </ContainerRight>
            </ContainerCenter>

            <ContainerMiddle>
                {/* YOUTUBE */}
                {movieDetailsData.videos.results.length > 0 ?
                    <>
                        <TextTrailer F18 >TRAILER</TextTrailer>
                        <YouTube videoId={movieDetailsData.videos.results[0].key} />
                    </>
                    : ""
                }

                {/* ATORES */}
                <Actors id={id} apiKey={apiKey} />


                {/* CARTAZES */}
                {movieImages.posters.length > 0 ?
                    <>
                        <Poster postersImg={movieImages} />
                    </>
                    : ""
                }

                {/* Recommendations */}
                <Recommendations id={id} apiKey={apiKey} />

            </ContainerMiddle>
        </ContainerPage>
    )
}