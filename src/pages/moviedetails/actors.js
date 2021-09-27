import { useState, useEffect } from "react";
import { movieActorsPath } from "../../dados/config";
import {
    ContainerActors,ContainerImagens,
    TextActors,TextInfo,
    ImgActorPhoto
}from "../../styles/moviedetails/actors.style"

export default function Actors({ id, apiKey }) {
    const [actor, setActor] = useState()

    useEffect(() => {
        console.log("|ACTORS > EFFECT: ANTES")
        async function getActors(id, apiKey) {
            return setActor(await movieActorsPath(id, apiKey))
        }
        getActors(id, apiKey)
        console.log("ACTOR => ", actor)
        console.log("|ACTORS > EFFECT: DEPOIS")
    }, [])


    return (
        actor === undefined ? "" :
        <>
        <TextActors>ELENCO</TextActors>
            <ContainerActors style={{display: "flex"}} >
                {actor.cast.map((actors) => {
                    return (
                        <ContainerImagens key={actors.name}>
                            <TextInfo>{actors.name}</TextInfo>
                            <ImgActorPhoto src={"https://image.tmdb.org/t/p/w185"+actors.profile_path} alt={actors.name} />
                            <TextInfo CGRAY>Personagem:<TextInfo> {actors.character}</TextInfo></TextInfo>
                        </ContainerImagens>
                    )
                })
                }
            </ContainerActors>
        </>
    )
}



