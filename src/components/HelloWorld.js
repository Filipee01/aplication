import Frase from "./Frase"

function HelloWorld() {
    return (
        <div className="start">
            <h1>Meu primeiro componente</h1>
            <Frase/>
            <Frase/>
            <Frase/>
        </div>
    )
}

export default HelloWorld