import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomeScreen from "./Components/homeScreen";


function App() {
  return (
    <BrowserRouter>
    
    
    <TelaApp>
      <Navbar>CINEFLEX</Navbar>
      <Routes>
        <Route path="/" element = {<HomeScreen/>}/>
      </Routes>
      
    </TelaApp>
    </BrowserRouter>
  );
}

export default App;


const TelaApp = styled.div`
height:877px;
width:375px;
background-color: white;
position:relative;
overflow:auto;
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