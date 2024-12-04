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
// } // Записал в файл sum.js

console.log(sumTwo(...arr));

// Примеры:
console.log('Пример 1');
// Напишем не очень удобную, но показательную функцию, которая умеет принимать неограниченное число аргументов, и находить максимум среди них. Функция должна вызываться подобным образом: const maximum = findMax(4, 7, 10);

function findMax() {
    const values = arguments; // arguments- переменная доступная внутри каждой функции, которая содержит в себе все аргументы, переданные в функцию. Является псевдомассивом. 
    let maxValue = -Infinity; // Так как arguments является псевдомассивом, мы не можем применять к нему новые методы массивов такие как forEach или reduce, поэтому будем итерировать по старинке. 
    for (let index = 0; index < values.length; index++) {
        if (values[index] > maxValue) maxValue = values[index];
    }
    return maxValue;
};

const group1PracticeTime = studentsGroup1PracticeTime.map((student) => student.practiceTime);
console.log(group1PracticeTime);
const group2PracticeTime = studentsGroup2PracticeTime.map((student) => student.practiceTime);
console.log(group2PracticeTime);

console.log('Максимальная длительность практики в 1 группе: ' + findMax(...group1PracticeTime));
console.log('Максимальная длительность практики в 2 группе: ' + findMax(...group2PracticeTime));
































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




