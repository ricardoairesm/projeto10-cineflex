import styled from "styled-components";

export default function Legenda(){
    return(
        <Legendas>
        <Div>
            <Cadeira2 color="#1AAE9E" borda="#0E7D71"/>
            <H2>Selecionado</H2>
        </Div>
        <Div>
            <Cadeira2 color="#C3CFD9" borda="#808F9D"/>
            <H2>Disponível</H2>
        </Div>
        <Div>
            <Cadeira2 color="#FBE192" borda="#F7C52B"/>
            <H2>Indisponível</H2>
        </Div>

    </Legendas>
    )
}

const Div = styled.div`
box-sizing:border-box;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const Legendas = styled.div`
position:absolute;
width:263px;
top:389px;
left:56px;
display:flex;
justify-content:space-between;
`


const H2 = styled.div`
box-sizing:border-box;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;
    color: #4E5A65;
`

const Cadeira2 = styled.div`
box-sizing:border-box;
display:flex;
align-items:center;
justify-content:center;
height: 24px;
width: 24px;
border-radius: 12px;
background-color:${props => props.color};
margin-bottom:18px;
color: #000000;
border: 1px solid ${props => props.borda};
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
`