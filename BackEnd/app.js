const DBM = require('./DBManager')
const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')

const { Pool, Client } = require('pg')

const db = new DBM.DBManager()
console.log(db.quary('Cliente'));

app.use(cors())


app.get('/consultar/:id', (req, b) => {
    /*b.header("Access-Control-Allow-Origin", "*");
    b.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept")*/
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'estacionamento',
        password: '1234',
        port: 5432,
    })

    client.connect()
    client.query(`SELECT * FROM Cliente WHERE Cliente.cod_cliente = ${req.params.id}`, (err, res) => {
        var nomes = `Nomes,\n`
        for (i of res.rows) {
            nomes += `${i.nom_cliente}, \n`
        }
        b.send(res.rows)
        client.end()
    })
})

app.get('/', (req, b) => {
    /*b.header("Access-Control-Allow-Origin", "*");
    b.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept")*/
    b.send("Salve Nicolas")
})

app.get('/c2', (req,res) => {
    res.send()
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})