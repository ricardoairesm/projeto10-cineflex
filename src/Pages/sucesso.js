import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Sucesso(props) {

    const { info, setInfo } = props;
    return (
        <>
            <H1><p>Pedido feito com sucesso!</p></H1>
            <H2 data-test="movie-info">Filme e sessão<br />
                <p>{info[0].filme}<br />
                    {info[0].data} {info[0].hora}</p>
            </H2>
            <H3 data-test="seats-info">Ingressos<br />
                {info[0].cadeiras.map((cadeira) => <p>Assento {cadeira}</p>)}
            </H3>
            <H4 data-test="client-info">Comprador<br />
                <p>Nome: {info[0].name}<br />
                    CPF: {info[0].cpf}
                </p>
            </H4>
            <Link to = "/">
                <Botao data-test="go-home-btn" onClick={() => {
                    const newInfo = [{
                        name: "",
                        cpf: "",
                        assentos: [],
                        cadeiras: [],
                        filme: "",
                        data: "",
                        hora: "",
                    }];
                    setInfo(newInfo);
                }}>Voltar pra Home</Botao>
            </Link>
        </>
    )
}


const Botao = styled.div`
position: absolute;
width: 225px;
height: 42px;
left: 74px;
top: 622px;

background: #E8833A;
border-radius: 3px;
display:flex;
align-items:center;
justify-content:center;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
text-align: center;
letter-spacing: 0.04em;

color: #FFFFFF;


`

const H1 = styled.div`
position: absolute;
width: 374px;
height: 110px;
left: 0px;
top: 67px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align:center;
justify-content:center;
letter-spacing: 0.04em;

color: #247A6B;
p{
    word-wrap:break-word;
    width:200px;
}

`

const H2 = styled.div`
position: absolute;
width: 374px;
height: 110px;
left: 29px;
top: 202px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
align-items: center;
letter-spacing: 0.04em;

color: #293845;

p{
word-wrap:break-word;
margin-top:1px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #293845;
}
`

const H3 = styled.div`
position: absolute;
width: 374px;
height: 110px;
left: 29px;
top: 324px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
color: #293845;
p{
margin-bottom:1px;
margin-top:1px;    
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: #293845;
word-wrap:break-word;
}


`
const H4 = styled.div`
position: absolute;
width: 374px;
height: 110px;
left: 29px;
top: 450px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
align-items: center;
letter-spacing: 0.04em;
color: #293845;
p{
word-wrap:break-word;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: #293845;
margin-top:1px;
}
`

