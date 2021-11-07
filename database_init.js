const db = require('./config/database')

const Cars = require('./models/cars')
const CarRent = require('./models/carrent')
const Driver = require('./models/driver')

createTables();

async function createTables() {
    Cars.sync();
    CarRent.sync();
    Driver.sync();

    CarRent.belongsTo(Cars, { as: "car", foreignKey: "carId"});
    Cars.hasMany(CarRent, { as: "carRents", foreignKey: "carId"});
    CarRent.belongsTo(Driver, { as: "driver", foreignKey: "driverId"});
    Driver.hasMany(CarRent, { as: "carRents", foreignKey: "driverId"});
}