import express from 'express'
import morgan from 'morgan'


const app = express();

//settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(express.json())
app.use(morgan('dev'));

//routes

export default app;