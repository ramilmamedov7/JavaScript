var main = document.getElementsByClassName("icons")[0];
main.children[1].addEventListener("click", next);
// var p = document.getElementsByClassName("slide")[0];
// var style = window.getComputedStyle(p).margin
var margin = 0;
var prev = 0;
var slide_div_length = document.getElementsByClassName("slide")[0].clientWidth; // 1 slide divin width -in olcur
var slider_length = document.querySelectorAll(".slides .slide").length; // bu slides divin icinde nece dene slide div oldugun qaytariri yeni 9
document.getElementsByClassName("slides")[0].style.transition = "all 0.5s"; // bu ise transition bildiyiimiz kimi
function next() {
    prev++;
    console.log("next" + prev);
    margin -= slide_div_length + 20; // burada divin olcusu + margin qeder cixmasi ucun yazdim margini-de "slide_div_length" kimi goturmek olardi
    var slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
    console.log(slides_div_margin);
    if (prev >= slider_length - 4) {
        margin = 0;
        slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
        prev = 0;
    }
}
main.children[0].addEventListener("click", previous);

function previous() {
    prev--;
    margin += slide_div_length + 20;
    var slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
    console.log("prev" + prev);
    if (prev <= 0) {
        margin = -(slide_div_length + 20) * 4;
        console.log(margin);
        prev = 5;
        var slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
    }
}