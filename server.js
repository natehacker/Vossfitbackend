const express = require('express')
const cors = require('cors')
const app = express()
const signUpRouter = require("./routes/signUpRouter")
const PORT = process.env.PORT || 3001
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => res.json({ message: 'server online' }))
app.use("/auth",signUpRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))






