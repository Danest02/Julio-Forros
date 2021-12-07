const userButtonNavBar = document.getElementById("userButtonNavBar"),
    user = document.querySelector(".user"),
    userButtonClose = document.getElementById("userButtonClose"),
    singInLogIn = document.getElementById("singInLogIn"),
    singIn = document.getElementById("singIn"),
    logIn = document.getElementById("logIn"),
    userButtonGoBack = document.getElementById("userButtonGoBack")

userButtonNavBar.addEventListener("click", () => {
    user.classList.toggle("user--visible")
    if(user.classList.contains("user--visible")){
        disableScroll()
    }else{
        enableScroll()
    }
})
userButtonClose.addEventListener("click", () => {
    user.classList.toggle("user--visible")
    if(user.classList.contains("user--visible")){
        disableScroll()
    }else{
        enableScroll()
    }
})
singInLogIn.addEventListener("click", () => {
    userButtonGoBack.classList.toggle("opacity")
    singIn.classList.toggle("display-none")
    logIn.classList.toggle("display-none")
})
userButtonGoBack.addEventListener("click", () => {
    userButtonGoBack.classList.toggle("opacity")
    singIn.classList.toggle("display-none")
    logIn.classList.toggle("display-none")
})

