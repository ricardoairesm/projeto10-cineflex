import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomeScreen from "./Pages/homeScreen";
import ScheduleList from "./Pages/scheduleList";
import SeatList from "./Pages/seatsList";
import Sucesso from "./Pages/sucesso";


function App() {
  const [info,setInfo] = useState([{
    name: "",
    cpf: "",
    assentos:[],
    cadeiras:[],
    filme:"",
    data:"",
    hora:"",
  }])



  return (
    <BrowserRouter>

      <TelaApp>
        <Navbar>CINEFLEX</Navbar>
        <Routes>
          <Route path="/" element={<HomeScreen info = {info} setInfo={setInfo}/>} />
          <Route path="/sessoes/:idFilme" element={<ScheduleList info = {info} setInfo={setInfo}/>} />
          <Route path="/assentos/:idSessao" element = {<SeatList info = {info} setInfo={setInfo}/>}/>
          <Route path="/sucesso" element = {<Sucesso info = {info} setInfo={setInfo}/>}/>
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
top:0px;
left:0px;
overflow-y:scroll;
overflow-x:hidden;

`

const Navbar = styled.div`
position: fixed;
width: 375px;
height: 67px;
left: 5px;
top: 5px;
display:flex;
justify-content:center;
align-items:center;
color:#E8833A;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 34px;
z-index:3;

background: #C3CFD9;

`