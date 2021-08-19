/* Crie um programa onde o usuário possa digitar vários valores numéricos e cadastre-os em uma lista. Caso o número já esteja lá dentro, ele não será adicionado. No final, serão exibidos todos os valores únicos digitados, em ordem crescente. */

const prompt = require('prompt-sync')();
const lista = []
do {
    let num = +prompt('Número: ');
    //const exist = lista.find(elem => elem == num);
    lista.indexOf(num) == -1 ? lista.push(num) : console.log('Número já existe!')

    var resp = prompt('Deseja continuar? [S/N] ').toUpperCase()[0];
} while (resp == 'S');
console.log(lista)