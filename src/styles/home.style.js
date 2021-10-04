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
display: flex;
font-size: 30px;
font-weight:bold;
color: white;
// margin: 0px 0px 10px 0px;
padding: 10px 20px;
background: linear-gradient(rgba(9, 21, 52,1), #005,rgba(9, 21, 52,1));
`;

// MIDDLE BAR /////////////////////////////////////////////////////////
export const ContainerMiddleBar = styled.div`
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background: linear-gradient(rgba(9, 21, 52,1), #005,rgba(9, 21, 52,1));
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

// CENTER - MAIN /////////////////////////////////////////////////////////
export const ContainerCenter = styled.main`
    // border: 1px solid green;
    margin: 10px;
`;
export const ContainerCenterCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    // border: 1px solid yellow;
`;

export const ContainerFooterBar = styled(ContainerMiddleBar)`

`;






