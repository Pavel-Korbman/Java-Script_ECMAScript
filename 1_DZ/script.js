// Задание №1 
// Нахождение минимального числа в массиве 
// Дан массив const arr = [1, 5, 7, 9].
// Используя метод Math.min и оператор распространения (spread operator), найдите минимальное число в массиве. 
// Решение должно быть написано в одной строке.

const arr = [1, 5, 7, 9];
console.log('min = ' + Math.min(...arr));

// Задание №2 
// Создание счетчика 
// Напишите функцию createCounter, которая создает счетчик и возвращает объект с тремя методами: 
// increment, decrement и getValue. 
// Метод increment должен увеличивать значение счетчика на 1, 
// метод decrement должен уменьшать значение счетчика на 1, 
// а метод getValue должен возвращать текущее значение счетчика. 
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    let i = 0;
    return {

        increment: () => { 
            i++;
            return i; },
        decrement: () => { 
            i--;
            return i; },
        getValue: () => { return i; }
    }
}
console.log('Пример2');
const counter = createCounter();
console.log(counter.increment()); // Ожидаемый вывод: 1 
console.log(counter.increment()); // Ожидаемый вывод: 2 
console.log(counter.decrement()); // Ожидаемый вывод: 1 
console.log(counter.getValue()); // Ожидаемый вывод: 1

console.log('Пример2');
console.log(counter.decrement());
console.log(counter.getValue());
console.log(counter.decrement());
console.log(counter.getValue());
console.log(counter.decrement());
console.log(counter.getValue());
































/*
const arr = [1, 5, 7, 9];
console.log('Минимум: ' + Math.min(...arr));

function createCounter() {
    let i = 1;
    return {
        increment: () => { return i*=10; },
        decrement: () => { return i--; }
    }
}

const countUp = createCounter().increment;
const countDown = createCounter().decrement;

// console.log(countUp());
// console.log(countUp());
// console.log(countUp());

// console.log(countDown());
// console.log(countDown());
// console.log(countDown());

for (let index = 0; index < 10; index++) {
    console.log(countUp());
    //console.log(countDown());
}
*/




