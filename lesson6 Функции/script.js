function sum(a, b) {
    return a + b;
}

function sum(a, b) {
    let result = a + b;
    return result;
    console.log(`сумма = ${result}`);
}

console.log(sum(100, 330));

function sayHello(userName) {
    console.log(`Привет ${userName}, вам ${getAge} лет`);
}

sayHello('Неизвестный');

getAge('Неизвестный', 345);

function getAge(userName, year) {
    let age = 2022-year;
    console.log(`Привет ${userName}, вам ${age} лет`);
}


check(8);

function check(a) {
    if (a % 2 == 0) {
        console.log('четное');
    } else {
        console.log('нечетное');
    }
}