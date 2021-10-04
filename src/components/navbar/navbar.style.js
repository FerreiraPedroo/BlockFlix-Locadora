import styled from "styled-components";

export const ContainerNavBar = styled.nav`
height: 60px;
background-color: #144EB8
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 14%, rgba(7,12,130,1) 44%, rgba(10,26,108,1) 92%);
`;


export const NavBarButton = styled.div`
width:160px;
height: 59px;
float: left;
color: #091834;
text-align: center;
padding: 14px 16px;
font-size: 18px`;

export const NavBarButtonCart = styled(NavBarButton)`
width: 96px;
position: relative;
display: inline-block;
height: 59px;
color: #144EB8;

&:hover{
    cursor: pointer;
    background-color: rgba(0,0,102,1);
    color: white;
`;

export const NavBarButtonRight = styled.div`
display:flex;
float: right;
height: 100%`;

export const NavBarButtonCartIcon = styled.span`
position: absolute;
top: 2px;
right: 4px;
width: 26px;
height: 20px;
border-radius: 15px 15px 15px 0px;
background-color: red;
color: white
`;

export const TextInfo = styled.span`
font-size: 32px;
${props => (props.decoration === true ? "text-decoration: line-through;" : "")};
// margin: 8px 0px;
// text-align: justify;
overflow-wrap: break-word;
user-select:none;
text-decoration: undescore;
`;
export const TextTitle = styled.a`
font-size: 30px;
margin: 8px 0px;
text-align: justify;
user-select:none;
text-decoration: none;
font-style: oblique;
font-weight: bold;
text-shadow: 2px 2px 3px navy;

&:active, &:visited{
    color:#6395F2;
}
&:hover{
    cursor: pointer;   

};


`;