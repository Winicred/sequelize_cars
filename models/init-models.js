var DataTypes = require("sequelize").DataTypes;
var _carrent = require("./carrent");
var _cars = require("./cars");
var _driver = require("./driver");

function initModels(sequelize) {
  var carrent = _carrent(sequelize, DataTypes);
  var cars = _cars(sequelize, DataTypes);
  var driver = _driver(sequelize, DataTypes);

  carrent.belongsTo(cars, { as: "car", foreignKey: "carId"});
  cars.hasMany(carrent, { as: "carrents", foreignKey: "carId"});

  return {
    carrent,
    cars,
    driver,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
