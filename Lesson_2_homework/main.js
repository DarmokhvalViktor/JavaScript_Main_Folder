// Масиви та об'єкти:
// 1)- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 42];
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])
console.log(numbers[5])
console.log(numbers[6])
console.log(numbers[7])
console.log(numbers[8])
console.log(numbers[9])
console.log(numbers);

// 2)- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title : "HMS Ulysses",
    pageCount : 357,
    genre: "historical novel"
}
let book2 = {
    title : "Puppet on a Chain",
    pageCount : 210,
    genre: "Thriller"
}
let book3 = {
    title : "Golden Rendezvous",
    pageCount : 223,
    genre: "novel"
}
console.log(book1, book2, book3);

// 3)- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title : "Puppet on a Chain",
    pageCount : 210,
    genre: "Thriller",
    authors : [{name: "Alister", age: 72}, {name: "Megan", age: 64}]
}
console.log(book4.authors)

let book5 = {
    title : "HMS Ulysses",
    pageCount : 357,
    genre: "historical novel",
    authors : [{name: "Ernest", age: 57}, {name: "Toni ", age: 75}]
}
console.log(book5.authors)

let book6 = {
    title : "Golden Rendezvous",
    pageCount : 223,
    genre: "novel",
    authors : [{name: "Joseph ", age: 45}, {name: "Herman", age: 40}]
}
console.log(book6["authors"])


// 4)- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user1 = {name: "user0", username: "userName0", password: 101647};
let user2 = {name: "user1", username: "userName1", password: 146851};
let user3 = {name: "user2", username: "userName2", password: 247879};
let user4 = {name: "user3", username: "userName3", password: 312354};
let user5 = {name: "user4", username: "userName4", password: 448795};
let user6 = {name: "user5", username: "userName5", password: 512384};
let user7 = {name: "user6", username: "userName6", password: 689477};
let user8 = {name: "user7", username: "userName7", password: 748515};
let user9 = {name: "user8", username: "userName8", password: 856418};
let user10 = {name: "user9", username: "userName9", password: 965448};

let users = [
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
    user9,
    user10
]

console.log("password: " + users[0].password)
console.log("password: " + users[1]["password"])
console.log("password: " + users[2]["password"])
console.log("password: " + users[3]["password"])
console.log("password: " + users[4]["password"])
console.log("password: " + users[5]["password"])
console.log("password: " + users[6]["password"])
console.log("password: " + users[7]["password"])
console.log("password: " + users[8]["password"])
console.log("password: " + users[9]["password"])



// Логічні розгалуження:
// 5)Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 1;
// let x = -3;
// let x = 0;
if (x !== 0) {
    console.log("True")
} else {
    console.log("False")
}


// 6)- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число(в першу, другу, третю или четверту частину години).
let time = 5;
if(time >= 0 && time < 60) {
    if(0 <= time && time < 15) {
        console.log("First quarter");
    } else if (15 <= time && time < 30) {
        console.log("Second quarter");
    }else if (30 <= time && time < 45) {
        console.log("Third quarter");
    }else if (45 <= time && time < 60) {
        console.log("Fourth quarter");
    }
} else {
    console.log("??????")
}

// 7)- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 31;
if(0 < day && day <= 31) {
    if(0 < day && day < 11) {
        console.log("The first decade of the month")
    } else if (11 <= day && day < 21) {
        console.log("The second decade of the month")
    } else {
        console.log("The third decade of the month")
    }
} else {
    console.log("??????")
}


// 8)- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayOfTheWeek = 1;
switch (dayOfTheWeek) {
    case 1:
        console.log("Sunday! Hungover time");
        break;
    case 2:
        console.log("Monday! Time to work");
        break;
    case 3:
        console.log("Tuesday! Time to work");
        break;
    case 4:
        console.log("Wednesday! Time to work");
        break;
    case 5:
        console.log("Thursday! Time to work");
        break;
    case 6:
        console.log("Friday! Time to work");
        break;
    case 7:
        console.log("Saturday! Time to hit the gym");
        break;
    default:
        console.log("????????")
}
//     9)- Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

//Для швидкодії візьму два рандомних числа, аби не чекати інпут від користувача.
//Не зовсім зрозумів завдання до "Також потрібно врахувати коли введені рівні числа.". Що потрібно зробити?
//Вивести одне з чисел, бо обидва рівні? Чи вивести якусь беліберду, як, в принципі, я і зробив?
// let firstNumber = parseInt(prompt("Enter first number: "));
// let secondNumber = parseInt(prompt("Enter second number: "));
let firstNumber = 55;
let secondNumber = 5;
if(firstNumber < secondNumber) {
    console.log(secondNumber)
} else if(firstNumber > secondNumber) {
    console.log(firstNumber);
} else {
    console.log("numbers are equal");
}


//     10)- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"
//         якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x2 = 123;
console.log(typeof x2, x2);
if((typeof x2 === "number" && x2 === 0 || isNaN(x2)) || (typeof x2 === "boolean" && x2 === false) ||
    (typeof x2 === "string" && x2 === "" || x2 === `` || x2 === '') || (typeof x2 === "object" && x2 === null) || (typeof x2 === "undefined")) {
    x2 = "default";
} else {
    console.log(x2);
}
//верхнє - надлишкове. Можна кожне з них привести до булевого значення. Нижче приводимо, і кожен з них є фолс. або:
if(!x2) {
    x2 = "default";
    console.log(x2);
} else {
    console.log(x2);
}
//Але цей варіант гірший - бо переприсвоюватися буде значення, не дуже відповідає завданню
let c2 = NaN;
c2 = c2 || "default";
console.log(c2);


//  11)    - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//  За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

//Потрібно було простим перебором, створивши цих 6 іфів виконати завдання, чи якось по-іншому?
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0]["monthDuration"] > 5) {
    console.log("Jolly Good Show!")
}
if(coursesAndDurationArray[1]["monthDuration"] > 5) {
    console.log("Jolly Good Show!")
}
if(coursesAndDurationArray[2]["monthDuration"] > 5) {
    console.log("Jolly Good Show!")
}
if(coursesAndDurationArray[3]["monthDuration"] > 5) {
    console.log("Jolly Good Show!")
}
if(coursesAndDurationArray[4]["monthDuration"] > 5) {
    console.log("Jolly Good Show!")
}
if(coursesAndDurationArray[5]["monthDuration"] > 5) {
    console.log("Jolly Good Show!")
}
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     if(coursesAndDurationArray[i]["monthDuration"] > 5) {
//         console.log("Jolly Good Show!" + i)
//     }
// }