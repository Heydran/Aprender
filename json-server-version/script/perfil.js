function getID(elemento) {
    return document.getElementById(elemento)
}

var usuario = JSON.parse(localStorage.getItem("Usuario"))

var imgPerfil = getID("imgPerfil")
imgPerfil.src = `static/img/${usuario.img}.png`

var nomeUsuario = getID("nomeUsuario")
nomeUsuario.innerHTML = usuario.user.charAt(0).toUpperCase() + usuario.user.slice(1)