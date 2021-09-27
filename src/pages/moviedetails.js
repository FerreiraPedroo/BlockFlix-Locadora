import { apiKey, language, movieDetailsFullPath, moviePrice, movieTrailerFullPath } from "../dados/config";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import {
    ContainerPage, ContainerCenter, ContainerLeft, ContainerRight, ContainerMiddle,
    TextTitle, TextTagLine, TextInfo, TextTrailer, ContainerImagens,
    ImgPoster, ButtonAddCart,
    ImgPosterAll

} from "../styles/moviedetails.style"

async function listOfImages(id, apiKey, language) {
    // await axios.get("https://api.themoviedb.org/3/movie/"+ id +"/images?api_key="+ apiKey +"&language="+ language+",en")
    // .then((data) => {
    //     console.log(data)
    //     return data
    // })

}

export default function MovieDetails() {
    const { id } = useParams();
    const [movieDetailsData, setMovieDetailsData] = useState();
    const [movieImages, setMovieImages] = useState();
    const [movieDetailsPath] = useState(movieDetailsFullPath(id, apiKey, language))


    useEffect(() => {
        axios.get(movieDetailsPath)
            .then((data) => {
                // console.log(data.data)
                setMovieDetailsData(data.data)
            })

        axios.get("https://api.themoviedb.org/3/movie/" + id + "/images?api_key=" + apiKey + "&language=" + language + ",en")
            .then((data) => {
                // console.log(data.data)
                setMovieImages(data.data)
            })

    }, [])

    return (
        <>
            {/* {console.log("movieDetailsData1 - movie", movieDetailsData)}
            {console.log("movieDetailsData1 - img ", movieImages)} */}
            {(movieImages !== undefined && movieDetailsData !== undefined) === true ?
                <>
                    {/* {console.log("movieImages2", movieImages)} */}
                    <ContainerPage>


                        <ContainerCenter key={"movieDetailsData.id"} bg={"http://image.tmdb.org/t/p/w1280" + movieImages.backdrops[parseInt(Math.random() * movieImages.backdrops.length)].file_path}>
                            <ContainerLeft>
                                <TextTitle>{movieDetailsData.title}</TextTitle>
                                <TextTagLine>{movieDetailsData.tagline}</TextTagLine>
                                <TextInfo F18 CGRAY>{movieDetailsData.release_date.slice(0, 4)}&nbsp; | &nbsp;{movieDetailsData.runtime} minutos</TextInfo>
                                <TextInfo F18 CGRAY>Elenco:&nbsp;</TextInfo>

                                <TextInfo F18 CGRAY>Gêneros:&nbsp;
                                    {movieDetailsData.genres.map((genre, index) => {
                                        return <TextInfo key={genre.name}>{genre.name}{index === movieDetailsData.genres.length - 1 ? "" : ", "}</TextInfo>
                                    })}
                                </TextInfo>

                                <TextInfo F18 CGRAY>Recomendações:&nbsp;</TextInfo>

                                {/* será substituido o de baio pelo de cima para quando não houver sinopse não exibir */}
                                {/* {movieDetailsData.overview.length === 0 ? "" : <TextInfo F18 CGRAY>Sinopse:&nbsp; <TextInfo >{movieDetailsData.overview}</TextInfo></TextInfo>} */}
                                <TextInfo F18 CGRAY>Sinopse:&nbsp; <TextInfo >{movieDetailsData.overview}</TextInfo></TextInfo>
                            </ContainerLeft>
                            <ContainerRight>
                                <ImgPoster src={"http://image.tmdb.org/t/p/w300" + movieDetailsData.poster_path} alt="POSTER" />
                                <ButtonAddCart>
                                    ALUGAR
                                    <p>R${moviePrice(movieDetailsData)}</p>
                                </ButtonAddCart>
                            </ContainerRight>
                        </ContainerCenter>

                        <ContainerMiddle>
                            {movieDetailsData.videos.results.length > 0 ?
                                <>
                                    <TextTrailer F18 >TRAILER</TextTrailer>
                                    <YouTube videoId={movieDetailsData.videos.results[0].key} />
                                </>
                                : ""
                            }

                            <ContainerImagens>
                                {movieImages.posters.length > 0 ?
                                    <>
                                        <TextTrailer F18 >CARTAZES</TextTrailer>
                                        {movieImages.posters.map((poster, index) => {
                                            return <ImgPosterAll src={"https://image.tmdb.org/t/p/w185" + poster.file_path} alt="POSTER" />
                                        })
                                        }
                                    </>
                                    : ""
                                }
                            </ContainerImagens>

                        </ContainerMiddle>


                    </ContainerPage>


                </>
                : ""
            }
        </>
    )
}