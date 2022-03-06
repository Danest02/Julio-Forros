const
    $gridSliderNextButtom = document.getElementById("grid-slider__next-button"),
    $gridSliderBackButtom = document.getElementById("grid-slider__back-button"),
    $gridSlider = document.getElementById("grid-slider"),
    $gridSliderSlides = document.getElementById("grid-slider__slides"),
    slideWidth = $gridSliderSlides.firstChild.clientWidth,
    numberOfColumns = Math.floor(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--column')))

let gridSliderPressed = false
let startX
let endX

$gridSlider.addEventListener('mousedown', (e) => {
    gridSliderPressed = true
    $gridSlider.style.cursor = "grabbing"
    startX = e.offsetX
})
$gridSliderSlides.addEventListener('mouseenter', (e) => {
    $gridSlider.style.cursor = "grab"
})
$gridSliderSlides.addEventListener('mouseleave', (e) => {
    $gridSlider.style.cursor = "default"
})
$gridSlider.addEventListener('mouseup', (e) => {
    $gridSlider.style.cursor = "grab"
    gridSliderPressed = false
})
$gridSlider.addEventListener('mousemove', (e) => {
    e.preventDefault()
    endX = e.offsetX
    if (!gridSliderPressed) return
    let gridSliderSlideWidth = document.querySelector(".grid-slider__slide").offsetWidth
    let a = startX - endX
    if(a < gridSliderSlideWidth && a > gridSliderSlideWidth * -1){
        if(a < 0){
            $gridSliderSlides.scrollLeft -= gridSliderSlideWidth
        }else if(a > 0){
            $gridSliderSlides.scrollLeft += gridSliderSlideWidth
        }
    }else{
        $gridSliderSlides.scrollLeft += a
    }
})
$gridSlider.addEventListener("click", (e) => {
    if(e.target == $gridSliderNextButtom ){
        if ($gridSliderSlides.scrollLeft > $gridSliderSlides.offsetWidth) {
            $gridSliderSlides.scrollLeft = 0
        }
        $gridSliderSlides.scrollLeft += slideWidth * numberOfColumns
    }else if (e.target == $gridSliderBackButtom){
        $gridSliderSlides.scrollLeft -= slideWidth * numberOfColumns
    }
})
