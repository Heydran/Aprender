function cadastrarConta() {
    let login = document.getElementById("login").value.replaceAll(" ", "").replaceAll(",", "")
    console.log(login);
    let senha = document.getElementById("senha").value.replaceAll(" ", "").replaceAll(",", "")

    if (login != "" & senha != "") {
        var conta = {
            user: login,
            pass: senha,
            img: "Perry",
            perm: 0

        }

        fetch("http://localhost:3000/contas", {
            method: "POST",
            body: JSON.stringify(conta),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(e => parent.document.getElementById("mainFrame").src = "home.html")

    }
}