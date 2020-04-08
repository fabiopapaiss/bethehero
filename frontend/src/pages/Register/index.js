import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '   ../../services/api'
import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')


    function handleRegister(e) {
        e.preventDefault() // Este eventDefault() previne o comportamento normal de um form de uma página recarregar

    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos da sua ONG</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name} // O valor dela é a das nossa variáveis lá em cima
                        onChange={e => setName(e.target.value)} // Essa arrow function pega o evento ("e") do input e muda a nossa variável com o "useName" 
                    />
                    <input 
                        type="email" placeholder="Email"
                        value={name}
                        onChange={e => useName(e.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={name}
                        onChange={e => useName(e.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={name}
                            onChange={e => useName(e.target.value)}
                        />
                        <input 
                            placeholder="UF" style={{ width: 88 }}
                            value={name}
                            onChange={e => useName(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}