import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";


export default function ListaAssentos(props) {
    const { clicked, setClicked, assentos, info, setInfo } = props;
    return (
        <>
            <AssentosList>
                {assentos.seats.map((cadeira, index) => {
                    if (clicked.includes(cadeira.name)) {
                        return (
                            <Cadeira onClick={() => {
                                const novoClick = [];
                                const newInfo = [...info];
                                for (let i = 0; i < clicked.length; i++) {
                                    if (clicked[i] != cadeira.name) {
                                        novoClick.push(clicked[i]);
                                    }
                                }
                                newInfo[0].assentos = newInfo[0].assentos.filter(item=> item != cadeira.id)
                                newInfo[0].cadeiras = newInfo[0].cadeiras.filter(item=> item != cadeira.name)
                                console.log(newInfo);
                                setClicked(novoClick);
                                setInfo(newInfo);
                            }} key={index} color="#1AAE9E" borda="#0E7D71">{cadeira.name}</Cadeira>
                        )
                    }
                    if (cadeira.isAvailable) {
                        return (
                            <Cadeira onClick={() => {
                                const newInfo = [...info];
                                newInfo[0].assentos.push(cadeira.id)
                                newInfo[0].cadeiras.push(cadeira.name)
                                console.log(newInfo);
                                setInfo(newInfo);
                                const novoClick = [...clicked, cadeira.name];
                                setClicked(novoClick);
                            }} key={index} color="#C3CFD9" borda="#808F9D">{cadeira.name}</Cadeira>
                        )
                    }

                    return (
                        <Cadeira key={index} color="#FBE192" borda="#F7C52B">{cadeira.name}</Cadeira>
                    )
                })}
            </AssentosList>
        </>
    )


}

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
box-sizing:border-box;
display:flex;
align-items:center;
justify-content:center;
height: 24px;
width: 24px;
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