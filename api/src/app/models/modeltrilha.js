const {Model, DataTypes} = require('sequelize');

class Trilha extends Model {
    static init(sequelize){
        super.init(
            {
                nome: DataTypes.STRING,
                coordenadas: DataTypes.STRING
            }, {
                sequelize
            }
        )
    }
    static associate(models) {
        
        this.hasMany(models.Trilha, { foreignKey: 'id', as: 'trilhas'})
    }
}

module.exports = Trilha;