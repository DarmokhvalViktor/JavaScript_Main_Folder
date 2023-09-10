// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let string1 = 'hello world';
let string2 = 'lorem ipsum';
let string3 = 'javascript is cool';
console.log(string1.length);
console.log(string2.length);
console.log(string3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(string1.toUpperCase());
console.log(string2.toUpperCase());
console.log(string3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let string4 = 'HELLO WORLD';
let string5 = 'LOREM IPSUM';
let string6 = 'JAVASCRIPT IS COOL';
console.log(string4.toLowerCase());
console.log(string5.toLowerCase());
console.log(string6.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyString = ' dirty     string   ';
let resss = dirtyString.split(" ").filter((c) => c.length).join(" ");
console.log(resss);
console.log(dirtyString.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let string7 = 'Ревуть воли як ясла повні';
function stringToArray(string) {
    return string.split(" ");
}
let stringToArr = (arr) => str.split(" ");
console.log(stringToArray(string7));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbersArray = [10,8,-7,55,987,-1011,0,1050,0];
let strAr = numbersArray.map(s => s.toString());
console.log(strAr, typeof strAr[0])

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let numsArray = [11,21,3, 44, 55, 231, 5, 9];
function sortNums(array, direction) {
    if(direction === "ascending") {
        array = array.sort((n1, n2) => {return n1 - n2})
    } if(direction === "descending") {
        array = array.sort((n1, n2) => {return n2 - n1})
    }
    return array;
}
let sortNum = (array, direction) => {
    switch(direction) {
        case "ascending":
            array = array.sort((a, b) => a - b);
            break;
        case "descending":
            array = array.sort((a, b) => b - a);
            break;
        default:
            console.error("wrong direction type");
    }
    return array;
}
console.log(sortNums(numsArray, "descending"));
console.log(sortNums(numsArray, "ascending"));
console.log(sortNum(numsArray, "descending"));
console.log(sortNum(numsArray, "ascending"));
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort((a, b) => {return b.monthDuration - a.monthDuration});
console.log(coursesAndDurationArray);

let filteredArray = coursesAndDurationArray.filter(value => value.monthDuration > 5);
let filteredArray2 = coursesAndDurationArray.filter(({monthDuration}) => monthDuration > 5);
console.log(filteredArray);
console.log(filteredArray2);

let xxx = coursesAndDurationArray.map( (value, index) => {
    return {id: index + 1, ...value}
})
console.log(xxx);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
function createCardDeck() {
    this.cardSuit = ["spades", "diamonds", "hearts", "clubs"];
    this.value = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
    this.color = ["red", "black"];
    // this.resultingDeck = []

    // arr.map(item => item.cardSuit === 'diamond' || item.cardSuit === 'heart' ? item.color = 'red' : item.color = 'black')
    // return arr

    for (const suit of this.cardSuit) {
        let blackS = ["spades", "clubs"];
        let redS = ["diamonds", "hearts"];
        let color = "";
        if(blackS.includes(suit)) {
            color = "black"
        }
        if(redS.includes(suit)) {
            color = "red"
        }
        for (const valElement of this.value) {
            cardDeck.push(suit, valElement, color);
        }

    }
    return resultingDeck;
}
let deck4 = createCardDeck();
console.log(deck4);
let cardDeck = [
    {cardSuit: "spades", value: "6", color: "black"},
    {cardSuit: "spades", value: "7", color: "black"},
    {cardSuit: "spades", value: "8", color: "black"},
    {cardSuit: "spades", value: "9", color: "black"},
    {cardSuit: "spades", value: "10", color: "black"},
    {cardSuit: "spades", value: "jack", color: "black"},
    {cardSuit: "spades", value: "queen", color: "black"},
    {cardSuit: "spades", value: "king", color: "black"},
    {cardSuit: "spades", value: "ace", color: "black"},
    {cardSuit: "clubs", value: "6", color: "black"},
    {cardSuit: "clubs", value: "7", color: "black"},
    {cardSuit: "clubs", value: "8", color: "black"},
    {cardSuit: "clubs", value: "9", color: "black"},
    {cardSuit: "clubs", value: "10", color: "black"},
    {cardSuit: "clubs", value: "jack", color: "black"},
    {cardSuit: "clubs", value: "queen", color: "black"},
    {cardSuit: "clubs", value: "king", color: "black"},
    {cardSuit: "clubs", value: "ace", color: "black"},
    {cardSuit: "diamonds", value: "6", color: "red"},
    {cardSuit: "diamonds", value: "7", color: "red"},
    {cardSuit: "diamonds", value: "8", color: "red"},
    {cardSuit: "diamonds", value: "9", color: "red"},
    {cardSuit: "diamonds", value: "10", color: "red"},
    {cardSuit: "diamonds", value: "jack", color: "red"},
    {cardSuit: "diamonds", value: "queen", color: "red"},
    {cardSuit: "diamonds", value: "king", color: "red"},
    {cardSuit: "diamonds", value: "ace", color: "red"},
    {cardSuit: "hearts", value: "6", color: "red"},
    {cardSuit: "hearts", value: "7", color: "red"},
    {cardSuit: "hearts", value: "8", color: "red"},
    {cardSuit: "hearts", value: "9", color: "red"},
    {cardSuit: "hearts", value: "10", color: "red"},
    {cardSuit: "hearts", value: "jack", color: "red"},
    {cardSuit: "hearts", value: "queen", color: "red"},
    {cardSuit: "hearts", value: "king", color: "red"},
    {cardSuit: "hearts", value: "ace", color: "red"},
];
console.log(cardDeck);

// - знайти піковий туз
console.log(cardDeck.find((element) => {
    return (element.cardSuit === "spades" && element.value === "ace");
}))

// - всі шістки
console.log(cardDeck.filter((element) => {
    return (element.value === "6");
}))

// - всі червоні карти
console.log(cardDeck.filter((element) => {
    return (element.color === "red");
}))

// - всі буби
console.log(cardDeck.filter((element) => {
    return (element.cardSuit === "diamonds");
}))

// - всі трефи від 9 та більше
//                                        Чи є елегантніше рішення, ніж тупим брутфорсом?
console.log(cardDeck.filter((element) => {
    // return (element.cardSuit === "clubs" && (element.value === "9" || element.value === "10"
    //     || element.value === "jack" ||element.value === "queen" ||element.value === "king" || element.value === "ace"));
    return (element.cardSuit === "clubs" && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(element.value))
}))

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let newCardDeck = cardDeck.reduce((accumulator, card) => {

    accumulator[card.cardSuit].push(card);

    // if(card.cardSuit === "diamonds") {
    //     accumulator.diamonds.push(card);
    // } else if(card.cardSuit === "spades") {
    //     accumulator.spades.push(card);
    // } else if(card.cardSuit === "hearts") {
    //     accumulator.hearts.push(card);
    // } else {
    //     accumulator.clubs.push(card);
    // }
    return accumulator;
}, {spades:[], diamonds:[], hearts:[], clubs:[]});
console.log(newCardDeck);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//                      Що малось на увазі під пошуком? Відфільтрувати, аби тільки відповідні були, чи саме шукати об'єкти?
let coursesWithSass = coursesArray.filter(s => s.modules.includes("sass"));
console.log(coursesWithSass);
let coursesWithDocker = coursesArray.filter(s => s.modules.includes("docker"));
console.log(coursesWithDocker);