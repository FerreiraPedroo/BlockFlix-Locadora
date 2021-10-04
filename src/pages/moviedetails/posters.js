
import { TextTrailer, ContainerImagens, ImgPosterAll } from "../../styles/moviedetails/posters.style"
import Carousel from "../../components/carrousel/carousel";


export default function Poster({ postersImg }) {

    if (postersImg.posters.length === 0) return (<></>)
    return (
        <>
            <TextTrailer F18 >CARTAZES</TextTrailer>
            <Carousel show={5}>
                {postersImg.posters.map((poster) => {
                    return (<ContainerImagens>
                        <ImgPosterAll key={poster.file_path} src={"https://image.tmdb.org/t/p/w185" + poster.file_path} alt="POSTER" />
                    </ContainerImagens>)
                })
                }
            </Carousel>
        </>
    )
}