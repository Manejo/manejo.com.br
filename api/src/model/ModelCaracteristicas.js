const { Model, DataTypes } = require('sequelize')

class modelcaracteristicas extends Model {
    static init(sequelize) {
        super.init({
            //! Campos que representa a tabela
            capacidade: DataTypes.INTEGER,
            dificuldade: DataTypes.STRING,
            regularidade: DataTypes.INTEGER,
            comprimento: DataTypes.FLOAT,
            largura: DataTypes.FLOAT,
            status: DataTypes.INTEGER
        }, {
            //! Conexao com o db
            sequelize
        })
    }

    static associate(models){
        //! um Adresses pertence a um User
        this.belongsTo(models.modelTrilha, {foreignKey: 'trilha_id', as: 'trilha'})
    }
}

module.exports = Adresses