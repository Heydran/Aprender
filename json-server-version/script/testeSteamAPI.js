/*fetch("https://store.steampowered.com/api/appdetails?
appids=105600&key=CDD51DAFA10A6B45939EB4EF42952371format=json", {})
    .then(jsonString => ((jsonString)))
    .then(jsonObject => {
        console.log(jsonObject)

    })*/



var express = require('express');
var app = express();
const port = 3333

var cors = require('cors')
app.use(cors())

const SteamAPI = require('steamapi');
const steam = new SteamAPI('CDD51DAFA10A6B45939EB4EF42952371');

// respond with "hello world" when a GET request is made to the homepage

var jogos = []
app.get('/jogos', (req, res) => {
    steam.getUserOwnedGames("76561198271916709")
        .then(jsonObject => {
            jogos = []

            for (jogo of jsonObject) {
                jogos.push({
                    nome: jogo.name,
                    link: `https://cdn.akamai.steamstatic.com/steam/apps/${jogo.appID}/header.jpg`,
                    appID: jogo.appID
                })
            }

        }).then(e => res.send({ jogos: jogos }))


})
app.listen(port, () => {
    console.log(`Runing at port: ${port}`)
})