// Объект со стрелочными функциями:

const Roomba1 = {

    model: "Romba-1",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    isUVLampOn: false,

    startCleaning: () => {
        this.counterOfStarts++;
        console.log('I am cleaning... I have been started: ',
            this.counterOfStarts, 'times.');
    },
    goCharge: () => {
        console.log('I am going to charge...');
    },
    switchUVLamp: () => {
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
    }
};

// Вызовы методов объекта. 
Roomba1.startCleaning(); // I am cleaning... I have started: NaN times. 

Roomba1.startCleaning.call(Roomba1); // I am cleaning... I have started: NaN times. 
Roomba1.startCleaning.apply(Roomba1); // I am cleaning... I have started: NaN times. 
const bindedMethod = Roomba1.startCleaning.bind(Roomba1);
bindedMethod(); // I am cleaning... I have been started: NaN times. 

setTimeout(Roomba1.startCleaning.bind(Roomba1), 1000); // I am cleaning... I have started: NaN times.


const Stand = {
    model: "Stand-1",
    robots: ['Roomba-1', 'Tango-1', 'Samba-1', 'Roomba-2'],
    // Метод, с использованием стрелочной функции в качестве функции обратного вызова. 
    startTestingArrow: function () {
        console.log('Start testing...');
        this.robots.forEach((value) => {
            console.log('stand: ', this.model, 'is testing robot: ', value);
        })
    },
    // Метод, с использованием классической функции в качестве функции обратного вызова. 
    startTestingClassic: function () {
        console.log('Start testing...');
        this.robots.forEach(function (value) {
            console.log('stand: ', this.model, 'is testing robot: ', value);
        })
    }
};

Stand.startTestingArrow(); // метод со стрелочной функцией
// Start testing... 
// stand: Stand-1 is testing robot: Roomba-1 
// stand: Stand-1 is testing robot: Tango-1 
// stand: Stand-1 is testing robot: Samba-1 
// stand: Stand-1 is testing robot: Roomba-2 
Stand.startTestingClassic(); // метод с стрелочной функцией
// Start testing...
// stand: undefined is testing robot: Roomba-1
// stand: undefined is testing robot: Tango-1
// stand: undefined is testing robot: Samba-1
// stand: undefined is testing robot: Roomba-2