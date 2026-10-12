"use strict";
let nameInput = document.getElementById("name");
let button = document.getElementById("btn");
let result = document.getElementById("result");
function loadStudent(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Welcome, " + name + "!");
        }, 2000);
    });
}
button.addEventListener("click", async function () {
    let name = nameInput.value;
    if (name == "") {
        result.innerHTML = "Please enter your name.";
        return;
    }
    result.innerHTML = "Loading student data...";
    let message = await loadStudent(name);
    result.innerHTML = message;
});
