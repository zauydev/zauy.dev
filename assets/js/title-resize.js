window.addEventListener('scroll', function() {
    var titleSection = document.querySelector('.title-section');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop === 0) {
        titleSection.classList.remove('fixed-top');
    } else {
        titleSection.classList.add('fixed-top');
    }
});