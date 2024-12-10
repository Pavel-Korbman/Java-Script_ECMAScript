class Book {
    constructor(title, author, pages) {
        this.title = title; 
        this.author = author;
        this.pages = pages;
    }
    displayInfo() {
        console.log(`Название: ${this.title}, Автор: ${this.author}, Страниц: ${this.pages}`);
    }
}

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}