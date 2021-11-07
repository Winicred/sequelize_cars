const Drivers = require("../models/driver")
const {Op} = require("sequelize");

exports.findAll = (req, res) => {
    Drivers.findAll().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving drivers."
        })
    })
}

exports.create = (req, res) => {
    if (!req.body.firstname && !req.body.lastname && !req.body.birthday && !req.body.passNumber && !req.body.licenseId && !req.query.sex) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }

    const driver = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        birthday: req.body.birthday,
        passNumber: req.body.passNumber.toUpperCase(),
        licenseId: req.body.licenseId.toUpperCase(),
        sex: req.query.sex,
    }

    Drivers.create(driver).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the new driver."
        })
    })
}

exports.findOneById = (req, res) => {
    Drivers.findOne({where: {id: req.params.id}}).then(data => {
        if (data !== null) {
            res.send(data)
        } else {
            res.status(204).send()
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving driver(s)."
        })
    })
}

exports.update = (req, res) => {
    if (!req.body.firstname && !req.body.lastname && !req.body.birthday && !req.body.passNumber && !req.body.licenseId && !req.query.sex) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }

    const driver = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        birthday: req.body.birthday,
        passNumber: req.body.passNumber.toUpperCase(),
        licenseId: req.body.licenseId.toUpperCase(),
        sex: req.query.sex,
    }

    Drivers.update(driver, {where: {id: req.params.id}}).then(() => {
        Drivers.findOne({where: {id: req.params.id}}).then(data => {
            res.send(data)
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while updating the driver."
        })
    })
}

exports.delete = (req, res) => {
    Drivers.findOne({where: {id: req.params.id}}).then(data => {
        Drivers.destroy({where: {id: req.params.id}})
        if (data !== null) {
            res.send(data)
        } else {
            res.status(404).send()
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while deleting the driver."
        })
    })
}

exports.findAllByFirstname = (req, res) => {
    Drivers.findAll({where: {firstname: {[Op.like]: `${req.params.firstname}%`}}}).then(data => {
        if (data.length !== 0) {
            res.send(data)
        } else {
            res.status(204).send()
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving driver(s)."
        })
    })
}