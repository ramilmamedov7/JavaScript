var masssiv = [1, 2, 2, 3, 2, 4, 5, 3, 8]
    , most = 1
    , r = 0
    , div;
for (var i = 0; i < masssiv.length; i++) {
    for (var j = i; j < masssiv.length; j++) {
        if (masssiv[i] == masssiv[j]) r++;
        if (most < r) {
            most = r;
            div = masssiv[i];
        }
    }
    r = 0;
}
document.write(div + " ( " + most + " dəfə ) ");