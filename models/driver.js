const db = require('../config/database')
const {DataTypes} = require("sequelize");
const sequelize = require("sequelize");

const Car = db.define('cars', {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    passNumber: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    licenseId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sex: {
        type: DataTypes.ENUM('male', 'female', '', ''),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'driver',
    timestamps: false,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                {name: "id"},
            ]
        },
    ]
})

module.exports = Car
