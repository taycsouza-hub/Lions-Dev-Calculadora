function divisao(num1, num2) {
  if (num2 === 0) {
    console.log("Divisão por zero não pode ser definida");
  } else {
    return num1 / num2;
  }
}

module.exports = divisao;
