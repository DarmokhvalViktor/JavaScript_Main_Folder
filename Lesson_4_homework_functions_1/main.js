// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a, b) {
    return a * b;
}
console.log(rectangleArea(5, 10));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let pi = 3.14;
function circleArea(r) {
    return (pi * (r *r));
}
console.log(circleArea(5));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea(h, r) {
    return (2 * pi * r * (h + r));
}
console.log(cylinderArea(2, 3));
// - створити функцію яка приймає масив та виводить кожен його елемент
let trashArray = [1, 2, 3, 4, 5, true, false, "fdsa", "4e32sd"];
function looper(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
looper(trashArray);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphBuilder(text) {
    return (`<p>${text}</p>`);
}
document.write(paragraphBuilder("This is a pen"));
console.log(paragraphBuilder("This is a pen"));
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listCreator1(text) {
    document.write(`<ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>`);
    console.log(`<ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>`);
    return (`<ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>`
    );
}
document.write(listCreator1("textfffff"));
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listCreatorLoop(text, amount) {
    document.write(`<ul>`);
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
listCreatorLoop("testText", 4);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrayPrimitives(array) {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`);
}
arrayPrimitives([1, 2, 3, 4, 5, 6, true, false, "fdsa", "vcxz", "fjdsafa"]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
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
function arrayObjectWriter(object) {
    for (const objectElement of object) {
        document.write(`<div>id - ${objectElement.id}; name - ${objectElement.name}; age - ${objectElement.age}.</div>`)
    }
}
arrayObjectWriter(objectsArray);
// - створити функцію яка повертає найменьше число з масиву
let numbersArray = [321, 543, 654, 765, 123, 54, 2, 1, 56, 7, -111, 543, 94321];
function minNumberFinder(array) {
    let minNum = array[0];
    for (const element of array) {
        if(element < minNum) {
            minNum = element;
        }
    }
    return minNum;
}
console.log(minNumberFinder(numbersArray));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    result = 0;
    for (const arrElement of arr) {
        result += arrElement;
    }
    return result;
}
console.log(sum(numbersArray));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(array, index1, index2) {
    let firstIndexValue = array[index1];
    array[index1] = array[index2];
    array[index2] = firstIndexValue;
    return array;
}
console.log(numbersArray);
console.log(swap(numbersArray, 0, 1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    result = 0;
    let currencyValue = null;
    for (const element of currencyValues) {
        if (element.currency === exchangeCurrency) {
            currencyValue = element.value;
        }
    }
    return (sumUAH / currencyValue);
}

console.log(exchange(10000, [{currency: `USD`, value: 40}, {currency: `EUR`, value: 42}, {currency: `GPB`, value: 46}], `USD`));