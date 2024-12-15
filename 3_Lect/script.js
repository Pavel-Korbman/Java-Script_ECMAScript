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

