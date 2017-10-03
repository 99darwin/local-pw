module.exports = function(sequelize, DataTypes) {
    var Pw = sequelize.define('Pw', {
        service: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        additional: {
            type: DataTypes.STRING,
            allowNull:  true
        }
    });
    return Pw;
}