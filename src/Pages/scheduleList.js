import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ScheduleList(props) {

    const { info, setInfo } = props;
    const { idFilme } = useParams();
    const [horario, setHorario] = useState(undefined);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
        promise.then((res) => setHorario(res.data))
        promise.catch((err) => console.log(err.response.data))
    }, [])




    if (horario === undefined) {
        return (
            <div>Carregando...</div>
        )
    }

    return (
        <>
            <Title>Selecione o horário</Title>
            <TimeList>
                {horario.days.map((sessao) =>
                    <Horarios  data-test="showtime" >

                        <Day >{sessao.weekday} - {sessao.date}</Day>
                        {sessao.showtimes.map((hora) =>
                            <>
                                <Link key={hora.id} to={`/assentos/${hora.id}`} style={{ textDecoration: 'none' }}>
                                    <Hour data-test="showtime" onClick={() => {
                                        const newInfo = [...info];
                                        newInfo[0].filme = horario.title;
                                        newInfo[0].data = sessao.weekday;
                                        newInfo[0].hora = hora.name;
                                        console.log(newInfo);
                                        setInfo(newInfo)
                                    }
                                    } ><p>{hora.name}</p></Hour>
                                </Link>

                            </>
                        )}


                    </Horarios>
                )}
            </TimeList>
            <Footer data-test="footer" >
                <Borda>
                    <img src={horario.posterURL} />
                </Borda>
                <h1>{horario.title}</h1>
            </Footer>


        </>
    )
}
const Horarios = styled.div`
display:flex;
flex-wrap:wrap;
`


const DIV = styled.div`
display:flex;
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

const TimeList = styled.div`
position: absolute;
left: 30px;
top: 169px;
width: 375px;
display:flex;
flex-wrap:wrap;
position:absolute;
top:169px;
left:30px;
padding-bottom:117px;
.div{
    display:flex;
}
`

const Day = styled.div`
width:375px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
letter-spacing: 0.02em;
color: #293845;
margin-bottom:22px;
`
const Hour = styled.div`
height: 43px;
width: 83px;
left: 23px;
top: 227px;
border-radius: 3px;
background: #E8833A;
margin-bottom:22px;
margin-right:8px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 0.02em;
color: #FFFFFF;
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