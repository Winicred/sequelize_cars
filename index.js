const express = require('express');
const cors = require("cors")

const app = express();

const swaggerJsdoc = require("swagger-jsdoc");
const swaggertUi = require("swagger-ui-express");

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.render('index.hbs', {
        message: "Welcome to MAZDA Car Rent."
    })
})

require("./routes/carsRoutes")(app)
require("./routes/driverRoutes")(app)

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "MAZDA Car Rent Example Express API with Swagger",
            version: "0.1.0",
            description: "This is a simple `CRUD API` application made with Express and documented with Swagger \n "
        },
        tags: [
            {
                name: "cars",
                description: "Everything about cars"
            }, {
                name: "drivers",
                description: "Everything about drivers"
            },
        ],
        servers: [
            {
                url: "http://localhost:3000/",
                description: "Development server"
            }
        ],
    },
    apis: ["./routes/*"]
}

const specs = swaggerJsdoc(options)
app.use("/api-docs", swaggertUi.serve, swaggertUi.setup(specs))

const PORT = process.nextTick.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})