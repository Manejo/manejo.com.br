//const { update } = require("../models/modeltrilha")
const Trilha = require("../models/modeltrilha")


module.exports = {
    async index(req, res) {
        const trilha = await Trilha.findAll()
        return res.json(trilha)
    },

    async selectOne(req, res) {
        const { id } = req.params
        const trilha = await Trilha.findByPk(id)
        return res.json(trilha)
    },

    async create(req, res) {
        const { nome, coordenadas } = req.body
        const trilha = await Trilha.create({ nome, coordenadas })
        return res.json(trilha)
    },

    async delete(req, res) {
        const { id } = req.params
        await Trilha.destroy({
            where: {
                id
            }
        });
        return res.sendStatus(200)
    },

    async update(req, res) {
        const { id } = req.params
        const { nome, coordenadas } = req.body
        await Trilha.update({ nome, coordenadas },
            {
                where: {
                    id
                }
            })
        return res.sendStatus(200)
    }
}