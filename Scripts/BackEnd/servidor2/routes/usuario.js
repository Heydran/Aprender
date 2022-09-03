const express = require('express')
const router = express.Router()
const { Client } = require('pg')
var jwt = require('jsonwebtoken');

const conn = process.env.DATABASE_OBJ

router.get("/consultar",(req,res) =>{
    res.send({
        message:"pagina de consultas"
    })
})
router.get("/consultar/:id",(req,res) =>{
    return res.send({  
        message:"pagina de consultas by id",
        idBusca:`${req.params.id}`
    })
})

router.post("/cadastro",(req, res) =>{
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

router.post("/validarLogin",(req, res) => {
    var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    return res.send(token)
})

router.put("/editar:id",(req, res) =>{
    res.send(`${req.body.id} ${req.body.nome}`)
})

module.exports = router