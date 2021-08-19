/* Crie um programa que leia o preço e a quantidade de um produto a ser comprado, calculando o total da compra, guarde essas informações em um objeto. Se o valor todal da compra for maior que R$ 100,00 de o desconto de 10%, se for entre R$ 400,00 e R$ 500,00, dê 15% de desconto, se for acima de R$ 500,00, dê 20% de desconto. No final mostre ao cliente a quantidade, o preço do produto e o valor total de sua compra, considerando o desconto dado. Não se esqueça de alterar o valor total no objeto.  */

const prompt = require('prompt-sync')({sigint: true});

const produto = {};

produto.quantidade = parseInt(prompt("Quantidade: "));
produto.preco = parseFloat(prompt("Preço: R$  "));
produto.total = produto.quantidade * produto.preco;
let desconto = 0

if (produto.total >= 100) {
    desconto = produto.total * 0.10
    produto.total -= desconto;
} else if (produto.total >= 400 || produto.total <= 500){
    desconto = produto.total * 0.15
    produto.total -= desconto;
} else if (produto.total > 500){
    desconto = produto.total * 0.20
    produto.total -= desconto;
};

console.log(produto);