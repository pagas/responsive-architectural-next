const menuIcon = document.querySelector(".menu-icon");
const container = document.querySelector(".container");
menuIcon.addEventListener("click", function (e) {
    container.classList.toggle("change");
});

