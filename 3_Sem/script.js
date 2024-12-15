// Задание 1
console.log('');
console.log('Задание 1');
// Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта obj. 
// Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом Object.prototype.

getPrototypeChain = (obj) => {
    const res = [];
    let object = obj;
    while (object !== null) {
        res.push(object);
        object = Object.getPrototypeOf(object);
    }
    return res;
}

const obj1 = {
    name: 'obj1',
    val1: 'Значение1',
    val2: 'Значение2',
    hi: function () {
        console.log('Привет, я', this.name);
    }
};
obj1.hi();

const obj2 = {
    name: 'obj2',
    val3: 'Значение3'
};

Object.setPrototypeOf(obj2, obj1);

obj2.hi();

const protoArr = getPrototypeChain(obj2);
console.log(protoArr); // (3) [{…}, {…}, {…}]


// Задание 2
console.log('');
console.log('Задание 2');
// Напишите конструктор объекта Person, который принимает два аргумента: 
// name (строка) и age (число). 
// Конструктор должен создавать объект с указанными свойствами name и age и методом introduce(), который выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.". 

// Пример: const person1 = new Person("John", 25); 
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function () {
        console.log(`Меня зовут ${this.name} и мне ${this.age} лет.`);
    }
}

const person1 = new Person("John", 25);
person1.introduce();


// Задание 3 
console.log('');
console.log('Задание 3');
// Напишите конструктор объекта BankAccount, который будет представлять банковский счет. Конструктор должен принимать два аргумента: 
// accountNumber (строка) и balance (число). 
// Конструктор должен создавать объект с указанными свойствами accountNumber и balance и следующими методами: 
// 1. deposit(amount): принимает аргумент amount (число) и увеличивает баланс на указанную сумму. 
// 2. withdraw(amount): принимает аргумент amount (число) и уменьшает баланс на указанную сумму, если на счету есть достаточно средств. 
// Если средств недостаточно, выводится сообщение "Недостаточно средств на счете.". 
// 3. getBalance(): возвращает текущий баланс счета.

// const account1 = new BankAccount("1234567890", 1000); 
// console.log(account1.getBalance()); // Вывод: 1000 
// account1.deposit(500); 
// console.log(account1.getBalance()); // Вывод: 1500 
// account1.withdraw(200);
// console.log(account1.getBalance()); // Вывод: 1300 
// account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."

function BankAccount(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance += amount;
    }

    this.withdraw = function (amount) {
        (this.balance >= amount) ? this.balance -= amount : console.log("Недостаточно средств на счете.");
    }

    this.getBalance = function () {
        return this.balance;
    }
}

const account1 = new BankAccount("1234567890", 1000);

console.log(account1.getBalance()); // Вывод: 1000 

account1.deposit(500);
console.log(account1.getBalance()); // Вывод: 1500 

account1.withdraw(200);
console.log(account1.getBalance()); // Вывод: 1300 

account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."


// Задание 4
console.log('');
console.log('Задание 4');
// Создайте класс Animal, который будет представлять животное. У класса Animal должны быть следующие свойства и методы: 
// ● Свойство name (строка) - имя животного. 
// ● Метод speak() - выводит в консоль звук, издаваемый животным. 

// Создайте подкласс Dog, который наследует класс Animal. Для подкласса Dog добавьте дополнительное свойство и метод: 
// ● Свойство breed (строка) - порода собаки. 
// ● Метод fetch() - выводит в консоль сообщение "Собака [name] принесла мяч.".

// const animal1 = new Animal("Животное");
// animal1.speak(); // Вывод: Животное издает звук. 
// const dog1 = new Dog("Бобик", "Дворняжка"); 
// dog1.speak(); // Вывод: Животное Бобик издает звук. 
// console.log(dog1.breed); // Вывод: Дворняжка 
// dog1.fetch(); // Вывод: Собака Бобик принесла мяч.

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`Животное ${this.name} издает звук.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    fetch() {
        console.log(`Собака ${this.name} принесла мяч.`);
    }
}

const animal1 = new Animal("собака");

animal1.speak(); // Вывод: Животное собака издает звук. 

const dog1 = new Dog("Бобик", "Дворняжка");

dog1.speak(); // Вывод: Животное Бобик издает звук. 

console.log(dog1.breed); // Вывод: Дворняжка 

dog1.fetch(); // Вывод: Собака Бобик принесла мяч.