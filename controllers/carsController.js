const {Op, DataTypes} = require("sequelize");
const sequelize = require("sequelize");

const Cars = require('../models/cars')

exports.findAll = (req, res) => {
    Cars.findAll().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving cars."
        })
    })
}

exports.create = (req, res) => {
    if (!req.body.name && !req.body.model && !req.body.number && !req.body.vin && !req.query.petrol && !req.body.year && !req.body.color) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }

    const car = {
        name: req.body.name,
        model: req.body.model,
        number: req.body.number.toUpperCase(),
        vin: req.body.vin,
        petrol: req.query.petrol,
        year: req.body.year,
        color: req.body.color.toLowerCase(),
    }

    Cars.create(car).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the new car."
        })
    })
}

exports.findOneById = (req, res) => {
    Cars.findOne({where: {id: req.params.id}}).then(data => {
        if (data !== null) {
            res.send(data)
        } else {
            res.status(204).send()
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving car(s)."
        })
    })
}

exports.update = (req, res) => {
    if (!req.body.name && !req.body.model && !req.body.number && !req.body.vin && !req.query.petrol && !req.body.year && !req.body.color) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }

    const car = {
        name: req.body.name,
        model: req.body.model,
        number: req.body.number.toUpperCase(),
        vin: req.body.vin,
        petrol: req.query.petrol,
        year: req.body.year,
        color: req.body.color.toLowerCase(),
    }

    Cars.update(car, {where: {id: req.params.id}}).then(() => {
        Cars.findOne({where: {id: req.params.id}}).then(data => {
            res.send(data)
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while updating the car."
        })
    })
}

exports.delete = (req, res) => {
    Cars.findOne({where: {id: req.params.id}}).then(data => {
        Cars.destroy({where: {id: req.params.id}})
        if (data !== null) {
            res.send(data)
        } else {
            res.status(404).send()
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while deleting the car."
        })
    })
}

exports.findAllByName = (req, res) => {
    Cars.findAll({where: {name: {[Op.like]: `${req.params.name}%`}}}).then(data => {
        if (data.length !== 0) {
            res.send(data)
        } else {
            res.status(204).send()
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving car(s)."
        })
    })
}