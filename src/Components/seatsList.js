import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function SeatList() {

    const [clicked, setClicked] = useState([]);
    const { idSessao } = useParams();
    const [assentos, setAssentos] = useState(undefined);

    function escolherCadeira(cadeira) {
        if (cadeira.status) {
            const novoClick = [...clicked, cadeira.name];
            console.log(novoClick);
            setClicked(novoClick);
        }
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
            <AssentosList>
                {assentos.seats.map((cadeira, index) => {
                    if (clicked.includes(cadeira.name)) {
                        return (
                            <Cadeira onClick={() => {
                                const novoClick = [];
                                for(let i =0; i < clicked.length;i++){
                                    if(clicked[i] != cadeira.name){
                                        novoClick.push(clicked[i]);
                                    }
                                }
                                console.log(novoClick);
                                setClicked(novoClick);
                            }} key={index} color="#1AAE9E" borda="#0E7D71">{cadeira.name}</Cadeira>
                        )
                    }
                    if (cadeira.isAvailable) {
                        return (
                            <Cadeira onClick={() => {
                                const novoClick = [...clicked, cadeira.name];
                                console.log(novoClick);
                                setClicked(novoClick);
                            }} key={index} color="#C3CFD9" borda="#808F9D">{cadeira.name}</Cadeira>
                        )
                    }

                    return (
                        <Cadeira status={cadeira.isAvailable} onClick={escolherCadeira} key={index} color="#FBE192" borda="#F7C52B">{index + 1}</Cadeira>
                    )
                })}
            </AssentosList>
            <Footer>
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

const AssentosList = styled.div`
position: absolute;
left: 24px;
top: 158px;
width: 330px;
display:flex;
flex-wrap:wrap;
position:absolute;
top:169px;
left:30px;
padding-bottom:117px;
`

const Cadeira = styled.div`
display:flex;
align-items:center;
justify-content:center;
height: 24px;
width: 24px;
left: 325px;
top: 158px;
border-radius: 12px;
background-color:${props => props.color};
margin-right:7px;
margin-bottom:18px;
color: #000000;
border: 1px solid ${props => props.borda};
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;

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