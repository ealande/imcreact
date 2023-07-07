const Form = () => {


    let [height, setHeight] = useState(0);
    let [weight, setWeight] = useState(0);

    const renderResult = () => {
        const imc = setHeight / setWeight;
        
        if (imc < 18,5) {
            return (
            <p>Seu IMC é considerado Magro</p>
            )
        } else if (imc > 18,5 && imc < 24,9) {
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
            <input type ="number" placeholder="Height" onChange={evento => setHeight(parseInt(evento.target.value))}/>
            <input type ="number" placeholder="Weight" onChange={evento => setWeight(parseInt(evento.target.value))} />
            {renderResult()}
        </form>
        
    )
}

export default Form