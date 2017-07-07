function ftoc(input) {
    var num1 = (+input - 32) / 9 * 5;
    document.getElementById('answer').innerHTML = input + "\xB0F = " + num1 + "\xB0C";
}
document.getElementById('fbutton').onclick = function () {
    var fnumber = document.getElementById('fin').value;
    ftoc(fnumber);
}

function ctof(input2) {
    var num1 = (+input2 * 9 / 5 + 32);
    document.getElementById('answer').innerHTML = input2 + "\xB0C = " + num1 + "\xB0F";
}
document.getElementById('cbutton').onclick = function () {
    var cnumber = document.getElementById('cin').value;
    ctof(cnumber);
}
document.getElementById('clear').onclick = function () {
    document.getElementById('answer').innerHTML = "";
    document.getElementById('cin').value = "";
    document.getElementById('fin').value = "";
}