import styled from "styled-components"

const ContainerNavBar = styled.nav`
    height: 60px;
    background-color: #144EB8;
`;
const NavBarButton = styled.div`
    float: left;
    color: #091834;
    text-align: center;
    padding: 18px 16px;
    font-size: 18px;
    // border:1px solid red;
`;
const NavBarButtonRight = styled.div`
    display:flex;
    float: right;
`;

export default function NavBar() {

    return (
        <>
        {console.log("| NAVBAR > rendenizado")}
            <ContainerNavBar>
                <NavBarButton>
                    BLOCKFLIX
                </NavBarButton>
                <NavBarButtonRight>
                    <NavBarButton>CART</NavBarButton>
                    <NavBarButton>LOGIN</NavBarButton>
                </NavBarButtonRight>
            </ContainerNavBar>
        </>

    )
}