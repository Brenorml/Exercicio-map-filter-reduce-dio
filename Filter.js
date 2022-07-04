function filtraPares(arr) {
    return arr.filter(callback);
}

//Extraindo a lógica para fora da função filtraPares utilizando uma função callback com a operação a ser realizada
function callback(item) {
    /* Le a array e lista em nova array os itens pares
    return item % 2 === 0; */
    //Abaixo temos a versão contrária para encontrar os impares
    return item % 2 !== 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));