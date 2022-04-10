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
        this.numberOfColumns = Math.floor(parseInt(getComputedStyle(document.querySelector(`${nameSlider}`)).getPropertyValue('--column')))
        
    }
    mouseMove() {
        this.$mySlider.addEventListener('mousedown', (e) => {
            if(e.target.matches(".my-slider__event-none")){
                return
            }
            this.slideWidth = document.querySelector(`${this.nameSlider} .my-slider__slide`).offsetWidth
            this.mySliderPressed = true
            this.mySliderStartX = e.offsetX + e.target.getBoundingClientRect().left - e.target.parentElement.getBoundingClientRect().left
            console.log(this.slideWidth)
        })
        window.addEventListener('mouseup', () => {
            this.mySliderPressed = false
            this.$mySliderSlides.style.cursor = "grab"

        })
        this.$mySliderSlides.addEventListener('mousemove', (e) => {
            if (!this.mySliderPressed) return
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
                document.querySelector(`${this.nameSlider} .my-slider__container-slides`).classList.add("my-slider__container-slides--before-hiden")
            } else {
                document.querySelector(`${this.nameSlider} .my-slider__container-slides`).classList.remove("my-slider__container-slides--before-hiden")
            }
        })
    }

}
const SliderCatalogueIndex = new MySlider(".slider-catalogue-index__slider")
SliderCatalogueIndex.navegationButton()
SliderCatalogueIndex.mouseMove()
SliderCatalogueIndex.scrollBefore()

const SliderHeaderIndex = new MySlider(".slider-header-index")
SliderHeaderIndex.navegationButton()
SliderHeaderIndex.mouseMove()
SliderHeaderIndex.scrollBefore()