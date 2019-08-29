import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import routes from './routes/index'

const app = express();
 /**
  * Connect to database
  * */

mongoose.connect('mongodb://localhost')

/**
 * Middleware
 * */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//catch 400
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(400).send('Error: ${res.originUrl} not found')
    next()
})

//catch 500
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('error: ${err}')
    next()
})

/**
 * Register the routes
 * */
routes(app)
export default app