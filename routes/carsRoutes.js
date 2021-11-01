/**
 * @swagger
 * components:
 *      schemas:
 *          Cars:
 *              type: object
 *              required:
 *                  - name
 *                  - model
 *                  - number
 *                  - vin
 *                  - petrol
 *                  - year
 *                  - color
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated ID of the car.
 *                  name:
 *                      type: string
 *                      description: The name of car.
 *                  model:
 *                      type: string
 *                      description: The model of car.
 *                  number:
 *                      type: string
 *                      description: The government number of car.
 *                  vin:
 *                      type: string
 *                      description: The VIN number of car.
 *                  petrol:
 *                      type: string
 *                      enum: [diesel, gas, electro, gauze]
 *                      description: The petrol type of car.
 *                  year:
 *                      type: integer
 *                      description: The year of car.
 *                  color:
 *                      type: string
 *                      description: The color of car.
 *              example:
 *                  id: 1
 *                  name: Mazda
 *                  model: 6
 *                  number: 111AAA
 *                  vin: 12345678912345678
 *                  petrol: diesel
 *                  year: 2021
 *                  color: black
 */

module.exports = app => {
    const cars = require("../controllers/carsController")
    const router = require("express").Router()

    /**
     * @swagger
     * /api/cars:
     *      get:
     *          tags:
     *          - cars
     *          summary: Retrieve a list of cars.
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              required:
     *                                - name
     *                                - model
     *                                - number
     *                                - vin
     *                                - petrol
     *                                - year
     *                                - color
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the car.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The name of car.
     *                                      example: Mazda
     *                                  model:
     *                                      type: string
     *                                      description: The model of car.
     *                                      example: 6
     *                                  number:
     *                                      type: string
     *                                      description: The government number of car.
     *                                      example: 000AAA
     *                                  vin:
     *                                      type: string
     *                                      description: The VIN number of car.
     *                                      example: 12345678912345678
     *                                  petrol:
     *                                      type: string
     *                                      enum: [diesel, gas, electro, gauze]
     *                                      description: The petrol type of car.
     *                                      example: diesel
     *                                  year:
     *                                      type: integer
     *                                      description: The year of car.
     *                                      example: 2021
     *                                  color:
     *                                      type: string
     *                                      description: The color of car.
     *                                      example: black
     */

    router.get("/", cars.findAll)


    /**
     * @swagger
     * /api/cars/{id}:
     *      get:
     *          tags:
     *          - cars
     *          summary: Retrieve the car by ID.
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the car to get
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              required:
     *                                - name
     *                                - model
     *                                - number
     *                                - vin
     *                                - petrol
     *                                - year
     *                                - color
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the car.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The name of car.
     *                                      example: Mazda
     *                                  model:
     *                                      type: string
     *                                      description: The model of car.
     *                                      example: 6
     *                                  number:
     *                                      type: string
     *                                      description: The government number of car.
     *                                      example: 000AAA
     *                                  vin:
     *                                      type: string
     *                                      description: The VIN number of car.
     *                                      example: 12345678912345678
     *                                  petrol:
     *                                      type: string
     *                                      enum: [diesel, gas, electro, gauze]
     *                                      description: The petrol type of car.
     *                                      example: diesel
     *                                  year:
     *                                      type: integer
     *                                      description: The year of car.
     *                                      example: 2021
     *                                  color:
     *                                      type: string
     *                                      description: The color of car.
     *                                      example: black
     *              404:
     *                  description: Not found
     */

    router.get("/:id", cars.findOneById)

    /**
     * @swagger
     * /api/cars:
     *      post:
     *          tags:
     *          - cars
     *          summary: Add a new car to the database.
     *          parameters:
     *            - in: query
     *              name: petrol
     *              description: The petrol type of car.
     *              schema:
     *                  type: string
     *                  enum:
     *                    - diesel
     *                    - gas
     *                    - electro
     *                    - gauze
     *                  required: true
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          required:
     *                            - name
     *                            - model
     *                            - number
     *                            - vin
     *                            - petrol
     *                            - year
     *                            - color
     *                          properties:
     *                              name:
     *                                  type: string
     *                                  description: The name of car.
     *                              model:
     *                                  type: string
     *                                  description: The model of car.
     *                              number:
     *                                  type: string
     *                                  description: The government number of car.
     *                              vin:
     *                                  type: string
     *                                  description: The VIN number of car.
     *                              year:
     *                                  type: integer
     *                                  description: The year of car.
     *                              color:
     *                                  type: string
     *                                  description: The color of car.
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              required:
     *                                - name
     *                                - model
     *                                - number
     *                                - vin
     *                                - petrol
     *                                - year
     *                                - color
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the car.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The name of car.
     *                                      example: Mazda
     *                                  model:
     *                                      type: string
     *                                      description: The model of car.
     *                                      example: 6
     *                                  number:
     *                                      type: string
     *                                      description: The government number of car.
     *                                      example: 000AAA
     *                                  vin:
     *                                      type: string
     *                                      description: The VIN number of car.
     *                                      example: 12345678912345678
     *                                  petrol:
     *                                      type: string
     *                                      enum: [diesel, gas, electro, gauze]
     *                                      description: The petrol type of car.
     *                                      example: diesel
     *                                  year:
     *                                      type: integer
     *                                      description: The year of car.
     *                                      example: 2021
     *                                  color:
     *                                      type: string
     *                                      description: The color of car.
     *                                      example: black
     *              400:
     *                  description: Invalid input
     */

    router.post("/", cars.create)

    /**
     * @swagger
     * /api/cars/{id}:
     *      put:
     *          tags:
     *          - cars
     *          consumes:
     *            - application/json
     *          summary: Update the car data by ID.
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the car to update
     *            - in: query
     *              name: petrol
     *              required: true
     *              description: The petrol type of car.
     *              schema:
     *                  type: string
     *                  enum:
     *                    - diesel
     *                    - gas
     *                    - electro
     *                    - gauze
     *                  required: true
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          required:
     *                            - name
     *                            - model
     *                            - number
     *                            - vin
     *                            - petrol
     *                            - year
     *                            - color
     *                          properties:
     *                              name:
     *                                  type: string
     *                                  description: The name of car.
     *                                  example: Mazda
     *                              model:
     *                                  type: string
     *                                  description: The model of car.
     *                                  example: 6
     *                              number:
     *                                  type: string
     *                                  description: The government number of car.
     *                                  example: 000AAA
     *                              vin:
     *                                  type: string
     *                                  description: The VIN of car.
     *                              year:
     *                                  type: integer
     *                                  description: The year of car.
     *                                  example: 2021
     *                              color:
     *                                  type: string
     *                                  description: The year of car.
     *                                  example: black
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              required:
     *                                - name
     *                                - model
     *                                - number
     *                                - vin
     *                                - petrol
     *                                - year
     *                                - color
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the car.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The name of car.
     *                                      example: Mazda
     *                                  model:
     *                                      type: string
     *                                      description: The model of car.
     *                                      example: 6
     *                                  number:
     *                                      type: string
     *                                      description: The government number of car.
     *                                      example: 000AAA
     *                                  vin:
     *                                      type: string
     *                                      description: The VIN number of car.
     *                                      example: 12345678912345678
     *                                  petrol:
     *                                      type: string
     *                                      enum: [diesel, gas, electro, gauze]
     *                                      description: The petrol type of car.
     *                                      example: diesel
     *                                  year:
     *                                      type: integer
     *                                      description: The year of car.
     *                                      example: 2021
     *                                  color:
     *                                      type: string
     *                                      description: The color of car.
     *                                      example: black
     *              400:
     *                  description: Invalid status supplier
     *              404:
     *                  description: Not found
     */

    router.put("/:id", cars.update)

    /**
     * @swagger
     * /api/cars/{id}:
     *      delete:
     *          tags:
     *          - cars
     *          summary: Delete the car by ID.
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the user to get
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              required:
     *                                - name
     *                                - model
     *                                - number
     *                                - vin
     *                                - petrol
     *                                - year
     *                                - color
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the car.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The name of car.
     *                                      example: Mazda
     *                                  model:
     *                                      type: string
     *                                      description: The model of car.
     *                                      example: 6
     *                                  number:
     *                                      type: string
     *                                      description: The government number of car.
     *                                      example: 000AAA
     *                                  vin:
     *                                      type: string
     *                                      description: The VIN number of car.
     *                                      example: 12345678912345678
     *                                  petrol:
     *                                      type: string
     *                                      enum: [diesel, gas, electro, gauze]
     *                                      description: The petrol type of car.
     *                                      example: diesel
     *                                  year:
     *                                      type: integer
     *                                      description: The year of car.
     *                                      example: 2021
     *                                  color:
     *                                      type: string
     *                                      description: The color of car.
     *                                      example: black
     *              400:
     *                  description: Invalid status supplier
     *              404:
     *                  description: Not found
     */

    router.delete("/:id", cars.delete)

    /**
     * @swagger
     * /api/cars/findAllByName/{name}:
     *      get:
     *          tags:
     *          - cars
     *          summary: Retrieve car(s) by name.
     *          parameters:
     *            - in: path
     *              name: name
     *              schema:
     *                  type: string
     *              required: true
     *              description: Car(s) to get by name
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              required:
     *                                - name
     *                                - model
     *                                - number
     *                                - vin
     *                                - petrol
     *                                - year
     *                                - color
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the car.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The name of car.
     *                                      example: Mazda
     *                                  model:
     *                                      type: string
     *                                      description: The model of car.
     *                                      example: 6
     *                                  number:
     *                                      type: string
     *                                      description: The government number of car.
     *                                      example: 000AAA
     *                                  vin:
     *                                      type: string
     *                                      description: The VIN number of car.
     *                                      example: 12345678912345678
     *                                  petrol:
     *                                      type: string
     *                                      enum: [diesel, gas, electro, gauze]
     *                                      description: The petrol type of car.
     *                                      example: diesel
     *                                  year:
     *                                      type: integer
     *                                      description: The year of car.
     *                                      example: 2021
     *                                  color:
     *                                      type: string
     *                                      description: The color of car.
     *                                      example: black
     *              400:
     *                  description: Invalid status value
     *              404:
     *                  description: Not found
     */

    router.get("/findAllByName/:name", cars.findAllByName)

    app.use("/api/cars", router)
}