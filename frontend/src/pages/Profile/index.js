import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg'


export default function Profile() {
    const [incidents, setIncidents] = useState([])

    const history = useHistory()

    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')

    useEffect(() => {
        api.get('/profile', { // Nossa rota /profile com get entrega 5 incidents de cada vez
            headers: {        // O Authorization para essa função está no headers, como definimos no backend
                Authorization: ongId,
            }
        }).then( response => { // Após isso, a variável incidents será atualizada
            setIncidents(response.data)
        })

    }, [ongId]) // Oque está no array é o parâmetro que indica se há mudanças, se houver, a função é rodada

    async function handleDeleteIncident(id) { // Nossa rota de delete
        try {
            await api.delete(`/incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            }) 
            setIncidents(incidents, incidents.filter(incident => incident.id !== id)) // Realizando a atualização visual, filtrando apenas os incidents que possuem id diferente deste da função de delete
        } catch (err) {
            alert('Erro ao deletar, tente novamente!')
        }
    }

    function handleLogout() {
        localStorage.clear() // Limpando o Local Storage inteiro
        history.push('/') // Redirecionando ao início
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, <strong>{ongName}</strong></span>
                
                <Link to="incidents/new" className="button">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => {
                    return (
                        <li key={incident.id}>
                            <strong>CASO:</strong>
                            <p>{incident.title}</p>

                            <strong>DESCRIÇÃO</strong>
                            <p>{incident.description}</p>

                            <strong>VALOR:</strong>
                            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                            <button type="button">
                                <FiTrash onClick={() => handleDeleteIncident(incidents.id)} size={20} color="#a8a8b3"/>
                            </button>
                        </li>        
                    )
                })}
            </ul>
        </div>
    )
}