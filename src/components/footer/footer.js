import styled from "styled-components"

const FooterText = styled.div`
position: fixed;
left: 0;
bottom: 0;
width: 100%;
background-color: red;
color: white;
text-align: center;

// display:flex;
font-size: 16px;
font-weight: bold;
width: 100%;
height: 128px;
color:green;
background-color: black;
justify-content: center;
align-items: center;
`;


export default function Footer (){

    return (
        <FooterText>
           <span> AlphaEdtech - Pedro Henrique - 2021</span>
        </FooterText>
    )
}