// Создание объектов и наследование с использованием class и extends 

// С приходом ES2015 в язык был добавлен синтаксис классов, чтобы все эти операции можно было делать удобнее и в более привычном синтаксисе для тех, кто уже программировал с использованием классов в других языках программирования.

// Объявляя класс, движок JavaScript создает функцию конструктор по имени класса и берет её код из метода constructor класса, если такого метода нет, то функция будет пустой. Если класс расширяет другой класс, то для этой функции указывается свойство prototype. После чего находит все остальные  методы объекта и прописывает их в свойство prototype для новой функции.

// Класс робот-пылесос. 
class VacuumCleaner {
    model = "vacuum cleaner";
    counterOfStarts = 0;
    isFull = false;
    isObstacle = false;

    constructor() { }

    startCleaning() {
        this.counterOfStarts++;
        console.log('I am the method of VacuumCleaner');
        console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    }

    goCharge() {
        console.log('I am the method of VacuumCleaner');
        console.log('I am going to charge...');
    }
}

const BaseRobot = new VacuumCleaner;

console.log(BaseRobot.constructor); // class VacuumCleaner {...

console.log(BaseRobot.model); // vacuum cleaner 
BaseRobot.startCleaning(); // I am the method of VacuumCleaner // I am cleaning... I have been started: 1 times.

// Расширенный класс DancingSeries. 
// C помощью extends мы указываем от какого класса будем наследоваться. 

class DancingSeries extends VacuumCleaner {
    model = "dancing series";
    power = 200;
    batterySize = 2100;
    boxSize = 0.5;
    workTime = 45;
    isUVLampOn = false;

    switchUVLamp() {
        console.log('I am the method of DancingSeries');
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
    }
};

const DancingRobot = new DancingSeries; 

console.log(DancingRobot.__proto__); // VacuumCleaner {constructor: ƒ, switchUVLamp: ƒ} 

console.log(DancingRobot.model); // dancing series 

DancingRobot.switchUVLamp(); // I am the method of DancingSeries 
// lamp is working.

