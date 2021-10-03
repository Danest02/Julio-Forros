console.log("navbar-header")

const navbarHeaderButtomText = document.querySelectorAll(".navbar-header__button-text");
let navbarHeaderButtomText0 = ()=> navbarHeaderButtomText[0].clientWidth
let navbarHeaderButtomText1;
let navbarHeaderButtomText2;

document.documentElement.style.setProperty('navbar-header__button-text-1' , navbarHeaderButtomText0())

console.log(navbarHeaderButtomText0)

// for (let buttomText of navbarHeaderButtomText) {
//     buttomText
//     console.log(buttomText.clientWidth);
// }
