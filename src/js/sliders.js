const
$gridSliderNextButtom = document.getElementById("grid-slider__next-button"),
$gridSliderBackButtom = document.getElementById("grid-slider__back-button"),
$gridSlider = document.getElementById("grid-slider"),
$gridSliderSlides = document.getElementById("grid-slider__slides"),
slideWidth = $gridSliderSlides.firstChild.clientWidth,
numberOfColumns = Math.floor(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--column')))

let gridSliderPressed = false
let startX
let x

$gridSlider.addEventListener('mousedown', (e) => {
    gridSliderPressed = true
    $gridSlider.style.cursor = "grabbing"
    startX = e.offsetX - $gridSliderSlides.offsetLeft
    // startX = $gridSliderSlides.offsetLeft
    console.log($gridSliderSlides.offsetLeft)
    console.log(startX)
})
$gridSlider.addEventListener('mouseenter', (e) => {
    $gridSlider.style.cursor = "grab"
})
$gridSlider.addEventListener('mouseleave', (e) => {
    $gridSlider.style.cursor = "default"
})
$gridSlider.addEventListener('mouseup', (e) => {
    $gridSlider.style.cursor = "grab"
})
window.addEventListener('mouseup', (e) => {
    gridSliderPressed = false
})
$gridSlider.addEventListener('mousemove', (e) => {
     if(!gridSliderPressed) return
    //  console.log(e.target)
     e.preventDefault()
     x = e.offsetX
    //  console.log(x)
     $gridSliderSlides.scrollLeft = x - startX
    //  console.log($gridSliderSlides.scrollLeft = x - startX)
    // console.log(startX)


})

$gridSliderNextButtom.addEventListener("click", (e) => {
    if($gridSliderSlides.scrollLeft > $gridSliderSlides.offsetWidth ){
        $gridSliderSlides.scrollLeft = 0
    }
    $gridSliderSlides.scrollLeft += slideWidth * numberOfColumns
    console.log($gridSliderSlides.scrollLeft)
})
$gridSliderBackButtom.addEventListener("click", (e) => {
    $gridSliderSlides.scrollLeft -= slideWidth * numberOfColumns
})


