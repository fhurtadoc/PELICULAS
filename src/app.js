let express = require('express');
let session=require('express-session');
let morgan=require('morgan');
let bodyParser = require('body-parser');
const multer = require('multer');
const path=require('path');


const cors=require('cors');



//import Rutas
let indexRouter = require('./routes/index');

///prueba conexion
let app = express();


//1. CORS
//app.use(cors())
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});


// 2. Middlewares

//sesiones
app.use(session({
  secret: 'kadcksacnsakjflas',
  resave: false,
  saveUninitialized: false    

}));

//-morgan
app.use(morgan("dev"));
//-body parser 
app.use(express.static(path.join(__dirname, 'public/portadas')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//3.rutas
app.use(indexRouter);




module.exports = app;
