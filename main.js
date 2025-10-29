
const obterNumero = require('./obterNumero');
const obterOperacao = require('./obterOperacao');
const realizarOperacao = require('./realizarOperacao');
const PromptSync = require('prompt-sync');

console.log('Bem vindo a Calculadora');
let num1 = obterNumero();
let operacao = obterOperacao();
let num2 = obterNumero();
let resultado = realizarOperacao(num1,num2,operacao);
console.log('Resultado: ' + resultado);




