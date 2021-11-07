/**
 * @swagger
 * components:
 *      schemas:
 *          Driver:
 *              type: object
 *              required:
 *                  - firstname
 *                  - lastname
 *                  - birthday
 *                  - passNumber
 *                  - licenseId
 *                  - sex
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated ID of the driver.
 *                  firstname:
 *                      type: string
 *                      description: The firstname of driver.
 *                  lastname:
 *                      type: string
 *                      description: The lastname of driver.
 *                  birthday:
 *                      type: string
 *                      description: The birthday of driver.
 *                  passNumber:
 *                      type: string
 *                      description: The pass number of driver.
 *                  licenseId:
 *                      type: string
 *                      description: The license ID of driver.
 *                  sex:
 *                      type: string
 *                      enum: [male, female]
 *                      description: The sex of driver.
 *              example:
 *                  id: 1
 *                  firstname: Danil
 *                  lastname: Barsukov
 *                  birthday: 2021-10-10
 *                  passNumber: 123123aa
 *                  licenseId: 123123aaa
 *                  sex: male
 */

module.exports = app => {
    const drivers = require("../controllers/driversController")
    const router = require("express").Router()

    /**
     * @swagger
     * /api/drivers:
     *      get:
     *          tags:
     *          - drivers
     *          summary: Retrieve a list of drivers.
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              required:
     *                                - firstname
     *                                - lastname
     *                                - birthday
     *                                - passNumber
     *                                - licenseId
     *                                - sex
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the driver.
     *                                      example: 1
     *                                  firstname:
     *                                      type: string
     *                                      description: The firstname of driver.
     *                                      example: Kirill
     *                                  lastname:
     *                                      type: string
     *                                      description: The lastname of driver.
     *                                      example: Goritski
     *                                  birthday:
     *                                      type: string
     *                                      description: The birthday of driver.
     *                                      example: 2020-10-10
     *                                  passNumber:
     *                                      type: string
     *                                      description: The pass number of driver.
     *                                      example: 123123AA
     *                                  licenseId:
     *                                      type: string
     *                                      description: The license ID of driver.
     *                                      example: 123123AA
     *                                  sex:
     *                                      type: string
     *                                      enum: [male, female]
     *                                      description: The sex of driver.
     *                                      example: male
     */

    router.get("/", drivers.findAll)


    /**
     * @swagger
     * /api/drivers/{id}:
     *      get:
     *          tags:
     *          - drivers
     *          summary: Retrieve the driver by ID.
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the driver to get
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              required:
     *                                - firstname
     *                                - lastname
     *                                - birthday
     *                                - passNumber
     *                                - licenseId
     *                                - sex
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the driver.
     *                                      example: 1
     *                                  firstname:
     *                                      type: string
     *                                      description: The firstname of driver.
     *                                      example: Kirill
     *                                  lastname:
     *                                      type: string
     *                                      description: The lastname of driver.
     *                                      example: Goritski
     *                                  birthday:
     *                                      type: string
     *                                      description: The birthday of driver.
     *                                      example: 2020-10-10
     *                                  passNumber:
     *                                      type: string
     *                                      description: The pass number of driver.
     *                                      example: 123123AA
     *                                  licenseId:
     *                                      type: string
     *                                      description: The license ID of driver.
     *                                      example: 123123AA
     *                                  sex:
     *                                      type: string
     *                                      enum: [male, female]
     *                                      description: The sex of driver.
     *                                      example: male
     *              404:
     *                  description: Not found
     */

    router.get("/:id", drivers.findOneById)

    /**
     * @swagger
     * /api/drivers:
     *      post:
     *          tags:
     *          - drivers
     *          summary: Add a new driver to the database.
     *          parameters:
     *            - in: query
     *              name: sex
     *              description: The petrol type of driver.
     *              required:
     *                - sex
     *              schema:
     *                  type: string
     *                  enum:
     *                    - male
     *                    - female
     *                  required: true
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          required:
     *                            - firstname
     *                            - lastname
     *                            - birthday
     *                            - passNumber
     *                            - licenseId
     *                            - sex
     *                          properties:
     *                              firstname:
     *                                  type: string
     *                                  description: The firstname of driver.
     *                              lastname:
     *                                  type: string
     *                                  description: The lastname of driver.
     *                              birthday:
     *                                  type: string
     *                                  description: The birthday of driver.
     *                              passNumber:
     *                                  type: string
     *                                  description: The pass number of driver.
     *                              licenseId:
     *                                  type: string
     *                                  description: The license ID of driver.
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              required:
     *                                - firstname
     *                                - lastname
     *                                - birthday
     *                                - passNumber
     *                                - licenseId
     *                                - sex
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the driver.
     *                                      example: 1
     *                                  firstname:
     *                                      type: string
     *                                      description: The firstname of driver.
     *                                      example: Kirill
     *                                  lastname:
     *                                      type: string
     *                                      description: The lastname of driver.
     *                                      example: Goritski
     *                                  birthday:
     *                                      type: string
     *                                      description: The birthday of driver.
     *                                      example: 2020-10-10
     *                                  passNumber:
     *                                      type: string
     *                                      description: The pass number of driver.
     *                                      example: 123123AA
     *                                  licenseId:
     *                                      type: string
     *                                      description: The license ID of driver.
     *                                      example: 123123AA
     *                                  sex:
     *                                      type: string
     *                                      enum: [male, female]
     *                                      description: The sex of driver.
     *                                      example: male
     *              400:
     *                  description: Invalid input
     */

    router.post("/", drivers.create)

    /**
     * @swagger
     * /api/drivers/{id}:
     *      put:
     *          tags:
     *          - drivers
     *          consumes:
     *            - application/json
     *          summary: Update the driver data by ID.
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the driver to update
     *            - in: query
     *              name: sex
     *              required: true
     *              description: The sex of driver.
     *              schema:
     *                  type: string
     *                  enum:
     *                    - male
     *                    - female
     *                  required: true
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          required:
     *                            - firstname
     *                            - lastname
     *                            - birthday
     *                            - passNumber
     *                            - licenseId
     *                            - sex
     *                          properties:
     *                              firstname:
     *                                  type: string
     *                                  description: The firstname of driver.
     *                              lastname:
     *                                  type: string
     *                                  description: The lastname of driver.
     *                              birthday:
     *                                  type: string
     *                                  description: The birthday of driver.
     *                              passNumber:
     *                                  type: string
     *                                  description: The pass number of driver.
     *                              licenseId:
     *                                  type: string
     *                                  description: The license ID of driver.
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              required:
     *                                - firstname
     *                                - lastname
     *                                - birthday
     *                                - passNumber
     *                                - licenseId
     *                                - sex
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the driver.
     *                                      example: 1
     *                                  firstname:
     *                                      type: string
     *                                      description: The firstname of driver.
     *                                      example: Kirill
     *                                  lastname:
     *                                      type: string
     *                                      description: The lastname of driver.
     *                                      example: Goritski
     *                                  birthday:
     *                                      type: string
     *                                      description: The birthday of driver.
     *                                      example: 2020-10-10
     *                                  passNumber:
     *                                      type: string
     *                                      description: The pass number of driver.
     *                                      example: 123123AA
     *                                  licenseId:
     *                                      type: string
     *                                      description: The license ID of driver.
     *                                      example: 123123AA
     *                                  sex:
     *                                      type: string
     *                                      enum: [male, female]
     *                                      description: The sex of driver.
     *                                      example: male
     *              400:
     *                  description: Invalid status supplier
     *              404:
     *                  description: Not found
     */

    router.put("/:id", drivers.update)

    /**
     * @swagger
     * /api/drivers/{id}:
     *      delete:
     *          tags:
     *          - drivers
     *          summary: Delete the driver by ID.
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the user
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              required:
     *                                - firstname
     *                                - lastname
     *                                - birthday
     *                                - passNumber
     *                                - licenseId
     *                                - sex
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the driver.
     *                                      example: 1
     *                                  firstname:
     *                                      type: string
     *                                      description: The firstname of driver.
     *                                      example: Kirill
     *                                  lastname:
     *                                      type: string
     *                                      description: The lastname of driver.
     *                                      example: Goritski
     *                                  birthday:
     *                                      type: string
     *                                      description: The birthday of driver.
     *                                      example: 2020-10-10
     *                                  passNumber:
     *                                      type: string
     *                                      description: The pass number of driver.
     *                                      example: 123123AA
     *                                  licenseId:
     *                                      type: string
     *                                      description: The license ID of driver.
     *                                      example: 123123AA
     *                                  sex:
     *                                      type: string
     *                                      enum: [male, female]
     *                                      description: The sex of driver.
     *                                      example: male
     *              400:
     *                  description: Invalid status supplier
     *              404:
     *                  description: Not found
     */

    router.delete("/:id", drivers.delete)

    /**
     * @swagger
     * /api/drivers/findAllByFirstname/{firstname}:
     *      get:
     *          tags:
     *          - drivers
     *          summary: Retrieve driver(s) by firstname.
     *          parameters:
     *            - in: path
     *              name: firstname
     *              schema:
     *                  type: string
     *              required: true
     *              description: Car(s) to get by firstname
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              required:
     *                                - firstname
     *                                - lastname
     *                                - birthday
     *                                - passNumber
     *                                - licenseId
     *                                - sex
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the driver.
     *                                      example: 1
     *                                  firstname:
     *                                      type: string
     *                                      description: The firstname of driver.
     *                                      example: Kirill
     *                                  lastname:
     *                                      type: string
     *                                      description: The lastname of driver.
     *                                      example: Goritski
     *                                  birthday:
     *                                      type: string
     *                                      description: The birthday of driver.
     *                                      example: 2020-10-10
     *                                  passNumber:
     *                                      type: string
     *                                      description: The pass number of driver.
     *                                      example: 123123AA
     *                                  licenseId:
     *                                      type: string
     *                                      description: The license ID of driver.
     *                                      example: 123123AA
     *                                  sex:
     *                                      type: string
     *                                      enum: [male, female]
     *                                      description: The sex of driver.
     *                                      example: male
     *              400:
     *                  description: Invalid status value
     *              404:
     *                  description: Not found
     */

    router.get("/findAllByFirstname/:firstname", drivers.findAllByFirstname)

    app.use("/api/drivers", router)
}