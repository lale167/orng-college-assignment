const burger = document.querySelector(".burger");
const menuItems = document.querySelector(".menu-items")

const menuContact = document.querySelector(".menu-contact")
const scrollToContact = document.querySelector(".contact")

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menuItems.classList.toggle("active");
})

menuItems.addEventListener("click", () => {
    burger.classList.toggle("active");
    menuItems.classList.toggle("active");
})

menuContact.addEventListener("click", () => {
    scrollToContact.scrollIntoView()
})