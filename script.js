 function ayTap(type) {
            if (type == 'Yaz') {
                return [3, 4, 5] + ' Yaz';
            } else if (type == 'Yay') {
                return [6, 7, 8] + ' Yay';
            } else if (type == 'Payiz') {
                return [9, 10, 11] + ' Payiz';
            } else if (type == 'Qis') {
                return [1, 2, 12] + ' Qis';
            }
        }
        var result = ayTap('Yay');
        if (result) {
            console.log (result);
        } else {
            console.log ('Error 404 Not Found')
        }