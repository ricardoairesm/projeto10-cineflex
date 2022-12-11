import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function SeatList() {
    const { idSessao } = useParams();
    const [assentos, setAssentos] = useState(undefined);

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
                    if (cadeira.isAvailable) {
                        return (
                            <>
                                <Cadeira color="#C3CFD9" borda="#808F9D">{index + 1}</Cadeira>
                            </>
                        )
                    }

                    return (
                        <Cadeira color="#FBE192" borda="#F7C52B">{index + 1}</Cadeira>
                    )
                })}
            </AssentosList>
            <Footer>
                <img />
                <h1>{assentos.movie.title}</h1>
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
display:flex;
align-items:center;
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
        line-height: 30px;
        display: flex;
        align-items: center;
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