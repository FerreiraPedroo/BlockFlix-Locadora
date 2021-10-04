import styled from "styled-components";

export const text = {
    red: "tomato",
    white: "white",
    silver: "gray",

    //TEXT
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "28": "28px",
    "32": "32px",
    //BUTTON
    "40": "40px",
    "48": "48px",
    "64": "64px",
    "96": "96px",
    "128": "128px",
    "160": "160px",
}

export const TextCart = styled.p`
    display: flex;
    font-size: 30px;
    font-weight:bold;
    color: white;
    margin: 0px 0px 10px 0px;
    padding: 10px 20px;
    background: linear-gradient(rgba(9, 21, 52,1), #005,rgba(9, 21, 52,1));
`;
export const ContainerCheckOut = styled.div`
    display:flex;
    justify-content: center;
`;
export const ContainerListCard = styled.div`
    display:flex
    flex-direction: column;
    width:70%;
    margin: 10px 10px 10px 20px;
`;
export const CheckOutCard = styled.div`
    display:flex;
    padding:10px;
    margin-bottom: 10px;
    border: 1px solid #144EB8;
`;
export const ContainerMovieInfoLeft = styled.div`
    display:flex;
    width: 100%;
    flex-direction: column;
    padding-left: 10px;
`;
export const ContainerMovieInfoCenter = styled.div`
    display:flex;
    width: 40%;
    flex-direction: column;
    justify-content:center;
    padding-left: 10px;
    white-space: nowrap;
`;
export const ContainerMovieInfoRight = styled.div`
    display:flex;
    flex-direction: column;
    padding-left: 10px;
`;
export const ImgPoster = styled.img`
    margin-right: 10px;
    width: 92px;
    height: 132px;
`;
export const Text = styled.span`
    color: ${(props) => text[props.color] !== undefined ? text[props.color] : "white"};
    font-size:${(props) => text[props.font] !== undefined ? text[props.font] : "16px"};  
    ${props => (props.center === true ? "align-self: center;" : "")};
    ${props => (props.decoration === true ? "text-decoration: line-through;" : "")};
    
    margin-bottom:${props => (props.nomargin === true ? "0px" : "6px")};
`;
export const ContainerCart = styled.div`
    display:flex;
    flex-direction: column;
    width:30%;
    margin: 10px 20px 10px 10px;
    padding:10px;

    align-self: flex-start;
    border: 1px solid #144EB8;
`;
export const ContainerCartValue = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 10px 30px 10px;
    white-space: nowrap;
`;
export const ContainerCartValueCenter = styled.div`
    display: flex;
    flex-direction:column;
`;