require('dotenv').config()
const express = require("express")
const app = express()
const apiRoutes = require('./routes/apiRoutes')
const mongoose = require("mongoose")
mongoose.set('strictQuery', true)

mongoose.connect(process.env.DB_BASE_URL, { useNewUrlParser: true })

const db = mongoose.connection

const PORT = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', apiRoutes)

db.on('error', (error) => console.error)

db.once('open', () => console.log('Connesso al db'));

app.listen(PORT, () => {
    console.log(`Server Running on port: ${PORT}`);
})