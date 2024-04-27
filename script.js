let password1 = document.querySelector("#password");
let password2 = document.querySelector("#conpassword");
let confirm = document.querySelector("#confirmbtn");
let fieldset1 = document.querySelector(".first-column");
let items = document.querySelectorAll(".item");

items.forEach(e => {
    e.addEventListener("blur", (event) => {
        if (event.target.classList.contains("item") && fieldset1.classList.contains("errormes")) {
            if (password1.value === password2.value) {
                fieldset1.classList.remove("errormes");
                password1.classList.remove("errormesp");
                password2.classList.remove("errormesp");
            }
        }
    });
});

confirm.addEventListener("click", (e) => {
    if (password1.value === password2.value) {
    }
    else {
        e.preventDefault();
        fieldset1.classList.add("errormes");
        password1.classList.add("errormesp");
        password2.classList.add("errormesp");
    }
});
