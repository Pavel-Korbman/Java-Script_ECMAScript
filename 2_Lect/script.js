// Объекты и их методы

// Возьмем робот-пылесос, у него могут быть разные характеристики, такие как мощность двигателя, емкость аккумулятора, время работы без подзарядки, объем контейнера, также у него есть разные датчики, которые могут быть представлены булевыми переменными, например заполнен ли контейнер для мусора, или датчик препятствия. А также у робота-пылесоса есть методы, которые добавляют функциональности: 
// самая главная- уборка комнаты, и дополнительные, отправиться на подзарядку или активировать дезинфекцию ультрафиолетовой лампой. Все это легко можно запрограммировать в виде объекта, давайте напишем такой объект:


const Roomba = {
    // Есть негласное правило называть объекты в алгоритмах с большой буквы. 
    // Обычно сначала объявляют свойства объекта. 
    model: "Romba-1",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    isUVLampOn: false,

    // После свойств объявляют его методы.     
    startCleaning: function () {
        this.counterOfStarts++;
        console.log('I am cleaning... I have been started: ',
            this.counterOfStarts, 'times.');
    },
    goCharge: function () {
        console.log('I am going to charge...');
    },
    switchUVLamp: function () {
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
    }
};

// Обращение к свойствам объекта. 
console.log(Roomba.model); // "Romba-1" 
console.log(Roomba.isFull); // false

// Вызов методов объекта. 
Roomba.startCleaning(); // 'I am cleaning... I have been started: 1 times.'
Roomba.startCleaning(); // 'I am cleaning... I have been started: 2 times.'

// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp. 
Roomba.isUVLampOn = true;

// Результат вызова следующего метода зависит от значения, хранящегося в свойстве объекта, а также от того как этот метод был вызван (об этом поговорим чуть ниже). 
Roomba.switchUVLamp(); // 'UV lamp is not working.' 
Roomba.switchUVLamp(); // 'UV lamp is working.' 

Roomba.goCharge(); // 'I am going to charge...'


// this-это ключевое слово в языке JavaScript, 
// которое позволяет обратиться к свойствам и методам объекта внутри его методов.А так же ключевое слово this доступно в любой функции и либо принимает значение объекта, который являлся контекстом при вызове функции, либо undefined.

// Работа с this 
const checkThis = function () { console.log(this); }

checkThis(); // Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}

const checkThisInObject = {
    testProperty: true,
    checkThis: function () {
        console.log(this);
    },
};

checkThisInObject.checkThis(); // {testProperty: true, checkThis: ƒ}


// Одалживание метода 
// Что если мы хотим одолжить метод одного объекта и использовать его в другом объекте.Для этого давайте создадим еще один объект робота-пылесоса, который будет иметь улучшенные характеристики, но будет иметь такую же функциональность, как первая модель:

// Объект робот-пылесос модель Tango. 
const Tango = {
    model: "Tango-1",
    power: 300,
    batterySize: 3200,
    boxSize: 0.7,
    workTime: 60,
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    isUVLampOn: false,
    // Так как методы у новой модели такие же как и у старой, позаимствуем их у объекта Roomba. 
    startCleaning: Roomba.startCleaning,
    goCharge: Roomba.goCharge,
    switchUVLamp: Roomba.switchUVLamp,
};

console.log(Tango.model); // "Tango-1" 
console.log(Tango.isFull); // false

Tango.startCleaning(); // 'I am cleaning... I have been started: 1 times.'

Tango.isUVLampOn = true;

Tango.switchUVLamp(); // 'UV lamp is not working.' 
Tango.goCharge(); // 'I am going to charge...'

const Samba = {
    model: "Samba-1",
    power: 250,
    batterySize: 2500,
    boxSize: 0.5,
    workTime: 50,
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    isUVLampOn: false,
};
// На этот раз мы не будем создавать методы в объекте, мы постараемся их заимствовать непосредственно перед использованием.

// Обращение к свойствам объекта Samba. 
console.log(Samba.model); // "Samba-1" 
console.log(Samba.isFull); // false 

// Одолжим методы из объекта Roomba. 
Samba.startCleaning = Roomba.startCleaning;
Samba.switchUVLamp = Roomba.switchUVLamp;
Samba.goCharge = Roomba.goCharge;

Samba.startCleaning(); // 'I am cleaning... I have been started: 1 times.'
Samba.isUVLampOn = true;
Samba.switchUVLamp(); // 'UV lamp is not working.' 
Samba.goCharge(); // 'I am going to charge...'


// Привязка контекста 
// Продолжим работу с нашим роботом, и попробуем написать небольшую программу тестирования пылесоса, мы будем через небольшие интервалы отдавать пылесосу команды, и смотреть как они отработали:

console.log(Roomba.model); // "Romba-1" 
console.log(Roomba.isFull); // false

// Вызов методов объекта. 
setTimeout(Roomba.startCleaning, 1000);  // setTimeout() позволяет исполнить функцию через указанный промежуток времени.
Roomba.isUVLampOn = true;
setTimeout(Roomba.switchUVLamp, 2000);
setTimeout(Roomba.goCharge, 3000);
// I am cleaning... I have started: NaN times. 
// UV lamp is working. 
// I am going to charge...

// Количество запусков пылесоса стало NaN, а ультрафиолетовая лампа не выключилась. Когда мы вызывали методы объекта напрямую, после его создания, функция вызывалась имея возможность получить доступ к объекту, но когда функция вызывается внутри метода setTimeout, то эта функция теряет доступ к своему объекту, и ключевое слово this в такой функции получает значение undefined. 
// Вот тут и вступает в игру контекст вызова функции.Каждая функция вызывается в контексте некоторого объекта, если эта функция определена вне какого-то пользовательского объекта, то её контекстом будет глобальный объект (например window в браузере),а если определена впользовательском объекте,и вызвана в нём,то контекстом для неё будет этот пользовательский объект. Когда же мы вызываем функцию в отрыве от её объекта, как это происходит при вызове её из setTimeout,то её контекстом становится undefined. Так происходит потому, что мы одалживаем метод у объекта, и функция setTimeout копирует нашу функцию, для того чтобы вызвать её позже, но когда она вызывается доступа к объекту уже нет. Как мы можем это исправить? Один из вариантов обернуть метод в анонимную функцию, и вызвать в ней, тогда эта анонимная функция в своем лексическом окружении сохранит ссылку на объект, из которого наш метод будет вызываться:

console.log(Roomba.model); // "Romba-1" 
console.log(Roomba.isFull); // false

// Вызов методов объекта. 
setTimeout(function () { Roomba.startCleaning(); }, 1000);

Roomba.isUVLampOn = true;

setTimeout(function () { Roomba.switchUVLamp(); }, 2000);
setTimeout(function () { Roomba.goCharge(); }, 3000);

// I am cleaning... I have started: 1 times. 
// UV lamp is not working. 
// I am going to charge...


//  Метод call 
//  позволяет вызвать функцию и явно указать с каким объектом контекста её выполнить 
//  (передать в качестве первого аргумента объект, который будет доступен в функции через ключевое слово this). 
//  Давайте посмотрим на примере с пылесосом:

console.log(Roomba.model); // "Roomba-1" 
console.log(Roomba.isFull); // false

// Вызов метода объекта через call с явной передачей объекта робота-пылесоса в качестве контекста. 
Roomba.startCleaning.call(Roomba); // I am cleaning... I have started: 1 times.

// Мы можем передать в call другой объект и увидеть что функция вызывается в контексте другого объекта:

// Создадим фиктивный объект робота, который содержит только одно свойство, необходимое для работы функции и сразу же зададим ему первоначальное значение, отличное от того, которое задано у робота, для наглядности. 
const notARobot = {
    counterOfStarts: 10,
};

Roomba.startCleaning.call(notARobot); // I am cleaning... I have been started: 11 times.


// Подобно методу call можно использовать метод apply, 
// который также позволяет вызвать функцию и передать необходимый контекст, с единственным отличием от call, метод apply принимает аргументы, которые необходимо передать в вызываемую функцию не списком через запятую, а в виде массива, что порой удобнее.

// Пример использования метода apply, для вызова функции с передачей в качестве контекста объекта notARobot и передачей в неё аргументов arg1, arg2, arg3. 
const notARobot2 = {
    counterOfStarts: 10,
};
// Roomba.startCleaning.apply(notARobot2, [arg1, arg2, arg3]); 
Roomba.startCleaning.apply(notARobot2); // I am cleaning... I have been started: 11 times.

// bind
// И последний метод для привязки контекста это bind (от английского bind связывать)-это самый часто используемый метод, т.к. позволяет привязать контекст к функции раз и на всегда,и в дальнейшем мы можем просто вызывать функции и быть уверены, что она будет вызвана в контексте нужного нам объекта. Именно он поможет нам, починить наш алгоритм тестирования робота с использованием setTimeout.

console.log(Roomba.model); // "Romba-1" 
console.log(Roomba.isFull); // false

setTimeout(Roomba.startCleaning.bind(Roomba), 1000);

Roomba.isUVLampOn = true;

setTimeout(Roomba.switchUVLamp.bind(Roomba), 2000); 
setTimeout(Roomba.goCharge.bind(Roomba), 3000);

// I am cleaning... I have been started: 1 times. 
// UV lamp is not working. 
// I am going to charge...