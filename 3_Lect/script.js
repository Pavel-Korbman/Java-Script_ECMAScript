// Прототип

// До ES2015 в JavaScript не было понятия class как в других языках программирования, поэтому возможности для работы с объектами как в объектно-ориентированных языках были реализованы через использование прототипов - специализированного свойства в объекте, которое добавляется к любому новому объекту. Так наследование свойств от родителя к потомку происходит через это специальное свойство __proto__, которое указывает на какой объект ссылаться,как на родителя.

// Объект робот-пылесос. 
const VacuumCleaner = {
    model: "vacuum cleaner",
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,

    startCleaning: function () {
        this.counterOfStarts++;
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали. 
        console.log('I am the method of VacuumCleaner');
        console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    },

    goCharge: function () {
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали. 
        console.log('I am the method of VacuumCleaner');
        console.log('I am going to charge...'); 3
    }
};

// Мы оставили в нем только служебные свойства и методы, при этом мы убрали даже свойства isUVLampOn - так как это свойство будет не во всех моделях пылесосов. Теперь мы хотели бы создать пылесос с конкретными характеристиками, но чтобы не создавать объект с нуля и прописывать все свойства мы можем взять базовую модель VacuumCleaner и наследоваться от неё, установив у нового объекта свойства прототипа __proto__ на родительский объект и добавив новые свойства - вот так:

const DancingSeries = {
    // Объявляем новые свойства и переопределяем свойство model. 
    model: "dancing series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    isUVLampOn: false,
    // Добавляем новый метод. 
    switchUVLamp: function () {
        console.log('I am the method of DancingSeries');
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
    },
    // Делаем ссылку на прототип от родителя. 
    __proto__: VacuumCleaner,
};

DancingSeries.startCleaning(); // I am the method of VacuumCleaner 
// I am cleaning... I have been started:  1 times.

const Samba = {
    // Обновляем свойства под конкретную модель. 
    model: "Samba-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
    // Делаем ссылку на прототип от родителя. 
    __proto__: DancingSeries,
};

Samba.startCleaning(); // I am the method of VacuumCleaner
// I am cleaning... I have been started:  2 times.

// Обращение к свойствам объекта. 
console.log(Samba.model); // "Samba-1" 
console.log(Samba.isFull); // false 

// // Вызов методов объекта. 
Samba.startCleaning(); // I am the method of VacuumCleaner // 'I am cleaning... I have been started: 1 times.' 

Samba.isUVLampOn = true;
Samba.switchUVLamp(); // I am the method of DancingSeries 
// 'UV lamp is not working.' 

Samba.goCharge(); // I am the method of VacuumCleaner 
// 'I am going to charge...'

// Если мы попытаемся в потомке переопределить свойство или метод из родительского объекта, то родительский объект остается нетронутым, а в дочерний запишется новое свойство или метод, и оно будет вызываться при обращении к нему, давайте создадим еще одного робота, и переопределим в нем метод startCleaning:

const Djaiv = {
    model: "Djaiv-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
    // Переопределим метод startCleaning. 
    startCleaning: function () {
        this.counterOfStarts++;
        console.log('I am the method of Djaiv');
        console.log('I am Djaiv, and I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    },
    __proto__: DancingSeries,
};

Samba.startCleaning(); // I am the method of VacuumCleaner 
// 'I am cleaning... I have been started: 1 times.' 

Djaiv.startCleaning(); // I am the method of Djaiv 
// I am Djaiv, and I am cleaning... I have been started: 1 times.

// Объект Samba использует родительский метод и он не изменился,а Djaiv использует свой собственный метод.

// Методы для установки прототипа. 
// Устанавливать прототип объекта можно используя свойство __proto__, но также в языке есть два метода для чтения и установки прототипа объекта- это getPrototypeOf и setPrototypeOf. 
// Эти методы не доступны в браузере Internet Explorer версии ниже 10.

// getPrototypeOf 
// Метод getPrototypeOf позволяет получить ссылку на объект прототип.

// Получим прототип для объекта Djaiv. 
const DjaivProto = Object.getPrototypeOf(Djaiv);
console.log(DjaivProto.model); // dancing series 

const DjaivProtoProto = Object.getPrototypeOf(DjaivProto);
console.log(DjaivProtoProto.model); //vacuum cleaner 

const DjaivProtoProtoProto = Object.getPrototypeOf(DjaivProtoProto);
console.log(DjaivProtoProtoProto); // [object Object]

// setPrototypeOf 
// Для установки прототипа используем метод setPrototypeOf - он принимает два аргумента, первый это объект для которого устанавливается прототип, второй - это объект который будет прототипом для первого.

const MusicSeries = {
    model: "music series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    // Добавляем новый метод. 
    startWipe: function () {
        console.log('I am the method of MusicSeries');
        console.log('I am starting to wipe the floor...');
    },
    __proto__: VacuumCleaner,
};

const Blues = {
    // Обновляем свойства под конкретную модель. 
    model: "Bluees-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
};
// Установим прототип для робота. 
Object.setPrototypeOf(Blues, MusicSeries);



if (Object.getPrototypeOf(Djaiv).model === 'dancing series') {
    Djaiv.startCleaning(); // I am the method of Djaiv
    // I am Djaiv, and I am cleaning... I have been started:  3 times.
}

if (Object.getPrototypeOf(Blues).model === 'music series') {
    Blues.startWipe(); // I am the method of MusicSeries
    // I am starting to wipe the floor...
}

// Если не проверять прототип и просто вызвать метод чужого прототипа, получим ошибку.
//Djaiv.startWipe(); // Uncaught TypeError: Djaiv.startWipe is not a function


console.log('');
// Конструктор объекта

// Чтобы создать функцию конструктор для объекта, она должна называться с большой буквы (не обязательно, но это позволяет явно видеть что это конструктор для объекта), а внутри этой функции через this объявить свойства и методы для объекта. При этом мы можем передавать аргументы этой функции, которые можем использовать как первоначальные значения для свойств, или для создания сложной логики в методах, или даже определять какие методы и свойства получит объект в зависимости от аргументов.
console.log('Конструктор объекта');

function Samba2(serailNumber) {
    // Создаем свойства объекта, используя this. 
    this.serialNumber = serailNumber;
    this.model = "Samba-2";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;
    // Делаем ссылку на прототип от родителя. 
    // this.__proto__ = DancingSeries;
}

Samba2.prototype = DancingSeries; // Вместо this.__proto__ = DancingSeries;

// Создадим экземпляр нового объекта. 
const samba20 = new Samba2(1014778);

console.log(samba20.serialNumber); // 1014778
samba20.startCleaning();

// Можно создать много роботов

const robots = [];

for (let index = 0; index < 10; index++) {
    robots.push(new Samba2(index));
}

console.log(robots[3].serialNumber); // 3 
console.log(robots[7].serialNumber); // 7


// Оператор new 
// Оператор new позволяет создавать новые объекты, используя для этого функцию-конструктор. Работает он следующим образом: 
// 1. Создает пустой объект, который наполнит всем необходимым. 
// 2. Устанавливает этот объект как this для функции конструктора, чтобы можно было использовать this внутри функции и добавлять свойства и методы в этот объект. 
// 3. Вызывает функцию конструктор для инициализации объекта. 
// 4. Если у функции конструктора есть свойство prototype, устанавливает значение этого свойства как прототип для нового объекта (свойство __proto__). 
// 5. Устанавливает свойство constructor объекта ссылкой на функцию конструктор. 6. Если функция конструктор не возвращает ничего или возвращает какое-то примитивное значение, то оператор new вернет новый созданный и наполненный объект, если конструктор возвращает объект, то оператор new вернет этот объект. 
console.log('');
console.log('Оператор new');
console.log('');
// Попробуем создать свою версию оператора new в виде функции:

function createObject(constructor) {
    // Создаем новый объект. 
    const obj = {};

    // Установим новому объекту прототипом прототип функции-конструктора 
    Object.setPrototypeOf(obj, constructor.prototype);

    // Вызовем функцию-конструктор, передав ей как this созданный на шаге 1 объект, и передадим остальные аргументы, если они были переданы в createObject 

    const argsArray = Array.prototype.slice.apply(arguments);
    const result = constructor.apply(obj, argsArray.slice(1));

    // Вернем новый объект, если конструктор вернул примитивное значение или undefined, иначе вернем то, что вернул конструктор.

    if (!result || typeof result === 'string' || typeof result === 'number' || typeof result === 'boolean') {
        return obj
    } else {
        return result;
    }
}

// Создадим экземпляр нового объекта. 
const Samba100 = createObject(Samba2, 7777);

// Проверим установку свойств в конструкторе. 
console.log(Samba100.serialNumber); // 7777

// Проверим, что прототип установился корректно, и мы можем вызывать методы из родительских объектов. 
console.log(Samba100.__proto__); // {model: "dancing series", power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, ...} 

Samba100.startCleaning(); // I am the method of VacuumCleaner 
// I am cleaning... I have been started: 1 times.

// Проверим присвоение конструктора. 
console.log(Samba100.constructor); // ƒ Object() { [native code] }

// ❗ Свойство __proto__ объекта и свойство prototype 
// у функции конструктора это не одно и то же. Свойство __proto__ есть у экземпляра объекта, и оно позволяет находить родителей объекта, свойство prototype выполняет служебную функцию при создании экземпляра объекта через оператор new.
console.log('');
console.log('свойства __proto__ и prototype');

function Samba7(serialNumber) {
    this.serialNumber = serialNumber;
    this.model = "Samba-7";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;
}

// Делаем ссылку на прототип от родителя. 
Samba7.prototype = DancingSeries;

const Samba700 = new Samba7(1014778);

// Посмотрим на свойства __proto__ и prototype 

console.log(Samba700.__proto__); // {model: "dancing series", power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, ...} 

console.log(Samba700.prototype); // undefined 

console.log(Samba700.__proto__ === Samba7.prototype); // true

// ❗ В экземпляре объекта нет свойства prototype, данные из него перешли в свойство__proto__.


// Object.create 
console.log('');
console.log('Метод Object.create');
// Метод Object.create позволяет создавать новые объекты, принимая в качестве аргументов объект прототип для создаваемого объекта, и вторым аргументом (необязательным) свойства для нового объекта в формате объект с ключами и значениями дескрипторов для свойств. 

const Samba8 = new Samba7(101);

console.log(Samba8.toString()); // [object Object]

// Хоть мы и не объявляли метод toString в нашей цепочке объектов, но он присутствует и идёт от самого первого объекта (базового), т.к.его прототип - это сам объект Object

// Создадим пустой объект без прототипа. 
const Samba9 = Object.create(null); 

// Попробуем обратиться к стандартному методу toString и посмотреть на свойство __proto__ 
console.log(Samba9.toString); // undefined 
console.log(Samba9.__proto__); // undefined