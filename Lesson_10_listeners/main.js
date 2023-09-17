// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні
// з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку,
// під формою з'явився блок з вашим об'єктом

let form1 = document.forms[0];
form1.onsubmit = function(e) {
    e.preventDefault();
    let divOutside = document.getElementById("firstDiv");

    let divInside = document.createElement("div");
    divInside.innerText = "UserName: " + form1.userName.value + "\r\nSurname: " + form1.userSurname.value + "\r\nAge: " + form1.userAge.value;

    divOutside.append(divInside);
    document.body.prepend(divOutside);
}




// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
// який при кожному перезавантажені сторінки буде додавати до неї +1

let counterContainer = document.getElementsByClassName("digit_block")[0];
let resetNumber = document.getElementById("reset");
let numberFromLocalStorage = localStorage.getItem("number");

if (numberFromLocalStorage) {
    numberFromLocalStorage = parseInt(numberFromLocalStorage) + 1;
    localStorage.setItem("number", numberFromLocalStorage);
} else {
    numberFromLocalStorage = 1;
    localStorage.setItem("number", 1);
}
counterContainer.innerText = numberFromLocalStorage;

resetNumber.addEventListener("click", function (e) {
    numberFromLocalStorage = 1;
    localStorage.setItem("number", 1);
    counterContainer.innerText = numberFromLocalStorage;
});



// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію
// про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію



//see page visitCounter.html && page sessions.html



// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let arrayForHundredElements = [];
for (let i = 1; i <= 100; i++) {
    arrayForHundredElements.push({name: "Element " + i, age: i, password: i * Math.floor(Math.random() * 50)})
}

let pageWithContent = document.getElementById("pageWithContent");
let previous = document.getElementById("previous")
let next = document.getElementById("next")
let pageCounter = 0;

window.onload = displayItems(pageCounter);
previous.onclick = function(e) {
    pageWithContent.innerText = "";
    e.preventDefault();
    if(pageCounter === 0) {
        pageCounter = 90;
    } else {
        pageCounter -= 10;
    }
    displayItems(pageCounter);
}
next.onclick = function(e) {
    pageWithContent.innerText = "";
    e.preventDefault();
    if(pageCounter === 90) {
        pageCounter = 0;
    } else {
        pageCounter += 10;
    }
    displayItems(pageCounter);
}
function displayItems(counter) {
    for (let i = counter; i < counter + 10; i++) {
        let element = document.createElement("p");
        element.innerText = "name: " + arrayForHundredElements[i].name + ", age: " + arrayForHundredElements[i].age +
            ", password: " + arrayForHundredElements[i].password;
        pageWithContent.appendChild(element);
    }
}


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let nahrjuk = document.getElementsByClassName("nahrjuk")[0];
let toggleNahrjuk = document.getElementById("toggleNahrjuk");
toggleNahrjuk.onclick = function(e) {
    if(nahrjuk.style.display === "none") {
        nahrjuk.style.display = "block";
    } else {
        nahrjuk.style.display = "none";
    }
}


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту
//     та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form2 = document.forms.form2;
form2.onsubmit = function(e) {
    e.preventDefault();

    let ageCheckerDiv = document.getElementById("ageChecker");
    let checkIfElIsPresent = document.getElementById("ageCh")
    if(checkIfElIsPresent) {
        checkIfElIsPresent.remove();
    }
    let result = document.createElement("div");
    result.setAttribute("id", "ageCh")

    let resultingString = document.createElement("p");
    let img = document.createElement("img");
    if(form2.age.value > 18) {
        resultingString.innerText = "Welcome to the club, buddy: ";
        img.setAttribute("id", "oldEnough")
        img.setAttribute("src", "sticker.gif");
    } else {
        resultingString.innerText = "What are you doing here, underaged boy? We are reporting you to SBU right away";
        img.setAttribute("src", "trapped_mouse.gif");
    }

    result.append(resultingString, img);
    ageCheckerDiv.appendChild(result);
}


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let form3 = document.forms.form3;
form3.onsubmit = function(e) {
    e.preventDefault();
    let rows = parseInt(form3.numberOfRows.value);
    let columns = parseInt(form3.numberOfColumns.value);
    let content = form3.content.value;
    let form3Div = document.getElementById("form3Div");

    //Refactored to improve readability
    let form3input = document.getElementById("form3input")
    if(form3input) {
        form3input.remove();
    }

    let outside = document.createElement("div");
    outside.setAttribute("id", "form3input")

    for (let i = 0; i < rows; i++) {
        let inside = document.createElement("div");
        for (let j = 0; j < columns; j++) {
            let cont = document.createElement("div")
            inside.append(content);
        }
        outside.appendChild(inside);
    }
    form3Div.append(outside);
}




// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком,
// в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let hryvnyaDiv = document.getElementById("hryvnyaDiv");
let startTime = new Date().getTime();
let storageObject = JSON.parse(localStorage.getItem("hryvnyaDate")) || {value: "100 UAH", time: startTime};
if(startTime - storageObject.time > 10000) {
    let numberParsed = parseInt(storageObject.value);
    storageObject.value = numberParsed + 10 + " UAH";
    storageObject.time = startTime;
} else {
    storageObject.time = startTime;
}
localStorage.setItem("hryvnyaDate", JSON.stringify(storageObject));
hryvnyaDiv.innerText = storageObject.value;
