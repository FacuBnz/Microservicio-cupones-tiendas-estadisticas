import dotenv from 'dotenv'
dotenv.config();
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import app from './app'

createConnection()

app.listen(app.get('port'))
