// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let userArray = [];
for (let i = 1; i <= 10; i++) {
    userArray.push(new User(i, "userName" + i, "userSurname" + i, "userEmail" + i, "userPhone" + i));
}
console.log(userArray);

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(userArray.filter(s => s.id % 2 === 0));
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(userArray.sort((a, b) => b.id - a.id));
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clientsArray = [];
for (let i = 1; i <= 10; i++) {
    clientsArray.push(new Client(i, "clientName" + i, "clientSurname" + i, "clientEmail" + i, "clientPhone" + i,
        (() => {
            let tempArr = [];
            for (let j = 1; j <= i; j++) {
                tempArr.push("computer №" + j);
            }return tempArr;
        })()
    ));
}
console.log(clientsArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clientsArray.sort((a, b) => b.order.length - a.order.length)); //Аналогічно, при створенні вже були в порядку зростання розташовані, тому зробив у зворотному порядку.


//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxVelocity, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxVelocity = maxVelocity;
    this.engineCapacity = engineCapacity;
}
Car.prototype.drive = function() {
    console.log(`Driving at ${this.maxVelocity} per hour`);
}
Car.prototype.info = function(){
    console.log(`
        model - ${this.model}
        manufacturer - ${this.manufacturer}
        year - ${this.year}
        maxVelocity - ${this.maxVelocity}
        engineCapacity - ${this.engineCapacity}`)
};
Car.prototype.info2 = function() {
    console.log("____INFO 2_____")
    for (const key in this) {
        if(typeof this[key] === "function") {
            continue;
        }
        console.log(`${key.toUpperCase()}: `, this[key]);
    }
    console.log("____INFO 2_____")
}
Car.prototype.increaseMaxSpeed = function(newSpeed) {
    this.maxVelocity = newSpeed;
}
Car.prototype.changeYear = function(newValue) {
    this.year = newValue;
}
Car.prototype.addDriver = function(driver) {
    this.driver = driver;
}
let car1 = new Car("Impreza", "SubuWu", 2016, 256, 400);
car1.drive();
car1.info();
car1.info2();
car1.increaseMaxSpeed(300);
car1.changeYear(2020);
car1.info();
car1.addDriver({name: "Michael", surname: "Schumacher", age: 54});
console.log(car1.driver);


//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, manufacturer, year, maxVelocity, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxVelocity = maxVelocity;
        this.engineCapacity = engineCapacity;
    }
    drive = function() {
        console.log(`Driving at ${this.maxVelocity} per hour`);
    }
    info = function() {
        console.log(`
        model - ${this.model}
        manufacturer - ${this.manufacturer}
        year - ${this.year}
        maxVelocity - ${this.maxVelocity}
        engineCapacity - ${this.engineCapacity}`)
    }
    increaseMaxSpeed = function(newSpeed) {
        this.maxVelocity = newSpeed;
    }
    changeYear = function(newValue) {
        this.year = newValue;
    }
    addDriver = function(driver) {
        this.driver = driver;
    }
    showDriver = function() {
        return this.driver;
    }
}

let car2 = new Car2("Impreza", "SubuWu", 2016, 256, 400);
car2.drive();
car2.info();
car2.increaseMaxSpeed(322);
car2.changeYear(2023);
car2.addDriver({name: "Yarik", AKA: "Bachok potik", carModel: "Lada"})
car2.info();
console.log(car2.showDriver());

//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let harem = [];
for (let i = 1; i <= 10; i++) {
    harem.push(new Cinderella("woman №" + i, 17 + i, 35 + i));
}
console.log(harem);
class LuckyPrince {
    constructor(name, age, glassSlipperSize) {
        this.name = name;
        this.age = age;
        this.glassSlipperSize = glassSlipperSize;
    }
    findPrincess = function(harem) {
        for (const woman of harem) {
            if(woman.footSize === this.glassSlipperSize) {
                return woman;
            }
        }
    }
}
const prince = new LuckyPrince("Charming", 25, 38);
console.log(prince.findPrincess(harem));
//Перемістити до принца як метод
for (const cinderella of harem) {
    if(cinderella.footSize === prince.glassSlipperSize) {
        prince.cinderella = cinderella;
    }
}
console.log(prince);

let luckyBride = harem.find(s => s.footSize === prince.glassSlipperSize);
//Adding lucky Cinderella to prince if needed. But there is no need, since she already with the prince.
// prince.cinderella = luckyBride;
console.log(luckyBride);
