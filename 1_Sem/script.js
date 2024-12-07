// Задание 1
// 1. Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержащий все элементы из обоих массивов. Используйте spread оператор для объединения массивов. mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1, 2, 3, 4, 5, 6] 

// 2. Создайте функцию removeDuplicates, которая принимает любое количество аргументов и возвращает новый массив, содержащий только уникальные значения. Используйте rest оператор для сбора всех аргументов в массив а затем filter для определения дубликатов. removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый результат: [1, 2, 3, 4, 5]
console.log('Задание 1');
// 1
mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

const mergeArrays1 = (arr1, arr2) => [...arr1, ...arr2];

console.log(mergeArrays1([1, 2, 3], [4, 5, 6]));

// 2

function removeDuplicates(...rest) {
    return rest.filter((e, index) => index === rest.indexOf(e));
}
console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

removeDuplicates1 = (...rest) => rest.filter((e, index) => index === rest.indexOf(e));

console.log(removeDuplicates1(1, 2, 3, 2, 4, 1, 5));


// 1. Напишите функцию getEvenNumbers, которая принимает массив чисел в качестве аргумента и возвращает новый массив, содержащий только четные числа. 
// 2. Задача: Напишите функцию calculateAverage, которая принимает массив чисел в качестве аргумента и возвращает среднее значение этих чисел. 
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.
console.log('Задание 2 (Чистые функции)');
console.log('Задание 2.1');
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const getEvenNumbers = (array) => [...array].filter((e) => e % 2 !== 0);
const getEvenNumbers = (array) => array.filter((e) => e % 2 !== 0);

console.log(array);
console.log(getEvenNumbers(array));

console.log('Задание 2.2');

const calculateAverage = (array) => {
    res = 0;
    array.forEach(e => { res += e; });
    return res / array.length;
}

const calculateAverage1 = (array) => {
    sum = array.reduce((acc, item) => acc + item, 0);
    return sum / array.length;
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(calculateAverage(array1));
console.log(calculateAverage1(array1));

console.log('Задание 2.3');

function capitalizeFirstLetter(string) {
    const works = string.split(' ');
    const stringRes ='';
    works.forEach(e => {
        
        console.log(res + e.charAt(0).toUpperCase() + e.slice(1));
    });
    console.log(works);
}


// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
const string = 'привет меня зовут павел';
capitalizeFirstLetter(string);



//console.log(string);