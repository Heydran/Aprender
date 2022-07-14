const express = require('express')
const app = express()
const port = 8090

app.get('/', (req, b) => {
    b.header("Access-Control-Allow-Origin", "*");
    b.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept")
    var nomes = ``
    fetch("http://localhost:8080/")
        .then(jsonString => jsonString.json())
        .then(jsonObject => {
            for (i of jsonObject) {
                nome += `${i.nom_cliente} \n`
            }
        })
    
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})