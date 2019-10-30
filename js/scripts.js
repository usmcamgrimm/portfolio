// Navbar script
let mainNav = document.getElementById('navMenu');
let navBarToggle = document.getElementById('navToggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

// Script to change title on main screen
let array = ['Front End Developer', 'Developer', 'Web Developer', 'Programmer'];

function devRandom() {
    document.getElementById("dev").innerHTML = array[Math.floor(Math.random() * array.length)];
}