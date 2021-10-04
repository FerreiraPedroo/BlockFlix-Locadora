import { useEffect, useState } from "react";
import { movieRecomendationsReturn } from "../../dados/config";
import { ContainerRecommendations, ContainerImagens, TextRecommendations, TextInfo, ImgRecommendations } from "../../styles/moviedetails/recommendations.style"
import Carousel from "../../components/carrousel/carousel";

export default function Recommendations({ id, apiKey }) {
    const [recomentations, setRecomentations] = useState()

    useEffect(() => {
        async function getRecomendations(id, apiKey) {
            return setRecomentations(await movieRecomendationsReturn(id, apiKey))
        }
        getRecomendations(id, apiKey)
    }, [])


    
    if (recomentations === undefined) return (<></>)
    return (
        <>
            <TextRecommendations>RECOMENDAÇÕES</TextRecommendations>
            <ContainerRecommendations>
                <Carousel show={5}>
                    {
                        recomentations.results.map((recomentation) => {
                            return (
                                <>
                                    <ContainerImagens key={recomentation.id}>
                                        <ImgRecommendations src={"https://image.tmdb.org/t/p/w185" + recomentation.poster_path} alt={recomentation.name} />
                                        <TextInfo href={"/moviedetails/" + recomentation.id}>{recomentation.title}</TextInfo>
                                    </ContainerImagens>
                                </>
                            )
                        })
                    }
                </Carousel>
            </ContainerRecommendations>
        </>
    )
}



