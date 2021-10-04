import styled from "styled-components";

export const ContainerActors = styled.div`
    display:flex;
    align-items: flex-start;
`;
export const ContainerImagens = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
    &:hover{
        transform: scale(1.02);
    }
`;
export const TextActors = styled.p`
    color:white;
    font-size: 30px;
    font-weight: bold;
    padding:10px 0px 10px 0px;
    margin: 20px 0px 10px 0px;
    background: linear-gradient(rgba(9, 21, 52,1), #006,rgba(9, 21, 52,1));
    user-select:none;
`;
export const TextInfo = styled.p`
    color : ${props => props.grey ? "grey" : "#6395F2" };
    padding: 2px;
    font-size: 16px;
    font-weight: ${props => props.bold ? "bold" : "normal" };
    ${props => props.nohover ? "" : "&:hover{cursor:pointer;color:white;}"};
    user-select:none;
`;
export const ImgActorPhoto = styled.img`
    padding: 4px 0px;

`;

