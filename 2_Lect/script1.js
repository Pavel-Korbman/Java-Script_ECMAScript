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

