const express = require('express')
const app = express()
const port = 6969
const cors = require('cors')

const { Pool, Client } = require('pg')

app.use(cors())


app.get('/consultar', (req, b) => {
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
    client.query('SELECT * FROM Cliente', (err, res) => {
        var nomes = `Nomes,\n`
            for (i of res.rows){
                nomes +=`${i.nom_cliente}, \n`
            }
        b.send(nomes)
        client.end()
      })
    })
app.get('/', (req, b) => {
    /*b.header("Access-Control-Allow-Origin", "*");
    b.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept")*/
    b.send("Salve Nicolas")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})