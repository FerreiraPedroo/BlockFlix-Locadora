import styled from "styled-components";
import { ButtonDetails } from "../components/button/button.style";

export const config = {
    red: "tomato",
    white: "white",
    silver: "gray",

    //TEXT
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
    "0": ""
}

export const TextCart = styled.p`
    display: flex;
    // justify-content: center;
    font-size: 30px;
    font-weight:bold;
    color: white;
    margin: 0px 0px 10px 0px;
    padding: 10px 20px;
    background: linear-gradient(rgba(9, 21, 52,1), #005,rgba(9, 21, 52,1));
    // border: 1px solid white;
`;
export const ContainerCheckOut = styled.div`
    display:flex;
`;
export const ContainerOrders = styled.div`
    display:flex
    flex-direction: column;
    margin: 0px 20px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
`;
export const CheckOutCard = styled.div`
    display:flex;
    padding:10px;
    margin-bottom: 10px;
    border: 1px solid #144EB8;

`;
export const ContainerMovieInfoLeft = styled.div`
    display:flex;
    width: 45%;
    flex-direction: column;
    padding-left: 10px;
`;
export const ContainerMovieInfoCenter = styled.div`
    display:flex;
    width: 35%;
    flex-direction: column;
    padding-left: 20px;
`;
export const ContainerMovieInfoRight = styled.div`
    display:flex;
    width: 20%;
    flex-direction: column;
    padding-left: 20px;
`;
export const ImgPoster = styled.img`
    margin-right: 10px;
    width: 45px;
    height: 67px;
    // border:1px solid red;
`;
export const Text = styled.span`
    color: ${(props) => config[props.color] !== undefined ? config[props.color] : "white"};
    font-size:${(props) => config[props.font] !== undefined ? config[props.font] : "16px"};  
    margin-bottom:6px;
`;
export const Button = styled(ButtonDetails)`
    display:flex;
    padding: 5px;
    align-items: center;
    
    margin: 10px 20px 2px 20px;
    box-sizing: border-box;
    border: 1px solid navy;
    transition: border-radius 0.5s;
    border-radius:10px;

    &:active{
        font-size: ${props => (props.font !== undefined ? config[props.font] : "12px")};
    };
    &.act{
        transition: border-radius 0.5s;  
        ${props =>(props.active === false ? "border-radius:8px 8px 0px 0px" : "border-radius:8px 8px 0px 0px;")} 
        &:before {
            content: "▽";
        }
    };
    &:hover{
        cursor: pointer;   
        border: 1px solid #144EB8;
        color:white;
        background-color: #144EB8;
    };

    &:before {
        content:"▷";
        font-size:18px;
        margin: 0px 10px 0px 10px;
    }

`;

export const Accordion = styled.div`
    display:flex;
    flex-direction: column;

    // border: 1px solid red;
`;
export const ContainerOrder = styled.div`
    display:flex;
    justify-content: center;
`;


// text-justify: center;











