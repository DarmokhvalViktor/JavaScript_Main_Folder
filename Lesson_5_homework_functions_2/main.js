// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let sRectangle = (a, b) => a * b;
console.log(sRectangle(2, 4));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let sCircle = (r) => Math.PI * r ** 2;
console.log(sCircle(2));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let sCylinder = (h, r) => 2 * Math.PI * r * (h + r);
console.log(sCylinder(2, 5));
// - створити функцію яка приймає масив та виводить кожен його елемент
let arrayPrinter = (array) => {
    for (const elem of array) {
        console.log(elem)
    }
};
arrayPrinter([1, 2, 3, 4, 5, 6, 213, 4532, 54, 6]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraphCreator = (text) => {
    document.write(`<p>${text}</p>`)
};
paragraphCreator("So, heute bin ich ziemlich gut drauf");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let listCreator = (text) => {
    document.write(`<ol>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ol>`)
};
listCreator("Zieh' mich schick an, setz' 'n Hut auf");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let listCreatorWithCustomAmount = (text, amount) => {
    document.write(`<ol>`);
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ol>`);
}
listCreatorWithCustomAmount("Die Rolex tickt, Mann, sehe ich gut aus", 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let listCreatorFromArray = (array) => {
    document.write(`<ol>`);
    for (const element of array) {
        document.write(`<li>${element}</li>`)
    }
    document.write(`</ol>`);
}
listCreatorFromArray([5, 4, 3, 2, 1, true, false, "one", "two", "four"]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let fieldPrinterInBlocks = (array) => {
    for (const arrayElement of array) {
        document.write(`<div>`);
        for (const arrayElementKey in arrayElement) {
            document.write(` ${arrayElementKey} : ${arrayElement[arrayElementKey]}`)
        }
        document.write(`</div>`);
    }
}
let objectsArray = [
    {id:1, name:"sss", age:23},
    {id:2, name:"vda", age:21},
    {id:3, name:"sewfqs", age:65},
    {id:4, name:"srewr32", age:44},
    {id:5, name:"vcxzvzcxs", age:32},
    {id:6, name:"s321fdsas", age:22},
    {id:7, name:"vdasggbvfg", age:31},
    {id:8, name:"sgnghfn", age:33},
    {id:9, name:"sjyutjuys", age:21},
    {id:10, name:"sfdafdasw", age:25},
];
fieldPrinterInBlocks(objectsArray);
// - створити функцію яка повертає найменьше число з масиву
let smallestNumberFinder = (array) => {
    let number = array[0];
    for (const element of array) {
        if (element < number) {
            number = element;
        }
    }
    return number;
}
let trashArr = [5, 4, 3, 2, 1, true, false, "one", "two", "-3", "four", "zero"];
console.log(smallestNumberFinder(trashArr));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumArr = (array) => {
    let sum = array[0];
    for (let i = 1; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumArr(trashArr));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
}
let trash = [{wife: true}, "false", true, 11, 22, 33, 44, 55, 66, 77, 88, 99];
swap(trash, 0, 7);
console.log(trash);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (value, currencyValues, currency) => {
    let result = 0;
    for (const currencyElement of currencyValues) {
        if(currencyElement.currency === currency) {
            return result = value / currencyElement.value;
        }
    }
    return "Did not found matched currency";
}
let currencyArray = [{currency: `USD`, value: 40}, {currency: `EUR`, value: 42}, {currency: `GPB`, value: 46}, {currency: 'PL', value: 8}, {currency: 'FR', value: 32}];
console.log(exchange(10000, currencyArray, `PL`));