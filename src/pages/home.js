import axios from "axios";
import { movies, language, apiKey, HomeNowPlayingQtd } from "../dados/config";
import Card from "../components/card/card";

import {
    ContainerPage, ContainerTop, ContainerTopCard, TextTop,
    ContainerMiddleBar, SelectMovie, SelectMovieOrder, SelectMovieGenreEspecific, SelectOptions,
    ContainerCenter, ContainerCenterCard
} from "../styles/home.style";

import { useEffect, useState } from "react";



export default function Home() {
    const [nowPlayingList, setNowPlayingList] = useState();

    useEffect(() => {
        async function moviesNow() {
            return await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=" + apiKey + "&language=" + language + "&page=1")
                .then((response) => {
                    const { data } = response;
                    setNowPlayingList(data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        moviesNow();

    }, []);

    console.log("nowPlayingList", nowPlayingList)

    return (
        <>
            {
                nowPlayingList !== undefined ?
                    <ContainerPage>




                        <ContainerTop>
                            <TextTop>LANÇAMENTOS</TextTop>
                            <ContainerTopCard>
                                {
                                    nowPlayingList === undefined ? "" : nowPlayingList.results.slice(0, HomeNowPlayingQtd).map(filme => {
                                        return <Card key={filme.id} filme={filme} />
                                    })
                                }
                            </ContainerTopCard>
                        </ContainerTop>


                        <ContainerMiddleBar>
                            <TextTop>SELECIONE POR &nbsp;&nbsp;</TextTop>
                            <SelectMovie disabled>
                                <SelectOptions value="genero">Genero</SelectOptions>
                                <SelectOptions value="ano">Ano</SelectOptions>
                                <SelectOptions value="idioma">Idioma</SelectOptions>
                                <SelectOptions value="tempo">Tempo de duração</SelectOptions>
                            </SelectMovie>
                            <SelectMovieOrder disabled>
                                <SelectOptions value="tnaoordenado">Não ordenado</SelectOptions>
                                <SelectOptions value="ascendente">Ascendente  A - Z</SelectOptions>
                                <SelectOptions value="descendente">Descendente Z - A</SelectOptions>
                            </SelectMovieOrder>
                            <SelectMovieGenreEspecific>
                                <SelectOptions value="todos">Todos</SelectOptions>
                                <SelectOptions value="acao">Ação</SelectOptions>
                                <SelectOptions value="animacao">Animação</SelectOptions>
                                <SelectOptions value="faroeste">Faroeste</SelectOptions>
                                <SelectOptions value="ficcao">Ficção Ciêntifica</SelectOptions>
                                <SelectOptions value="romance">Romance</SelectOptions>
                                <SelectOptions value="terror">Terror</SelectOptions>
                            </SelectMovieGenreEspecific>

                        </ContainerMiddleBar>


                        <ContainerCenter>
                            <ContainerCenterCard>
                                {
                                    nowPlayingList === undefined ? "" : movies.results.map(filme => {
                                        return <Card key={filme.id} filme={filme} />
                                    })
                                }
                            </ContainerCenterCard>
                        </ContainerCenter>




                    </ContainerPage>

                    : ""
            }
        </>
    )
}















