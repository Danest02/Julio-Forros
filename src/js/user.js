const userButtonNavBar = document.getElementById("userButtonNavBar"),
    user = document.querySelector(".user"),
    userButtonClose = document.getElementById("userButtonClose")

userButtonNavBar.addEventListener("click", () => {
    user.classList.toggle('user--visible')
    if(user.classList.contains("user--visible")){
        disableScroll()
    }else{
        enableScroll()
    }
})
userButtonClose.addEventListener("click", () => {
    user.classList.toggle('user--visible')
    if(user.classList.contains("user--visible")){
        disableScroll()
    }else{
        enableScroll()
    }
})
