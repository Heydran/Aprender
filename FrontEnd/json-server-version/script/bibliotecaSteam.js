carregarJogos()

function carregarJogos() {
    fetch("http://localhost:3333/jogos")
        .then(jsonString => jsonString.json())
        .then(jsonObject => {
            for (jogo of jsonObject.jogos) {
                escolherBaner(jogo);
            }
        })
}


function escolherBaner(jogo) {
    var banner = document.getElementById("jogos")
    adicionarJogo(jogo, banner)
}

function adicionarJogo(jogo, banner) {
    banner.innerHTML +=
        `<div class="contImg">
        <button class="limpar" onclick="redirect(${jogo.appID})"><img id="img-${jogo.nome}" src="${jogo.link}"></button>
        </div>`


}

function redirect(appID) {
    parent.location.href = `https://store.steampowered.com/app/${appID}`
}