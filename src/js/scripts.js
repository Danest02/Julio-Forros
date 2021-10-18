console.log("hello world")


function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}
function enableScroll(){  
    window.onscroll = null;
}
