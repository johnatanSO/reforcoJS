function soma(){
    var input1 = Number(document.getElementById("input1").value)
    var input2 = Number(document.getElementById("input2").value)
    var body = document.querySelector("body")
    var resultado = document.createElement("h1")
    resultado.innerHTML = `O resultado da soma é: ${input1+input2}`
    body.appendChild(resultado)
}
