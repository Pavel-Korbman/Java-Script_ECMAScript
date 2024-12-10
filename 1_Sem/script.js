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

// Задание 2
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
    let stringRes = works[0].charAt(0).toUpperCase() + works[0].slice(1);
    for (let i = 1; i < works.length; i++) {
        stringRes += ' ' + works[i].charAt(0).toUpperCase() + works[i].slice(1);
    }

    return stringRes;
}


const string = 'привет меня зовут павел, как дела?';
console.log(capitalizeFirstLetter(string));

// Задание 3 (Замыкания) 
// 1. Напишите функцию createCalculator, которая принимает начальное значение и возвращает объект с двумя методами: add и subtract. Метод add должен увеличивать значение на переданное число, а метод subtract должен уменьшать значение на переданное число. Значение должно быть доступно только через методы объекта, а не напрямую.
console.log('Задание 3 (Чистые функции)');

function createCalculator(i, j) {
    let res = i;
    return {
        add: () => {
            res += j;
            return res;
        },
        subtract: () => {
            res -= j;
            return res;
        }

    }
}

const calculator = createCalculator(10, 4);
console.log(calculator.add());
console.log(calculator.add());
console.log(calculator.add());

console.log(calculator.subtract());
console.log(calculator.subtract());
console.log(calculator.subtract());

// Задание 4 (Лексический контекст) 
// 1. Напишите функцию createGreeting, которая принимает имя пользователя и возвращает функцию, которая будет выводить приветствие с использованием этого имени. 

// Пример использования: const greeting = createGreeting('John'); greeting(); // Ожидаемый результат: "Hello, John!"
console.log('Задание 4');

function createGreeting(youName) {
    return () => {
        console.log(`"Hello, ${youName}!"`);
    }
}

const greeting = createGreeting('John');
greeting(); // Ожидаемый результат: "Hello, John!"

// Задание 5 
// 1. Задача: Напишите функцию createPasswordChecker, которая принимает допустимую длину пароля в качестве аргумента и возвращает функцию для проверки введенного пароля. Возвращаемая функция должна принимать пароль и возвращать true, если его длина соответствует допустимой, и false в противном случае. 

// // Пример использования: 
// const isPasswordValid = createPasswordChecker(8); console.log(isPasswordValid('password')); // Ожидаемый результат: false 
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true
console.log('Задание 5');

function createPasswordChecker(maxLength) {
    return function isPasswordValid(pass) {
        return (pass.length < maxLength) ? true : false;
    }
}

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password')); // Ожидаемый результат: false 
console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// Задание 6 
// 1. Напишите рекурсивную функцию sumDigits, которая принимает положительное целое число в качестве аргумента и возвращает сумму его цифр. 
// // Пример использования: 
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3) 
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)
console.log('Задание 6');

// function sumDigits(num) {
//     let res =0;
//     return (Math.floor(num / 10) === 0) ? res += num : (res = num % 10 + sumDigits(Math.floor(num / 10)));
// };

function sumDigits(num) {
    return (num < 10) ? num : num % 10 + sumDigits(Math.floor(num / 10));
};

console.log(sumDigits(123));
console.log(sumDigits(456789));
