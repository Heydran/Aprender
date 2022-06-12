jogo = JSON.parse(localStorage.getItem("jogo"))
if (jogo) {
    definirInfoJogo(jogo)
}

function definirInfoJogo(jogo) {
    document.getElementById("imgMain").src = `static/img/${jogo.linkImg}.png`
    document.getElementById("nomeJogo").innerHTML = `${jogo.nome}`
    document.getElementById("textoJogo").innerHTML = `${jogo.descricao}`
    document.getElementById("generos").innerHTML = `${jogo.generos}`
}