const triangle = document.getElementById('scroll-triangle')
const triangle_container = document.getElementById('triangle-container')

var isscrolling;

function scrollable() {
    var scrollHeight = document.documentElement.scrollHeight;
    var scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
    var clientHeight = document.documentElement.clientHeight;

    return scrollTop + clientHeight < scrollHeight;
}
9
window.addEventListener('scroll', function() {
    clearTimeout(isscrolling);

    isscrolling = setTimeout(function() {
        if (scrollable()) {
            triangle.style.opacity = 1;
        } else {
            triangle.style.opacity = 0;
        }
    }, 1500);
});

triangle_container.addEventListener('click', function() {
    window.scrollBy(0, 100); 
});