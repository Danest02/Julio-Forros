const navbarHeader = document.getElementById("navbar-header");
let initialScroll =  window.pageYOffset;
let mainScroll = document.querySelector("main").offsetTop;
let hamburguer = document.getElementById("hamburguer");

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
