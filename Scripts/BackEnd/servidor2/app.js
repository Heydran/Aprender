const express = require('express')
const app = express()

const cors = require('cors')


const userRoutes = require("./routes/usuario")
const leoRoutes = require("./routes/leo")
const { Router } = require('express')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/usuario",userRoutes)
app.use("/leo",leoRoutes)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})

