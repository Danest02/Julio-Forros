let buttonDarkMode = document.getElementById("buttonDarkMode")
let prefresDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
let body = document.getElementById("body")
let buttonDarkModeIcon = document.getElementById("buttonDarkModeIcon")
let buttonDarkModeText = document.getElementById("buttonDarkModeText")


if (localStorage.getItem('mode') == 'dark') {
    body.classList.toggle('dark-mode');
} else if (localStorage.getItem('mode') == 'light') {
    body.classList.toggle('light-mode');
}

function changeMode() {

    if (buttonDarkModeIcon.innerHTML == "dark_mode") {
        buttonDarkModeText.innerHTML = "Modo Claro"
        buttonDarkModeIcon.innerHTML = "light_mode"
    } else {
        buttonDarkModeText.innerHTML = "Modo Oscuro"
        buttonDarkModeIcon.innerHTML = "dark_mode"
    }

}
if (prefresDarkScheme.matches) {
    changeMode()
} 

if (buttonDarkMode) {
    buttonDarkMode.addEventListener("click", () => {
        changeMode()
        let mode;
        if (prefresDarkScheme.matches) {
            body.classList.toggle("light-mode")
            mode = body.classList.contains('light-mode') ? 'light' : 'dark'
        } else {
            body.classList.toggle("dark-mode")
            mode = body.classList.contains('dark-mode') ? 'dark' : 'light'
        }
        localStorage.setItem('mode', mode)

    })

}