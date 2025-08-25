function fatorial(numero) {
   if (numero<0){
    return 'Não existe fatorial de número negativo';
   } 
   if (numero===1 || numero ===0) {
    return 1;
   } 
   else {
    return numero* fatorial(numero-1);
   }

}

const numero1 = 5;

console.log(fatorial(numero1))