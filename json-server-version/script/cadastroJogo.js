
function salvarJogo() {
    var jogo = {
        nome: document.getElementById("nome").value,
        generoPrincipal: document.getElementById("generoPrincipal").value,
        linkImg: `static/img/${document.getElementById("img").value}.png`
    }

    fetch("http://localhost:3000/jogos", {
        method: "POST",
        body: JSON.stringify(jogo),
        headers:{
            'Content-Type' : 'application/json'
        }
    })
}