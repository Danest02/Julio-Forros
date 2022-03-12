"use strict";var buttonDarkMode=document.getElementById("buttonDarkMode"),prefresDarkScheme=window.matchMedia("(prefers-color-scheme: dark)"),body=document.getElementById("body"),buttonDarkModeIcon=document.getElementById("buttonDarkModeIcon"),buttonDarkModeText=document.getElementById("buttonDarkModeText");"dark"==localStorage.getItem("mode")?body.classList.toggle("dark-mode"):"light"==localStorage.getItem("mode")&&body.classList.toggle("light-mode");var changeMode=function(){prefresDarkScheme.matches?body.classList.contains("light-mode")?buttonDarkModeIcon.innerHTML="dark_mode":buttonDarkModeIcon.innerHTML="light_mode":body.classList.contains("dark-mode")?buttonDarkModeIcon.innerHTML="light_mode":buttonDarkModeIcon.innerHTML="dark_mode"};changeMode(),buttonDarkMode&&buttonDarkMode.addEventListener("click",(function(){var e;prefresDarkScheme.matches?(body.classList.toggle("light-mode"),e=body.classList.contains("light-mode")?"light":"dark"):(body.classList.toggle("dark-mode"),e=body.classList.contains("dark-mode")?"dark":"light"),changeMode(),localStorage.setItem("mode",e)}));var navbarHeader=document.getElementById("navbar-header"),mainScroll=document.querySelector("main").offsetTop,hamburguer=document.getElementById("hamburguer"),menuLinks=document.querySelectorAll(".menu__link"),urlActual=window.location.href,initialScroll=window.pageYOffset;menuLinks.forEach((function(e){var t=e.getAttribute("href");"/"!==t&&(urlActual.includes(t)?(e.classList.add("menu__link--active"),document.getElementById("menu__link--Inicio").classList.remove("menu__link--active")):e.classList.remove("menu__link--active"))})),hamburguer.addEventListener("click",(function(){document.querySelector(".hamburguer__div-center").classList.toggle("hamburguer--simple"),navbarHeader.classList.toggle("navbar-header--hamburguer"),navbarHeader.classList.contains("navbar-header--hamburguer")?disableScroll():enableScroll()})),window.addEventListener("scroll",(function(){if(!navbarHeader.classList.contains("navbar-header--hamburguer")){var e=window.pageYOffset;e>=initialScroll&&e>=mainScroll?(navbarHeader.classList.add("navbar-header--hide"),navbarHeader.classList.add("navbar-header--scroll")):e<=mainScroll?navbarHeader.classList.add("navbar-header--hide"):navbarHeader.classList.remove("navbar-header--hide"),0==e&&(navbarHeader.classList.remove("navbar-header--scroll"),navbarHeader.classList.remove("navbar-header--hide")),initialScroll=e}}));var disableScroll=function(){var e=window.scrollX,t=window.scrollY;window.onscroll=function(){window.scrollTo(e,t)}},enableScroll=function(){window.onscroll=null},searchButtonNavBar=document.getElementById("searchButtonNavBar"),search=document.querySelector(".search"),searchButtonClose=document.getElementById("searchButtonClose");searchButtonNavBar.addEventListener("click",(function(){search.classList.toggle("search--visible"),search.classList.contains("search--visible")?disableScroll():enableScroll()})),searchButtonClose.addEventListener("click",(function(){search.classList.toggle("search--visible"),search.classList.contains("search--visible")?disableScroll():enableScroll()}));var $gridSliderNextButtom=document.getElementById("grid-slider__next-button"),$gridSliderBackButtom=document.getElementById("grid-slider__back-button"),$gridSlider=document.getElementById("grid-slider"),$gridSliderSlides=document.getElementById("grid-slider__slides"),$gridSliderSlide=document.querySelector(".grid-slider__slide"),slideWidth=$gridSliderSlides.firstChild.clientWidth,numberOfColumns=Math.floor(parseInt(getComputedStyle(document.documentElement).getPropertyValue("--column")));window.addEventListener("resize",(function(){var e=$gridSliderSlides.firstChild.clientWidth,t=Math.floor(parseInt(getComputedStyle(document.documentElement).getPropertyValue("--column")));console.log(e),console.log(t)}));var startX,endX,difference,gridSliderSlideWidth,gridSliderPressed=!1;$gridSlider.addEventListener("mousedown",(function(e){e.preventDefault,gridSliderSlideWidth=document.querySelector(".grid-slider__slide").offsetWidth,gridSliderPressed=!0,startX=e.offsetX+e.target.getBoundingClientRect().left-e.target.parentElement.getBoundingClientRect().left})),window.addEventListener("mouseup",(function(){gridSliderPressed=!1,$gridSliderSlides.style.cursor="grab"})),$gridSliderSlides.addEventListener("mouseenter",(function(){$gridSliderSlides.style.cursor="grab"})),$gridSliderSlides.addEventListener("mouseleave",(function(){$gridSliderSlides.style.cursor="default"})),$gridSliderSlides.addEventListener("mousemove",(function(e){gridSliderPressed&&($gridSliderSlides.style.cursor="grabbing",e.preventDefault(),endX=e.offsetX+e.target.getBoundingClientRect().left-e.target.parentElement.getBoundingClientRect().left,difference=startX-endX,Math.abs(difference)<gridSliderSlideWidth?difference<0?$gridSliderSlides.scrollLeft-=gridSliderSlideWidth:difference>0&&($gridSliderSlides.scrollLeft+=gridSliderSlideWidth):Math.abs(difference)>gridSliderSlideWidth&&Math.abs(difference)<2*gridSliderSlideWidth?difference<0?$gridSliderSlides.scrollLeft-=2*gridSliderSlideWidth:difference>0&&($gridSliderSlides.scrollLeft+=2*gridSliderSlideWidth):$gridSliderSlides.scrollLeft+=difference)})),$gridSlider.addEventListener("click",(function(e){e.target==$gridSliderNextButtom?($gridSliderSlides.scrollLeft>=$gridSliderSlides.scrollWidth-$gridSliderSlides.offsetWidth&&($gridSliderSlides.scrollLeft=0),$gridSliderSlides.scrollLeft+=gridSliderSlideWidth*numberOfColumns):e.target==$gridSliderBackButtom&&($gridSliderSlides.scrollLeft-=gridSliderSlideWidth*numberOfColumns)})),$gridSliderSlides.addEventListener("scroll",(function(){$gridSliderSlides.scrollLeft>=$gridSliderSlides.scrollWidth-$gridSliderSlides.offsetWidth?document.querySelector(".grid-slider__container-slides").classList.add("grid-slider__container-slides--before-hiden"):document.querySelector(".grid-slider__container-slides").classList.remove("grid-slider__container-slides--before-hiden")}));var swiperHeader=document.querySelector(".swiper-header");if(swiperHeader){var swiper=new Swiper(swiperHeader,{centeredSlides:!0,slidesPerView:1,spaceBetween:30,grabCursor:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:!1,keyboard:!0});swiper=new Swiper(".swiper-index-main",{centeredSlides:!0,slidesPerView:"auto",spaceBetween:30,grabCursor:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0,type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:!1,keyboard:!0})}var userButtonNavBar=document.getElementById("userButtonNavBar"),user=document.querySelector(".user"),userButtonClose=document.getElementById("userButtonClose"),singInLogIn=document.getElementById("singInLogIn"),singIn=document.getElementById("singIn"),logIn=document.getElementById("logIn"),userButtonGoBack=document.getElementById("userButtonGoBack");userButtonNavBar.addEventListener("click",(function(){user.classList.toggle("user--visible"),user.classList.contains("user--visible")?disableScroll():enableScroll()})),userButtonClose.addEventListener("click",(function(){user.classList.toggle("user--visible"),user.classList.contains("user--visible")?disableScroll():enableScroll()})),singInLogIn.addEventListener("click",(function(){userButtonGoBack.classList.toggle("opacity"),singIn.classList.toggle("display-none"),logIn.classList.toggle("display-none")})),userButtonGoBack.addEventListener("click",(function(){userButtonGoBack.classList.toggle("opacity"),singIn.classList.toggle("display-none"),logIn.classList.toggle("display-none")}));var getScrollBarWidth=function(){return innerWidth-document.documentElement.clientWidth};document.documentElement.style.setProperty("--scroll-bar",getScrollBarWidth());