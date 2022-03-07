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
    console.log(slideWidth)
    console.log(numberOfColumns)

})
// window.addEventListener('orientationchange', () => {
//     const
//         slideWidth = $gridSliderSlides.firstChild.clientWidth,
//         numberOfColumns = Math.floor(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--column')))
//     console.log(slideWidth)
//     console.log(numberOfColumns)

// })
let
    gridSliderPressed = false,
    startX,
    endX,
    difference,
    gridSliderSlideWidth


$gridSlider.addEventListener('mousedown', (e) => {
    e.preventDefault
    gridSliderSlideWidth = document.querySelector(".grid-slider__slide").offsetWidth
    gridSliderPressed = true
    startX = e.offsetX + e.target.getBoundingClientRect().left - e.target.parentElement.getBoundingClientRect().left
})
window.addEventListener('mouseup', () => {
    gridSliderPressed = false
    $gridSliderSlides.style.cursor = "grab"
    // $gridSliderSlide.style.pointerEvents = "auto"

})
$gridSliderSlides.addEventListener('mouseenter', () => {
    $gridSliderSlides.style.cursor = "grab"
})
$gridSliderSlides.addEventListener('mouseleave', () => {
    $gridSliderSlides.style.cursor = "default"
})
$gridSliderSlides.addEventListener('mousemove', (e) => {
    if (!gridSliderPressed) return
    $gridSliderSlides.style.cursor = "grabbing"
    e.preventDefault()
    endX = e.offsetX + e.target.getBoundingClientRect().left - e.target.parentElement.getBoundingClientRect().left
    difference = startX - endX
    if (Math.abs(difference) < gridSliderSlideWidth) {
        if (difference < 0) {
            $gridSliderSlides.scrollLeft -= gridSliderSlideWidth
        } else if (difference > 0) {
            $gridSliderSlides.scrollLeft += gridSliderSlideWidth
        }
    } else if (Math.abs(difference) > gridSliderSlideWidth && Math.abs(difference) < gridSliderSlideWidth * 2) {
        if (difference < 0) {
            $gridSliderSlides.scrollLeft -= gridSliderSlideWidth * 2
        } else if (difference > 0) {
            $gridSliderSlides.scrollLeft += gridSliderSlideWidth * 2
        }
    } else {
        $gridSliderSlides.scrollLeft += difference
    }
    // $gridSliderSlides.style.transform += `translateX(${endX-startX}px)`

})
$gridSlider.addEventListener("click", (e) => {
    if (e.target == $gridSliderNextButtom) {
        if ($gridSliderSlides.scrollLeft >= $gridSliderSlides.scrollWidth - $gridSliderSlides.offsetWidth) {
            $gridSliderSlides.scrollLeft = 0
        }
        console.log(slideWidth)
        $gridSliderSlides.scrollLeft += gridSliderSlideWidth * numberOfColumns
        // $gridSliderSlides.scrollLeft += slideWidth * numberOfColumns
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

