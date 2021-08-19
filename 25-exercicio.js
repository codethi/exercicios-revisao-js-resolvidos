/* Crie um programa que gerencie o aproveitamento de um jogador de futebol. O programa vai ler o nome do jogador e quantas partidas ele jogou. Depois vai ler a quantidade de gols feitos em cada partida. No final, tudo isso será guardado em um objeto, incluindo o total de gols feitos durante o campeonato.  */

const prompt = require("prompt-sync")({ sigint: true });

const jogador = {};
const partidas = [];

jogador.nome = prompt("Nome do jogador: ");
const numPartidas = +prompt(`Quantas partidas o jogador: ${jogador.nome} jogou? `);

for (let i = 0; i < numPartidas; i++) {
    partidas.push(+prompt(`Quantos gols na ${i + 1}° partida? `));
}

jogador.gols = partidas;

jogador.totalGols = partidas.reduce((soma, i) => soma + i);

console.log(`O jogador ${jogador.nome} jogou ${partidas.length} jogos.`);

for (let i = 0; i < jogador.gols.length; i++) {
    console.log(`Na ${i + 1}° partida, fez ${jogador.gols[i]} gols.`);
}

console.log(`Ao todo o ${jogador.nome} fez ${jogador.totalGols} gols.`);