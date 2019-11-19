// Navbar script
let mainNav = document.getElementById('navMenu');
let navBarToggle = document.getElementById('navToggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

// Script to change title on main screen
/*
let array = ['Front End Developer', 'Developer', 'Web Developer', 'Programmer'];

function devRandom() {
    document.getElementById("dev").innerHTML = array[Math.floor(Math.random() * array.length)];
}
*/
let array = ['Front End Developer', 'Developer', 'Web Developer', 'Programmer'];

var i = 0;
let intervalDev = setInterval(devRandom() {
    document.getElementById('dev').innerHTML = dev[i];
    if (i == (dev.length -1)) {
        i = 0;
    } else {
        i++;
    }
}, 2000)