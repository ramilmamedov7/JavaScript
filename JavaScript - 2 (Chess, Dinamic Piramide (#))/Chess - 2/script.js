for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        if ((i + j) % 2 != 0) {
            document.write('<div style="background:#58ac8a; display:inline-block; padding:30px; border: 2px solid #58ac8a;"></div>');
        }
        else {
            document.write('<div style="background:#ffffff;display:inline-block; padding:30px; border: 2px solid #58ac8a;"></div>');
        }
    }
    document.write("<br>");
}