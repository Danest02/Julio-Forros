const searchButtonNavBar = document.getElementById("searchButtonNavBar"),
    search = document.querySelector(".search"),
    searchButtonClose = document.getElementById("searchButtonClose")

searchButtonNavBar.addEventListener("click", () => {
    search.classList.toggle('search--visible')
    if(search.classList.contains("search--visible")){
        disableScroll()
    }else{
        enableScroll()
    }
})
searchButtonClose.addEventListener("click", () => {
    search.classList.toggle('search--visible')
    if(search.classList.contains("search--visible")){
        disableScroll()
    }else{
        enableScroll()
    }
})
