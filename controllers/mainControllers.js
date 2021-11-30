const { validationResult } = require('express-validator')

const path = require('path');
const fs = require('fs');

//Product JSON parse
let jsonProducts = fs.readFileSync(path.resolve(__dirname, '../products.json'), 'utf-8');
let products = JSON.parse(jsonProducts); 

const controller = {

    main: (req, res) => {
         res.render('index', {products: products, oldData: req.body})
        },

    orderEdit: (req, res) => {
        
        let resultValidation = validationResult(req)
        
        if (resultValidation.errors.length > 0) {
            return res.render('index', {
                errors: resultValidation.mapped(), 
                products: products,
                oldData: req.body})
            } else {
                return res.render('index', {errors: [],products: products, oldData: req.body})
            }
            
           
    }
        
    }


module.exports = controller;