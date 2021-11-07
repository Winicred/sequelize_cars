const {Op, DataTypes} = require("sequelize");
const sequelize = require("sequelize");

const CarRent = require('../models/carrent')

exports.findAll = (req, res) => {
    CarRent.findAll().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving rents."
        })
    })
}

exports.create = (req, res) => {
    if (!req.body.carId && !req.body.driverId && !req.body.start_date && !req.body.duration) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }

    const rent = {
        carId: req.body.carId,
        driverId: req.body.driverId,
        start_date: req.body.start_date,
        duration: req.body.duration
    }

    CarRent.create(rent).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the new rent."
        })
    })
}

exports.findOneById = (req, res) => {
    CarRent.findOne({where: {id: req.params.id}}).then(data => {
        if (data !== null) {
            res.send(data)
        } else {
            res.status(204).send()
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving rent(s)."
        })
    })
}

exports.update = (req, res) => {
    if (!req.body.carId && !req.body.driverId && !req.body.start_date && !req.body.duration) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }

    const rent = {
        carId: req.body.carId,
        driverId: req.body.driverId,
        start_date: req.body.start_date,
        duration: req.body.duration
    }

    CarRent.update(rent, {where: {id: req.params.id}}).then(() => {
        CarRent.findOne({where: {id: req.params.id}}).then(data => {
            res.send(data)
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while updating the rent."
        })
    })
}

exports.delete = (req, res) => {
    CarRent.findOne({where: {id: req.params.id}}).then(data => {
        CarRent.destroy({where: {id: req.params.id}})
        if (data !== null) {
            res.send(data)
        } else {
            res.status(404).send()
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while deleting the rent."
        })
    })
}