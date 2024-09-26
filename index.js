const prompt = require('prompt-sync');
const entrada = prompt('')

let anoAtual = 2024;
const nomeCompleto = "Guilherme Henrique Diniz Gemeno Rédua";
let idade = 17;
const cursoFaculdade = "Administração";
const cidadeAtual = "São José dos Pinhais";

console.log(`Olá eu sou o ${nomeCompleto} eu tenho ${idade} anos, moro em ${cidadeAtual}, ano que vem quero estar cursando ${cursoFaculdade}`);

anoAtual = 2025;
let idadeFutura = 19

console.log(`Olá eu sou o ${nomeCompleto} eu tenho ${idadeFutura}, moro em ${cidadeAtual} e curso ${cursoFaculdade}`); 

//Agência de viagens

var nomeComprador = entrada("Qual é o seu nome?");
const cpfComprador = entrada("Qual é o seu CPF?");
var idadeComprador = entrada("Qual é sua idade?");
const listaDestinos = new Array(
 " Viena",
 " Varsóvia",
 " Berlim",
 " Braunau Am Inn",
 " e Praga"  
);

console.log(`Olá Sr. ${nomeComprador} portador do CPF ${cpfComprador}, a compra das passagens de avião com os destinos ${listaDestinos} foi confirmada.`);

console.log(listaDestinos[0]);
console.log("");

console.log(`Olá senhor ${nomeComprador}, adicionamos uma nova viagem em sua lista de interesses.`);

listaDestinos.push("Salzburgo");

var idadeComprador = 18;

if(idadeComprador < 18) {
  console.log(`Infelizmente não podemos lhe vender o produto, pois o (a) Sr. (a) é menor de idade.`)
} 

if(idadeComprador >= 18) {
  console.log(`Parabéns, sua compra foi realizada com sucesso!.`)
} 

