var min = document.getElementById('min');
var secnd = document.getElementById('secnd');
var invt = setInterval(azalt, '1000');
var min_start = Number(min.innerText);
var secnd_start = Number(secnd.innerText);
var input = document.getElementsByTagName('input');
var cvd = document.getElementById('cvd');
if (secnd_start == 0) {
    secnd_start = 60;
    min.innerText = min_start;
    min_start - 1;
}

function azalt() {
    secnd_start--;
    secnd.innerText = secnd_start;
    if (secnd_start == 0) {
        min_start--;
        min.innerText = min_start;
        secnd_start = 60;
        if (min_start == -1) {
            input[0].style.display = 'none';
            input[1].style.display = 'none';
            secnd.innerText = " - Vaxt Bitdi!";
            min.innerText = "00:00";
            clearInterval(invt);
        }
    }
}
document.getElementById('btn').addEventListener("click", function () {
    if (cvd.value != "") {
        clearInterval(invt);
    }
});