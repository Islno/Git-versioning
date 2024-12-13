const listaDeNumeros = [2,4,5,765,67,567,435,345,10,8,14,7865];
const par = []
const impar = []

for (i=0; i<listaDeNumeros.length; i++){
    if (listaDeNumeros[i] % 2 === 0){
      par.push(listaDeNumeros[i])
    }else{
        impar.push(listaDeNumeros[i])
    }
}
for(i=0; i<par.length; i++){
    par.sort((a, b) => a - b);
}
for(i=0; i<impar.length; i++){
    impar.sort((a, b) => a - b);
}
console.table(par)
console.table(impar)