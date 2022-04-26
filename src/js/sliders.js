class MySlider {
	constructor(nameSlider, { beforeShadow = false }) {
		this.nameSlider = nameSlider;
		this.beforeShadow = beforeShadow;
		this.$mySlider = document.querySelector(nameSlider);
		this.$mySliderSlides = document.querySelector(`${nameSlider} .my-slider__slides`);
		this.$mySliderSlide = document.querySelector(`${nameSlider} .my-slider__slide`);
		this.$mySliderNextButtom = document.querySelector(`${nameSlider} .my-slider__navegation-button--next`);
		this.$mySliderBackButtom = document.querySelector(`${nameSlider} .my-slider__navegation-button--back`);
		this.mySliderDifference = 0;
		this.numberOfColumns = Math.floor(parseInt(getComputedStyle(document.querySelector(`${nameSlider}`)).getPropertyValue("--column")));
	}
	infinity() {
		const mySliderSlidesArray = document.querySelectorAll(`${this.nameSlider} .my-slider__slide`);
		const mySliderFirstClone = mySliderSlidesArray[0].cloneNode(true);
		const mySliderLastClone = mySliderSlidesArray[mySliderSlidesArray.length - 1].cloneNode(true);
		mySliderFirstClone.classList.add("first-clone");
		mySliderLastClone.classList.add("last-clone");
		document.querySelector(`${this.nameSlider} .my-slider__slides`).append(mySliderFirstClone);
		document.querySelector(`${this.nameSlider} .my-slider__slides`).prepend(mySliderLastClone);
	}
	mouseMove() {
		const mySliderPressed = false;
		const mySliderStartX = 0;
		const mySliderEndX = 0;
		this.$mySlider.addEventListener("mousedown", (e) => {
			if (e.target.matches(".my-slider__event-none")) {
				return;
			}
			this.slideWidth = document.querySelector(`${this.nameSlider} .my-slider__slide`).offsetWidth;
			mySliderPressed = true;
			mySliderStartX = e.offsetX + e.target.getBoundingClientRect().left - e.target.parentElement.getBoundingClientRect().left;
		});
		window.addEventListener("mouseup", () => {
			mySliderPressed = false;
			this.$mySliderSlides.style.cursor = "grab";
		});
		this.$mySliderSlides.addEventListener("mousemove", (e) => {
			if (!mySliderPressed) return;
			mySliderEndX = e.offsetX + e.target.getBoundingClientRect().left - e.target.parentElement.getBoundingClientRect().left;
			this.mySliderDifference = mySliderStartX - mySliderEndX;
			this.$mySliderSlides.style.cursor = "grabbing";
			if (Math.abs(this.mySliderDifference) < this.slideWidth) {
				if (this.mySliderDifference < 0) {
					this.$mySliderSlides.scrollLeft -= this.slideWidth;
				} else if (this.mySliderDifference > 0) {
					this.$mySliderSlides.scrollLeft += this.slideWidth;
				}
			} else if (Math.abs(this.mySliderDifference) > this.slideWidth && Math.abs(this.mySliderDifference) < this.slideWidth * 2) {
				if (this.mySliderDifference < 0) {
					this.$mySliderSlides.scrollLeft -= this.slideWidth * 2;
				} else if (this.mySliderDifference > 0) {
					this.$mySliderSlides.scrollLeft += this.slideWidth * 2;
				}
			} else {
				this.$mySliderSlides.scrollLeft += this.mySliderDifference;
			}
		});
	}
	navegationButton() {
		this.$mySlider.addEventListener("click", (e) => {
			if (e.target == this.$mySliderNextButtom) {
				if (this.$mySliderSlides.scrollLeft >= this.$mySliderSlides.scrollWidth - this.$mySliderSlides.offsetWidth) {
					this.$mySliderSlides.scrollLeft = 0;
				}
				this.$mySliderSlides.scrollLeft += this.slideWidth * this.numberOfColumns;
			} else if (e.target == this.$mySliderBackButtom) {
				this.$mySliderSlides.scrollLeft -= this.slideWidth * this.numberOfColumns;
			}
		});
	}
	scrollBefore() {
		document.querySelector(`${this.nameSlider} .my-slider__container-slides `).classList.add("my-slider__container-slides--before");
		this.$mySliderSlides.addEventListener("scroll", () => {
			if (this.$mySliderSlides.scrollLeft >= this.$mySliderSlides.scrollWidth - this.$mySliderSlides.offsetWidth) {
				document.querySelector(`${this.nameSlider} .my-slider__container-slides`).classList.add("my-slider__container-slides--before-hiden");
			} else {
				document.querySelector(`${this.nameSlider} .my-slider__container-slides`).classList.remove("my-slider__container-slides--before-hiden");
			}
		});
	}
}
const SliderCatalogueIndex = new MySlider(".slider-catalogue-index__slider", {});
SliderCatalogueIndex.navegationButton();
SliderCatalogueIndex.mouseMove();
SliderCatalogueIndex.scrollBefore();

const SliderHeaderIndex = new MySlider(".slider-header-index", {});
SliderHeaderIndex.navegationButton();
SliderHeaderIndex.mouseMove();
SliderHeaderIndex.infinity();
