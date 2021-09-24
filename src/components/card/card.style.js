import styled from "styled-components";
import {Button} from "../button/button.style"


export const CardContainer = styled.div`
    width: 184px;    
    display: flex;
    flex-direction: column;
    aling-items: center;

    margin:5px 15px 10px 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);
    
    transition: 0.3s;
    &:hover {
        box-shadow: 0px 0px 10px rgba(255,255,255,0.2);
    }

    background-color: white;
    border-radius: 6px;
`;
export const CardImg = styled.img`
    height: 192px;
    border-radius: 4px 4px 0px 0px;
`;
export const CardInfo = styled.div`
    width: 100%;
    height: 100%;
    padding: 2px 2px;
    background: rgba(3, 4, 34, 1);
    border-radius: 0px 0px 4px 4px;
`;
export const CardTextTitle = styled.p`
    height: 38px;
    padding: 2px;
    margin: 5px 0px;

    color:white;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
`;
export const CardGroupButton = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;

`;
export const CardButtonDetails = styled(Button)`
    width: 48px;
    height: 36px;
    margin: 5px;

    font-size: 12px;
    color: white;
    background-color: rgba(3, 4, 94, 1);
    &:hover {
        box-shadow: 0px 0px 1px rgba(255,255,255,0.4), 0px 0px 5px rgba(0,0,255,1.5);
      }

`;
export const CardButtonAddCart = styled(Button)`
    width: 128px;
    height: 36px;
    margin: 5px;

    font-size: 12px;

    color: white;
    background-color: rgba(3, 4, 94, 1);
    &:hover {
        box-shadow: 0px 0px 1px rgba(255,255,255,0.4), 0px 0px 5px rgba(0,0,255,1.5);
      }
`;
