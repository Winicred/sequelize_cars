const CarRent = require('../models/carrent')

let today = new Date().toISOString().slice(0, 10)

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
        start_date: today + " " + req.body.start_date,
        duration: req.body.duration
    }

    console.log(today + " " + req.body.start_date)

    CarRent.create(rent).then(data => {
        res.send({
            id: data.id,
            carId: data.carId,
            driverId: data.driverId,
            start_date: data.start_date.toISOString().replace('Z', '').replace('T', ' ').replace('.000', ''),
            duration: data.duration
        })
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
            res.status(404).send()
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
            if (data !== null) {
                res.send({
                    id: data.id,
                    carId: data.carId,
                    driverId: data.driverId,
                    start_date: data.start_date.toISOString().replace('Z', '').replace('T', ' ').replace('.000', ''),
                    duration: data.duration
                })
            } else {
                res.status(404).send()
            }
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

exports.findAllByCarId = (req, res) => {
    CarRent.findAll({where: {carId: req.params.carId}}).then(data => {
        console.log(typeof data)
        if (Object.keys(data).length !== 0) {
            res.send(data)
        } else {
            res.status(404).send()
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving rent(s)."
        })
    })
}

exports.findAllByDriverId = (req, res) => {
    CarRent.findAll({where: {driverId: req.params.driverId}}).then(data => {
        if (Object.keys(data).length !== 0) {
            res.send(data)
        } else {
            res.status(404).send()
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving rent(s)."
        })
    })
}