import React from 'react'

import './global.css'

import Routes from './routes'

/*****ANOTAÇÕES***********
*
* JSX (Javascript + XML)
* 
* EXEMPLO DOS CONCEITOS DE ESTADO E IMUTABILIDADE
* function App() {
*  const [counter, setCounter] = useState(0) // O useState cria um array com o valor da nossa variável e outro com a função que sobrepoôem o valor dela
*
*  function increment() {
*    setCounter(counter + 1)
*  }
*  return (
*    <div>
*      <Header>Contador: {counter}</Header>
*      <button onClick={increment}>Incrementar</button>
*    </div>
*  )
}
* Usamos um cliente HTTP para fazer o front se comunicar com o back
*   O mais usado é o AXIOS
* 
*****************/

function App() {
  return (
    <Routes/>
  )
}

export default App
