const $gridSliderNextButtom = document.getElementById("grid-slider__next-button"),
$gridSliderBackButtom = document.getElementById("grid-slider__back-button"),
$gridSliderSlides = document.getElementById("grid-slider__slides"),
slideWidth = $gridSliderSlides.firstChild.clientWidth,
numberOfColumns = Math.floor(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--column')))
console.log(numberOfColumns)
$gridSliderNextButtom.addEventListener("click", (event) => {
    if($gridSliderSlides.scrollLeft > $gridSliderSlides.offsetWidth ){
        $gridSliderSlides.scrollLeft = 0
    }
    // if(numberOfColumns == 2){
    //     $gridSliderSlides.scrollLeft += slideWidth * 2
    //     console.log("oka")
    // }else{
    // }
    // window.scrollTo( slideWidth, 100 )
    $gridSliderSlides.scrollLeft += slideWidth * numberOfColumns
    console.log($gridSliderSlides.scrollLeft)
})
$gridSliderBackButtom.addEventListener("click", (event) => {
    $gridSliderSlides.scrollLeft -= slideWidth * numberOfColumns
})

