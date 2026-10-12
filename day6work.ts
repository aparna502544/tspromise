let nameInput = document.getElementById("name") as HTMLInputElement;
let button = document.getElementById("btn") as HTMLButtonElement;
let result = document.getElementById("result") as HTMLParagraphElement;

function loadStudent(name: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Welcome, " + name);
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

export{}