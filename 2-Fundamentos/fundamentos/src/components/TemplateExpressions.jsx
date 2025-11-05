const TemplateExpressions = () => {
const name = "Gustavo"
const data = {
    idade: 31,
    trabalho: "Progrmador"
}

    return(
        <div>
            <h1>Olá, {name}, tudo bem?</h1>
            <p>Você atua como: {data.trabalho}</p>
            <p>{console.log("Impressão JSX")}</p>
        </div>
    )
};

export default TemplateExpressions;