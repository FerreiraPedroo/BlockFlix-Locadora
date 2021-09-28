import styled from "styled-components";


const btnconfig = {
    red: "tomato",
    white: "white",
    silver: "gray",

    //TEXT
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "24": "24px",
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

export const ButtonDetails = styled.button`
    width: ${props => (btnconfig[props.w] !== undefined ? btnconfig[props.w] : "32px")};
    height: ${props => (btnconfig[props.h] !== undefined ? btnconfig[props.h] : "32px")};
    ${props => (props.center === true ? "align-self: center;" : console.log(props))};
    background-color: navy;
    color:#6395F2;
    border: 0px;
    border-radius: 4px;
    user-select:none;

    &:hover{
        cursor: pointer;   
        border: 1px solid #6395F2;
        color:white;
    };
    &:active{
        font-size: 0.79rem;
    };

`;

export const Button = styled.button`
    user-select: none;
    font-size: 1.0rem;
    border: 0px;
    border-radius: 4px;

    &:hover{
        cursor: pointer;
    }
`;

