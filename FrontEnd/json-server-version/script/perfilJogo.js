jogo = JSON.parse(localStorage.getItem("jogo"))
if (jogo) {
    definirInfoJogo(jogo)
}

function definirInfoJogo(jogo) {
    document.getElementById("imgMain").src = `static/img/${jogo.linkImg}.png`
    document.getElementById("nomeJogo").innerHTML = `${jogo.nome}`
    document.getElementById("descricaoJogo").innerHTML = `Descrição ${jogo.descricao}`
    document.getElementById("generos").innerHTML = `Generos: ${jogo.generos}`
}