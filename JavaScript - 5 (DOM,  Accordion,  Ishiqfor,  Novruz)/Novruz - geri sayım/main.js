var countDownDate = new Date("Mar 21, 2018 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("Timer").innerHTML = days + " gün," + "<br>" + hours + " saat," + "<br>" + minutes + " dəqiqə," + "<br>" + seconds + " saniyə.";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("Timer").innerHTML = "Müddət bitib";
    }
}, 1000);