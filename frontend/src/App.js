import React from 'react'

import './global.css'

import Login from './pages/Login'

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
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*****************/

function App() {
  return (
    <Login/>
  )
}

export default App
