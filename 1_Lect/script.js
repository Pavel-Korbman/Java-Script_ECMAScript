// Spread,rest operator

//  Spread (от английского расширить)-оператор расширения, или по другому распространения данных из массива в атомарные элементы.Т.е.мы можем взять массив, и вытащить все его элементы как отдельные переменные. Перед именем массива ставим ...  . 

// !! Если в функцию с двумя аргументами передадим через Spread массив с 10 элементами то аргументам присвоятся первые 2 элемента

const arr = [1, 4, 9, 0, -2, 4];

console.log(Math.max(...arr)); // 9  Math.max принимает любое количество аргументов
console.log(Math.min(...arr)); // -2

// Rest operator 
// Rest (от английского остальные, оставшиеся)-позволяет собрать оставшиеся - не вошедшие в аргументы функции элементы в массив. Позволяет не перечислять все аргументы функции, как отдельные переменные, а получить их в один массив. Для его использования необходимо в функции,  перечислить необходимые аргументы а все оставшиеся, которые мы хотим собрать в один массив записать как …<имя массива>. Часто пишут(arg1, arg2, ...rest).

// function sumTwo(num1, num2, ...rest) {
//     console.log(rest);
//     return num1 + num2;
// }

console.log(sumTwo(...arr));





























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




