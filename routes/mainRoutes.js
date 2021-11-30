const express = require('express')
const router = express.Router()
const { body } = require('express-validator')

const mainController = require('../controllers/mainControllers.js')

let maxCJ = 500;
let maxBD = 250;
let maxTB = 80;

const validations = [
    body('plus50CJ').isInt({min: 0, max: maxCJ}).withMessage(`Ingrese una cantidad entre 0 y ${maxCJ}`),
    body('plus50BD').isInt({min: 0, max: maxBD}).withMessage(`Ingrese una cantidad entre 0 y ${maxBD}`),
    body('plus50TB').isInt({min: 0, max: maxTB}).withMessage(`Ingrese una cantidad entre 0 y ${maxTB}`),
    body('hygardCJ').isInt({min: 0, max: maxCJ}).withMessage(`Ingrese una cantidad entre 0 y ${maxCJ}`),
    body('hygardBD').isInt({min: 0, max: maxBD}).withMessage(`Ingrese una cantidad entre 0 y ${maxBD}`),
    body('hygardTB').isInt({min: 0, max: maxTB}).withMessage(`Ingrese una cantidad entre 0 y ${maxTB}`),
    body('torqgardBD').isInt({min: 0, max: maxBD}).withMessage(`Ingrese una cantidad entre 0 y ${maxBD}`),
    body('torqgardTB').isInt({min: 0, max: maxTB}).withMessage(`Ingrese una cantidad entre 0 y ${maxTB}`),
    body('GL590CJ').isInt({min: 0, max: maxCJ}).withMessage(`Ingrese una cantidad entre 0 y ${maxCJ}`),
    body('GL590BD').isInt({min: 0, max: maxBD}).withMessage(`Ingrese una cantidad entre 0 y ${maxBD}`),
    body('GL5140CJ').isInt({min: 0, max: maxCJ}).withMessage(`Ingrese una cantidad entre 0 y ${maxCJ}`),
    body('GL5140BD').isInt({min: 0, max: maxBD}).withMessage(`Ingrese una cantidad entre 0 y ${maxBD}`),
    body('breakinBD').isInt({min: 0, max: maxBD}).withMessage(`Ingrese una cantidad entre 0 y ${maxBD}`),
    body('litioBD').isInt({min: 0, max: maxBD}).withMessage(`Ingrese una cantidad entre 0 y ${maxBD}`),
    body('cottonBD').isInt({min: 0, max: maxBD}).withMessage(`Ingrese una cantidad entre 0 y ${maxBD}`)
]

router.get('/', mainController.main)

router.put('/', validations, mainController.orderEdit)

module.exports = router;