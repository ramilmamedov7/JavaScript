function getmax() {
    var numbers = [11, 22, 33, 99, 44, 55, 66, 77, 88]
        , max = Math.max.apply(null, numbers);
    console.log(max);
}
getmax();

function getmin() {
    var numbers = [11, 22, 33, 99, 44, 55, 66, 77, 88]
        , min = Math.min.apply(null, numbers);
    console.log(min);
}
getmin();