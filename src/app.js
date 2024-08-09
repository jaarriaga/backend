const express = require ('express'); 
const morgan = require ('morgan');
const mysql = require ('mysql');
const myConnection = require ('express-myconnection');

const app = express();
const cors = require ('cors');

const mascotaRouter= require('./routes/mascotas.router');
const empleadoRouter= require('./routes/empleados.router');



app.set ('port', 3000);
app.use (cors());
app.use (morgan('dev'));

app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'gevn0331'  
}, 'single'));

app.use (express.json());
app.use (express.urlencoded({extended:false}));
app.use(require('./routes/mascotas.router'));
app.use(require('./routes/empleados.router'));


module.exports= app;