function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return `${numero} é par`;
    } else {
        return `${numero} é ímpar`;
    }
}

const numero1 = 8;
const numero2 = 11;

console.log(parOuImpar(numero1));
console.log(parOuImpar(numero2));


