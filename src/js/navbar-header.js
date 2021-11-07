const navbarHeader = document.getElementById("navbar-header");
let initialScroll = window.pageYOffset,
    mainScroll = document.querySelector("main").offsetTop,
    hamburguer = document.getElementById("hamburguer"),
    menuLinks = Array.from(document.querySelectorAll(".menu__link"))

let urlActual = window.location.href;


menuLinks.forEach(element => {
    let href = element.getAttribute("href") 
        if (urlActual.includes(href)) {
            element.classList.add("menu__link--active")
        }
        else{
            element.classList.remove("menu__link--active")
        }
    }

)
hamburguer.addEventListener("click", () => {

    document.querySelector(".hamburguer__div-center").classList.toggle("hamburguer--simple")
    navbarHeader.classList.toggle("navbar-header--hamburguer")
    if (navbarHeader.classList.contains("navbar-header--hamburguer")) {
        disableScroll()
    } else {
        enableScroll()
    }

})

window.addEventListener("scroll", () => {
    if (!navbarHeader.classList.contains("navbar-header--hamburguer")) {
        let currentScroll = window.pageYOffset;
        if (currentScroll >= initialScroll && currentScroll >= mainScroll) {
            navbarHeader.classList.add("navbar-header--hide")
            navbarHeader.classList.add("navbar-header--scroll")
        } else if (currentScroll <= mainScroll) {
            navbarHeader.classList.add("navbar-header--hide")
        } else {
            navbarHeader.classList.remove("navbar-header--hide")
        }
        if (currentScroll == 0) {
            navbarHeader.classList.remove("navbar-header--scroll")
            navbarHeader.classList.remove("navbar-header--hide")
        }

        initialScroll = currentScroll;
    }

});