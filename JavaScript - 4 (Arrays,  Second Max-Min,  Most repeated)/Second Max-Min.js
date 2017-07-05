function Second_Greatest_Lowest(massiv) {
    massiv.sort(function (x, y) {
        return x - y;
    });
    var arr = [massiv[0]]
        , result = [];
    for (var j = 1; j < massiv.length; j++) {
        if (massiv[j - 1] !== massiv[j]) {
            arr.push(massiv[j]);
        }
    }
    result.push(arr[1], arr[arr.length - 2]);
    return result.join(',');
}
document.write(Second_Greatest_Lowest([21, 8, 10, 17, 9]));