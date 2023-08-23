// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arr1 = [1, 2, 3, 4, 5, "1s", "2s", "3s", "4s", "5s", [1, "1", true], [2, "2", true], [3, "3", false], [4, "4", false], [5, "5", false]];
console.log(arr1);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr2 = [];
arr2[0] = 2;
arr2[1] = true;
arr2[2] = false;
arr2[3] = "2";
arr2[4] = 543532;
arr2[5] = "432";
console.log(arr2);
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let arr3 = [2,17,13,6,22,31,45,66,100,-18];
console.log("___1___")
let i1 = 0;
while(i1 < arr3.length) {
    console.log(arr3[i1]);
    i1++;
}
console.log("___2___")
for (let i = 0; i < arr3.length; i++) {
    const arr3Element = arr3[i];
    console.log(arr3Element);
}
console.log("___3___")
let i2 = 0;
while(i2 < arr3.length) {
    if(i2 % 2 !== 0) {
        console.log(arr3[i2]);
    }
    i2++;
}
console.log("___4___")
for (let i = 0; i < arr3.length; i++) {
    if(i % 2 !== 0) {
        console.log(arr3[i]);
    }
}
console.log("___5___")
let i3 = 0;
while(i3 < arr3.length) {
    if(arr3[i3] % 2 === 0) {
        console.log(arr3[i3]);
    }
    i3++;
}
console.log("___6___")
for (let i = 0; i < arr3.length; i++) {
    const arr3Element = arr3[i];
    if(arr3Element % 2 === 0) {
        console.log(arr3Element);
    }
}
console.log("___7___")
for (let i = 0; i < arr3.length; i++) {
    if(arr3[i] % 3 === 0) {
        arr3[i] = "okten";
    }
}
console.log(arr3);
console.log("___8___")
for (let i = arr3.length - 1; i >= 0; i--) {
    const arr3Element = arr3[i];
    console.log(arr3Element);
}
console.log(arr3);
console.log("___9.7___")
let arrReversed_2 = [2,17,13,6,22,31,45,66,100,-18];
for (let i = arrReversed_2.length - 1; i >= 0; i--) {
    if(arrReversed_2[i] % 3 === 0) {
        arrReversed_2[i] = "okten";
    }
}
console.log(arrReversed_2);
console.log("___9.6___")
let arrReversed = [2,17,13,6,22,31,45,66,100,-18];
for (let i = arrReversed.length - 1; i >= 0; i--) {
    if(arrReversed[i] % 2 === 0) {
        console.log(arrReversed[i]);
    }
}
console.log("___9.5___")
let i4 = arrReversed.length - 1;
while(i4 >= 0) {
    if(arrReversed[i4] % 2 === 0) {
        console.log(arrReversed[i4]);
    }
    i4--;
}
console.log("___9.4___")
for (let i = arrReversed.length - 1; i >= 0; i--) {
    if(i % 2 !== 0) {
        console.log(arrReversed[i]);
    }
}
console.log("___9.3___")
let i5 = arrReversed.length - 1;
while (i5 >= 0) {
    if(i5 % 2 !== 0) {
        console.log(arrReversed[i5]);
    }
    i5--;
}
console.log("___9.2___")
for (let i = arrReversed.length - 1; i >= 0; i--) {
    console.log(arrReversed[i]);

}
console.log("___9.1___")
let i6 = arrReversed.length - 1;
while (i6 >= 0) {
    console.log(arrReversed[i6]);
    i6--;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log("__________________________")
let arrNumbers_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arrNumbers_1.length; i++) {
    console.log(arrNumbers_1[i]);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log("__________________________")
let arrString_1 = ["1", "2", "3", "4", "5", "6", "7", "8", "98", "421"];
let i7 = 0;
while (i7 <arrString_1.length) {
    console.log(arrString_1[i7]);
    i7++;
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log("__________________________")
let trashArr_1 = [1, 2, 3, 4, true, false, true, "32", "dsafd", "wwww"];
for (let i = 0; i < trashArr_1.length; i++) {
    const trashArr1Element = trashArr_1[i];
    console.log(trashArr1Element);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log("__________________________")
for (let i = 0; i < trashArr_1.length; i++) {
    const trashArr1Element = trashArr_1[i];
    if(typeof trashArr1Element === "boolean") {
        console.log(trashArr1Element);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log("__________________________")
for (let i = 0; i < trashArr_1.length; i++) {
    const trashArr1Element = trashArr_1[i];
    if(typeof trashArr1Element === "number") {
        console.log(trashArr1Element);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log("__________________________")
for (let i = 0; i < trashArr_1.length; i++) {
    const trashArr1Element = trashArr_1[i];
    if(typeof trashArr1Element === "string") {
        console.log(trashArr1Element);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
console.log("__________________________")
let trashArr_2 = [];
trashArr_2[0] = "klk";
trashArr_2[1] = 4321;
trashArr_2[2] = 1;
trashArr_2[3] = "jkkds";
trashArr_2[4] = 14343;
trashArr_2[5] = false;
trashArr_2[6] = "3421";
trashArr_2[7] = 3444211;
trashArr_2[8] = true;
trashArr_2[9] = false;
for (let i = 0; i < trashArr_2.length; i++) {
    const trashArr2Element = trashArr_2[i];
    console.log(trashArr2Element);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write(`<br>__________________________ <br>`)
console.log("__________________________")
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i + " ");
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write(`<br>__________________________ <br>`)
console.log("__________________________")
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i + " ");
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
document.write(`<br>__________________________ <br>`)
console.log("__________________________")
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(i + " ");
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
document.write(`<br>__________________________ <br>`)
console.log("__________________________")
for (let i = 0; i < 100; i++) {
    if(i % 2 === 0) {
        console.log(i);
        document.write(i + " ");
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
document.write(`<br>__________________________ <br>`)
console.log("__________________________")
for (let i = 0; i < 100; i++) {
    if(i % 2 !== 0) {
        console.log(i);
        document.write(i + " ");
    }
}
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
console.log("__________________________")
let bookArray = [
    {title : "Golden Randezvous", pages: 179, authors: ["Alistar Maclin"], genres: ["novel"]},
    {title : "The Man from Mars", pages: 790, authors: ["Stanisław Lem"], genres: ["philosophical novel", 'Social science fiction', "satire"]},
    {title : "The History of Science and Technology: A Browser's Guide to the Great Discoveries, Inventions, " +
            "and the People Who Made Them from the Dawn of Time to Today", pages: 776 ,
        authors: ["Bryan H. Bunch", "Alexander Hellemans"], genres: ["science novel"]},
    {title : "The Lord of the Rings", pages: 1178, authors: ["J. R. R. Tolkien"], genres: ["fantasy fiction", "high fantasy",
            "adventure fiction", "chivalric romance"]},
    {title : "Harry Potter and the Philosopher's Stone", pages: 223 , authors: ["J. K. Rowling"],
        genres: ["novel", "children's literature", "fantasy fiction", "high fantasy"]},
];
// -знайти наібльшу книжку.
console.log("__________________________")
let largestBook = bookArray[0];
for (let i = 0; i < bookArray.length; i++) {
    if(largestBook.pages < bookArray[i].pages) {
        largestBook = bookArray[i];
    }
}
console.log(largestBook);
// - знайти книжку/ки з найбільшою кількістю жанрів
console.log("__________________________")
let numberOfGenres = bookArray[0].genres.length;
let booksWithMostGenres = [];
for (let i = 0; i < bookArray.length; i++) {
    if(numberOfGenres <= bookArray[i].genres.length) {
        numberOfGenres = bookArray[i].genres.length;
    }
}
for (const book of bookArray) {
    if(book.genres.length === numberOfGenres) {
        booksWithMostGenres.push(book);
    }
}
console.log(numberOfGenres);
console.log(booksWithMostGenres);
// - знайти книжку/ки з найдовшою назвою
console.log("__________________________")
let largestTitleBook = bookArray[0];
for (let i = 0; i < bookArray.length; i++) {
    if(largestTitleBook.title.length < bookArray[i].title.length) {
        largestTitleBook = bookArray[i];
    }
}
console.log(largestTitleBook);
// - знайти книжку/ки які писали 2 автори
console.log("__________________________")
let twoAuthorsBooksArray = [];
for (const book of bookArray) {
    if(book.authors.length === 2) {
        twoAuthorsBooksArray.push(book);
    }
}
console.log(twoAuthorsBooksArray);
// - знайти книжку/ки які писав 1 автор
console.log("__________________________")
let oneAuthorBooksArray = [];
for (const book of bookArray) {
    if(book.authors.length === 1) {
        oneAuthorBooksArray.push(book);
    }
}
console.log(oneAuthorBooksArray);