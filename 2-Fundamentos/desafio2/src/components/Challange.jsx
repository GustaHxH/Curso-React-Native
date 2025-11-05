const Challange = () =>{
    const num1 = 3;
    const num2 = 5;

    return(
        <div>
            <p>Número 1 = {num1}</p>
            <p>Número 2 = {num2}</p>
            <button onClick={() => console.log(num1 + num2)}>Soma</button>
        </div>
    )
}

export default Challange;