// Задание 1
// Задание 1 (5 минут) 1. Создайте функцию delayedMessage(message, delay), которая принимает аргументы message (строка) и delay (число). Функция должна выводить заданное сообщение в консоль через указанную задержку. 2. Вызовите функцию delayedMessage() три раза с разными сообщениями и задержками. Например: a. delayedMessage("Сообщение 1", 2000) b. delayedMessage("Сообщение 2", 1000) c. delayedMessage("Сообщение 3", 3000) 3. После вызова всех функций delayedMessage(), добавьте сообщение вида "Конец программы" с помощью console.log().

const delayedMessage = (message, delay) => {
    setTimeout(() => { console.log(message) }, delay);
}

// delayedMessage('Сообщение 1', 2000);
// delayedMessage('Сообщение 2', 1000);
// delayedMessage('Сообщение 3', 3000);
// delayedMessage('Завершение программы', 3000);

// Задание 2 
// У вас есть список задач, которые необходимо выполнить в определенном порядке.Каждая задача должна быть выполнена через определенный промежуток времени, заданный в миллисекундах.Вам необходимо написать функцию, которая принимает список задач и интервал времени, а затем выполняет каждую задачу через определенный промежуток времени.

const tasks = [{ name: 'task 1', time: 1000 },
{ name: 'task 2', time: 2000 },
{ name: 'task 3', time: 3000 },
{ name: 'task 4', time: 4000 },
{ name: 'task 5', time: 5000 }];

const taskPlaner = (list) => {
    list.forEach(e => {
        setTimeout(() => { console.log(e.name) }, e.time);
    });
}

taskPlaner(tasks);