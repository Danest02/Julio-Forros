"use strict";var navbarHeader=document.getElementById("navbar-header"),initialScroll=window.pageYOffset,mainScroll=document.getElementById("main").offsetTop,hamburguer=document.getElementById("hamburguer");function disableScroll(){var e=window.scrollX,r=window.scrollY;window.onscroll=function(){window.scrollTo(e,r)}}function enableScroll(){window.onscroll=null}hamburguer.addEventListener("click",(function(){document.querySelector(".hamburguer__div-center").classList.toggle("hamburguer--simple"),navbarHeader.classList.toggle("navbar-header--hamburguer"),navbarHeader.classList.contains("navbar-header--hamburguer")?disableScroll():enableScroll()})),window.addEventListener("scroll",(function(){if(!navbarHeader.classList.contains("navbar-header--hamburguer")){var e=window.pageYOffset;e>=initialScroll&&e>=mainScroll?(navbarHeader.classList.add("navbar-header--hide"),navbarHeader.classList.add("navbar-header--scroll")):e<=mainScroll?navbarHeader.classList.add("navbar-header--hide"):navbarHeader.classList.remove("navbar-header--hide"),0==e&&(navbarHeader.classList.remove("navbar-header--scroll"),navbarHeader.classList.remove("navbar-header--hide")),initialScroll=e}})),console.log("hello world");var searchButtonNavBar=document.getElementById("searchButtonNavBar"),search=document.querySelector(".search"),searchButtonClose=document.getElementById("searchButtonClose");searchButtonNavBar.addEventListener("click",(function(){search.classList.toggle("search--visible"),search.classList.contains("search--visible")?disableScroll():enableScroll()})),searchButtonClose.addEventListener("click",(function(){search.classList.toggle("search--visible"),search.classList.contains("search--visible")?disableScroll():enableScroll()}));var swiper=new Swiper(".swiper-header",{centeredSlides:!0,slidesPerView:1,spaceBetween:30,grabCursor:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:!1,keyboard:!0}),userButtonNavBar=(swiper=new Swiper(".swiper-index-main",{centeredSlides:!0,slidesPerView:"auto",spaceBetween:30,grabCursor:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0,type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:!1,keyboard:!0}),document.getElementById("userButtonNavBar")),user=document.querySelector(".user"),userButtonClose=document.getElementById("userButtonClose");userButtonNavBar.addEventListener("click",(function(){user.classList.toggle("user--visible"),user.classList.contains("user--visible")?disableScroll():enableScroll()})),userButtonClose.addEventListener("click",(function(){user.classList.toggle("user--visible"),user.classList.contains("user--visible")?disableScroll():enableScroll()}));var getScrollBarWidth=function(){return innerWidth-document.documentElement.clientWidth};document.documentElement.style.setProperty("--scroll-bar",getScrollBarWidth());