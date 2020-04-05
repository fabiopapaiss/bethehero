/******ANOTAÇÕES*******
*
*  Métodos HTTP: 
*   GET: Buscar uma informação do back-end
*   POST: Criar uma informação no back-end
*   PUT: Alterar uma informação no back-end
*   DELETE: Deletar uma informação no back-end
*   
*  Tipos de parâmetro: 
*   Query: Paâmetros nomeados enviados na rota após o "?", servem para FILTROS, PAGINAÇÃO
*   Route: Parâmetros usados para identificar recursos
*   Request Body: Corpo da requisição, serve para CRIAR ou ALTERAR RECURSOS
*   
*  Bancos de Dados: 
*   SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsot SQL Server, etc
*   NoSQL: MongoDB, CouchDB, etc
*
*   Driver: SELECT * FROM users
*   Query Builder: table('users').select('*').where() 
*       Permite uso do JS, por isso usaremos o query builder
*
*  O routes.js serve para organizar todas as rotas que existem e não ficarem apenas em index.js
*  
*
*  PARA ORGANIZAR O DB (Por enquanto)
*   + Entidades:
*    - ONGs
*    - Casos (incidents)
*   + Funcionalidades:
*    - Login de ONG
*    - Logout de ONG
*    - Cadastro de ONG
*    - Cadastrar novo caso
*    - Deletar caso
*    - Listar casos específicos da ONG
*    - Listar todos os casos
*    - Entrar em contato com ONG
*
*
*
***********************/ 

const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333, (err, result) => {
    if (err) return result
    return console.log("Server running on 3333")
})
