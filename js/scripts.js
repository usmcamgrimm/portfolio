// Navbar script
/*
let mainNav = document.getElementById('navMenu');
let navBarToggle = document.getElementById('navToggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});
*/

// Script to change title on main screen
let devArray = ['Front-End Developer', 'Developer', 'Web Developer', 'Programmer', 'Veteran', 'Husband', 'Father'];

const myDev = setInterval(devRandom, 1200);

function devRandom() {
    document.getElementById("dev").innerHTML = devArray[Math.floor(Math.random() * devArray.length)];
};

/*
const myMobDev = setInterval(mobRandom, 1400);
!Temp Disable this
function mobRandom() {
    document.getElementById("mobDev").innerHTML = devArray[Math.floor(Math.random() * devArray.length)];
}
*/

// Change tab title
window.onblur = function () {
    document.title = 'Come back soon!';
}
window.onfocus = function () {
    document.title = 'Adrian Grimm';
}