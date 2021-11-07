/**
 * @swagger
 * components:
 *      schemas:
 *          CarRent:
 *              type: object
 *              required:
 *                  - carId
 *                  - driverId
 *                  - start_date
 *                  - duration
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated ID of the car.
 *                  carId:
 *                      type: integer
 *                      description: The carsId of car rent.
 *                  driverId:
 *                      type: integer
 *                      description: The carsId of car rent.
 *                  start_date:
 *                      type: string
 *                      description: The car rent start date.
 *                  duration:
 *                      type: string
 *                      description: The car rent duration time (hours).
 *              example:
 *                  id: 1
 *                  carId: 1
 *                  driverId: 1
 *                  start_date: 04-11-2021
 *                  duration: 8
 */

module.exports = app => {
    const carRent = require("../controllers/carRentController")
    const router = require("express").Router()

    /**
     * @swagger
     * /api/carRent:
     *      get:
     *          tags:
     *          - car rent
     *          summary: Retrieve a list of rents.
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              required:
     *                                - carId
     *                                - driverId
     *                                - start_date
     *                                - duration
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the car.
     *                                      example: 1
     *                                  carId:
     *                                      type: integer
     *                                      description: The carsId of car rent.
     *                                      example: 1
     *                                  driverId:
     *                                      type: integer
     *                                      description: The driverId of car rent.
     *                                      example: 1
     *                                  start_date:
     *                                      type: string
     *                                      description: The car rent start date.
     *                                      example: 04-11-2021
     *                                  duration:
     *                                      type: string
     *                                      description: The car rent duration time (hours).
     *                                      example: 8
     */

    router.get("/", carRent.findAll)


    /**
     * @swagger
     * /api/carRent/{id}:
     *      get:
     *          tags:
     *          - car rent
     *          summary: Retrieve the car rent by ID.
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the car rent to get
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              required:
     *                                - carId
     *                                - driverId
     *                                - start_date
     *                                - duration
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the car.
     *                                      example: 1
     *                                  carId:
     *                                      type: integer
     *                                      description: The carsId of car rent.
     *                                      example: 1
     *                                  driverId:
     *                                      type: integer
     *                                      description: The driverId of car rent.
     *                                      example: 1
     *                                  start_date:
     *                                      type: string
     *                                      description: The car rent start date.
     *                                      example: 04-11-2021
     *                                  duration:
     *                                      type: string
     *                                      description: The car rent duration time (hours).
     *                                      example: 8
     *              404:
     *                  description: Not found
     */

    router.get("/:id", carRent.findOneById)

    /**
     * @swagger
     * /api/carRent:
     *      post:
     *          tags:
     *          - car rent
     *          summary: Add a new rent to the database.
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          required:
     *                            - carId
     *                            - driverId
     *                            - start_date
     *                            - duration
     *                          properties:
     *                              carId:
     *                                  type: integer
     *                                  description: The carsId of car rent.
     *                              driverId:
     *                                  type: integer
     *                                  description: The driverId of car rent.
     *                              start_date:
     *                                  type: string
     *                                  description: The car rent start date.
     *                              duration:
     *                                  type: string
     *                                  description: The car rent duration time (hours).
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              required:
     *                                - carId
     *                                - driverId
     *                                - start_date
     *                                - duration
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the car.
     *                                      example: 1
     *                                  carId:
     *                                      type: integer
     *                                      description: The carsId of car rent.
     *                                      example: 1
     *                                  driverId:
     *                                      type: integer
     *                                      description: The driverId of car rent.
     *                                      example: 1
     *                                  start_date:
     *                                      type: string
     *                                      description: The car rent start date.
     *                                      example: 04-11-2021
     *                                  duration:
     *                                      type: string
     *                                      description: The car rent duration time (hours).
     *                                      example: 8
     *              400:
     *                  description: Invalid input
     */

    router.post("/", carRent.create)

    /**
     * @swagger
     * /api/carRent/{id}:
     *      put:
     *          tags:
     *          - car rent
     *          consumes:
     *            - application/json
     *          summary: Update the rent data by ID.
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the car rent to update
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          required:
     *                            - carId
     *                            - driverId
     *                            - start_date
     *                            - duration
     *                          properties:
     *                              carId:
     *                                  type: integer
     *                                  description: The carsId of car rent.
     *                              driverId:
     *                                  type: integer
     *                                  description: The driverId of car rent.
     *                              start_date:
     *                                  type: string
     *                                  description: The car rent start date.
     *                              duration:
     *                                  type: string
     *                                  description: The car rent duration time (hours).
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              required:
     *                                - carId
     *                                - driverId
     *                                - start_date
     *                                - duration
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the car.
     *                                      example: 1
     *                                  carId:
     *                                      type: integer
     *                                      description: The carsId of car rent.
     *                                      example: 1
     *                                  driverId:
     *                                      type: integer
     *                                      description: The driverId of car rent.
     *                                      example: 1
     *                                  start_date:
     *                                      type: string
     *                                      description: The car rent start date.
     *                                      example: 04-11-2021
     *                                  duration:
     *                                      type: string
     *                                      description: The car rent duration time (hours).
     *                                      example: 8
     *              400:
     *                  description: Invalid status supplier
     *              404:
     *                  description: Not found
     */

    router.put("/:id", carRent.update)

    /**
     * @swagger
     * /api/carRent/{id}:
     *      delete:
     *          tags:
     *          - car rent
     *          summary: Delete the rent by ID.
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the cer rent to get
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              required:
     *                                - carId
     *                                - driverId
     *                                - start_date
     *                                - duration
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the car.
     *                                      example: 1
     *                                  carId:
     *                                      type: integer
     *                                      description: The carsId of car rent.
     *                                      example: 1
     *                                  driverId:
     *                                      type: integer
     *                                      description: The driverId of car rent.
     *                                      example: 1
     *                                  start_date:
     *                                      type: string
     *                                      description: The car rent start date.
     *                                      example: 04-11-2021
     *                                  duration:
     *                                      type: string
     *                                      description: The car rent duration time (hours).
     *                                      example: 8
     *              400:
     *                  description: Invalid status supplier
     *              404:
     *                  description: Not found
     */

    router.delete("/:id", carRent.delete)

    app.use("/api/carRent", router)
}