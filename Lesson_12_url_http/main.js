// зробити файл users.html
// з ендпоінту "http://jsonplaceholder.typicode.com/users" отримати всіх користувачів
//  вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача
// (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)



async function getUsers() {
    let users = await fetch("http://jsonplaceholder.typicode.com/users");
    return users.json();
}
async function display() {
    let users = await getUsers();
    let ul = document.getElementById("list");
    for (let i = 0; i < users.length; i++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.innerText = `${users[i].id} - ${users[i].name}`;
        a.href="./user-details.html?value=" + JSON.stringify(users[i].id);
        console.log(li);
        li.appendChild(a);
        ul.appendChild(li);
    }
}
display();
