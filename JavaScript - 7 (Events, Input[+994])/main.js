var input = document.getElementById("input")
input.onfocus = function () {
    if (this.className == '') return
    this.className = ''
    this.value = '+994' + '()' + '-' + '-'
}

function isNumber(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode < 48 || charCode > 57) {
        return false;
    }
    return true;
}