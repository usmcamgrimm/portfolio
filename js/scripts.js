// Navbar script
let mainNav = document.getElementById('navMenu');
let navBarToggle = document.getElementById('navToggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

// Script to change title on main screen
let devArray = ['Front End Developer', 'Developer', 'Web Developer', 'Programmer'];

const myDev = setInterval(devRandom, 2000);

function devRandom() {
    document.getElementById("dev").innerHTML = devArray[Math.floor(Math.random() * devArray.length)];
}