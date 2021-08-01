import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import storeRoutes from './routes/store.routes'
import couponRoutes from './routes/coupon.routes'
import statisticRoutes from './routes/statistic.routes'

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/api',storeRoutes)
app.use('/api', couponRoutes)
app.use('/api', statisticRoutes)

export default app;