const triangle_container = document.getElementById('triangle-container');

console.log('triangle-file');

triangle_container.addEventListener('click', function() {
    console.log('triangle-click');
    window.scrollBy(0, 500); 
});