import styled from "styled-components";


function App() {
  return (
    <TelaApp>
      <Navbar>CINEFLEX</Navbar>
      
    </TelaApp>
  );
}

export default App;
const TelaApp = styled.div`
height:877px;
width:375px;
background-color:#E5E5E5;
position:relative;
`

const Navbar = styled.div `
position: absolute;
width: 375px;
height: 67px;
left: 0px;
top: 0px;
display:flex;
justify-content:center;
align-items:center;
color:#E8833A;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 34px;

background: #C3CFD9;

`