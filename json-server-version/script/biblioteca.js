carregarJogos()

function carregarJogos() {

    fetch("http://localhost:3000/jogos")
        .then(jsonString => jsonString.json())
        .then(jsonObject => {
            for (i of jsonObject) {
                escolherBaner(i)
            }
        })
}

function escolherBaner(jogo) {
    var banner = document.getElementById(jogo.generoPrincipal)
    if (!banner) {
        document.getElementById("ulBilioteca").innerHTML += `
            <li class="nav-item">
                <a class="nav-link text-info" href="#div${jogo.generoPrincipal}" target="mainFrame">${jogo.generoPrincipal}</a>
            </li>`;
        document.getElementById("mural").innerHTML += `
        <div id="div${jogo.generoPrincipal}">
            <h1 ">${jogo.generoPrincipal}</h1>
            <div id="${jogo.generoPrincipal}" class="container-fluid bg1 banners">
            </div>
            </div>`;


        var banner = document.getElementById(jogo.generoPrincipal)
    }
    /*banner.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        banner.scrollLeft += evt.deltaY;
    });*/
    adicionarJogo(jogo, banner)
}

function adicionarJogo(jogo, banner) {
    banner.innerHTML +=
        `<div class="contImg">
        <button style="all: unset;" onclick="${exportarJogo(${jogo})}"><img id="img-${jogo.id}" src="./static/img/${jogo.linkImg}.png"></button>
        </div>`

}

function exportarJogo(jogo) {

    console.log(JSON.stringify(jogo));
    localStorage.setItem("jogo", JSON.stringify(jogo))

}