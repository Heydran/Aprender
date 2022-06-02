function logar() {
    user = document.getElementById("user")
    pass = document.getElementById("pass")
    fetch("http://localhost:3000/contas")
    .then(accs => accs.json())
    .then(jsonAccs => {
        for (i of jsonAccs){
            if (user.value == i.user & pass.value == i.pass) {
                localStorage.setItem("Logado","true")
                localStorage.setItem("Usuario",user.value)

            }
        }
    })
}