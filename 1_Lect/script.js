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
// }                       // Записал в файл sum.js

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
console.log('Максимальная длительность практики в 1 и 2 группах: ' + findMax(...group1PracticeTime, ...group2PracticeTime));

const groupAllPracticeTime = [...group1PracticeTime, ...group2PracticeTime];
console.log(groupAllPracticeTime);

// Максимальное время практики первых трёх и остаток в консоль

function findMax3(val1, val2, val3, ...rest) {
    console.log('Максимальная длительность практики 3 студентов:' + Math.max(val1, val2, val3));
    console.log(rest);
}

findMax3(...group1PracticeTime, ...group2PracticeTime);


// Чистые функции,иммутабельность

// Чистые функции-это функции которые при вызове с одними и теми же аргументами всегда возвращают одинаковое значение, при этом такие функции оперируют данными только из полученных аргументов и ни как не взаимодействуют с глобальными переменными.

const student = {
    firstName: "Ivan",
    age: 21,
};

// Функция вычисления года рождения. Принимает текущий год, и вычисляет год рождения студента используя глобальные данные. Это функция с побочными эффектами. Она сильно зависит от глобальной переменной student.
const getYearOfBirth = (currentYear) => {
    return currentYear - student.age;
}

console.log(getYearOfBirth(2021)); // 2000 
student.age = 25;
console.log(getYearOfBirth(2021)); // 1996
// Мы вызывали функцию дважды с одним и тем же параметром, но получили разный результат.

// Чистая версия функции. Берет данные только из своих аргументов. 
const getYearOfBirthPureVersion = (age, currentYear) => {
    return age - currentYear;
}

// Более сложный пример с мутацией- изменением исходных объектов (побочными эффектами), но более частый на практике.

// Изменение исходного объекта, может привести к нежелательным последствиям в остальном коде, которые порой очень сложно обнаружить.

// Функция добавления нового ключа в объект. Принимает исходный объект, имя ключа, и значение, которое надо добавить. 

const addField = (object, key, value) => {
    object[key] = value;
    return object;
};

console.log(student); // {firstName: 'Ivan', age: 25}
addField(student, 'lastName', 'Belkin');
console.log(student); // {firstName: 'Ivan', age: 25, lastName: 'Belkin'} - изменился исходный объект

// Чистый вариант функции- нам нужно создать новый объект внутри функции для изменения и возврата.

const addFieldPureVersion = (object, key, value) => {
    return {
        // возвращаем новый объект. 
        ...object, // Воспользуемся оператором spread, для получения копии свойств исходного объекта. 
        [key]: value // Добавим новое свойство. 
    }
};

// 
newStudent = addFieldPureVersion(student, 'secondName', 'Pavlovitch');
console.log(student); // {firstName: 'Ivan', age: 25, lastName: 'Belkin'}
console.log(newStudent); // {firstName: 'Ivan', age: 25, lastName: 'Belkin', secondName: 'Pavlovitch'}


// Замыкания

// Замыкание — это термин для механизма сохранения данных.n Мы замыкаем данные внутри функции таким образом, чтобы к этим данным можно было обратиться и изменить их внутри этой функции, но при этом они были не доступны снаружи. 

// На этом механизме работают кэширование вычислений функций - скрытие переменных в модулях (когда несколько скриптов, подключенных к одной странице могут иметь одинаковые переменные и мешать работе друг друга), создание хранилищ данных, защищённых от доступа из внешнего кода.

// Подход к созданию замыканий: 
// ● создать функцию; 
// ● внутри неё объявить переменные, которые мы хотим в ней замкнуть: 
// спрятать, сохранить и использовать в дальнейшем; 
// ● вернуть из неё другую функцию, которая уже выполняет какое-то конкретное действие и может использовать замкнутые (спрятанные) данные.

let count1 = 0;

const countUp = (val) => {
    return count1 + val;
}
console.log(countUp(5)); // 5

const countUpClosure = () => {
    const step = 3; // не видна вне функции
    return count1 + step;
}
console.log(countUpClosure(5)); // 3
// console.log(step); // Ошибка step is not defined

// Пример со счётчиком
console.log('Пример со счётчиком');

const createCounter = () => {
    let counter = 0;
    return () => {
        return ++counter;
    }
}


const counter1 = createCounter(); // Создаем счетчик.
console.log(counter1());  // 1 
console.log(counter1()); // 2  
console.log(counter1()); // 3

//Создадим еще один счетчик. Каждый будет работать независимо. 
const counter2 = createCounter();
console.log(counter2()); // 1 
console.log(counter2()); // 2
console.log(counter1()); // 4

// Кэширование результатов в функции
// Пример — создание функции с кэшированием результатов расчета. Бывают функции, которые делают сложные расчеты, поэтому имеет смысл сохранять результат такого расчета с привязкой к аргументам, с которыми была вызвана функция, чтобы если функция будет вызвана с такими аргументами повторно, был уже готовый результат. 
// Возьмем простую функцию, которая вычисляет квадрат числа:
console.log('Кэширование результатов');

const closureFunction = () => {
    const cache = {};
    return (x) => {
        if (cache[x]) return cache[x];
        const result = x * x;
        cache[x] = result;
        return result;
    }
}

const cachedPow = closureFunction(); 
console.log(cachedPow(2)); // 4 
console.log(cachedPow(8)); // 64 
console.log(cachedPow(2)); // 4 — тут функция возьмёт значение из кеша и не будет вычислять его заново.


// Лексический контекст 

// Замыкания работают благодаря такому механизму, как лексическое окружение. Именно лексическое окружение (или лексический контекст) позволяет хранить все эти замкнутые данные и обращаться к ним при вызове функции,а так же позволяет функции иметь доступ к внешним данным. 
// Лексический контекст или лексическое окружение — это механизм в JavaScript, который позволяет функции во время её вызова получать доступ к переменным, константам и всему, что ей нужно. 
// Каждый раз при вызове функции создаётся что-то вроде объекта словаря, который записывает все значения переменных и констант внутри функции, а также тех переменных и констант вне функции, к которым она обращается. 

// файл lexical.js


// Рекурсия

// рекурсия- это объект определенной структуры, который может содержать в себе другой объект такой же структуры, который в свою очередь также может содержать объект такой же структуры и так далее.

// файл recursion.js


















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




