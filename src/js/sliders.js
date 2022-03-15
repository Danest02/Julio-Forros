// TODO:ANCHOR --- GRID SLIDER

const
    $gridSliderNextButtom = document.getElementById("grid-slider__next-button"),
    $gridSliderBackButtom = document.getElementById("grid-slider__back-button"),
    $gridSlider = document.getElementById("grid-slider"),
    $gridSliderSlides = document.getElementById("grid-slider__slides"),
    $gridSliderSlide = document.querySelector(".grid-slider__slide"),
    slideWidth = $gridSliderSlides.firstChild.clientWidth,
    numberOfColumns = Math.floor(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--column')))

window.addEventListener('resize', () => {
    const
        slideWidth = $gridSliderSlides.firstChild.clientWidth,
        numberOfColumns = Math.floor(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--column')))

})
let
    gridSliderPressed = false,
    gridSliderStartX,
    gridSliderEndX,
    gridSliderDifference,
    gridSliderSlideWidth


$gridSlider.addEventListener('mousedown', (e) => {
    e.preventDefault
    gridSliderSlideWidth = document.querySelector(".grid-slider__slide").offsetWidth
    gridSliderPressed = true
    gridSliderStartX = e.offsetX + e.target.getBoundingClientRect().left - e.target.parentElement.getBoundingClientRect().left
})
window.addEventListener('mouseup', () => {
    gridSliderPressed = false
    $gridSliderSlides.style.cursor = "grab"

})
$gridSliderSlides.addEventListener('mousemove', (e) => {
    if (!gridSliderPressed) return
    $gridSliderSlides.style.cursor = "grabbing"
    e.preventDefault()
    gridSliderEndX = e.offsetX + e.target.getBoundingClientRect().left - e.target.parentElement.getBoundingClientRect().left
    gridSliderDifference = gridSliderStartX - gridSliderEndX
    if (Math.abs(gridSliderDifference) < gridSliderSlideWidth) {
        if (gridSliderDifference < 0) {
            $gridSliderSlides.scrollLeft -= gridSliderSlideWidth
        } else if (gridSliderDifference > 0) {
            $gridSliderSlides.scrollLeft += gridSliderSlideWidth
        }
    } else if (Math.abs(gridSliderDifference) > gridSliderSlideWidth && Math.abs(gridSliderDifference) < gridSliderSlideWidth * 2) {
        if (gridSliderDifference < 0) {
            $gridSliderSlides.scrollLeft -= gridSliderSlideWidth * 2
        } else if (gridSliderDifference > 0) {
            $gridSliderSlides.scrollLeft += gridSliderSlideWidth * 2
        }
    } else {
        $gridSliderSlides.scrollLeft += gridSliderDifference
    }
    // $gridSliderSlides.style.transform += `translateX(${gridSliderEndX-gridSliderStartX}px)`

})
$gridSlider.addEventListener("click", (e) => {
    if (e.target == $gridSliderNextButtom) {
        if ($gridSliderSlides.scrollLeft >= $gridSliderSlides.scrollWidth - $gridSliderSlides.offsetWidth) {
            $gridSliderSlides.scrollLeft = 0
        }
        $gridSliderSlides.scrollLeft += gridSliderSlideWidth * numberOfColumns
    } else if (e.target == $gridSliderBackButtom) {
        $gridSliderSlides.scrollLeft -= gridSliderSlideWidth * numberOfColumns
    }
})
$gridSliderSlides.addEventListener('scroll', () => {
    if ($gridSliderSlides.scrollLeft >= $gridSliderSlides.scrollWidth - $gridSliderSlides.offsetWidth) {
        document.querySelector(".grid-slider__container-slides").classList.add("grid-slider__container-slides--before-hiden")
    } else {
        document.querySelector(".grid-slider__container-slides").classList.remove("grid-slider__container-slides--before-hiden")
    }
})
// TODO:ANCHOR --- DEFAULT SLIDER
const
    $defaultSlider = document.getElementById("default-slider"),
    $defaultSliderSlides = document.getElementById("default-slider__slides"),
    $defaultSliderBackButton = document.getElementById("default-slider__back-button"),
    $defaultSliderNextButton = document.getElementById("default-slider__next-button")

let
    defaultSliderPressed = false,
    defaultSliderStartX,
    defaultSliderEndX,
    defaultSliderDifference,
    defaultSliderSlideWidth,
    defaultSliderTranslateX = 0

$defaultSlider.addEventListener('mousedown', (e) => {
    e.preventDefault
    defaultSliderSlideWidth = document.querySelector(".default-slider__slide").offsetWidth
    // defaultSliderStartX = e.offsetX
    defaultSliderStartX = e.offsetX
    // console.log(e.target)
    // console.log($defaultSliderSlides.offsetLeft)
    // console.log("defaultSliderStartX")
    // console.log(defaultSliderStartX)
    defaultSliderPressed = true
})


const defaultSliderTranslate = function(endX,startX){
    defaultSliderDifference = endX - startX
    $defaultSliderSlides.style.transform = `translateX(${defaultSliderTranslateX + defaultSliderDifference}px)`

}
$defaultSlider.addEventListener('mousemove', (e) => {
    e.preventDefault
    if (!defaultSliderPressed) return
    // console.log(e.target)
    defaultSliderEndX = e.offsetX 
    // console.log("defaultSliderEndX")
    // console.log(defaultSliderEndX)
    defaultSliderTranslate(defaultSliderEndX, defaultSliderStartX)
    // defaultSliderDifference = defaultSliderEndX - defaultSliderStartX
    // $defaultSliderSlides.style.transform = `translateX(${defaultSliderDifference}px)`



})
window.addEventListener('mouseup', (e) => {
    defaultSliderPressed = false
    defaultSliderTranslateX += defaultSliderDifference
    // $defaultSliderSlides.style.cursor = "grab"
    // if(Math.abs(defaultSliderEndX - defaultSliderStartX < 100)){
    //     defaultSliderDifference = 0
    //     $defaultSliderSlides.style.transform += `translateX(${defaultSliderDifference}px)`
    // }

})
