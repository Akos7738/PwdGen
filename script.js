const loverCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const specChar = "§+!%/=();_*?@&#<>[]";
const password = [];

document.getElementById("generateBtn").onclick = handleClick;

function handleClick() {
    const values = getInputValues();
    getReadyPassword(values);
}

function sendMessage(message) {
    alert(message);
}

function getInputValues() {
    const inputElements = document.querySelectorAll("input");
    const values = {};
    if (inputElements.length > 0) {
        for (let index in inputElements){
            if (inputElements[index].value === "") {
                sendMessage("Minden adat kitöltése szükséges!");
                inputElements[index].focus();
                return {};
            }
            values[inputElements[index].id] = inputElements[index].value
        }
        return values
    }

}

function createPasswordPart(count, collection) {
    for (let i = 0; i < count; i++) {
        password.push(collection[Math.floor(Math.random() * collection.length)]);
    }
}

function getReadyPassword() {
    const donePassword = [];
    for (let key in values) {
        switch (key) {
            
        }
    }
}