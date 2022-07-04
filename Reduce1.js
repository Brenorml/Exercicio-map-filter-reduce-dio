function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev + current;        
    }, 0);
}

const arr = [1, 2];

console.log(somaNumeros(arr));

/* $ node Reduce1.js
{ prev: 0 }
{ current: 1 }
{ prev: 1 }
{ current: 2 }
3 
Como indicado o valor 0 como initualValue, podemos verificar o prev com 0 atribuido e o current com o 1, na sequencia a soma passa a ser
a atribuição de prev e o 2 current, para finalizar a soma em 3.
Continuaria sucessivamente se houvesse mais vetores dentro da array */