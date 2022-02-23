const $gridSliderNextButtom = document.getElementById("grid-slider__next-button"),
$gridSliderBackButtom = document.getElementById("grid-slider__back-button"),
$gridSliderSlides = document.getElementById("grid-slider__slides"),
slideWidth = $gridSliderSlides.firstChild.clientWidth

$gridSliderNextButtom.addEventListener("click", (event) => {
    if($gridSliderSlides.scrollLeft > $gridSliderSlides.offsetWidth - slideWidth ){
        console.log("volver")
        $gridSliderNextButtom.innerHTML = "Volver"
    }
    if($gridSliderSlides.scrollLeft > $gridSliderSlides.offsetWidth ){
        console.log("para")
        $gridSliderSlides.scrollLeft = 0
        $gridSliderNextButtom.innerHTML = "Siguiente"
        // $gridSliderNextButtom.style.display = "none"
    }
    // alert(event.target.id)
    console.log($gridSliderSlides.scrollLeft)
    $gridSliderSlides.scrollLeft += slideWidth
})
$gridSliderBackButtom.addEventListener("click", (event) => {
    // alert(event.target.id)
    if($gridSliderSlides.scrollLeft > $gridSliderSlides.offsetWidth ){
        $gridSliderNextButtom.innerHTML = "Siguiente"
    }

    console.log($gridSliderSlides.scrollLeft)
    $gridSliderSlides.scrollLeft -= slideWidth
})

console.log($gridSliderSlides.clientWidth)
// console.log($gridSliderSlides.scrollLeft)