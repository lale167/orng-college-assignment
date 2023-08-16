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

const footerAboutUs = document.querySelector(".footer-about-us")
const footerTechnology = document.querySelector(".footer-technology")

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
})

footerAboutUs.addEventListener("click", () => {
    scrollToAboutUs.scrollIntoView();
})

menuTechnology.addEventListener("click", () => {
    scrollToTechnology.scrollIntoView();
})

footerTechnology.addEventListener("click", () => {
    scrollToTechnology.scrollIntoView();
})

menuContact.addEventListener("click", () => {
    scrollToContact.scrollIntoView();
})

menuProducts.addEventListener("click", () => {
    scrollToProducts.scrollIntoView();
})

// img popup


const popup = document.querySelector('.popup')
const span = document.querySelector('.popup span')
const popupImg = document.querySelector('.popup img')
const mask = document.querySelector('.popup-mask')
const popupContainer = document.querySelector('.popup-container')

const popupInfo1 = document.querySelector('.popup-info1')
const popupInfo2 = document.querySelector('.popup-info2')
const popupInfo3 = document.querySelector('.popup-info3')
const popupInfo4 = document.querySelector('.popup-info4')

const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const button3 = document.querySelector('.button3')
const button4 = document.querySelector('.button4')


button1.onclick = () => {
    popup.style.display = "inline-block";
    popupImg.setAttribute('src', 'images/img1.png');
    popupInfo1.style.display = 'inline-block'
    popupInfo2.style.display = 'none'
    popupInfo3.style.display = 'none'
    popupInfo4.style.display = 'none'
}

button2.onclick = () => {
    popup.style.display = 'inline-block';
    popupImg.setAttribute('src', 'images/img2.png')
    popupInfo1.style.display = 'none'
    popupInfo2.style.display = 'inline-block'
    popupInfo3.style.display = 'none'
    popupInfo4.style.display = 'none'
}

button3.onclick = () => {
    popup.style.display = 'inline-block';
    popupImg.setAttribute('src', 'images/img3.jpg')
    popupInfo1.style.display = 'none'
    popupInfo2.style.display = 'none'
    popupInfo3.style.display = 'inline-block'
    popupInfo4.style.display = 'none'
}

button4.onclick = () => {
    popup.style.display = 'inline-block';
    popupImg.setAttribute('src', 'images/img4.jpg')
    popupInfo1.style.display = 'none'
    popupInfo2.style.display = 'none'
    popupInfo3.style.display = 'none'
    popupInfo4.style.display = 'inline-block'
}


span.onclick = () => {
    popup.style.display = 'none';
}

mask.onclick = () => {
    popup.style.display = 'none';
}