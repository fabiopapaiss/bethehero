const connection = require('../database/connection')

module.exports = {
    async createIncident(req, res) { // Rota para criar um incident
        const { title, description, value } = req.body // Definindo as varíaveis aceitas (possíveis) na request
        const ong_id = req.headers.authorization // Informações como autenticação e contextos vêm no HEADER da req, e não no body
    
        const result = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })

        const id = result[0] // pegar o id do incident

        return res.json({ id })
    },

    async index(req, res) { // Rota para listar os incidents
        const { page = 1 } = req.query // Query params são para rotas "?"
        // localhost:3333/incidents?page=1
        // localhost:3333/incidents?page=2
        // Ir mostrando de 5 em 5 somente 

        const [count] = await connection('incidents').count() // Quantidade de incidents no db

        const incidents = await connection('incidents').select('*')
            .join('ongs', 'ong_id', '=', 'incidents.ong_id') // Agregando os dados dos incidents com os das ONGS para facilitar o frontend
            .limit(5) // Limitando os dados para somente 5
            .offset((page - 1) * 5) // Fazer o banco buscar de 5 em 5
            .select([
                'incidents.*', 
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]) // Desetruturando os dados e enviando o que queremos

        res.header('X-Total-Count', count['count(*)']) // Para enviar a quantidade de incidents no headers da response (Boa prática)

        res.json(incidents)
    },

    async delete(req ,res) { // Rota pra deletar os incidents
        const { id } = req.params // Params é o parâmetro de rota
        const ong_id = req.headers.authorization // Pegar o id da ONG em headers

        const incident = await connection('incidents') // Área para confirmar se a ONG que está deletando o incident é a que criou ele
            .where('id', id) // Onde o id do incident for igual a este da requisição (buscando  o incident)
            .select('ong_id') // Selecionar apenas a coluna ong_id
            .first() // Apenas um resultado
        

        if (incident.ong_id !== ong_id) { // Comparando o id da ong da request e o id da ong do incident
            return res.status(401).json({ error: 'Operation not permited '}) // Erro 401 (Sem premissão)
        }

        await connection('incidents').where('id', id).delete() // Deletando o registro se não der nenhum erro

        return res.status(204).send() // Mensagem de sucesso (204, sucesso sem mensagem)
    }
}