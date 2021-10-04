import styled from "styled-components";
import { ButtonDetails } from "../components/button/button.style";

export const ContainerPage = styled.div`
`;
export const ContainerCenter = styled.div`
    display: flex;
    flex-direction: row;
    height:720px;
    background-color: #091534;
    background: linear-gradient(to top, rgba(9, 21, 52,1), rgba(9, 21, 52,0.1),transparent,transparent,transparent,transparent,transparent,transparent),linear-gradient(to right, rgba(1,1,1,1), rgba(10,10,10,0.8),transparent,transparent),url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
`;
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
    color : ${props => props.grey ? "grey" : "white" };
    font-size: ${props => props.F22 ? "22px" : "16px" };
    ${props => (props.decoration === true ? "text-decoration: line-through;" : "")};
    margin: 8px 0px;
    text-align: justify;
    overflow-wrap: break-word;
    user-select:none;
    text-decoration: undescore;
`;
export const ContainerRight = styled.div`
    display:flex;
    flex-direction:column;
    align-items: flex-end;
    width: 50%;
    padding: 20px;
`;
export const ImgPoster = styled.img.attrs(props =>({
    src: props.src
}))`
    border: 2px solid white;
    border-radius: 6px;
    background-color: white;
`;
export const ButtonAddCart = styled(ButtonDetails)`
    display: flex;
    justify-content: center;
    align-content: center;
    column-gap: 24px;;
    align-items: center;
    width: 300px;
    height: 64px;
    margin:20px 0px;
`;
export const ContainerMiddle = styled.div`
    text-align: center;
`;
export const TextTrailer = styled.p`
    color:white;
    font-size: 30px;
    font-weight: bold;
    padding:10px 0px 10px 0px;
    margin: 20px 0px 10px 0px;
    background: linear-gradient(rgba(9, 21, 52,1), #006,rgba(9, 21, 52,1));
    user-select:none;
`;
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
`;
export const CartIcon = styled.span`
font-size: 40px;
`;
