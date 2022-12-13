import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import ListaAssentos from "../Components/listaAssentos";
import Legenda from "../Components/legenda";
import Inputs from "../Components/inputs";

export default function SeatList(props) {
     
    const {info, setInfo} = props;
    const [clicked, setClicked] = useState([]);
    const { idSessao } = useParams();
    const [assentos, setAssentos] = useState(undefined);
    const postURL = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
    let objeto =[
        {
            ids:info[0].assentos,
            name:info[0].name,
            cpf:info[0].cpf
        }
    ];

    let habilitar = true;

    if(info[0].cpf.length>10 && info[0].name.length>0 && info[0].assentos.length>0){
        habilitar = false;
    }


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        promise.then((res) => setAssentos(res.data))
        promise.catch((err) => console.log(err.response.data))
    }, [])

    if (assentos === undefined) {
        return (
            <div>Carregando...</div>
        )
    }

    return (
        <>
            <Title>Selecione o(s) assento(s)</Title>
            <ListaAssentos info = {info} setInfo = {setInfo} clicked = {clicked} setClicked = {setClicked} assentos = {assentos}/>
            <Legenda/>
            <Inputs info = {info} setInfo = {setInfo}/>
            <Link data-test="book-seat-btn" to = "/sucesso">
            <Botao   disabled = {habilitar} onClick={()=>{
                axios.post(postURL,{ 
                    ids:info[0].assentos,
                    name:info[0].name,
                    cpf:info[0].cpf
                });     
            }}>Reservar assento(s)</Botao>
            </Link>
            <Footer data-test="footer" >
                <Borda>
                    <img src={assentos.movie.posterURL} />
                </Borda>
                <h1>{assentos.movie.title}<br />
                    {assentos.day.weekday} - {assentos.name}
                </h1>
            </Footer>
        </>
    )
}

const Botao = styled.button`
all:unset;
position: absolute;
width: 225px;
height: 42px;
left: 72px;
top: 688px;
display:flex;
align-items:center;
justify-content:center;
background: #E8833A;
border-radius: 3px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
color: #FFFFFF;
`

const Title = styled.div`
position: absolute;
width: 375px;
height: 110px;
left: 0px;
top: 67px;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.04em;
color: #293845;
`



const Footer = styled.div`
padding-left:10px;
padding-top:14px;
display:flex;
position:fixed;
height: 117px;
width: 375px;
left: 5px;
top: 770px;
border-radius: 0px;
background: #DFE6ED;
border-top: 1px solid #9EADBA;

h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        margin-left:14px;
        color: #293845;
    }

`
const Borda = styled.div`
display:flex;
align-items:center;
justify-content:center;
height: 89px;
width: 64px;
left: 10px;
top: 774px;
border-radius: 2px;
background-color:#FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    img{
        height: 72px;
        width: 48px;
        left: 18px;
        top: 782px;
        border-radius: 0px;
    }
  
`