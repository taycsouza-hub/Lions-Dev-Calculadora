const soma = require("./soma");
const subtracao = require("./subtracao");
const divisao = require("./divisao");
const multiplicacao = require("./multiplicacao");

function realizarOperacao(num1, num2, operacao) {
  let resultado;

  switch (operacao) {
    case "+":
      resultado = soma(num1, num2);
      break;
    case "-":
      resultado = subtracao(num1, num2);
      break;
    case "/":
      resultado = divisao(num1, num2);
      break;
    case "*":
      resultado = multiplicacao(num1, num2);
      break;
    default:
      console.log(
        "Comando inválido. Por favor digite umas das operações validas: +,-,*,/"
      );
      return undefined;
  }
  return resultado;
}

module.exports = realizarOperacao;
