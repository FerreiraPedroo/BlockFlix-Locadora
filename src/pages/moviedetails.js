import { apiKey, language, movieDetailsFullPath, moviePrice, movieTrailerFullPath } from "../dados/config";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import {
    ContainerPage, ContainerCenter, ContainerLeft, ContainerRight,
    TextTitle, TextTagLine, TextInfo,
    ImgPoster, ButtonAddCart

} from "../styles/moviedetails.style"




export default function MovieDetails() {
    const { id } = useParams();
    const [movieDetailsData, setMovieDetailsData] = useState();
    const [movieDetailsPath] = useState(movieDetailsFullPath(id, apiKey, language))


    useEffect(() => {
        axios.get(movieDetailsPath)
            .then((data) => {
                console.log(data.data)
                setMovieDetailsData(data.data)
            })

    }, [])

    return (
        <>
            {movieDetailsData === undefined ? "" :
                <>
                    <ContainerPage bg={"http://image.tmdb.org/t/p/w1280" + movieDetailsData.backdrop_path}>
                        <ContainerCenter key={"movieDetailsData.id"} bg={"http://image.tmdb.org/t/p/w1280" + movieDetailsData.backdrop_path}>

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
                    </ContainerPage>









                    <ContainerPage>

                        {movieDetailsData === undefined ? "" :
                            movieDetailsData.videos.results.length === 0 ? "" : <YouTube videoId={movieDetailsData} />}
                    </ContainerPage>













                </>
            }
        </>
    )
}