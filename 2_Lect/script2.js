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
    constructor() { };

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



