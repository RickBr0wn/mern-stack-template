require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const router = require('./Routes')
const authRouter = require('./Routes/authRoutes')
const cookieParser = require('cookie-parser')

const app = express()
const port = 5000

mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Successfully connected to database.')
  }
).catch(err => console.error(err))

app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ title: 'Express & Mongoose Template' })
})

app.use('/auth', authRouter)

app.use('/api', router)

app.listen(port, () => console.log(`Express dev server started on port ${port}`))