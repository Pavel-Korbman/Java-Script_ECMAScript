// Задание 1 
// 1. Создайте объект Person, представляющий человека, с следующими свойствами: name, age и gender. 
// Добавьте также методы introduce и changeName. 
// Метод introduce должен выводить информацию о человеке, включая его имя, возраст и пол. 
// Метод changeName должен изменять имя человека на новое заданное значение. Person.name = "John"; 
// Person.age = 25; 
// Person.gender = "male"; 
// Person.introduce(); 

// Ожидаемый результат: 
// My name is John. I'm 25 years old and I identify as male. 
// Person.changeName("Mike");

const Person = {
    name: '',
    age: 0,
    gender: '',

    introduce: function () {
        console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`);
    },

    changeName: function (name) {
        this.name = name;
    }

}

Person.name = "John";
Person.age = 25;
Person.gender = "male";
Person.introduce(); // My name is John. I'm 25 years old and I identify as male.

Person.changeName('Pavel');
Person.introduce(); // My name is Pavel. I'm 25 years old and I identify as male.


// Задание 2
// 1. Создайте объект Animal со свойством name и методом eat(), который выводит сообщение о том, что животное ест. 
// Создайте объект Dog со свойством name и методом bark(), который выводит сообщение о том, что собака лает. 
// Используйте одалживание метода eat() из объекта Animal для объекта Dog, чтобы вывести сообщение о том, что собака ест. 

// Одалживание метода eat() из объекта Animal к объекту Dog 
// Dog.eat = Animal.eat; 
// Dog.eat(); // Вывод: Rex is eating.


const Animal = {
    name: '',
    
    eat: function () {
        console.log(`${this.name} is eating.`);
    }
}

const Dog = {
    name: '',
    
    bark: function () {
        console.log(`${this.name} сейчас лает.`);
    }
}

Dog.name = 'Rex';
Dog.eat = Animal.eat;
Dog.bark(); // Rex сейчас лает.
Dog.eat(); // Rex is eating.
