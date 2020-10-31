const Caracteristicas = require("../models/modelcaracteristicas")

module.exports = {
    async index(req, res) {
        const caracteristicas = await Caracteristicas.findAll()
        return res.json(caracteristicas)
    },

    async selectOne(req, res) {
        const { id } = req.params
        const caracteristicas = await Caracteristicas.findByPk(id)
        return res.json(caracteristicas)
    },

    async create(req, res) {
        const { id_trilha } = req.params
        const {
            capacidade,
            dificuldade,
            regularidade,
            comprimento,
            largura,
            status,
            trilha_id = id_trilha
        } = req.body
        const caracteristicas = await Caracteristicas.create({
            capacidade,
            dificuldade,
            regularidade,
            comprimento,
            largura,
            status,
            trilha_id
        })
        return res.json(caracteristicas)
    },

    async delete(req, res) {
        const { id } = req.params
        await Caracteristicas.destroy({
            where: {
                id
            }
        });
        return res.sendStatus(200)
    },

    async update(req, res) {
        const { id } = req.params
        const { capacidade, dificuldade, regularidade, comprimento, largura, status } = req.body
        await Caracteristicas.update({
            capacidade,
            dificuldade,
            regularidade,
            comprimento,
            largura,
            status
        }, {
            where: {
                id
            }
        })
        return res.sendStatus(200)
    }
}