import { useEffect, } from "react/cjs/react.development";
import { useState } from "react";
import { movieRecomendationsPath } from "../../dados/config";
import {
    ContainerRecommendations, ContainerImagens,
    TextRecommendations, TextInfo,
    ImgRecommendations

} from "../../styles/moviedetails/recommendations.style"

export default function Recommendations({ id, apiKey }) {
    const [recomentations, setRecomentations] = useState()

    useEffect(() => {
        async function getRecomendations(id, apiKey) {
            return setRecomentations(await movieRecomendationsPath(id, apiKey))
        }
        getRecomendations(id, apiKey)

    }, [])


    return (
        recomentations === undefined ? "" :
            recomentations.results.map((recomentation) => {
                return (
                    <>
                        <TextRecommendations>RECOMENDAÇÕES</TextRecommendations>
                        <ContainerRecommendations>
                            <ContainerImagens key={recomentation.id}>
                                <TextInfo>{recomentation.title}</TextInfo>
                                <ImgRecommendations src={"https://image.tmdb.org/t/p/w185" + recomentation.poster_path} alt={recomentation.name} />
                            </ContainerImagens>
                        </ContainerRecommendations>
                    </>
                )
            })
    )
}



