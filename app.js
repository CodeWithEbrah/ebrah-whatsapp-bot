require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./routes')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/api/v1', router)

app.listen(PORT, () => {
    console.log(`Server Started At Port: ${PORT}`)
})
