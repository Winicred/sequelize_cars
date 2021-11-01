module.exports = {
    host: "localhost",
    username: "root",
    password: "",
    dbname: "car_rent",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}