const DBM = require('./DBManager')
const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')

const { Client } = require('pg')
const conn = {
    user: 'postgres',
    host: 'localhost',
    database: 'estacionamento',
    password: '1234',
    port: 5432,
}


app.use(cors())

app.get('/consultar', (req, res) => {
    let client = new Client(conn)
    client.connect()
    client.query(`SELECT * FROM Cliente`, (err, qRes) => {
        client.end()
        res.send(qRes.rows)
    })
})

app.get('/consultar/:cod', (req, res) => {
    let client = new Client(conn)
    client.connect()
    client.query(`SELECT * FROM Cliente WHERE Cliente.cod_cliente = ${req.params.cod}`, (err, qRes) => {
        client.end()
        res.send(qRes.rows)
    })
})

app.get('/cadastrar/:cod/:nome', (req, res) => {
    let client = new Client(conn)
    client.connect()
    client.query(`INSERT INTO Cliente VALUES (${req.params.cod},'${req.params.nome}')`, (err, qRes) => {
        client.end()
        res.send("adicionado")
    })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})