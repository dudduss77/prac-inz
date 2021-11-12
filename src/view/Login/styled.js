import styled from 'styled-components'
import background from './../../assets/background1.png';

const ImgBackground = styled.div`
background-image: url(${background});
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0px;
left: 0px;
`;

const Container = styled.div`
background-color: rgba(255, 255, 255, 0.3);
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
z-index: 1;
`;

const Logo = styled.div`
font-size: 2rem;
position: absolute;
top: 20px;
left: 20px;
`;




const LoginBox = styled.div`
background-color: ${({theme}) => theme.backgroundColorOne};
width: 420px;
height: auto;
border-radius: 8px;
display: flex;
align-items: center;
flex-direction: column;
padding: 40px 30px;
box-sizing: border-box;
color: ${({theme}) => theme.naturalOne};

& > * {
  margin-bottom: 30px;
}
`;

const MenuLogin = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;  
font-size: 14px;
width: 360px;
gap: 10px;

@media screen and (max-width: 360px) {
    height: 100%;
}
`;

const MenuLogin__item = styled.div`
font-weight: 700;
padding-bottom: 5px;
margin-right: 20px;
cursor: pointer;
color: ${({theme, active}) => active ? theme.PrimarySix : theme.naturalOne};
border-bottom: ${({theme, active}) => active ? '3px solid ' + theme.PrimarySix : 'none'};
`;

const RememberLost = styled.div`
display: flex;
justify-content: space-between;
width: 100%;  
`;

const RememberLost__item = styled.div`
display: flex;
color: ${ ({ theme, secondColor }) => secondColor ? theme.PrimarySix : theme.naturalOne };
cursor: pointer;

& > * {
  margin-right: 10px;
}
`;  



export {
    ImgBackground, 
    Container, 
    Logo, 
    LoginBox, 
    MenuLogin, 
    MenuLogin__item, 
    RememberLost, 
    RememberLost__item
}