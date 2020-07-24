// // Script to change title on main screen
// let devArray = ['Front-End Developer', 'Developer', 'Web Developer', 'Coder', 'Programmer', 'Marine Corps Veteran', 'Husband', 'Father'];

// const myDev = setInterval(devRandom, 1000);

// function devRandom() {
//     document.getElementById("dev").innerHTML = devArray[Math.floor(Math.random() * devArray.length)];
// };

let typed3 = new Typed('#typed3', {
    strings: [
        'I am a Front-End Developer',
        'I am a Developer',
        'I am a Web Developer',
        'I am a JavaScript Developer',
        'I am a Marine Corps Veteran'
    ],
    typeSpeed: 70,
    backSpeed: 80,
    shuffle: true,
    smartBackspace: true,
    loop: true
});