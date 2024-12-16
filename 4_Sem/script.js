// Задание 1
// Задание 1 (5 минут) 1. Создайте функцию delayedMessage(message, delay), которая принимает аргументы message (строка) и delay (число). Функция должна выводить заданное сообщение в консоль через указанную задержку. 2. Вызовите функцию delayedMessage() три раза с разными сообщениями и задержками. Например: a. delayedMessage("Сообщение 1", 2000) b. delayedMessage("Сообщение 2", 1000) c. delayedMessage("Сообщение 3", 3000) 3. После вызова всех функций delayedMessage(), добавьте сообщение вида "Конец программы" с помощью console.log().

const getUserData = async (idUser) => {
    const fullUrl = `https://api.github.com/users`;
    const response = await fetch(fullUrl);
    if (response.status == 200) {
        const userData = await response.json();
        const res = userData.find(el => el.id === idUser);
        return (res) ? res : 'Пользователь не найден';
    } else {
        return `Error ${response.status}: ${response.statusText}`;
    }
}
console.log(getUserData(1));