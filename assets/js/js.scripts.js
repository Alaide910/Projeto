alert("Bem Vindo!");

//let idade = 20;
//idade = 21;
//console.log(idade)

//let estado;
//if (true) {
//estado = BA;
//}

//const cidade = "Fortaleza";

//const nome = "Ana";
//nome = "Maria";


//if (true) {
// var nome = "João";
//}

//console.log(nome);

//if (true) {
//let nome = "João";
//console.log(nome);

// }

//{
// let teste = 10;
// }

//var nome = "Ana";
//var nome = "Maria";
//nome  = "Paulo";

//console.log(nome);
//var nome = "João";

//var nome; // Hoisted!

//console.log(nome);
//let nome; = "João";

let nome = prompt("Digite seu nome");
console.log(nome);

//let soma = prompt("Digite sair");
//console.log(soma);

//let numerol = 10;
//let numero2 = 5;

// Operações e saidas no console

//console.log(numerol + numero2); //15
//console.log(numerol - numero2); //5
//console.log(numerol * numero2); //50
//console.log(numerol / numero2); //2

//let nomeA = "João";
//console.log("Ola " + nomeA);

//let nomeC = "Maria";
//console.log(`Ola ${nomeC}`);

//let n1 = prompt("N1");
//let n2 = prompt("N2");
//console.log(n1 + n2);

//let a1 = Number(prompt("N1"));
//let a2 = Number(prompt("N2"));
//console.log(a1 + a2);

// Coleta de dados
let nomeD = prompt("Seu none");
let idade = Number(prompt("Sua idade"));

// Exibição

alert(`Òla ${nome}`);
console.log(`Idade: ${idade} `);

// Cálculo e Saida
let proximo = idade + 1;
alert(`Proximo ano: ${proximo}`);

//Mini Projeto 1
if (idade >= 18) {
  alert("Maior de idade");
} else {
  alert("Menor de idade");
}

//Mini Projeto 2
let nota = Number(prompt("Digite a nota"));
if (nota >= 7) {
  alert("Aprovado");
} else if ("nota > ()=5") {
  alert("Reprovado");
} else {
  alert("Reprovado");
}
// Mini Projeto 3
let numero = Number(prompt("Digite um número"));
if (numero % 2 === 0) {
  alert("Número par");
} else {
  alert("Número impar");
}

//Mini Projeto 4
let n1 = Number(prompt("N1"));
let n2 = Number(prompt("N2"));
let op = prompt("Digite + - * /");

if (op == "+") {
  alert(n1 + n2);
} else if (op === "-") {
  alert(n1 - n2);
} else if (op === "*") {
  alert(n1 * n2);
} else if (op === "/") {
  alert(n1 / n2);
} else {
  alert("Iválido");
}
