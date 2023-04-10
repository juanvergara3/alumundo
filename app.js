require('./src/Config/config');
console.clear();

// ---------------------------------- //
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
var cors = require('cors')


// Initialize the application
const app = express();


// Middlewares
app.use('/static', express.static(__dirname + '/reportes'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'))

// Cors
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(cors())


//Routes
app.use('/api', require('./src/Routes/RouteEmail'));


// Run the server
app.listen(process.env.PORT, (res) => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});