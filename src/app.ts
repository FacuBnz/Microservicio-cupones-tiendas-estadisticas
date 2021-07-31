import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import storeRoutes from './routes/store.routes'
import couponRoutes from './routes/coupon.routes'


const app = express();

//settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.json())

//routes
app.use('/api',storeRoutes);
app.use('/api', couponRoutes)

export default app;