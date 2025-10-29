const promptSync = require('prompt-sync')
const prompt = promptSync();

function obterOperacao() {
    let operacao
    operacao = prompt('Digite a operação desejada (+,-,*,/): ')
    if (operacao === '+' || operacao === '-' || operacao === '*' || operacao === '/') {
        return operacao
    } else {
        console.log('Operacao invalida, digite uma operacao valida (+,-,*,/): ');
        return obterOperacao();
    }
}

module.exports = obterOperacao