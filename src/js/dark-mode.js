const buttonDarkMode = document.getElementById("buttonDarkMode"),
prefresDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
let body = document.getElementById("body"),
buttonDarkModeIcon = document.getElementById("buttonDarkModeIcon"),
buttonDarkModeText = document.getElementById("buttonDarkModeText")


if(buttonDarkMode){
    // if(prefresDarkScheme.matches){
    //     buttonDarkModeText.innerHTML = "Modo Claro"
    // }
    function changeMode(){
        if(buttonDarkModeIcon.innerHTML == "dark_mode"){
            buttonDarkModeText.innerHTML = "Modo Claro"
            buttonDarkModeIcon.innerHTML = "light_mode"
        }else{
            buttonDarkModeText.innerHTML = "Modo Oscuro" 
            buttonDarkModeIcon.innerHTML = "dark_mode"
        }
    }
    changeMode()
    buttonDarkMode.addEventListener("click", ()=> {
        changeMode()
        if(prefresDarkScheme.matches){
            body.classList.toggle("light-mode")
        }else{
            body.classList.toggle("dark-mode")


        }
        
    })
}