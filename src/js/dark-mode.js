const buttonDarkMode = document.getElementById("buttonDarkMode"),
    prefresDarkScheme = window.matchMedia('(prefers-color-scheme: dark)'),
    body = document.getElementById("body"),
    buttonDarkModeIcon = document.getElementById("buttonDarkModeIcon"),
    buttonDarkModeText = document.getElementById("buttonDarkModeText")


if (localStorage.getItem('mode') == 'dark') {
    body.classList.toggle('dark-mode');
} else if (localStorage.getItem('mode') == 'light') {
    body.classList.toggle('light-mode');
}

const changeMode = () => {

    if (prefresDarkScheme.matches) {
        if (body.classList.contains('light-mode')) {
            buttonDarkModeIcon.innerHTML = "dark_mode"
        } else{
            buttonDarkModeIcon.innerHTML = "light_mode"
        }
    }else {
        if (body.classList.contains('dark-mode')) {
            buttonDarkModeIcon.innerHTML = "light_mode"
        } else{
            buttonDarkModeIcon.innerHTML = "dark_mode"
        }

    }
    
}

changeMode()
if (buttonDarkMode) {
    buttonDarkMode.addEventListener("click", () => {
        let mode;
        if (prefresDarkScheme.matches) {
            body.classList.toggle("light-mode")
            mode = body.classList.contains('light-mode') ? 'light' : 'dark'
        } else {
            body.classList.toggle("dark-mode")
            mode = body.classList.contains('dark-mode') ? 'dark' : 'light'
        }
        changeMode()
        localStorage.setItem('mode', mode)

    })

}