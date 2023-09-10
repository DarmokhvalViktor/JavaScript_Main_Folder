// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let sf1 : string = "hello";
let sf2: string = "owu";
let sf3: string = "com";
let sf4: string = "ua";
let nf1: number = 1;
let nf2: number = 10;
let nf3: number = -999;
let nf4: number = 123;
let nf5: number = 3.14;
let nf6: number = 2.7;
let nf7: number = 16;
let bf1: boolean = true;
let bf2: boolean = false;
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firsftName: string = "hello2";
let middfleName: string = "hello3";
let lastfName: string = "hello4";
let person: string = firsftName + middfleName + lastfName;
console.log(person);
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let af: number = 100;
let bf: string = '100';
let cf: boolean = true;
console.log(typeof af, typeof bf, typeof cf);
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль