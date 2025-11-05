//Importação de componente para saber a hierarquia
import MyComponent from "./MyComponent";

const FisrtComponent =  () =>{
    //Essa função faz isso TESTE

    return(
        <div>
            {/*Comentario interno*/}
            <h1>Meu primeiro componente</h1>
            <p className="Teste">Meu texto</p>
            <MyComponent/>
        </div>
    );
};

export default FisrtComponent;