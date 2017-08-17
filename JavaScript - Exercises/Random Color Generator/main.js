function set_background() {
    var first = document.querySelector(".first");
    var second = document.querySelector(".second");
    second.style.background = getRandomColor();
    first.style.background = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ancdef';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}

//function getRandomInt(min, max) {
//    return Math.floor(Math.random() * (max - min + 1)) + min;
//}