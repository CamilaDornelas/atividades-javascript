# Atividade BFD: Funções JavaScript Simples

## Função 1: `fatorial(numero)`
 
- Calcula o fatorial de um número;
- Usa **recursividade**, ou seja, a função chama a si mesma para calcular o resultado.

![](https://i.imgur.com/jCKaHpf.png)

#### Exemplo de uso:
```javascript
const numero1 = 5;
console.log(fatorial(numero1)); // Saída: 120
```


## Função 2: `maiorNumero(array)`
 
- Encontra o maior número dentro de um array;
- Percorre todos os elementos do array usando um **loop**;
- Compara cada número com o maior encontrado até agora e atualiza se encontrar um número maior.

![](https://i.imgur.com/IFK1bWf.png)

#### Exemplo de uso:
```javascript
const array = [1, 4, 5, 10, 9];
console.log(maiorNumero(array)); // Saída: 10
```


## Função 3: `parOuImpar(numero)`
 
- Verifica se um número é par ou ímpar;
- Usa o operador `%`, o resto da divisão, para saber se o número é divisível por 2;
- Retorna uma mensagem dizendo se o número é **par** ou **ímpar**.

![](https://i.imgur.com/m6C85OM.png)

#### Exemplo de uso:
```javascript
const numero1 = 8;
const numero2 = 11;

console.log(parOuImpar(numero1)); // Saída: "8 é par"
console.log(parOuImpar(numero2)); // Saída: "11 é ímpar"

```
