function getID(elemento) {
    document.getElementById(elemento)
}
jogo = localStorage.getItem("jogo")
if (jogo) {

}

function definirImgMain() {
    getID("imgMain").src = jogo.link
}