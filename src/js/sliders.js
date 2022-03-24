// // TODO:ANCHOR --- GRID SLIDER

// const
//     $mySliderNextButtom = document.querySelector(".my-slider__navegation-button--next"),
//     $mySliderBackButtom = document.querySelector(".my-slider__navegation-button--back"),
//     $mySlider = document.querySelector(".my-slider"),
//     $mySliderSlides = document.querySelector(".my-slider__slides"),
//     $mySliderSlide = document.querySelector(".my-slider__slide"),
//     numberOfColumns = Math.floor(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--column')))
//     // slideWidth = $mySliderSlides.firstChild.clientWidth

// window.addEventListener('resize', () => {
//     const
//         slideWidth = $mySliderSlides.firstChild.clientWidth,
//         numberOfColumns = Math.floor(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--column')))

// })
// let
//     mySliderPressed = false,
//     mySliderStartX,
//     mySliderEndX,
//     mySliderDifference,
//     slideWidth



// $mySlider.addEventListener('mousedown', (e) => {
//     e.preventDefault
//     slideWidth = document.querySelector(".my-slider__slide").offsetWidth
//     console.log(slideWidth)
//     mySliderPressed = true
//     mySliderStartX = e.offsetX + e.target.getBoundingClientRect().left - e.target.parentElement.getBoundingClientRect().left
// })
// window.addEventListener('mouseup', () => {
//     mySliderPressed = false
//     $mySliderSlides.style.cursor = "grab"

// })
// $mySliderSlides.addEventListener('mousemove', (e) => {
//     if (!mySliderPressed) return
//     $mySliderSlides.style.cursor = "grabbing"
//     e.preventDefault()
//     mySliderEndX = e.offsetX + e.target.getBoundingClientRect().left - e.target.parentElement.getBoundingClientRect().left
//     mySliderDifference = mySliderStartX - mySliderEndX
//     if (Math.abs(mySliderDifference) < slideWidth) {
//         if (mySliderDifference < 0) {
//             $mySliderSlides.scrollLeft -= slideWidth
//         } else if (mySliderDifference > 0) {
//             $mySliderSlides.scrollLeft += slideWidth
//         }
//     } else if (Math.abs(mySliderDifference) > slideWidth && Math.abs(mySliderDifference) < slideWidth * 2) {
//         if (mySliderDifference < 0) {
//             $mySliderSlides.scrollLeft -= slideWidth * 2
//         } else if (mySliderDifference > 0) {
//             $mySliderSlides.scrollLeft += slideWidth * 2
//         }
//     } else {
//         $mySliderSlides.scrollLeft += mySliderDifference
//     }

// })
// $mySlider.addEventListener("click", (e) => {
//     if (e.target == $mySliderNextButtom) {
//         if ($mySliderSlides.scrollLeft >= $mySliderSlides.scrollWidth - $mySliderSlides.offsetWidth) {
//             $mySliderSlides.scrollLeft = 0
//         }
//         $mySliderSlides.scrollLeft += slideWidth * numberOfColumns
//     } else if (e.target == $mySliderBackButtom) {
//         $mySliderSlides.scrollLeft -= slideWidth * numberOfColumns
//     }
// })
// $mySliderSlides.addEventListener('scroll', () => {
//     if ($mySliderSlides.scrollLeft >= $mySliderSlides.scrollWidth - $mySliderSlides.offsetWidth) {
//         document.querySelector(".my-slider__container-slides").classList.add("my-slider__container-slides--before-hiden")
//     } else {
//         document.querySelector(".my-slider__container-slides").classList.remove("my-slider__container-slides--before-hiden")
//     }
// })
// // TODO:ANCHOR --- DEFAULT SLIDER
// const
//     $defaultSlider = document.getElementById("default-slider"),
//     $defaultSliderSlides = document.getElementById("default-slider__slides"),
//     $defaultSliderBackButton = document.getElementById("default-slider__back-button"),
//     $defaultSliderNextButton = document.getElementById("default-slider__next-button")

// let
//     defaultSliderPressed = false,
//     defaultSliderStartX,
//     defaultSliderEndX,
//     defaultSliderDifference,
//     defaultSliderslideWidth,
//     defaultSliderTranslateX = 0

// $defaultSlider.addEventListener('mousedown', (e) => {
//     e.preventDefault
//     defaultSliderslideWidth = document.querySelector(".default-slider__slide").offsetWidth
//     defaultSliderStartX = e.offsetX
//     defaultSliderPressed = true
// })


// const defaultSliderTranslate = function(endX,startX){
//     defaultSliderDifference = endX - startX
//     $defaultSliderSlides.style.transform = `translateX(${defaultSliderTranslateX + defaultSliderDifference}px)`

// }
// $defaultSlider.addEventListener('mousemove', (e) => {
//     e.preventDefault
//     if (!defaultSliderPressed) return
//     defaultSliderEndX = e.offsetX 
//     defaultSliderTranslate(defaultSliderEndX, defaultSliderStartX)

// })
// window.addEventListener('mouseup', (e) => {
//     defaultSliderPressed = false
//     defaultSliderTranslateX += defaultSliderDifference

// })

// let slideWidth = $mySliderSlides.firstChild.clientWidth

// let sakura = getComputedStyle(document.getElementById("my-slider")).getPropertyValue('--sakura');
// let mySliderClass = document.querySelector(".my-slider")
// let sakura = getComputedStyle(document.querySelector(".my-slider")).getPropertyValue('--sakura');
// // let sakura = window.getComputedStyle(mySliderClass)
// console.log(sakura)
class MySlider {
    constructor(nameSlider) {
        this.nameSlider = nameSlider
        this.$mySlider = document.querySelector(nameSlider)
        this.$mySliderSlides = document.querySelector(`${nameSlider} .my-slider__slides`)
        this.$mySliderSlide = document.querySelector(`${nameSlider} .my-slider__slide`)
        this.$mySliderNextButtom = document.querySelector(`${nameSlider} .my-slider__navegation-button--next`),
        this.$mySliderBackButtom = document.querySelector(`${nameSlider} .my-slider__navegation-button--back`),
        this.mySliderPressed = false
        this.mySliderStartX = 0
        this.mySliderEndX = 0
        this.mySliderDifference = 0
        this.slideWidth = document.querySelector(".my-slider__slide").offsetWidth
        // this.numberOfColumns = Math.floor(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--column')))
        this.numberOfColumns = Math.floor(parseInt(getComputedStyle(document.querySelector(`${nameSlider}`)).getPropertyValue('--column')))
        
    }
    mouseMove() {
        this.$mySlider.addEventListener('mousedown', (e) => {
            if(e.target.matches(".my-slider__event-none")){
                return
            }
            e.preventDefault
            this.slideWidth = document.querySelector(".my-slider__slide").offsetWidth
            this.mySliderPressed = true
            this.mySliderStartX = e.offsetX + e.target.getBoundingClientRect().left - e.target.parentElement.getBoundingClientRect().left
        })
        window.addEventListener('mouseup', () => {
            this.mySliderPressed = false
            this.$mySliderSlides.style.cursor = "grab"

        })
        this.$mySliderSlides.addEventListener('mousemove', (e) => {
            if (!this.mySliderPressed) return
            e.preventDefault()
            this.mySliderEndX = e.offsetX + e.target.getBoundingClientRect().left - e.target.parentElement.getBoundingClientRect().left
            this.mySliderDifference = this.mySliderStartX - this.mySliderEndX
            this.$mySliderSlides.style.cursor = "grabbing"
            if (Math.abs(this.mySliderDifference) < this.slideWidth) {
                if (this.mySliderDifference < 0) {
                    this.$mySliderSlides.scrollLeft -= this.slideWidth
                } else if (this.mySliderDifference > 0) {
                    this.$mySliderSlides.scrollLeft += this.slideWidth
                }
            } else if (Math.abs(this.mySliderDifference) > this.slideWidth && Math.abs(this.mySliderDifference) < this.slideWidth * 2) {
                if (this.mySliderDifference < 0) {
                    this.$mySliderSlides.scrollLeft -= this.slideWidth * 2
                } else if (this.mySliderDifference > 0) {
                    this.$mySliderSlides.scrollLeft += this.slideWidth * 2
                }
            } else {
                this.$mySliderSlides.scrollLeft += this.mySliderDifference
            }

        })
    }
    navegationButton() {
        this.$mySlider.addEventListener("click", (e) => {
            if (e.target == this.$mySliderNextButtom) {
                if (this.$mySliderSlides.scrollLeft >= this.$mySliderSlides.scrollWidth - this.$mySliderSlides.offsetWidth) {
                    this.$mySliderSlides.scrollLeft = 0
                }
                this.$mySliderSlides.scrollLeft += this.slideWidth * this.numberOfColumns
            } else if (e.target == this.$mySliderBackButtom) {
                this.$mySliderSlides.scrollLeft -= this.slideWidth * this.numberOfColumns
            }
        })
    }
    scrollBefore(){
        this.$mySliderSlides.addEventListener('scroll', () => {
            if (this.$mySliderSlides.scrollLeft >= this.$mySliderSlides.scrollWidth - this.$mySliderSlides.offsetWidth) {
                document.querySelector(".my-slider__container-slides").classList.add("my-slider__container-slides--before-hiden")
            } else {
                document.querySelector(".my-slider__container-slides").classList.remove("my-slider__container-slides--before-hiden")
            }
        })
    }

}
const GridSlider = new MySlider(".slider-catalogue-index__slider")
// console.log(GridSlider.$mySlider)
GridSlider.navegationButton()
GridSlider.mouseMove()
GridSlider.scrollBefore()