const sequelize = require('sequelize');
const {DataTypes} = require("sequelize");
const db = require('../config/database')

const Cars = db.define('cars', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  model: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  number: {
    type: DataTypes.STRING(6),
    allowNull: false
  },
  vin: {
    type: DataTypes.STRING(17),
    allowNull: false
  },
  petrol: {
    type: DataTypes.ENUM('diesel', 'gas', 'electro', 'gauze'),
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'cars',
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

module.exports = Cars
