import styled from "styled-components";

const btnconfig = {
    red: "tomato",
    white: "white",
    silver: "gray",

    black:"black",
    navy:"navy",

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
    "0":""
}

export const ButtonDetails = styled.button`
    width: ${props => (btnconfig[props.w] !== undefined ? btnconfig[props.w] : "32px")};
    height: ${props => (btnconfig[props.h] !== undefined ? btnconfig[props.h] : "32px")};
    ${props => (props.center === true ? "align-self: center;" : "")};
    font-size: ${props => (props.font !== undefined ? btnconfig[props.font] : "12px")};
    background-color: navy;
    color:#6395F2;
    border-radius: 4px;
    user-select:none;
    box-sizing: border-box;
    border: 1px solid navy;

    &:hover{
        cursor: pointer;   
        border: 1px solid #6395F2;
        color:white;
        box-shadow: 0px 0px 1px rgba(255,255,255,0.4), 0px 0px 5px rgba(0,0,255,1.5);
    };
    &:active{
        font-size: ${props => (props.font !== undefined ? (Number(btnconfig[props.font].slice(0,2)) - 4)+"px" : "11px")};
    }
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
