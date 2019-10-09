let mainNav = document.getElementById('navMenu');
let navBarToggle = document.getElementById('navToggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});