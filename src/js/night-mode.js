const buttonDarkMode = document.getElementById("buttonDarkMode");
let body = document.getElementById("body")

if(buttonDarkMode){
    buttonDarkMode.addEventListener("click", ()=> {
        body.classList.toggle("dark-mode")
        
    })
}