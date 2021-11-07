const db = require('../config/database')
const {DataTypes} = require("sequelize");
const sequelize = require("sequelize");

const CarRent = db.define('carrent', {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    carId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'cars',
            key: 'id'
        }
    },
    driverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'driver',
            key: 'id'
        }
    },
    start_date: {
        type: DataTypes.DATE,
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
        {
            name: "carId",
            using: "BTREE",
            fields: [
                {name: "carId"},
            ]
        },
        {
            name: "driverId",
            using: "BTREE",
            fields: [
                {name: "driverId"},
            ]
        },
    ]
});

module.exports = CarRent
