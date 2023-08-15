const burger = document.querySelector(".burger")
const menuItems = document.querySelector(".menu-items")


const menuAboutUs = document.querySelector(".menu-about-us")
const scrollToAboutUs = document.querySelector(".about-us-title")

const menuTechnology = document.querySelector(".menu-technology")
const scrollToTechnology = document.querySelector(".about-us-technologies")

const menuContact = document.querySelector(".menu-contact")
const scrollToContact = document.querySelector(".contact")

const menuProducts = document.querySelector(".menu-products")
const scrollToProducts = document.querySelector(".products")

// burger popup


burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menuItems.classList.toggle("active");
})

menuItems.addEventListener("click", () => {
    burger.classList.toggle("active");
    menuItems.classList.toggle("active");
})

// scroll to section


menuAboutUs.addEventListener("click", () => {
    scrollToAboutUs.scrollIntoView();
    window.scrollBy(0,-60);
})

menuTechnology.addEventListener("click", () => {
    scrollToTechnology.scrollIntoView();
    window.scrollBy(0,-60);
})

menuContact.addEventListener("click", () => {
    scrollToContact.scrollIntoView();
    if(window.innerHeight<750){
        window.scrollBy(0,-40);
    }
})

menuProducts.addEventListener("click", () => {
    scrollToProducts.scrollIntoView();
        window.scrollBy(0,-60);
})

// img popup


const popup = document.querySelector('.popup')
const span = document.querySelector('.popup span')
const popupImg = document.querySelector('.popup img')

const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const button3 = document.querySelector('.button3')
const button4 = document.querySelector('.button4')




button1.onclick = () => {
    popup.style.display = 'inline-block';
    popupImg.setAttribute('src', 'images/img1.png');
}

button2.onclick = () => {
    popup.style.display = 'inline-block';
    popupImg.setAttribute('src', 'images/img2.png')
}

button3.onclick = () => {
    popup.style.display = 'inline-block';
    popupImg.setAttribute('src', 'images/img3.jpg')
}

button4.onclick = () => {
    popup.style.display = 'inline-block';
    popupImg.setAttribute('src', 'images/img4.jpg')
}






span.onclick = () => {
    popup.style.display = 'none';
}