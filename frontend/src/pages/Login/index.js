import React from 'react'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Logo"/>

                <form>
                    <h1>Faça seu Login</h1>

                    <input type="text" placeholder="Sua ID"/>
                    <button className="button"type="submit">Entrar</button>
                    <FiLogIn size={16} color="#e02041"/>
                    <a href="/register">Não tenho cadastro</a>
                </form>

            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}