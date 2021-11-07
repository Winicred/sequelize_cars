var DataTypes = require("sequelize").DataTypes;
var _carrent = require("./carrent");
var _cars = require("./cars");
var _driver = require("./driver");

function initModels(sequelize) {
  var carrent = _carrent(sequelize, DataTypes);
  var cars = _cars(sequelize, DataTypes);
  var driver = _driver(sequelize, DataTypes);

  return {
    carrent,
    cars,
    driver,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
