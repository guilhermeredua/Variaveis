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

const nomeComprador = "Adilson";
const cpfComprador = 123456789;
const idadeComprador = 12;
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
console.log(listaDestinos);