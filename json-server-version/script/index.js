var logado = localStorage.getItem("Logado")

if (logado == "true") {
    user =JSON.parse(localStorage.getItem("Usuario"))
    document.getElementById("aUser").innerHTML = user.user
    configLogado()
    document.getElementById("mainFrame").src = "home.html"
}

function configLogado() {
    document.getElementById("liCadastroJogo").classList.remove("esconder")
    document.getElementById("liUsuario").classList.remove("esconder")
    document.getElementById("liLogout").classList.remove("esconder")
    document.getElementById("liImg").classList.remove("esconder")
    document.getElementById("liLogin").classList.add("esconder")
    document.getElementById("imgPerfil").src = `static/img/${user.img}.png`
    
}

function logout() {
    localStorage.removeItem("Usuario")
    localStorage.setItem("Logado", "false")
    document.getElementById("liCadastroJogo").classList.add("esconder")
    document.getElementById("liUsuario").classList.add("esconder")
    document.getElementById("liLogout").classList.add("esconder")
    document.getElementById("liImg").classList.add("esconder")
    document.getElementById("liLogin").classList.remove("esconder")
    document.getElementById("mainFrame").src = "home.html"
}