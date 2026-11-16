const button = document.querySelector(".button-co");
const inputs = document.querySelectorAll("input");

button.addEventListener("click", () => {
    inputs.forEach((input) => {
        input.style.border = "2px solid red";
        input.style.backgroundColor = "transparent";
        input.style.color = "white";
    });
});

