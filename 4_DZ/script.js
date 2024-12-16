// Задание 1: "Получение данных о пользователе"
// Функция getUserData 
// ● Описание: 
// 1. Функция принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных с удаленного сервера. 
// 2. Функция возвращает промис, который разрешается с объектом данных о пользователе, если запрос был успешным. 
// 3. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке. 

// ● Последовательность действий: 
// 1. Вызовите fetch, передав URL с нужным ID пользователя. 
// 2. Если ответ успешен (код 200), извлеките данные с помощью response.json(). 
// 3. Верните объект с данными о пользователе. 
// 4. Если ответ не успешен, отклоните промис с сообщением об ошибке.

// const getUserData  = async (url) => {  
//     const response = await fetch(url);  
//     const user = await response.text();
//     console.log(user);
// }

const getUserData  = async (id) => {  
    const response = await fetch(`https://api.github.com/users`);
    if (response.status == 200) {
        const userData = await response.json();
        return (userData[id-1])? userData[id-1] : 'Пользователь не найден';       
    } else {
        return `Error ${response.status}: ${response.statusText}`;        
    }
}
console.log(getUserData(1));