const buttonDarkMode = document.getElementById("buttonDarkMode"),
    prefresDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
let body = document.getElementById("body"),
    buttonDarkModeIcon = document.getElementById("buttonDarkModeIcon"),
    buttonDarkModeText = document.getElementById("buttonDarkModeText")


// buttonDarkModeText.style.width = "100"
// console.log(getComputedStyle(document.documentElement).getPropertyValue('--width-button-dark-mode-text'))

// let buttonDarkModeTextWidth = buttonDarkModeText.clientWidth + 'px'
// console.log(buttonDarkModeTextWidth)
// document.documentElement.style.setProperty('--width-button-dark-mode-text', buttonDarkModeTextWidth)
// buttonDarkModeText.style.width = "0"
// function widthTextModeDark() {
//     console.log(buttonDarkModeTextWidth)
//     let buttonDarkModeTextWidth = buttonDarkModeText.clientWidth + 'px'
//     buttonDarkModeText.style.width = "0"
//     document.documentElement.style.setProperty('--width-button-dark-mode-text', buttonDarkModeTextWidth)
// }

function changeMode() {
    
    if (buttonDarkModeIcon.innerHTML == "dark_mode") {
        buttonDarkModeText.innerHTML = "Modo Claro"
        buttonDarkModeIcon.innerHTML = "light_mode"
    } else {
        buttonDarkModeText.innerHTML = "Modo Oscuro"
        buttonDarkModeIcon.innerHTML = "dark_mode"
    }
    // buttonDarkModeText.style.width = "100%"
    buttonDarkModeText.classList.add("width-100")
    let buttonDarkModeTextWidth =  buttonDarkModeText.clientWidth + 'px'
    buttonDarkModeText.classList.add("width-0")
    console.log(buttonDarkModeTextWidth)
    // buttonDarkModeText.style.width = "0"
    document.documentElement.style.setProperty('--width-button-dark-mode-text', buttonDarkModeTextWidth)

}
changeMode()

if (buttonDarkMode) {

    buttonDarkMode.addEventListener("click", () => {
        changeMode()
        buttonDarkMode.classList.add("width-var")
        if (prefresDarkScheme.matches) {
            body.classList.toggle("light-mode")
            
        } else {
            body.classList.toggle("dark-mode")


        }

    })
}