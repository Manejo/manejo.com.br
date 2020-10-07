const {Model, DataTypes} = require('sequelize');

class Caracteristicas extends Model {
    static init(sequelize){
        super.init(
            {
                capacidade: DataTypes.INTEGER,
                dificuldade: DataTypes.STRING,
                regularidade: DataTypes.INTEGER,
                comprimento: DataTypes.FLOAT,
                largura: DataTypes.FLOAT,
                status: DataTypes.INTEGER
            }, {
                sequelize
            }
        )
    }
    static associate(models) {
        this.belongsTo(models.Trilha, { foreignKey: 'trilha_id', as: 'trilha'})
    }
}

module.exports = Caracteristicas;