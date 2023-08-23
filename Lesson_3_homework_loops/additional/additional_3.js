// 1. Створити пустий масив та :
let trashArray = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
for (let i = 0, j = 0; i < 50; i++, j += 2) {
    trashArray.push(j);
}
console.log(trashArray);
//     b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 0, j = 1; i < 50; i++, j += 2) {
    trashArray.push(j);
}
console.log(trashArray);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    trashArray.push(Math.random());
}
console.log(trashArray);
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    trashArray.push(Math.floor(Math.random() * (999 - 1) + 1));
}
console.log(trashArray);

// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2; i < trashArray.length; i += 3) {
    console.log(trashArray[i]);
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2; i < trashArray.length; i += 3) {
    if(trashArray[i] % 2 === 0) {
        console.log(trashArray[i]);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newTrashArray = [];
for (let i = 2; i < trashArray.length; i += 3) {
    if(trashArray[i] % 2 === 0) {
        console.log(trashArray[i]);
        newTrashArray.push(trashArray[i]);
    }
}
console.log(newTrashArray);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log(trashArray);
for (let i = 0; i < trashArray.length - 1; i++) {
    if(trashArray[i + 1] % 2 === 0) {
        console.log(trashArray[i]);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let pricesArr = [100,250,50,168,120,345,188];
let price = 0;
for (let i = 0; i < pricesArr.length; i++) {
    price += pricesArr[i];
}
let result = price / pricesArr.length;
console.log(result);
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let trashArr7 = [];
for (let i = 0; i < 20; i++) {
    trashArr7.push(Math.floor(Math.random() * (2999 - 1) + 1));
}
console.log(trashArr7);
let newTrashArr7 = [];
for (const newTrashArr7Element of trashArr7) {
    newTrashArr7.push(newTrashArr7Element * 5);
}
console.log(newTrashArr7);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let trashArr8 = [1, true, false, false, true, 423, 21321, 9432, "12321", "342", "fdsa", "dafs", "vvv", 88432, true, false, "ufuu", 221, null, undefined];
let newTrashArr8 = [];
for (const trashArr8Element of trashArr8) {
    if(typeof trashArr8Element === "number") {
        newTrashArr8.push(trashArr8Element);
    }
}
console.log(newTrashArr8);
//
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities = [];
for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if(user.id === city.user_id) {
            user.address = city;
            usersWithCities.push(user)
        }
    }
}
console.log(usersWithCities);

//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let numbersArray10 = [1, 432, 654, 8765, 231, 4090321, 44, 3982, 436752, 0];
for (let i = 0; i < numbersArray10.length; i++) {
    if(numbersArray10[i] % 2 === 0) {
        console.log(numbersArray10[i]);
    }
}

//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let numbersArray11 = [1, 432, 654, 8765, 231, 4090321, 44, 3982, 436752, 0];
let numbersArray12 = [];
let index12 = 0;
while(index12 < numbersArray11.length) {
    numbersArray12.push(numbersArray11[index12]);
    index12++;
}
console.log(numbersArray12);
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let stringArr = [ 'a', 'b', 'c'];
let stringRes1 = "";
for (let i = 0; i < stringArr.length; i++) {
    stringRes1 += stringArr[i];
}
console.log(stringRes1);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let stringRes2 = "";
let indexLast = 0;
while (indexLast < stringArr.length) {
    stringRes2 += stringArr[indexLast];
    indexLast++;
}
console.log(stringRes2);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let stringRes3 = "";
for (const stringEl of stringArr) {
    stringRes3 += stringEl;
}
console.log(stringRes3);