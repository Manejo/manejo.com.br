const {Model, DataTypes} = require('sequelize');

class Caracteristicas extends Model {
    static init(sequelize){
        super.init(
            {
                trilha_id: DataTypes.INTEGER,
                capacidade: DataTypes.INTEGER,
                dificuldade: DataTypes.STRING,
                regularidade: DataTypes.STRING,
                comprimento: DataTypes.FLOAT,
                largura: DataTypes.FLOAT,
                status: DataTypes.STRING
            }, {
                sequelize
            }
        )
    }
    static associate(models) {
        this.belongsTo(models.Trilha, { foreignKey: 'id', as: 'trilhas'})
    }
}

module.exports = Caracteristicas;