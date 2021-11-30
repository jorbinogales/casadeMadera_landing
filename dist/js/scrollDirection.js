var lastScrollTop = 0;
var initialScroll = 0;
var flecha_arriba = document.getElementById('flecha_arriba');
var flecha_abajo = document.getElementById('flecha_abajo');
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
       initialScroll = initialScroll + 5;
   } else {
       initialScroll = initialScroll - 5;
   }
   flecha_abajo.style.bottom = `${initialScroll}px`;
   flecha_arriba.style.top = `${initialScroll}px`;
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);