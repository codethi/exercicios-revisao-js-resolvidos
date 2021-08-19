/* Crie um programa que leia nome, gênero e idade de várias pessoas, guardando os dados de cada pessoa em um objeto e todos os objetos em uma lista. No final, mostre:​
A) Quantas pessoas estão cadastradas.​
B) A média da idade.​
C) Uma lista com as pessoas com gênero feminino.​
D) Uma lista com as idades que estão acima da média.​
OBS: O programa deve garantir que quando perguntar ao usuário se deseja continuar a resposta seja somente S ou N. */

const prompt = require("prompt-sync")({ sigint: true });

const galera = [];

let soma = 0;

let resp = "";

do {
    const pessoa = {};
    pessoa.nome = prompt("Nome: ");
    pessoa.genero = prompt("Genero: ").toUpperCase();
    pessoa.idade = parseInt(prompt("Idade: "));

    soma += pessoa.idade;

    galera.push(pessoa);

    do {
        resp = prompt("Deseja continuar? [S/N]: ").toUpperCase();
    } while (resp !== "S" && resp !== "N");
} while (resp !== "N");

console.log(`A) Ao todo temos ${galera.length} pessoas cadastradas.`);

const media = soma / galera.length;

console.log(`B) A média da idade é de ${media.toFixed(2)} anos.`);
console.log(`C) As pessoas com gênero feminino cadastradas foram:`);

const femininos = [];

for (const pessoa of galera) {
    if (pessoa.genero.startsWith("F")) {
        femininos.push(pessoa);
    }
}

console.log(femininos);
console.log(`D) Lista das pessoas que tem a idade acima da média: `);

const acima = [];

for (const pessoa of galera) {
    if (pessoa.idade > media.toFixed(2)) {
        acima.push(pessoa);
    }
}

console.log(acima);