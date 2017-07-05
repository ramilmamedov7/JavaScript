function triangles(n) {
    var n = Math.floor(n);
    for (var i = 1; i <= n; i++) {
        for (var k = 1; k <= i; k++) {
            document.write("*");
        }
        document.write("<br>");
    }
    for (var i = n - 1; i >= 1; i--) {
        for (var k = i; k >= 1; k--) {
            document.write("*");
        }
        document.write("<br>");
    }
}
triangles(prompt('Ədəd daxil edin!'));