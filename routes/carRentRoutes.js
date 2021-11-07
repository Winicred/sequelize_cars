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
 *                      description: The auto-generated ID of the rent.
 *                  carId:
 *                      type: integer
 *                      description: The carsId of ent.
 *                  driverId:
 *                      type: integer
 *                      description: The carsId of rent.
 *                  start_date:
 *                      type: string
 *                      description: The rent start time.
 *                  duration:
 *                      type: string
 *                      description: The rent duration time (hours).
 *              example:
 *                  id: 1
 *                  carId: 1
 *                  driverId: 1
 *                  start_date: 2021-11-08T00:00:00Z
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
     *                                      description: The auto-generated ID of the rent.
     *                                      example: 1
     *                                  carId:
     *                                      type: integer
     *                                      description: The carsId of rent.
     *                                      example: 1
     *                                  driverId:
     *                                      type: integer
     *                                      description: The driverId of rent.
     *                                      example: 1
     *                                  start_date:
     *                                      type: string
     *                                      description: The rent start time.
     *                                      example: 2021-11-08T00:00:00Z
     *                                  duration:
     *                                      type: integer
     *                                      description: The rent duration time (hours).
     *                                      example: 8
     */

    router.get("/", carRent.findAll)

    /**
     * @swagger
     * /api/carRent/{id}:
     *      get:
     *          tags:
     *          - car rent
     *          summary: Retrieve the rent by ID.
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the rent to get
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
     *                                      description: The auto-generated ID of the rent.
     *                                      example: 1
     *                                  carId:
     *                                      type: integer
     *                                      description: The carsId of rent.
     *                                      example: 1
     *                                  driverId:
     *                                      type: integer
     *                                      description: The driverId of rent.
     *                                      example: 1
     *                                  start_date:
     *                                      type: string
     *                                      description: The rent start time.
     *                                      example: 2021-11-08T00:00:00Z
     *                                  duration:
     *                                      type: integer
     *                                      description: The rent duration time (hours).
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
     *                                  description: The carsId of rent.
     *                              driverId:
     *                                  type: integer
     *                                  description: The driverId of rent.
     *                              start_date:
     *                                  type: string
     *                                  description: The rent start time.
     *                                  example: 00:00:00
     *                              duration:
     *                                  type: integer
     *                                  description: The rent duration time (hours).
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
     *                                      description: The auto-generated ID of the rent.
     *                                      example: 1
     *                                  carId:
     *                                      type: integer
     *                                      description: The carsId of rent.
     *                                      example: 1
     *                                  driverId:
     *                                      type: integer
     *                                      description: The driverId of rent.
     *                                      example: 1
     *                                  start_date:
     *                                      type: string
     *                                      description: The rent start time.
     *                                      example: 2021-11-08T00:00:00Z
     *                                  duration:
     *                                      type: integer
     *                                      description: The rent duration time (hours).
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
     *              description: Numeric ID of the rent to update
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
     *                                  description: The carsId of rent.
     *                              driverId:
     *                                  type: integer
     *                                  description: The driverId of rent.
     *                              start_date:
     *                                  type: string
     *                                  description: The rent start time.
     *                                  example: yyyy-mm-dd 00:00:00
     *                              duration:
     *                                  type: integer
     *                                  description: The rent duration time (hours).
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
     *                                      description: The auto-generated ID of the rent.
     *                                      example: 1
     *                                  carId:
     *                                      type: integer
     *                                      description: The carsId of rent.
     *                                      example: 1
     *                                  driverId:
     *                                      type: integer
     *                                      description: The driverId of rent.
     *                                      example: 1
     *                                  start_date:
     *                                      type: string
     *                                      description: The rent start time.
     *                                      example: 2021-11-08T00:00:00Z
     *                                  duration:
     *                                      type: integer
     *                                      description: The rent duration time (hours).
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
     *              description: Numeric ID of the rent (Before deleting a rent, make sure that the records in the models of cars and drivers are deleted)
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
     *                                      description: The auto-generated ID of the rent.
     *                                      example: 1
     *                                  carId:
     *                                      type: integer
     *                                      description: The carsId of rent.
     *                                      example: 1
     *                                  driverId:
     *                                      type: integer
     *                                      description: The driverId of rent.
     *                                      example: 1
     *                                  start_date:
     *                                      type: string
     *                                      description: The rent start time.
     *                                      example: 2021-11-08T00:00:00Z
     *                                  duration:
     *                                      type: integer
     *                                      description: The rent duration time (hours).
     *                                      example: 8
     *              400:
     *                  description: Invalid status supplier
     *              404:
     *                  description: Not found
     */

    router.delete("/:id", carRent.delete)

    /**
     * @swagger
     * /api/carRent/byCar/{carId}:
     *      get:
     *          tags:
     *          - car rent
     *          summary: Retrieve the rent by car ID.
     *          parameters:
     *            - in: path
     *              name: carId
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric car ID of the rent to get
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
     *                                      description: The auto-generated ID of the rent.
     *                                      example: 1
     *                                  carId:
     *                                      type: integer
     *                                      description: The carsId of rent.
     *                                      example: 1
     *                                  driverId:
     *                                      type: integer
     *                                      description: The driverId of rent.
     *                                      example: 1
     *                                  start_date:
     *                                      type: string
     *                                      description: The rent start time.
     *                                      example: 2021-11-08T00:00:00Z
     *                                  duration:
     *                                      type: integer
     *                                      description: The rent duration time (hours).
     *                                      example: 8
     *              404:
     *                  description: Not found
     */

    router.get("/byCar/:carId", carRent.findAllByCarId)


    /**
     * @swagger
     * /api/carRent/byDriver/{driverId}:
     *      get:
     *          tags:
     *          - car rent
     *          summary: Retrieve the rent by driver ID.
     *          parameters:
     *            - in: path
     *              name: driverId
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric driver ID of the rent to get
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
     *                                      description: The auto-generated ID of the rent.
     *                                      example: 1
     *                                  carId:
     *                                      type: integer
     *                                      description: The carsId of rent.
     *                                      example: 1
     *                                  driverId:
     *                                      type: integer
     *                                      description: The driverId of rent.
     *                                      example: 1
     *                                  start_date:
     *                                      type: string
     *                                      description: The rent start time.
     *                                      example: 2021-11-08T00:00:00Z
     *                                  duration:
     *                                      type: integer
     *                                      description: The rent duration time (hours).
     *                                      example: 8
     *              404:
     *                  description: Not found
     */

    router.get("/byDriver/:driverId", carRent.findAllByDriverId)

    app.use("/api/carRent", router)
}