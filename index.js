const burger = document.querySelector(".burger");
const menuItems = document.querySelector(".menu-items")

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menuItems.classList.toggle("active");
})