const container = document.getElementById("text-container");
const section   = document.getElementById("title-section");
const text      = document.getElementById("title-text");
const blur      = document.getElementById("rainbow-blur");
const triangle  = document.getElementById('scroll-triangle')

function scrollable() {
    var scrollHeight = document.documentElement.scrollHeight;
    var scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
    var clientHeight = document.documentElement.clientHeight;
    return scrollTop + clientHeight < scrollHeight;
}

function getScrollTop() {
    return window.scrollY || document.documentElement.scrollTop;
}

function checkScroll() {
    var scrollTop = getScrollTop();

    if (scrollTop < 5) {
        console.log('scrollTop');
        container.classList.add('big-container');
        container.classList.remove('small-container'); 
        text.classList.add('big-title');
        text.classList.remove('small-title');
    } else {
        container.classList.add('small-container');
        container.classList.remove('big-container');    
        text.classList.remove('big-title');
        text.classList.add('small-title');
    }

    if (scrollable()) {
        triangle.style.opacity = 1;
    } else {
        console.log('not top');
        triangle.style.opacity = 0;
    }
}

checkScroll();
window.addEventListener('scroll', checkScroll);

