// Задание 1
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
console.log(protoArr);

