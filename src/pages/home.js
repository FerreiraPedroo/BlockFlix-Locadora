import React, { useEffect, useState } from "react";
import { language, apiKey, HomeNowPlayingQtd, movieTopRatedReturn, movieFilterReturn } from "../dados/config";

import Card from "../components/card/card";
import {
    ContainerPage, ContainerTop, ContainerTopCard, TextTop,
    ContainerMiddleBar, SelectMovieGenreEspecific, SelectOptions,
    ContainerCenter, ContainerCenterCard
} from "../styles/home.style";


export default function Home() {
    const [nowPlayingList, setNowPlayingList] = useState();
    const [filteredMovies, setFilteredMovies] = useState();
    const [filterSelect, setFilterSelect] = useState(0)

    useEffect(() => {
        async function moviesTopRated() {
            const data = await movieTopRatedReturn(apiKey, language);
            setNowPlayingList(data);
        }
        moviesTopRated();
        async function filterListMovies() {
            const filterMovies = await movieFilterReturn(apiKey,language);
            setFilteredMovies(filterMovies)
        }
        filterListMovies();

    }, []);

    async function filterListMovies(filterOption) {
        const genre = filterOption.target.value;
        const filterGenreMovies = await movieFilterReturn(apiKey,language,genre);
        setFilterSelect(genre)
        setFilteredMovies(filterGenreMovies)
    }


    if (nowPlayingList === undefined || filteredMovies === undefined) return (<></>)

    return (
        <ContainerPage>  <TextTop>LANÇAMENTOS</TextTop>
            <ContainerTop>
              
                <ContainerTopCard>
                    {
                        nowPlayingList === undefined ? "" : nowPlayingList.results.slice(0, HomeNowPlayingQtd).map(movie => {
                            return <Card key={movie.id} movie={movie} />
                        })
                    }
                </ContainerTopCard>
            </ContainerTop>

            <ContainerMiddleBar>
                <TextTop>SELECIONE O GÊNERO &nbsp;&nbsp;</TextTop>
                <SelectMovieGenreEspecific name="filterSelect" value={filterSelect} onChange={filterListMovies}>
                    <SelectOptions value="">Todos</SelectOptions>
                    <SelectOptions value="28">Ação</SelectOptions>
                    <SelectOptions value="12">Aventura</SelectOptions>
                    <SelectOptions value="16">Animação</SelectOptions>
                    <SelectOptions value="35">Comédia</SelectOptions>
                    <SelectOptions value="80">Crime</SelectOptions>
                    <SelectOptions value="99">Documentário</SelectOptions>
                    <SelectOptions value="18">Drama</SelectOptions>
                    <SelectOptions value="10751">Família</SelectOptions>
                    <SelectOptions value="14">Fantasia</SelectOptions>                    
                    <SelectOptions value="37">Faroeste</SelectOptions>
                    <SelectOptions value="878">Ficção científica</SelectOptions>                    
                    <SelectOptions value="10752">Guerra</SelectOptions>
                    <SelectOptions value="36">História</SelectOptions>
                    <SelectOptions value="9648">Mistério</SelectOptions>
                    <SelectOptions value="10749">Romance</SelectOptions>
                    <SelectOptions value="27">Terror</SelectOptions>                    
                    <SelectOptions value="53">Thriller</SelectOptions>
                </SelectMovieGenreEspecific>

            </ContainerMiddleBar>

            <ContainerCenter>
                <ContainerCenterCard>
                    {
                        filteredMovies === undefined ? "" : filteredMovies.results.map(movie => {
                            return <Card key={movie.id} movie={movie} />
                        })
                    }
                </ContainerCenterCard>
            </ContainerCenter>

        </ContainerPage>
    )
}

// "14": "Fantasia",
// "36": "História",
// "27": "Terror",
// "10402": "Música",
// "9648": "Mistério",
// "10749": "Romance",
// "878": "Ficção científica",
// "10770": "Cinema TV",
// "53": "Thriller",
// "10752": "Guerra",
// "37": "Faroeste",

















