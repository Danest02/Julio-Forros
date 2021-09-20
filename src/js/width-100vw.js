const getScrollBarWidth = () => innerWidth - document.documentElement.clientWidth
document.documentElement.style.setProperty('--scroll-bar' , getScrollBarWidth())

// console.log(getComputedStyle(document.documentElement).getPropertyValue('--scroll-bar'))