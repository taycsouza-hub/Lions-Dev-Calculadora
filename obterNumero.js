const promptSync = require('prompt-sync')
const prompt = promptSync();

function obterNumero() {
    let numero
    numero = parseFloat(prompt('Digite um numero: '));
    if (typeof numero !== 'number' || isNaN(numero)) {
        console.log('Numero digitado é invalido, digite um numero valido.')
        return obterNumero();
    } else {
        return numero
    }
}

module.exports = obterNumero