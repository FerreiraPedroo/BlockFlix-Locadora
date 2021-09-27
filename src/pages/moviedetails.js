import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";

import { apiKey, language, movieDetailsFullPath, moviePrice } from "../dados/config";
import Actors from "./moviedetails/actors";
import Recommendations from "./moviedetails/recommendations";

import {
    ContainerPage, ContainerCenter, ContainerLeft, ContainerRight, ContainerMiddle,
    TextTitle, TextTagLine, TextInfo, TextTrailer, ContainerImagens,
    ImgPoster, ImgPosterAll, ButtonAddCart

} from "../styles/moviedetails.style"


export default function MovieDetails() {
    const { id } = useParams();
    const [movieDetailsData, setMovieDetailsData] = useState();
    const [movieImages, setMovieImages] = useState();
    const [movieDetailsPath] = useState(movieDetailsFullPath(id, apiKey, language))


    useEffect(() => {
        axios.get(movieDetailsPath)
            .then((data) => {
                setMovieDetailsData(data.data)
            })

        axios.get("https://api.themoviedb.org/3/movie/" + id + "/images?api_key=" + apiKey + "&language=" + language + ",en")
            .then((data) => {
                setMovieImages(data.data)
            })

    }, [])

    return (
        <>
            {(movieImages !== undefined && movieDetailsData !== undefined) === true ?
                <ContainerPage>
                    <ContainerCenter key={"movieDetailsData.id"} bg={movieImages.backdrops.length !== 0 ? "http://image.tmdb.org/t/p/w1280" + movieImages.backdrops[parseInt(Math.random() * movieImages.backdrops.length)].file_path : ""}>
                        <ContainerLeft>
                            <TextTitle>{movieDetailsData.title}</TextTitle>
                            <TextTagLine>{movieDetailsData.tagline}</TextTagLine>
                            <TextInfo F18 CGRAY>{movieDetailsData.release_date.slice(0, 4)}&nbsp; | &nbsp;{movieDetailsData.runtime} minutos</TextInfo>
                            <TextInfo F18 CGRAY>Gêneros:&nbsp;
                                {movieDetailsData.genres.map((genre, index) => {
                                    return <TextInfo key={genre.name}>{genre.name}{index === movieDetailsData.genres.length - 1 ? "" : ", "}</TextInfo>
                                })}
                            </TextInfo>
                            {movieDetailsData.overview.length === 0 ? "" : <TextInfo F18 CGRAY>Sinopse:&nbsp; <TextInfo >{movieDetailsData.overview}</TextInfo></TextInfo>}
                        </ContainerLeft>
                        <ContainerRight>
                            <ImgPoster src={"http://image.tmdb.org/t/p/w300" + movieDetailsData.poster_path} alt="POSTER" />
                            <ButtonAddCart>ALUGAR<p>R${moviePrice(movieDetailsData)}</p>
                            </ButtonAddCart>
                        </ContainerRight>
                    </ContainerCenter>

                    <ContainerMiddle>


                        {/* YOUTUBE */}
                        {movieDetailsData.videos.results.length > 0 ?
                            <>
                                <TextTrailer F18 >TRAILER
                                <YouTube videoId={movieDetailsData.videos.results[0].key} /></TextTrailer>
                            </>
                            : ""
                        }


                        {/* ATORES */}
                        <Actors id={id} apiKey={apiKey} />



                        {/* CARTAZES */}
                        {movieImages.posters.length > 0 ?
                            <>
                                <TextTrailer F18 >CARTAZES</TextTrailer>
                                <ContainerImagens>

                                    {movieImages.posters.length > 0 ?
                                        movieImages.posters.map((poster, index) => {
                                            return <ImgPosterAll key={poster.file_path} src={"https://image.tmdb.org/t/p/w185" + poster.file_path} alt="POSTER" />
                                        })
                                        : ""
                                    }
                                </ContainerImagens>
                            </>
                            : ""
                        }


                        {/* Recommendations */}
                        <Recommendations id={id} apiKey={apiKey} />


                    </ContainerMiddle>
                </ContainerPage>
                : ""
            }
        </>
    )
}