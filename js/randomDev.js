// Script to change title on main screen
let devArray = ['Front-End Developer', 'Developer', 'Web Developer', 'Coder', 'Programmer', 'Marine Corps Veteran', 'Husband', 'Father'];

const myDev = setInterval(devRandom, 1000);

function devRandom() {
    document.getElementById("dev").innerHTML = devArray[Math.floor(Math.random() * devArray.length)];
};