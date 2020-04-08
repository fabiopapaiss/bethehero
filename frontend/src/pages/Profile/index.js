import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash } from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg'


export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, APAD</span>

                <Link to="incidents/new" className="button">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Descriçaõ teste</p>


                    <strong>VALOR:</strong>
                    <p>R$ 128,00</p>

                    <button type="button">
                        <FiTrash  size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Descriçaõ teste</p>


                    <strong>VALOR:</strong>
                    <p>R$ 128,00</p>

                    <button type="button">
                        <FiTrash  size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Descriçaõ teste</p>


                    <strong>VALOR:</strong>
                    <p>R$ 128,00</p>

                    <button type="button">
                        <FiTrash  size={20} color="#a8a8b3"/>
                    </button>
                </li>
            </ul>
        </div>
    )
}