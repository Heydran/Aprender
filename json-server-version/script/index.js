var logado = localStorage.getItem("Logado")
console.log(logado);
if(logado == "true"){
    document.getElementById("aUser").innerHTML = localStorage.getItem("Usuario")

}