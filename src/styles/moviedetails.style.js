import styled from "styled-components";
import { Button } from "../components/button/button.style";

// CONTAINER PAGE /////////////////////////////////////////////////
export const ContainerPage = styled.div`
    background-image: url(${props => props.bg});
    background-repeat:no-repeat;
    border: 1px solid blue; 

    background-size:initial;

`;
// CONTAINER CENTER ///////////////////////////////////////////////////////// 
export const ContainerCenter = styled.div`
    display: flex;
    flex-direction: row;
    height:720px;

    background-image: linear-gradient(to right, rgba(10,10,10,1), rgba(0,0,0,0.9), rgba(0,0,0,0.8),rgba(0,0,0,0.6),transparent);
    border: 1px solid red;
`;
// CONTAINER LEFT /////////////////////////////////////////////////////////// 
export const ContainerLeft = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
// CONTAINER RIGHT /////////////////////////////////////////////////////////// 
export const ContainerRight = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    width: 50%;
    padding: 20px;
    // border: 3px solid tomato; 
`;
export const ImgPoster = styled.img.attrs(props =>({
    src: props.src

}))`
    width:300px;
    // aling-self:center;
`;

// TEXTS //////////////////////////////////////////////////////////
export const TextTitle = styled.span`
    font-size: 28px;
    font-weight: 600;
    color:white;
    white-space: nowrap;
    margin-bottom: 10px;
`;
export const TextTagLine = styled.span`
    color : white;
    font-size: 18px;
    margin: 0px 0px 20px 0px;
`;
export const TextInfo = styled.span`
    color : ${props => props.CGRAY ? "gray" : "white" };
    font-size: ${props => props.F18 ? "18px" : "16px" };
    text-align: justify;
    margin: 8px 0px;
    text-align: justify;
`;
export const ButtonAddCart = styled(Button)`
    width: 300px;
    height: 64px;

    margin:20px;
    color: #6395F2;
    background-color: #000080;

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
















