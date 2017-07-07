var side1 = 10;
var side2 = 12;
var side3 = 14;
var perimeter = (side1 + side2 + side3) / 2;
var area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));
console.log(area);