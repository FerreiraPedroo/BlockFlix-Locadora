import styled from "styled-components";

export const ContainerRecommendations = styled.div`
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 10px;
 `;
export const ContainerImagens = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 15px;
    &:hover{
        transform: scale(1.02);
    }
`;
export const TextRecommendations = styled.p`
    color:white;
    font-size: 30px;
    font-weight: bold;
    padding:10px 0px 10px 0px;
    margin: 20px 0px 10px 0px;;
    background: linear-gradient(rgba(9, 21, 52,1), #006,rgba(9, 21, 52,1));
    user-select:none;
`;
export const TextInfo = styled.a`
    padding: 2px;
    font-size: 16px;
    font-weight: bold;
    color:#6395F2;
    height:32px;
    vertical-align: middle;
    &:hover{
        cursor:pointer;
        color:white;
    }
    text-decoration:none;
`;
export const ImgRecommendations = styled.img`
    margin: 4px 0px;
    border-radius: 6px;
    border: 1px solid white;
`;

