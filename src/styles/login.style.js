
import styled from "styled-components";

export const ContainerPage = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("../img/login-bg.jpg");
    // background-repeat: no-repeat;
    background-size:auto;

    // border: 1px solid red;
    // animation: scroll 100s linear infinite;

    // @keyframes scroll {
    //     100%{
    //      background-position:0px -1125px;
    //    }
    //  }
`;
// CONTAINER //
export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;    
    // background-color:rgba(0,0,80,0.7);
    background:  linear-gradient(to right,rgba(0,0,25,1) 20%, transparent , transparent , rgba(0,0,25,1) 80%)
`;
// BUTTON //
export const ButtonLogin = styled.button`
    width: 320px;
    height: 36px;
    margin: 28px 0px 8px 0px;
    user-select: none;

    font-size: 1.0rem;
    font-weight: 900;
    color: #6395F2;
    background-color: navy;
    border: 0px;
    border-radius: 4px;

    &:hover{
        cursor: pointer;   
        border: 1px solid #6395F2;
    }
    &:active{
        font-size: 0.95rem;
    }
`;

// TEXTO //
export const TextLoginTitle = styled.p`
    color: #012998;
    padding: 24px;
    font-size: 70px;
    margin: 20px 0px;
    text-align: justify;
    user-select:none;
    text-decoration: none;
    font-style: oblique;
    font-weight: bolder;
    text-shadow: 2px 2px 3px navy;


`;
export const TextLoginEntrar = styled.p`
    color:white;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 28px;
`;
export const TextLoginError = styled.p`
    color: tomato;
    font-size: 16px;
    margin: 5px 0px 10px 0px;
`;





// export const InputCheckbox = styled.input.attrs(props => ({
//     type:"checkbox"
// }))`
//     width: 16px;
//     height: 16px;
//     margin: 10px 0px 10px 0px;
// `;
// export const TextLoginRemember = styled.p`
//     margin-left: 10px;
// `;
// export const ContainerRemember = styled.div`
//     display: flex;
//     align-items: center;
//     flex-direction: row;
//     color:silver;
// `;

