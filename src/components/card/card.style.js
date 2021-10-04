import styled from "styled-components";
import {ButtonDetails} from "../button/button.style"


export const CardContainer = styled.div`
    width: 165px;
    min-height: 328px;    
    display: flex;
    flex-direction: column;
    aling-items: center;

    margin:5px 10px 10px 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);

    &:hover{
        transform: scale(1.01);
    }
    border-radius: 6px;
`;
export const CardImg = styled.img`
    height: 231px;
    width: 165px;
    border-radius: 4px 4px 0px 0px;
`;
export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 2px 2px;
    background: rgba(3, 4, 34, 1);
    border-radius: 0px 0px 4px 4px;
`;
export const CardTextTitle = styled.a`
    padding: 2px;
    margin: 0px 0px 2px 0px;

    color:#6395F2;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;

    // transition: 0.5s;
    &:hover{
        color:white;
    }
`;
export const CardGroupButton = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    height: 100%;
`;
export const CardButtonAddCart = styled(ButtonDetails)`
    align-items: center;
    margin: 5px;
    padding:4px;
`;
export const CardTextValue = styled.p`
    padding: 2px;
    font-size: 14px;
    color:#6395F2;
    height:40px;
`;
export const Text = styled.span`
    color: grey;
    font-size:12px;
    text-decoration: line-through;
`;
