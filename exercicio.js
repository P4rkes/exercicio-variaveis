/*
*Lucas Prestes Vargas
*
*/

// 1. mudará o valor do B para 5 e mostrará (a=10 ; b=5)

// 2. trocará a variavel B para a C que está vazia e a variavel A cupará a variavel B (A =  ; B = 10 ; C = 20)

// 3. horasTrabalho / diaRecebe 

// exercicio 3
 
let nome; 
let idade; 

console.log(typeof nome);
console.log(typeof idade);

nome = prompt("qual é o seu nome?");
idade = prompt("qual sua idade?");

console.log("Olá", nome, "você tem", idade, "anos, certo?")


// o computador perguntará nome e idade do usuário, logo em seguida, será guardada as informações que o user digitar.

// PERGUNTAS

let jdm;
let senna;
let contraBaixo;

console.log(typeof jdm);
console.log(typeof senna);
console.log(typeof contrabaixo);

jdm = prompt("JDM são os melhores tipos de carro?");
senna = prompt("Airton Senna tinha um Honda NSX?");
contraBaixo = prompt("o contra baixo faz diferença nas músicas?");

const jdmR = ("sim");
const sennaR = ("sim");
const contraBaixoR = ("sim, obvio"); 

console.log("SUAS RESPOSTAS:", "JDM são os melhores tipos de carro?  - ", jdm, "/ Airton Senna tinha um Honda NSX? - ", senna, "/ o contra baixo faz diferença nas músicas? - ", contraBaixo,)
console.log("RESPOSTAS DO SISTEMA:", "JDM é o melhor estilo de carro?", jdmR, "/ Airton Senna tinha um NSX?", sennaR, "/ O contra baixo faz diferença nas músicas?", contraBaixoR);


// exercicio variaveis a e b

let a = 10;
let b = 25;
let c;
c=a;
a=b;
b=c;
 console.log(a, b, c,);

