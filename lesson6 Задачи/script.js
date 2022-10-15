/*
let str = '120,5';
let num = 100;

console.log(`str type: ${typeof(str)}`);
console.log(`num = ${num} type: ${typeof(num)}`);
console.log(typeof(str*num));
console.log(typeof(+str));

console.log('Первая строка');
console.log('Вторая строка');
/*
let myName = prompt('Введите ваше имя');

if(myName === 'Vladimir') {
    console.log(`Добрый день ${myName}`)
} else if (myName === 'Ivan'){
    console.log(`${myName} a gde Vladimir?`);
} else if (myName === 'Ruslan') {
    console.log(`${myName} a Ivan ili Vladimir ne prishli`);
} else {
    console.log(`${myName}, a s Vami my i vovse ne znakomy`);
}

let foundItems = 0;

if (foundItems) {
    console.log('Nichevo ne naideno')
} else {
    console.log('Resultaty poiska')
}

const num=5;
let result = num === 5 ? 'Pyat' : 'Ne Pyat';
console.log(result);


let pass;
while(pass !== 'qwerty') {
    pass = prompt('Vvedite parol')
}
console.log('Privet');
do {
    console.log(i);
    i++;
} while(i < 5);

while(i < 5); {
    console.log(i)
    i++;
}
console.log('Cycle for');
for (let i=0; i<5; i++) {
    console.log(i); 
}

console.log('break');

let sum = 0;
while (true) {
    let value = +prompt('Vvedite chislo');
    if (value == 'exit') {
        break;
    } 
    sum += value;
}

console.log(sum); 

let demo = -11;

if(demo < 0 && demo , -10) {
    console.log(`Chislo ${demo} otricatelnoe i ono menshe 10`);
} else if(demo == 0) {
    console.log(`Chislo yavlyaetsya nulem`);
}else {
    console.log(`Chislo ${demo} poloshitelnoe.`);
}

let a = 300;

//Esli chislo bolshe 100 to vyvodit "chislo bolshe 100"
//Esli chislo bolshe 50 to vyvodit "chislo bolshe 100"
//Esli chislo bolshe 30 to vyvodit "chislo bolshe 100"

if(a>30 && a<=50) {
    console.log(`Chislo ${a} bolshe 30`);
} else if (a>50 && a<=100) {
    console.log(`Chislo ${a} bolshe 50`);
}else if (a>100) {
    console.log(`Chislo ${a} bolshe 100`);
}

for(let i = 1; i<10; i++) {
    if (i % 2 == 0) continue
        console.log(i); 
}

// i= 0 => 0<10 => 0
// 0+1 => 1<10 => 1
//1+1 => 2<10 => 2
//......
//9+1 => 10<10 => false
//0 1 2 3 4 5 6 7 8 9

let j = 5;
while (j<5) {
    console.log(`Hello ${j}`);
    j++;
}

console.log("*** Zadanie 1 *****");

do {
    console.log(`Hello ${j}`);
    j++;
} while (j<5)

// 0<5 => 0

let price = 3000;
let sale = 0;

if (price > 2000 && price < 5000) {
    sale = price * 0.05;
} else if (price > 5000 && price < 10000) {
    sale = price * 0.10;
} else if (price > 10000) {
    sale = price * 0.15;
} else if (price < 1000) {
    console.log (`Besplatnaya dostavka ot 1000 rublei. Ne hvataet ${1000 - price}`)
}

console.log(`V corzine tovarov na summu ${price} rublei. S uchetom skidki - ${price - sale}`);

let value = 10000;
let promo = prompt(`Stoimost tovara v korzine - ${value}/ Vvedite promocode`);

if(promo == "DELFA") {
    console.log(`Skidki po promocodu - 50%. Stoimost tovara ${value-value*0.5}`)
} else {
    console.log('Promocod ne podchodit');
}


// 6.

let pass = 'qwerty';
let count = 0;
let errorCount = 0;

while (count < 5) {
    let passInput = prompt('Vvedite parol');
    if (passInput == pass) {
        console.log('Пароль верный');
        break;
    } else {
        console.log('Иди учи уроки двоешник ты!');
        errorCount++;
    }
    if(errorCount == 5) {
        console.log('Попытки ввода пароля закончились! УХОДИ!');
        break;
    }
    count++;
}
*/

// 9.

let sum = 0;
for (let i = 0; i < 10; i++) {
    let numb = +prompt('Введите число');
    if(numb > 0) {
        console.log(`Введеное значение ${numb}`);
        sum = sum + numb;
    }
}

console.log(`Сумма введенных положительных чисел = ${sum}`);