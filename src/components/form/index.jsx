import { useState } from "react";

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
        } else {
            return (
            <p>Seu IMC é considerado Obeso</p>
            )
        }
    }
    
    return (
        <form>
            <input type ="number" step="0.01"placeholder="Height" onChange={evento => setHeight(parseFloat(evento.target.value))}/>
            <input type ="number" step="0.1" placeholder="Weight" onChange={evento => setWeight(parseFloat(evento.target.value))} />
            {renderResult()}
            <p>Altura:</p> {height} <br/>
            <p>Peso:</p> {weight}<br/>
            <p>IMC:</p> {weight / height}
        </form>
        
    )
}

export default Form