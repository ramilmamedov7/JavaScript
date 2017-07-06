var a = Math.ceil(Math.random() * 100);
var b = Math.ceil(Math.random() * 100);
var e = ['+', '-', '*', '/'];
var f = Math.ceil(Math.random() * 3);
var h = e[f];
var c = a + h + b;
var g = Math.ceil(parseInt(eval(c)));
console.log(g);

function Captcha() {
    document.write("What is " + c + "? ");
    document.write("<input id='cavab' type='text' maxlength='4' size='4'/>");
}

function Check() {
    var d = document.getElementById('cavab').value;
    if (d == parseInt(eval(c))) return 'Supposably you are a human :P';
    else if (d == "") {
        return 'Please fill the form first!';
    }
    return 'Sorry, you made mistake! :\'c';
}