import React from 'react'

function Header({ children }) { // O props permite o acesso à "parâmetros" pra o nosso componente, seja usando props.title, ou props.children, etc
    return (
        <header>
            <h1>{children}</h1>
        </header>
    )
}

export default Header