import styled from "styled-components";

// CONTAINER PAGE //////////////////////////////////////////////////////
export const ContainerPage = styled.div`

`;
// TOP CONTAINER /////////////////////////////////////////////////////// 
export const ContainerTop = styled.div`
    margin: 10px;
    border: 0px solid red;
`;
export const ContainerTopCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow: hidden;
    // border: 1px solid white;
`;
export const TextTop = styled.p`
    color:white;
    font-size: 24px;

    // border: 1px solid red;
`;

// MIDDLE BAR /////////////////////////////////////////////////////////
export const ContainerMiddleBar = styled.div`
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    background-color: rgba(0,0,0,0.2);
    // border: 1px solid red;
`;
export const SelectMovie = styled.select`
    width: 160px;
    height: 32px;

    font-size: 16px;
    border:0px;
    border-radius: 4px;
    padding: 0px 8px;
    outline: none;
`;
export const SelectMovieOrder = styled.select`
    width: 160px;
    height: 32px;

    margin-left: auto;
    font-size: 16px;
    border:0px;
    border-radius: 4px;
    padding: 0px 8px;
    outline: none;
`;
export const SelectMovieGenreEspecific = styled.select`
    width: 160px;
    height: 32px;

    margin: 0px 5px;
    font-size: 16px;
    border:0px;
    border-radius: 4px;
    padding: 0px 8px;
    outline: none;
`;
export const SelectOptions = styled.option`
font-size: 16px;
`;

// FOOTER /////////////////////////////////////////////////////////
export const ContainerFooter = styled.footer`
    // border: 1px solid green;
    margin: 10px;
`;
export const ContainerFooterCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    // border: 1px solid yellow;
`;

export const ContainerFooterBar = styled(ContainerMiddleBar)`

`;






