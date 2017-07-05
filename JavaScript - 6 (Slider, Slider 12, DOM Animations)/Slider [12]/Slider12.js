document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;

function sliderLeft() {
    var way = document.getElementById('way');
    left = left - 128;
    if (left < -1024) {
        left = 0;
    }
    way.style.left = left + 'px';
}
document.getElementById('slider-right').onclick = sliderRight;
var right = 0;

function sliderRight() {
    var way = document.getElementById('way');
    right = right + 128;
    if (right > 128) {
        right = 0;
    }
    way.style.left = right + 'px';
}