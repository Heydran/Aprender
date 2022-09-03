function getID(elemento) {
    return document.getElementById(elemento)
}

var usuario = JSON.parse(localStorage.getItem("Usuario"))

var imgPerfil = getID("imgPerfil")
imgPerfil.src = `static/img/${usuario.img}.png`

getID("nomeUsuario").innerHTML = usuario.user.charAt(0).toUpperCase() + usuario.user.slice(1)

getID("textoStatus").innerHTML = usuario.stats

var pGenero = getID("genero")
if (usuario.genre == 0) {
    pGenero.innerHTML = "Feminino"
} else if (pGenero == 1) {
    pGenero.innerHTML = "Masculino"
} else {
    pGenero.innerHTML = "Outros"
}

getID("dataCriada").innerHTML = usuario.dataCreate