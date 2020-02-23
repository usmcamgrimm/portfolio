// Mobile Navbar toggle script
function showNav() {
    let x = document.getElementById("mobLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Script to change title on main screen
let devArray = ['Front-End Developer', 'Developer', 'Web Developer', 'Programmer', 'Marine Corps Veteran', 'Husband', 'Father'];

const myDev = setInterval(devRandom, 1200);

function devRandom() {
    document.getElementById("dev").innerHTML = devArray[Math.floor(Math.random() * devArray.length)];
};

// Change tab title
window.onblur = function () {
    document.title = 'Come back soon!';
}
window.onfocus = function () {
    document.title = 'Adrian Grimm';
}