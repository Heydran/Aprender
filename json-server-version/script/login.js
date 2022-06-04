function logar() {
    user = document.getElementById("user")
    pass = document.getElementById("pass")
    fetch("http://localhost:3000/contas")
        .then(accs => accs.json())
        .then(jsonAccs => {
            for (i of jsonAccs) {
                if (user.value == i.user & pass.value == i.pass) {
                    localStorage.setItem("Logado", "true")
                    localStorage.setItem("Usuario", JSON.stringify(i))
                    parent.location.reload()
                    parent.document.getElementById("mainFrame").src = "home.html"
                }
            }
        })
}
document.getElementById("pass").addEventListener('keypress', event => {
    if (event.key === "Enter") {
        logar()
    }
})
