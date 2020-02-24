// Mobile Navbar toggle script
function showNav() {
    let x = document.getElementById("mobLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Change tab title
window.onblur = function () {
    document.title = 'Come back soon!';
}
window.onfocus = function () {
    document.title = 'Adrian Grimm';
}