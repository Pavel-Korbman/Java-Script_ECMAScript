// Рекурсия

// рекурсия- это объект определенной структуры, который может содержать в себе другой объект такой же структуры, который в свою очередь также может содержать объект такой же структуры и так далее.
console.log('Рекурсия');
console.log('');
console.log('факториал');

// function factorial(n) {
//     if (n === 1) return 1;
//     return factorial(n - 1) * n;
// };

function factorial(n) {
    return (n === 1) ? 1 : factorial(n - 1) * n;
};

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
