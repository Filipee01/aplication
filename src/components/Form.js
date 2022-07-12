import {useState} from 'react'


function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name)
        console.log('Cadastrou o usuário')
    }

    const [name, setName] = useState()

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlfor="name">Nome:</label>
                    <input type="text" id="name" placeHolder="Digite o seu nome"
                    onChange={(e)=> setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlfor="password">Senha:</label>
                    <input type="password" id="password" placeHolder="Digite a sua senha"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>



        </div>
    )
}

export default Form