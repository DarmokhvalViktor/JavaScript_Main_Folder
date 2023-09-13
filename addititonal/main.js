// - Напишіть функцію cutString(str, n), яка ділить строку на підрядок, яка будується з n символів.
// document.writeln(cutString('насолода',3)) // [нас,оло,да]
function cutString(str, n) {
    return str.match(/.{1,3}/g)
}
function cutString2(str, n) {
    let chunks = [];
    for (let i = 0; i < str.length; i += 3) {
        chunks.push(str.substring(i, i + 3));
    }
    return chunks;
}
function cutString3(str, n) {
    let chunks = [];
    for (let i = 0; i < str.length; i += 3) {
        chunks.push(str.slice(i, i + 3));
    }
    return chunks;
}
console.log(cutString3("Third function насолода", 3));
console.log(cutString2("Second function насолода", 3));
console.log(cutString("First function насолода", 3));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається
// із зазначеної кількості символів.
//     let str = 'Кожний охотнік бажає знати де сидить фазан';
// document.writeln(delete_characters(str, 7)); // Кожний
function delete_characters(str, length) {
    return str.slice(0, length);
}
console.log(delete_characters("Кожний охотнік бажає знати де сидить фазан", 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
function insert_dash(str) {
    return str.toUpperCase().split(" ").join("-");
}
console.log(insert_dash("HTML JavaScript PHP"));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з
// нижнього регістру у верхній.
// // let a = 'vaisa'; // Vasia
function firstCharacterConverterToUpperCase(string) {
    let subArr = Array.from(string);
    subArr[0] = subArr[0].toUpperCase();
    return subArr.join("");
}
console.log(firstCharacterConverterToUpperCase("vasia"));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономія це наука про космос";
// document.writeln(count(str, symb)) // 5 - символів о
function count(str, stringSearch) {
    let str2 = str.replaceAll(stringSearch, "");
    //1
    return str.length - str2.length;
    //2
    // return str.split(stringSearch).length - 1;
}
console.log(count("Астрономія це наука про космос", "о"));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Привіт світ, це Hello World";
// document.writeln(cutString(str, 3)) // "Привіт світ, це"
function cutString4(str, n) {
    let ar = str.split(" ");
    ar.length = n;
    return ar.join(" ");
}

console.log(cutString4("Привіт світ, це Hello World", 3))


// Преобразование миль в километры: Напишите функцию milesToKilometers,
// которая принимает расстояние в милях и возвращает эквивалентное расстояние в километрах.
// Один километр равен приближенно 0,621371 мили.

function milesToKilometers (miles) {
    return miles / 0.621371;
}

console.log(milesToKilometers(5));

//
// Вычисление площади треугольника: Создайте функцию calculateTriangleArea,
// которая принимает длины основания и высоты треугольника и возвращает его площадь по формуле
// s = 1/2 * основание * высота.

function calculateTriangleArea(l, h) {
    return 1/2 * l * h;
}

console.log(calculateTriangleArea(5, 5));

// Перевод секунд в минуты и секунды: Напишите функцию convertSecondsToMinutesAndSeconds,
// которая принимает количество секунд и возвращает строку в формате "минуты:секунды".

function convertSecondsToMinutesAndSeconds(seconds) {
    return `${Math.floor(seconds / 60)} : ${seconds % 60}`;
}

console.log(convertSecondsToMinutesAndSeconds(6342));

//
//
// Вычисление суммы чисел от 1 до N: Создайте функцию calculateSum,
// которая принимает целое положительное число N и возвращает сумму всех целых чисел от 1 до N.

function calculateSum(n) {
    return n * (n+1) / 2;
    // let sum = 0;
    // for (let i = 1; i <= n; i++) {
    //     sum += i
    // }
    // return sum;
}

console.log(calculateSum(25));

//
// Расчет периметра прямоугольника: Напишите функцию calculateRectanglePerimeter,
// которая принимает длины сторон прямоугольника и возвращает его периметр по формуле
// P=2 * (длина+ширина).

function calculateRectanglePerimeter(w, h) {
    return 2 * (w + h);
}

console.log(calculateRectanglePerimeter(5, 5));


// Подсчет количества дней между двумя датами: Создайте функцию calculateDaysBetweenDates,
// которая принимает две даты (в виде строк, например, "2023-09-06") и возвращает количество дней между ними.

function calculateDaysBetweenDates(stringDate1, stringDate2) {
    return Math.abs(new Date(stringDate1).getTime() - new Date(stringDate2).getTime()) / 86400000;
}

console.log(calculateDaysBetweenDates("2023-09-06", "2044-08-22"));

//
// Вычисление среднего времени: Создайте функцию calculateAverageTime,
// которая принимает массив временных интервалов в формате "часы:минуты" и возвращает среднее время из этого массива.

function calculateAverageTime(array) {
    return arrayMinutes = array.map(s => s.split(":")).map(s => s[0] = parseInt(s[0]) * 60 + parseInt(s[1]));
}

console.log(calculateAverageTime(["12:30", "6443:44", "22:32"]));

//
// Подсчет количества гласных букв в строке: Напишите функцию countVowelsInString, которая принимает строку
// и возвращает количество гласных букв в ней.

function countVowelsInString(string) {
    let vowels = ["a", "e", "i", "o", "y", "u"];
    let vowelsCount = 0;
    for(let char of string.toLowerCase()) {
        if(vowels.includes(char)) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}

console.log(countVowelsInString("thisIsVarsd"));

//
// Определение кратности числа: Создайте функцию isMultiple, которая принимает два числа и проверяет,
// является ли первое число кратным второму.
function isMultiple(numb1, numb2) {
    return numb1 % numb2 === 0;
}

console.log(isMultiple(10, 3));


// Реверс строки: Создайте функцию reverseString, которая принимает строку и возвращает строку,
// в которой символы идут в обратном порядке.

function reverseString(string) {
    if(string === "") {
        return "";
    } else {
        return reverseString(string.substring(1)) + string.charAt(0);
    }
}
function reverseString2(string) {
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
}
function reverseString3(string) {
    return string.split("").reverse().join("");
}

console.log(reverseString("hello this is "));
console.log(reverseString2("hello this is "));
console.log(reverseString3("hello this is "));

//
// Подсчёт символов: Напишите функцию countCharacters, которая принимает строку и символ,
// и возвращает количество раз, которое этот символ встречается в строке.
function countCharacters(string, character) {
    let count = 0;
    let splittedArr = string.split("");
    for (const splittedArrElement of splittedArr) {
        if(splittedArrElement === character) {
            count += 1;
        }
    }
    return count;
}
function countCharacters2(string, character) {
    return string.split(character).length -1;
}

console.log(countCharacters("hello this is hello", "l"));
console.log(countCharacters2("hello this is hello", "l"));

//
// Палиндром слов: Создайте функцию findPalindromes, которая принимает массив слов
// и возвращает новый массив, содержащий только палиндромы.
function findpalindromes(array) {
    let newArray = [];
    for (const arrayElement of array) {
        if(arrayElement === arrayElement.split("").reverse().join("")) {
            newArray.push(arrayElement);
        }
    }
    return newArray;
}
let ar = ["va", "bvds", "aa", "bab", "jkre", "cde", "aba", "ab"]
console.log(findpalindromes(ar));

//
// Генератор случайных чисел: Напишите функцию generateRandomNumber,
// которая генерирует случайное число в заданном диапазоне.

function generateRandomNumber(number1, number2) {
    return Math.floor(Math.random() * (number2 - number1 + 1) + number1);
}

console.log(generateRandomNumber(2, 99));


//
// Фильтрация массива: Создайте функцию filterArray, которая принимает массив чисел и функцию-фильтр,
// и возвращает новый массив, содержащий только элементы, которые удовлетворяют условию фильтра.

function filterArray(array, callback) {
    let res = [];
    for(let i = 0; i < array.length; i++) {
        let el = array[i];
        if(callback(el, i)) {
            res.push(el);
        }
    }
    return res;
}
const isEven = num => num % 2 === 0;

console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], isEven));

//
// Сумма чисел в массиве: Напишите функцию sumArray, которая принимает массив чисел и возвращает их сумму.

function sumArray(array) {
    return array.reduce((a, b) => {return a + b});
}

console.log(sumArray([1, 2, 3, 4, 5, 6]))

//
// Генератор паролей: Создайте функцию generatePassword, которая генерирует
// случайный пароль заданной длины из букв и цифр.

function generatePassword() {
    let arrayToChooseFrom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "q", "Q", "W", "w", "e", "E", "r", "R", "t", "T", "y", "Y", "u", "U",
    "i", "I", "o", "O", "p", "P", "a", "A", "s", "S", "d", "D", "f", "F", "g", "G", "h", "H", "j", "J", "k", "K", "l", "L", "z", "Z", "x", "X",
    "c", "C", "v", "V", "b", "B", "n", "N", "m", "M"];
    let counter = 0;
    let randomPassLength = Math.floor(Math.random() * (30 - 6 + 1) + 6);
    let generatedPass = "";
    while(counter < randomPassLength) {
        generatedPass += arrayToChooseFrom[Math.floor(Math.random() * (arrayToChooseFrom.length - 1))];
        counter++;
    }
    return generatedPass;
}

console.log(generatePassword());

//
// Среднее значение массива: Напишите функцию calculateAverage, которая принимает массив чисел
// и возвращает среднее значение всех элементов.

function createArrayOfRandomNumbers() {
    let resultingArray = [];
    let lengthOfResultingArray = Math.floor(Math.random() * 99 + 1);
    for (let i = 0; i < lengthOfResultingArray; i++) {
        resultingArray.push(Math.floor(Math.random() * 2000001) - 1000000);
    }
    return resultingArray;
}
let arr99 = createArrayOfRandomNumbers();
console.log(arr99);

function calculateAverage(array) {
    let sum = array.reduce((a, b) => {return a + b});
    console.log(array.length)
    return sum / array.length;
}

console.log(calculateAverage(arr99));

//
// Поиск наибольшего элемента: Создайте функцию findLargestElement, которая находит наибольший элемент в массиве.

function findLargestElement(array) {
    return Math.max(...array);
}
// function findLargestElement2(array) {
//     return array.reduce((a, b) => {return Math.max(a, b)})
// }
// function findLargestElement3(array) {
//     let max = array[0];
//     for (const el of array) {
//         if(el > max) {
//             max = el;
//         }
//     }
//     return max;
// }

console.log(findLargestElement(arr99));
// console.log(findLargestElement2(arr99));
// console.log(findLargestElement3(arr99));


//
// Удаление элементов из массива: Напишите функцию removeFromArray, которая принимает массив и значение,
// и удаляет все вхождения этого значения из массива.

function removeFromArray(array, value) {
    return array.filter(e => e !== value);
}

console.log(removeFromArray([1, 2, 3, 4, 5, 5, 4, 3, 2, 1], 3));

//
// Создайте метод getFullName для объекта, представляющего человека с полями firstName и lastName,
// который возвращает полное имя в формате "Имя Фамилия".

let obj = {
    firstName: "name",
    lastName: "lastName",
    getFullName() {
        return `${this.firstName}  ${this.lastName}`;
    }
}
console.log(obj.getFullName());

//
// Напишите метод filterEvenNumbers для массива, который возвращает новый массив, содержащий только чётные числа.

function filterEvenNumbers(array) {
    return array.filter(s => s % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7,8, 9, 432, 321, 4,43 ,5, 645, 23, 4, 2, 452, 654]))

//
// Создайте метод isAdult для объекта, представляющего человека с полем age, который возвращает true,
// если возраст больше или равен 18, и false в противном случае.

function isAdult(person) {
    return person.age > 18;
}

console.log(isAdult({name: "fdsfds", age: 10}));

//
// Напишите метод capitalizeFirstLetter для строки, который возвращает новую строку с первой буквой в верхнем регистре.

function capitalizeFirstLetter(string) {
    let firstChar = string[0];
    firstChar = firstChar.toUpperCase();
    return firstChar.concat(string.substring(1));
}

console.log(capitalizeFirstLetter("this is"));

//
// Создайте метод calculateTotalPrice для массива объектов, представляющих товары с полями price и quantity,
// который возвращает общую стоимость всех товаров.

function calculateTotalPrice(array) {
    return array.reduce((accumulator, value) => accumulator + (value.price * value.quantity), 0)
}

console.log(calculateTotalPrice([{price: 20, quantity: 5}, {price: 50, quantity: 5}, {price: 20, quantity: 10}]));

//
// Напишите метод findMax для массива чисел, который возвращает максимальное значение в массиве.

//
// Создайте метод removeDuplicates для массива, который удаляет все дубликаты элементов массива.

//
// Напишите метод getWordsCount для строки, который возвращает количество слов в строке.

//
// Создайте метод calculateArea для объекта, представляющего геометрическую фигуру,
// с полями type (тип фигуры) и dimensions (размеры фигуры), который возвращает площадь фигуры в зависимости от её типа.

//
// Напишите метод sortByProperty для массива объектов, который сортирует массив по заданному свойству объектов.

//
// Создайте функцию calculateRectangleArea, которая принимает ширину и высоту прямоугольника и возвращает его площадь.

//
// Напишите функцию isPalindrome, которая принимает строку и возвращает true,
// если строка является палиндромом (читается одинаково с начала и с конца), и false в противном случае.

//
// Создайте функцию countVowels, которая принимает строку и возвращает количество гласных букв в ней.

//
// Напишите функцию reverseArray, которая принимает массив и возвращает новый массив,
// элементы которого расположены в обратном порядке.

//
// Создайте функцию calculateFactorial, которая принимает число n и возвращает факториал этого числа.

//
// Напишите функцию, которая принимает строку и возвращает строку, в которой все пробелы заменены на дефисы

//
// Напишите функцию, которая принимает строку и возвращает строку, в которой все пробелы заменены на дефисы

//
// Создайте функцию, которая принимает массив строк и возвращает новый массив,
// в котором все строки имеют длину не более 5 символов.

//

// Напишите функцию celsiusToFahrenheit, которая принимает температуру в градусах Цельсия
// и возвращает её эквивалент в градусах Фаренгейта по формуле:
// F = 9/5 * C + 32