var logado = localStorage.getItem("Logado")
console.log(logado);
if (logado == "true") {
    document.getElementById("aUser").innerHTML = localStorage.getItem("Usuario")
    configLogado()
}

function configLogado() {
    document.getElementById("liCadastroJogo").classList.remove("esconder")
    document.getElementById("liUsuario").classList.remove("esconder")
    document.getElementById("liLogout").classList.remove("esconder")
    document.getElementById("liLogin").classList.add("esconder")
}

function logout() {
    localStorage.removeItem("Usuario")
    localStorage.setItem("Logado", "false")
    document.getElementById("liCadastroJogo").classList.add("esconder")
    document.getElementById("liUsuario").classList.add("esconder")
    document.getElementById("liLogout").classList.add("esconder")
    document.getElementById("liLogin").classList.remove("esconder")
}