/* Jogo Jokenpô: Utilizando os conceitos aprendidos até estruturas de repetição, crie um programa que jogue pedra, papel e tesoura (Jokenpô) com você.
    - Permitir que eu decida quantas rodadas iremos fazer;
    - Ler a minha escolha (Pedra, papel ou tesoura);
    - Decidir de forma aleatória a decisão do computador;
    - Mostrar quantas rodadas cada jogador ganhou;
    - Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
    - Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não finalize o
    programa. */

const prompt = require("prompt-sync")();

const resposta = prompt("Qual sua jogada: 'pedra', 'papel' ou 'tesoura'? ");

const opcoes = {
    pedra: 1,
    papel: 2,
    tesoura: 3,
};

const jogador = opcoes[resposta];
const cpu = Math.round(Math.random() * 2) + 1;

const cpuFormatada = Object.keys(opcoes)[cpu];

console.log(`\nVocê jogou '${resposta}'.\nO computador jogou '${cpuFormatada}'.\n`);

if (jogador === 1 && cpu === 3) {
    console.log("Você ganhou!");
} else if (jogador === 1 && cpu === 2) {
    console.log("Você perdeu!");
} else if (jogador === 1 && cpu === 1) {
    console.log("Empatou!");
}

if (jogador === 2 && cpu === 1) {
    console.log("Você ganhou!");
} else if (jogador === 2 && cpu === 3) {
    console.log("Você perdeu!");
} else if (jogador === 2 && cpu === 2) {
    console.log("Empatou!");
}

if (jogador === 3 && cpu === 2) {
    console.log("Você ganhou!");
} else if (jogador === 3 && cpu === 1) {
    console.log("Você perdeu!");
} else if (jogador === 3 && cpu === 3) {
    console.log("Empatou!");
}
