function gerarNumeroAleatorio() {
const numeroAleatorio = (Math.floor(Math.random() * 11))
return numeroAleatorio   
}

function jogar () {
const pegaNumeroAleatorio = gerarNumeroAleatorio()
console.log(pegaNumeroAleatorio)
let palpite = ""
let tentativas = 3
do{
     palpite = parseInt(prompt ("adivinhe um numero:"))
     if(palpite!= pegaNumeroAleatorio) {
        tentativas--
        alert(`Errrrrrrrrrrrrrrrrou! Tente de novo! Voce ainda tem ${tentativas} ${tentativas > 1 ? "tentativas" : "tentativa"}.`)
     }
     else {
        alert(`Parabéns! O numero era: ${pegaNumeroAleatorio}`)
        return
}
   
}

while (tentativas > 0)
   alert(`Suas tentativas acabaram! O número correto era: ${pegaNumeroAleatorio}`);

}

jogar()


