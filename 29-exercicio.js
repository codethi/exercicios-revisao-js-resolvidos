/* Desafio: Crie um programa que leia nome, ano de nascimento e carteira de trabalho e cadastre-os (com idade) em um objeto. Se por acaso a CTPS for diferente de 0, o objeto receberá também o ano de contratação e o salário. Calcule e acrescente , além da idade , com quantos anos a pessoa vai se aposentar. Considere que o trabalhador deve contribuir por 35 anos para se aposentar. */

const prompt = require('prompt-sync')({sigint: true});
const dados = {};
dados.nome = prompt('Nome: ');
const nasc = prompt('Ano de nascimento: ');
const anoAtual = new Date().getFullYear();
dados.idade = anoAtual - nasc;
dados.ctps = parseInt(prompt('Num. CTPS: '));
if (dados.ctps != 0){
    dados.contratacao = parseInt(prompt('Ano da contratação: '));
    dados.salario = parseInt(prompt('Salário: R$ '));
    dados.aposentadoria = dados.contratacao + 35 - anoAtual + dados.idade ;
};

console.log(dados);