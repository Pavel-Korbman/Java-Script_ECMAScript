// Асинхронность 
// Движок JavaScript устроен так, что весь код выполняется в одном потоке. 
// И несмотря на то, что у вас может быть многоядерный процессор, исполнение JavaScript кода на одной странице будет обрабатываться только в одном потоке и в одном ядре процессора. 
// Для решения этой проблемы придумали механизмы для написания асинхронного кода - это код, обычно состоящий из двух частей: 
// ➜ часть, которая выполняется долго или требует значительных ресурсов, 
// ➜ часть, которая вызывается по завершению первой части и может обработать результат выполнения первой части или просто сообщает что выполнение первой части кода завершилось.

// Event loop 
// Цикл событий или Event Loop по английски - это механизм, который который умеет обрабатывать входящие события (это сам код, и его команды, действия пользователя, взаимодействие с операционной системой), и управлять выполняемыми задачами, исходя из этих событий. 

// console.log('Start long calculations');
// for (let i = 0; i < 100000000; i++) {
//     const newDate = new Date(i);
// }
// console.log('End long calculations');
// Start long calculations // несколько секунд
// // End long calculations

// console.log("Start algorithm!");
// setTimeout(function timeout() {
//     console.log("This will be printed after 5 seconds!");
// }, 5000);
// console.log("End synchronous code.");
// 3 события выполнения старт, задержка на 5 сек и завершение - сначала выполнилась первая и последняя строка, средняя с задержкой 5 сек

// В работе цикла событий участвует еще три механизма: 
// 1. Call Stack (стек вызовов функций) - это механизм, который используется, чтобы сказать процессору какие команды выполнять, по мере исполнения алгоритма. Это основной поток синхронных команд нашего алгоритма. 
// 2. API среды выполнения - это вспомогательный функционал, который предоставляет браузер или другая среда выполнения, так например функция setTimeout  является не функцией движка JavaScript, а одной из функций среды выполнения. 
// 3. Отложенная очередь задач - это стек задач, который пополняется новыми заданиями, по мере их появления. Так например вызов функции обратного вызова в выполняемой в текущий момент функции будет внесен в этот стек, чтобы цикл событий выполнил эту функцию когда у него будет свободный стек вызовов. 

// Асинхронность, обусловленная сетевым взаимодействием, AJAX 

// Сетевые взаимодействия - это наиболее частое применение асинхронности в JavaScript. Все запросы из браузера (или между серверами) работают с помощью протокола HTTP.
// AJAX позволяет обновить данные на странице без перезагрузки страницы

// HTTP - HyperText Transfer Protocol 
// Протокол передачи гипертекста - это  протокол передачи данных прикладного уровня, что означает что он использует основной протокол обмена данными в сетях (например TCP/IP), и работает по принципу клиент/ сервер. 
// Для получения данных от сервера нам нужно отправить на указанный адрес запрос. Запрос должен быть определенного типа (GET, POST, PUT, DELETE и другие) и оформлен специальным образом: 
// содержать необходимые заголовки, из которых сервер получает служебную информацию

// GET 
// GET запрос нужен для получения данных от сервера. Такой запрос не имеет тела,и все необходимые данные запрашивает с помощью адреса и GET параметров в строке адреса. Параметры в адресе выглядят как <ключ>=<значение>, соединяются с помощью знака & и отделяются от основного адреса знаком ?, 
// например www.google.com?page=1&amount=20. 
// GET запрос должен всегда возвращать один и тот же ответ, обращаясь по одному и тому же адресу. 
// С помощью GET запросов можно получать картинки, данные о пользователях и любую другую информацию, хранящуюся на сервере.

// POST 
// POST запрос нужен для отправки данных на сервер. Чаще всего он используется для отправки данных формы на сервер. POST запрос обязательно передает
// данные в теле запроса. Сервер может возвращать какие то данные на POST запросы, чаще всего это результат сохранения данных, полученных с этим запросом.

// Объект XMLHttpRequest 
// Объект XMLHttpRequest позволяет нам создать объект запроса, который можно отправить на сервер, и обработать ответ. Это базовый механизм, реализуемый движком JavaScript, он не очень удобен для работы, но на нем можно хорошо понять принципы работы с XHR запросами (XHR - сокращение от XMLHttpRequest).

// XHR GET запрос 

// // Для создания запроса сначала нужно создать объект XMLHttpRequest, конструктор вызывается без аргументов. 
const xhr = new XMLHttpRequest();

// Открываем запрос. Первый аргумент это метод (GET, POST ...), второй адрес, куда нужно отправить запрос. У данного метода есть еще аргументы, которые мы рассмотрим позже.

xhr.open('GET', 'https://api.github.com/users/octocat');

// Отправляем запрос на сервер. 
// Метод send() может принимать один аргумент- это тело запроса, если оно есть. Для методов POST мы бы передавали тут тело запроса, наш запрос GET не имеет тела запроса.

xhr.send();

// После отправки запроса нам нужно использовать методы слушатели, которые будут асинхронно выполнены при наступлении соответствующего события. 
// Это методы onload, onerror и onprogress- мы сами определяем их функции.

// onload- будет вызван, когда сервер вернет ответ. 

// Это может быть положительный ответ сервера с кодом 200 (все хорошо), так и ошибка, например страница не найдена, тогда код будет 404. 
// Мы должны обрабатывать такие ситуации сами.

xhr.onload = function () {
    if (xhr.status != 200) {
        // если статус не 200, то произошла ошибка 
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
        console.log(`user: ${xhr.response}`);
        // response- это ответ сервера 
    }
};

// onprogress- 
// функция будет вызываться пока запрос находится в процессе, и позволяет отслеживать ход процесса отправки запроса и получения ответа от сервера. Бывает полезна при отладке сложных запросов.

xhr.onprogress = function (event) {
    console.log(`Get from server: ${event.loaded} bytes`);
};

// onerror- 
// функция будет вызываться если в запросе пошло что-то не так. Например нет соединения с сервером или ошибка в адресе запроса.

xhr.onerror = function () {
    console.log("Request error");
};

// Создан объект xhr и был выполнен запрос, но дальше он нам не нужен, прервем его. 

xhr.abort(); // убрать что бы увидеть данные в консоли

// POST запрос для отправки данных (напимер данных формы)

//  POST запрос с помощью объекта XMLHttpRequest. 
// Надо собрать данные для отправки в виде объекта FormData

// Для теста POST запроса нам нужен сервер,который мог бы его принять и что-то нам ответить. Для теста мы можем использовать прекрасный сервис https://httpbin.org/, который умеет принимать любой запрос и отправляет полученные данные в виде ответа.

// XHR POST запрос 
// // Создадим объект FormData. 
const formData = new FormData();

// Добавим в него два наших поля.

formData.append("name", "Slava");
formData.append("surname", "Belkin");

// Для создания запроса сначала нужно создать объект XMLHttpRequest, конструктор вызывается без аргументов. 
const xhr1 = new XMLHttpRequest();

// Открываем запрос.
xhr1.open('POST', 'https://httpbin.org/post');

// Отправляем запрос на сервер.
xhr1.send(formData);

// После отправки запроса нам нужно использовать методы слушатели

xhr1.onload = function () {
    if (xhr1.status != 200) {
        console.log(`Error ${xhr1.status}: ${xhr1.statusText}`);
    } else {
        console.log(`user: ${xhr1.response}`);
    }
};

xhr1.onprogress = function (event) {
    console.log(`Get from server: ${event.loaded} bytes`);
};

xhr1.onerror = function () { console.log("Request error"); };

xhr1.abort(); // убрать что бы увидеть данные в консоли


// JSON.stringify 
// Метод stringify позволяет преобразовать JavaScript объект в строковое представление в JSON формате. 
// Этот метод принимает 3 аргумента. 
// Первый, обязательный аргумент- это сам объект, который будет преобразован. Второй- это функция обратного вызова, которая будет вызвана рекурсивно для всех ключей/значений объекта и которая позволяет модифицировать данные при
// необходимости прямо во время конвертации.
// Третийэто количество пробелов, которые будут использоваться для формирования отступов внутри строки, чтобы сохранить вид как в коде.

const student = {
    name: 'Slava',
    surname: 'Belkin',
    age: 20,
    practice: {
        place: 'IKTG',
        hours: 47,
    }
};

console.log(JSON.stringify(student, null, 4));
// {
//     "name": "Slava",
//     "surname": "Belkin",
//     "age": 20,
//     "practice": {
//         "place": "IKTG",
//         "hours": 47
//     }
// }

// JSON.parse 
// Метод parse принимая строку в качестве аргумента, пытается распарсить её как строку формата JSON и превратить в объект JavaScript (или массив).

console.log(JSON.parse(`{"name": "Slava", "surname": "Belkin", "age": 20,   "practice": {"place": "IKTG", "hours": 47 }
}`));

// {name: 'Slava', surname: 'Belkin', age: 20, practice: {…}}

// async/await 
// Функционал async/await для работы с асинхронным кодом (а именно для работы с обещаниями) появился в JS с приходом стандарта ES7, и пока еще не слишком поддерживается браузерами, но есть полифилы для работы с ними. 

// Суть подхода async/await- это писать асинхронный код так, будто он выполняется синхронно, но при этом не блокирует основной поток выполнения. 
// Подход состоит из применения двух операторов: 
// ● async - пишется перед функцией и превращает любую функцию в обещание, 
// а также позволяет использовать второй оператор await внутри себя. 
// ● await-оператор пишется перед вызовом асинхронной функции, что заставляет код остановиться в этом месте, пока асинхронная функция не вернет результат.

const getUser = async (url) => {
    // Делаем запрос, и ждем его результат (указание await), который будет сохранен в константу response. 
    const response = await fetch(url);
    // Выполняем еще один асинхронный метод, преобразования в текст, также ждем результат, который сохраняется в константу пользователь. 
    const user = await response.text();
    console.log(user);
}
getUser('https://api.github.com/users/octocat'); 
 
// Вывод в консоль. 
// { 
// "login": "octocat", 
// "id": 583231, 
// ... 
// }