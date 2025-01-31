console.log("Ola mundo");

alert("Ola mundo!");

let nome = prompt("Qual o seu nome?")
let numero = prompt("Diga um número")

let a = 10;
let b = 20;
console.log("Adição:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);

for (let i = 0; i <= 10; i++) {
    console.log("Número " + i);
}

saudacao(nome);
verificar(numero);

function saudacao(nome) {
    console.log("Ola, " +nome+ "!");
};

let botao = document.getElementById("meuBotão");
botao.addEventListener("click", function(){
    alert("Boas Vindas");    
})

function verificar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " é par!");
    } else {
        console.log(numero + " é ímpar!");
    }
}

