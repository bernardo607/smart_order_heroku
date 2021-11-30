// Imports
const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const methodOverride = require ('method-override');

//config put y delete
app.use(methodOverride('_method'));


// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.set('views', './views')
app.set('view engine', 'ejs')

//config req.body 
app.use(express.urlencoded({ extended: false }));
app.use(express.json())


//Routes
const mainRoutes = require('./routes/mainRoutes.js')
app.use('/', mainRoutes)



// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))