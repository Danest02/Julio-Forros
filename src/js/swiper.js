// // ANCHOR SWIPPER

//   // core version + navigation, pagination modules:
//   import Swiper, { Navigation, Pagination } from 'swiper';
//   // import Swiper and modules styles
//   import 'swiper/css';
//   import 'swiper/css/navigation';
//   import 'swiper/css/pagination';

//   // configure Swiper to use modules
//   Swiper.use([Navigation, Pagination]);

// var swiper = new Swiper('.swiper-container', {
//     //- cssMode: true,
//     centeredSlides: true,
//     slidesPerView: 1,
//     spaceBetween: 30,
//     grabCursor: true,
//     //- freeMode: true;

//     loop: true,
//     //- autoplay: {
//     //-     delay: 2500,
//     //-     disableOnInteraction: false,
//     //- },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     mousewheel: false,
//     keyboard: true,
// });