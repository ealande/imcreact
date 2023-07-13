import { useState } from "react";
import styled from 'styled-components'

const Resultado = styled.p`
text-align:center;
padding: 1px;
margin-top: 15px;
`
const Borda = styled.div`
border: solid;
margin-top: 10em;
margin-right: 15%;
margin-left: 15%;
min-width: 70%;
display:flex;
flex-direction: column;
align-items: flex-start;`

const Wave = styled.div`
position: absolute;
height: 70px;
width: 600px;
background: #e0efe3;`

const Form = () => {


    let [height, setHeight] = useState(0);
    let [weight, setWeight] = useState(0);

    const renderResult = () => {
        const imc = weight / height;
        
        if (imc <= 18.5) {
            return (
            <p>Seu IMC é considerado Magro</p>
            )
        } else if (imc > 18.5 && imc < 24.9) {
            return (
            <p>Seu IMC é considerado Normal</p>
            )
        } else if (imc > 25){
            return(
                <p>Seu IMC é considerado Obeso</p>
            )
        } else {
            return (
            <p></p>
            )
        }
    }
    const IMC = weight / height;

    return (
        <>
        <h1>Calculadora IMC</h1>
        <form>
            <input type ="number" step="0.01"placeholder="Altura" onChange={evento => setHeight(parseFloat(evento.target.value))}/>
            <input type ="number" step="0.1" placeholder="Peso" onChange={evento => setWeight(parseFloat(evento.target.value))} />
            <Borda>
            <Resultado>{renderResult()}</Resultado>

            <Resultado>Altura:{height} </Resultado> <br/>
            <Resultado>Peso: {weight} </Resultado><br/>
            <Resultado>IMC: {IMC} </Resultado>
            </Borda>
        </form>
        </>
    )
}

export default Form