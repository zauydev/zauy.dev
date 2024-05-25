const container = document.getElementById('text-container');
const section = document.getElementById('title-section');
const text = document.getElementById('title-text');
const blur = document.getElementById('rainbow-blur');
const triangle = document.getElementById('scroll-triangle');

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

    if (scrollTop < document.documentElement.clientHeight / 2.5) {
        console.log('scrollTop');

        container.classList.add('big-container');
        text.classList.add('big-title');
        container.classList.remove('small-container');
        text.classList.remove('small-title');
    }
    if (scrollTop > document.documentElement.clientHeight / 2.2) {
        container.classList.add('small-container');
        text.classList.add('small-title');
        container.classList.remove('big-container');
        text.classList.remove('big-title');
    }

    if (scrollable()) {
        triangle.style.opacity = 1;
        setTimeout(triangle_container.style.height = '120px'
        , 500);
    } else {
        console.log('not top');
        triangle.style.opacity = 0;
        setTimeout(triangle_container.style.height = '0px'
    , 500);
    }
}

checkScroll();
window.addEventListener('scroll', checkScroll);