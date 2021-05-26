
const data = {
    "User": "UserPass",
    "Admin": "AdminRoot"
};

let login = prompt("Enter you login");
let password;
if (login === null || login === "") {
    alert("Canceled");
} else if (login.length < 4) {
    alert("I don't know any users having name lenght less than 4 symbols");
} else if (data[login] !== undefined) {
    password = prompt("Enter you pass")
    if (password === data[login]) {
        const currentHours = new Date();
        if (currentHours.getHours() < 20) {
            alert(`Good day, dear ${login}`)
        } else if (currentHours.getHours() >= 20) {
            alert(`Good evening, dear ${login}`)
        }
    } else if (password === null || password === "") {
        alert("Canceled")
    } else alert("Wrong password");
} else alert("I don't know you");


