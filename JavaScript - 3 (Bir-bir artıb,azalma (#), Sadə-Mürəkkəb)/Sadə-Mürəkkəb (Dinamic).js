var n = Number(prompt('Ədəd daxil edin!'))

function test_prime(n) {
    if (n === 1) {
        document.write('Ədəd nə sadədir nə də mürəkkəbdir');
        return '';
    }
    else if (n === 2) {
        document.write('Ədəd sadədir');
        return '';
    }
    else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                document.write('Ədəd mürəkkəbdir');
                return '';
            }
        }
        document.write('Ədəd sadədir');
        return '';
    }
}
document.write(test_prime(n));