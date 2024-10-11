function somaArray(array) {
    let soma = 0;
    
    for (let x=0; x<array.length; x++) {
        soma += array[x];
    }

    return soma;
}

function MaiorArray(array) {
    let maior = array[0];
    
    for (let x=1; x<array.length; x++) {
        if (array[x] > maior) {
            maior = array[x];
        }
    }

    return maior;
}


function ParArray(array) {
    let par = 0;
    
    for (let x=0; x<array.length; x++) {
        if (array[x] % 2 === 0) {
            par++;
        }
    }

    return par;
}

function MediaArray(array) {
    let soma = 0;
    
    for (let x=0; x<array.length; x++) {
        soma += array[x];
    }
    media = soma/array.length;
    
    return media;
}

function NumeroArray(array) {
    let positivo = 0;
    let negativo = 0;
    
    for (let x=0; x<array.length; x++) {
        if (array[x] >= 0) {
            positivo++;
        } else {
            negativo++;
        }
    }
    
    console.log(`Positivo ${positivo}`); 
    console.log(`Negativo ${negativo}`);
}


function MultiplicadoArray(arrayA, multiplicado) {
    let arrayB = [];
    
    for (let x=0; x<array.length; x++) {
        ArrayB[x] = arrayA[x] * multiplicado;
    }
    
    return ArrayB;
}
