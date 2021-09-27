import styled from "styled-components";
import { Button } from "../components/button/button.style";

// CONTAINER PAGE /////////////////////////////////////////////////
export const ContainerPage = styled.div`
    // background-color: black;
    // border: 1px solid blue; 
`;
// CONTAINER CENTER ///////////////////////////////////////////////////////// 
export const ContainerCenter = styled.div`
    display: flex;
    flex-direction: row;
    height:720px;
    background-color: #091534;
    background: linear-gradient(to top, rgba(9, 21, 52,1), rgba(9, 21, 52,0.1),transparent,transparent,transparent,transparent,transparent,transparent),linear-gradient(to right, rgba(1,1,1,1), rgba(10,10,10,0.8),transparent,transparent),url(${props => props.bg});
    
    // background-position: center, bottom;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;


    // border: 1px solid red;
`;
// CONTAINER LEFT /////////////////////////////////////////////////////////// 
export const ContainerLeft = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    padding: 20px;
`;
export const TextTitle = styled.span`
    font-size: 34px;
    font-weight: 600;
    color:white;
    white-space: nowrap;
    margin-bottom: 10px;
`;
export const TextTagLine = styled.span`
    color : white;
    font-size: 18px;
    margin: 0px 0px 30px 0px;
`;
export const TextInfo = styled.span`
    color : ${props => props.CGRAY ? "gray" : "white" };
    font-size: ${props => props.F18 ? "20px" : "18px" };
    margin: 8px 0px;
    text-align: justify;
    // border: 1px solid red;
    overflow-wrap: break-word;
`;
// CONTAINER RIGHT /////////////////////////////////////////////////////////// 
export const ContainerRight = styled.div`
    display:flex;
    flex-direction:column;
    align-items: flex-end;
    width: 50%;
    padding: 20px;
    // border: 3px solid tomato; 
`;
export const ImgPoster = styled.img.attrs(props =>({
    src: props.src
}))`
border: 2px solid white;
border-radius: 6px;
`;
export const ButtonAddCart = styled(Button)`
    width: 300px;
    height: 64px;

    margin:20px 0px;
    color: #6395F2;
    background-color: #000080;

`;
// CONTAINER MIDDLE //////////////////////////////////////////////////////////
export const ContainerMiddle = styled.div`
    text-align: center;
`;
export const TextTrailer = styled.p`
    color:white;
    font-size: 30px;
    font-weight: bold;
    padding:10px 0px 10px 0px;
    margin: 20px 0px;
    background: linear-gradient(rgba(9, 21, 52,1), #007,rgba(9, 21, 52,1));
    
    // border: 1px solid red;
`;


// CONTAINER IMAGENS ///////////////////////////////////////////////////////////
export const ContainerImagens = styled.div`
    display:flex;
    flex-flow: row no-wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 20px;
    margin-bottom: 10px;
`;
export const ImgPosterAll = styled(ImgPoster)`
margin: 5px;
border: 1px solid white;

&:hover{
    transform: scale(1.02);
    cursor: pointer;
}
// border: 0px;
`;






// export const TextWhite = styled.span`
//     color:white;
//     padding-right: 5px;
//     font-size:14px;
//     margin: 10px 0px;
// `;
// export const TextActors = styled.div`
//     color : gray;
//     font-size: 16px;
//     text-align: justify;
//     margin: 10px 0px;
// `;
// export const TextAllGener = styled.div`
//     color : gray;
//     font-size: 18px;
//     text-align: justify;
//     margin: 10px 0px;
// `;
// export const TextRecomendation = styled.span`
//     color:gray;
//     padding-right: 5px;
//     font-size:18px;

//     margin: 10px 0px;
// `;
// export const TextSinopse = styled.span`

// `;
















