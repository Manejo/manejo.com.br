const { Model, DataTypes } = require('sequelize')

class modelTrilha extends Model {
    static init(sequelize) {
        super.init({
            //! Campos que representa a tabela
            nome: DataTypes.STRING,
            coordenadas: DataTypes.STRING,
        }, {
            //! Conexao com o db
            sequelize
        })
    }

    static associate(models){
        //! um Adresses pertence a um User
        this.hasMany(models.modelTrilha, {foreignKey: 'trilha_id', as: 'trilha'})
    }
}

module.exports = modelTrilha