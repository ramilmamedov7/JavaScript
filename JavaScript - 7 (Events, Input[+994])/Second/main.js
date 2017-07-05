document.getElementById('input').addEventListener('focus', function (event) {
    this.value = "+994-";
})
document.getElementById('input').addEventListener('keyup', function (event) {
        this.value.length
        if (this.value.length == 7 || this.value.length == 11 || this.value.length == 14) {
            this.value += "-";
        }
    })
    // Artıq funksiya inputa string daxil edilməsin deyə (Olmasa da olar ;-)
function isNumber(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode < 48 || charCode > 57) {
        return false;
    }
    return true;
}