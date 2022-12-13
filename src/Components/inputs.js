import styled from "styled-components"

export default function Inputs(props){
    const {info, setInfo} = props;
    return(
        <>
        <InputNome>
        <p>Nome do comprador:</p>
        <Input1 data-test="client-name" onChange={e =>{
            const newInfo = [...info];
            newInfo[0].name = e.target.value; 
            setInfo(newInfo)}
            }/>
        </InputNome>
        <InputCPF>
        <p>CPF do comprador:</p>
        <Input2 data-test="client-cpf" onChange={e =>{
            const newInfo = [...info];
            newInfo[0].cpf = e.target.value; 
            setInfo(newInfo)}
            }/>
        </InputCPF>
        </>
    )
}

const InputNome = styled.div`
display:flex;
justify-content:flex-start;
flex-direction:column;
position:absolute;
top:472px;
left: 24px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #293845;
p{
    margin-bottom:1px;
}
`

const Input1 = styled.input.attrs({
    placeholder: "Digite seu nome...",
  })`
    &&& {
        color: #AFAFAF;
        box-sizing:border-box;
        width:327px;
        height:51px;
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        padding-left:18px;
    }
  `

const Input2 = styled.input.attrs({
    placeholder: "Digite seu CPF...",
  })`
    &&& {
        color: #AFAFAF;
        box-sizing:border-box;
        width:327px;
        height:51px;
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        padding-left:18px;
    }
  `


const InputCPF = styled.div`
display:flex;
justify-content:flex-start;
flex-direction:column;
position:absolute;
top:555px;
left: 24px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #293845;
p{
    margin-bottom:1px;
}
`