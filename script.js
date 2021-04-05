//Objeto agregador dos métodos
const arrayMethods = {
  createArray: (multiplier, value) => {
    let array = [];
    for (let i = 0; i < multiplier; i++) {
      array.push(value);
    }
    console.log(array);
  },

  invertArray: (array) => {
    const newArray = [];
    let counter = 0;
    for (let i = array.length; i > 0; i--, counter++) {
      newArray[i - 1] = array[counter];
    }
    console.log(newArray);
  },

  clearArray: (array) => {
    const cleanArray = array.filter(Boolean);
    return console.log(cleanArray);
  },

  convertIntoObject: (array) => {
    const myObject = {};
    array.forEach(innerArray => {
      myObject[innerArray[0]] = innerArray[1];
    })
    console.log(myObject);
  },

  filterFromArray: (array, ...args) => {
    const filteredArray = array.filter(item => !args.includes(item))
    return console.log(filteredArray);
  },

  ignoreDuplicatedValues: (array) => {
    const newArray = array.filter((item, index) => {
      return array.indexOf(item) === index;
    })   
    console.log(newArray);
  },

  compareArrays: (array1, array2) => {
    if (array1.length !== array2.length) return console.log(false);
    const isEqual = array1.every((item, index) => {
      return item === array2[index];
    })
    console.log(isEqual);
  },

  mergeArrays: (array) => {
    const mergedArray = [].concat.apply([], array);
    console.log(mergedArray);
  },

  divideArray: (array, innerArraySize) => {
    const numberOfInnerArrays = Math.ceil(array.length / innerArraySize)
    const newArray = [];
    array.map(() => {
      for (let i = 0; i < numberOfInnerArrays; i++) {
        newArray[i] = array.splice(0, innerArraySize);
      }
    })
    console.log(newArray);
  },

  findCommonValue: (...args) => {
    const mergedArray = [].concat.apply([], args);
    const filteredArray = mergedArray.filter((item, index) => {
      return mergedArray.indexOf(item) !== index;
    })   
    console.log(filteredArray);
  }
}

//Exercícios

// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']
console.log('Exercício 1:');
arrayMethods.createArray(3, 'a');

// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]
console.log('Exercício 2:');
arrayMethods.invertArray([1,2,3,4]);

// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]
console.log('Exercício 3:');
arrayMethods.clearArray([1,2,'', undefined]);

// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
// Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}
console.log('Exercício 4:');
arrayMethods.convertIntoObject([["c",2],["d",4]]);

// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada.
// Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]
console.log('Exercício 5:');
arrayMethods.filterFromArray([5,4,3,2,5], 5,3);

// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]
console.log('Exercício 6:');
arrayMethods.ignoreDuplicatedValues([1,2,3,3,2,4,5,4,7,3]);

// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true
console.log('Exercício 7:');
arrayMethods.compareArrays([1,2,3,4],[1,2,3,4]);

// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]
console.log('Exercício 8:');
arrayMethods.mergeArrays([1, 2, [3], [4, 5]]);

// 9) Implemente um método que divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]
console.log('Exercício 9:');
arrayMethods.divideArray([1, 2, 3, 4, 5], 2);

// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]
console.log('Exercício 10:');
arrayMethods.findCommonValue([6, 8], [8, 9]);