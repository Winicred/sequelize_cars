const sequelize = require('sequelize');
const db = require('../config/database');
const {DataTypes} = require("sequelize");

const CarRent = db.define('carrent', {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    carId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    driverId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    start_time: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'carrent',
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
});

module.exports = CarRent