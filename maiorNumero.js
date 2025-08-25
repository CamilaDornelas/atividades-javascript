function maiorNumero(array) {
    let numero = array[0];

    for (let i of array){
        if (i > numero) {
            numero = i;
        }
    }

    return numero;
}

const array = [1,4,5,10,9];

console.log(maiorNumero(array));