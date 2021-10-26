const navbarHeader = document.getElementById("navbar-header");
let initialScroll =  window.pageYOffset,
mainScroll = document.querySelector("main").offsetTop,
hamburguer = document.getElementById("hamburguer")

let buttonDarkModeTextWidth = buttonDarkModeText.clientWidth
// buttonDarkModeText.style.width = "0"
console.log(buttonDarkModeTextWidth)
// document.documentElement.style.setProperty('--width-button-dark-mode-text' , buttonDarkModeTextWidth + 'px')
// console.log(getComputedStyle(document.documentElement).getPropertyValue('--width-button-dark-mode-text'))



hamburguer.addEventListener("click", ()=> {

    document.querySelector(".hamburguer__div-center").classList.toggle("hamburguer--simple")
    navbarHeader.classList.toggle("navbar-header--hamburguer")
    if(navbarHeader.classList.contains("navbar-header--hamburguer")){
        disableScroll()
    }else{
        enableScroll()
    }

})

window.addEventListener("scroll", ()=> {
    if(!navbarHeader.classList.contains("navbar-header--hamburguer")){
        let currentScroll =  window.pageYOffset;
        if(currentScroll >= initialScroll && currentScroll >= mainScroll){
            navbarHeader.classList.add("navbar-header--hide")
            navbarHeader.classList.add("navbar-header--scroll")
        }else if(currentScroll <= mainScroll){
            navbarHeader.classList.add("navbar-header--hide")
        }else{
            navbarHeader.classList.remove("navbar-header--hide")
        }
        if(currentScroll == 0){
            navbarHeader.classList.remove("navbar-header--scroll")
            navbarHeader.classList.remove("navbar-header--hide")
        }
    
        initialScroll = currentScroll;
    }
    
});



