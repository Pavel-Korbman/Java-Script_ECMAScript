// Объект через class:

// Давайте рассмотрим вариант создания объекта через ключевое слово class и как осуществляется привязка контекста к методам в таком случае. 
// Начнем с примера создания нашего робота пылесоса, пока без привязок контекста:

// Класс робот-пылесос. 
class RobotVacuumCleaner {
    // Свойства класса. 
    model = "Romba-1";
    power = 200;
    batterySize = 2100;
    boxSize = 0.5;
    workTime = 45;
    counterOfStarts = 0;
    isFull = false;
    isObstacle = false;
    isUVLampOn = false;

    // Конструктор класса, мы изучим его подробнее на следующем уроке.
    constructor() {
        this.startCleaning = this.startCleaning.bind(this);
        this.goCharge = this.goCharge.bind(this);
        this.switchUVLamp = this.switchUVLamp.bind(this);
    }

    // Методы класса. 
    startCleaning() {
        this.counterOfStarts++;
        console.log('I am cleaning... I have been started: ',
            this.counterOfStarts, 'times.');
    }

    goCharge() {
        console.log('I am going to charge...');
    }

    switchUVLamp() {
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
    }
}

// Создадим экземпляр класса. 
const Roomba = new RobotVacuumCleaner();

console.log(Roomba.model); // "Romba-1" 
console.log(Roomba.isFull); // false

// Отложенный вызов методов объекта. 
setTimeout(Roomba.startCleaning, 1000); // I am cleaning... I have been started:  1 times.

Roomba.isUVLampOn = true;
setTimeout(Roomba.switchUVLamp, 2000); // UV lamp is not working.
setTimeout(Roomba.goCharge, 3000); // I am going to charge...

// с конструктором всё работает

// 


// Класс со стрелочными функциями

class RobotVacuumCleaner1 {
    // Свойства класса. 
    model = "Romba-2";
    power = 200;
    batterySize = 2100;
    boxSize = 0.5;
    workTime = 45;
    counterOfStarts = 0;
    isFull = false;
    isObstacle = false;
    isUVLampOn = false;
    constructor() { }
    
    // Методы класса. 
    startCleaning = () => {
        this.counterOfStarts++; 
        console.log(this.model, 'I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    }

    goCharge = () => {
        console.log(this.model, 'I am going to charge...');
    }

    switchUVLamp = () => {
        this.isUVLampOn = !this.isUVLampOn; 
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
    }
} 

// Создадим экземпляр класса. 
const Roomba1 = new RobotVacuumCleaner1();

console.log(Roomba1.model); // "Romba-1" 
console.log(Roomba1.isFull); // false

setTimeout(Roomba1.startCleaning, 1000); // Romba-2 I am cleaning... I have been started:  1 times.

Roomba1.isUVLampOn = true;

setTimeout(Roomba1.switchUVLamp, 2000); // UV lamp is not working.
setTimeout(Roomba1.goCharge, 3000); // Romba-2 I am going to charge...






