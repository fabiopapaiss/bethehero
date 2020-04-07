const connection = require('../database/connection')
const crypto = require('crypto')


module.exports = { 
    async createOng(req, res) { // Rota para salvar uma ONG no db
        const { name, email, whatsapp, city, uf } = req.body // Desestruturar para definir as variáveis possíveis na req

        const id = crypto.randomBytes(4).toString('HEX') // Para gerar sempre um id único para cada ONG

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return res.json({ id })
    },
    async index(req, res) { // Rota pra retornar lista de ONGs
        const ongs = await connection('ongs').select('*') // "*" para selecionar todas as ONGs

        return res.json(ongs)
    }
}