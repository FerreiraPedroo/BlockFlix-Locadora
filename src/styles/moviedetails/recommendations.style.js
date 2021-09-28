import styled from "styled-components";

// CONTAINER RIGHT /////////////////////////////////////////////////////////// 
export const ContainerRecommendations = styled.div`
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 20px;
    margin-bottom: 10px;
    // border: 1px solid yellow; 
`;
export const ContainerImagens = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 15px;

    // border:1px solid red;
`;

///////////////////////////////
export const TextRecommendations = styled.p`
    color:white;
    font-size: 30px;
    font-weight: bold;
    padding:10px 0px 10px 0px;
    margin: 20px 0px;
    background: linear-gradient(rgba(9, 21, 52,1), #007,rgba(9, 21, 52,1));
    // border:1px solid red;
`;
export const TextInfo = styled.p`
    color : ${props => props.CGRAY ? "gray" : "white" };
    font-size: 16px;
    height: 42px;
    // border: 1px solid red;
`;

export const ImgRecommendations = styled.img`
margin: 4px 0px;
&:hover{
    transform: scale(1.02);
    cursor: pointer;
}
border-radius: 6px;
border: 1px solid white;
`;

