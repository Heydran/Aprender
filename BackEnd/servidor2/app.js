const express = require('express')
const app = express()

const cors = require('cors')

const { Pool, Client } = require('pg')
const conn = process.env.DATABASE_OBJ


app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/consultar",(req,res) =>{
    res.send({
        message:"pagina de consultas"
    })
})
app.get("/consultar/:id",(req,res) =>{
    res.send({  
        message:"pagina de consultas by id",
        idBusca:`${req.params.id}`
    })
})

app.post("/cadastro",(req, res) =>{
    let client = new Client(conn)
    client.connect()
    client.query(`INSERT INTO Anime(nom_anime, des_anime, num_episodios) VALUES ('${req.body.nome}', '${req.body.desc}', ${req.body.episodios})`, (err, qRes) => {
        if (err){
            throw err
        }
        client.end()
        res.send("adicionado")
    })
})




app.put("/editar:id",(req, res) =>{
    res.send(`${req.body.id} ${req.body.nome}`)
})


const port = process.env.PORT
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})

