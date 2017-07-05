function Slider(className, transition) {
    var self = this;
    self.main = document.getElementsByClassName("icons")[0];
    this.main.children[1].addEventListener("click", next);
    self.margin = 0;
    self.prev = 0;
    self.slide_div_length = document.getElementsByClassName("slide")[0].clientWidth; // 1 slide divin width -in olcur
    self.slider_length = document.querySelectorAll(".slides .slide").length; // bu slides divin icinde nece dene slide div oldugun qaytariri yeni 9
    self.transition = document.getElementsByClassName("slides")[0].style.transition = "all " + transition; // bu ise transition bildiyiimiz kimi
    function next() {
        self.prev++;
        self.margin -= self.slide_div_length + 20; // burada divin olcusu + margin qeder cixmasi ucun yazdim margini-de "slide_div_length" kimi goturmek olardi
        self.slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = self.margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
        if (self.prev >= self.slider_length - 4) {
            self.margin = 0;
            self.slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = self.margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
            self.prev = 0;
        }
    }
    self.main.children[0].addEventListener("click", previous);

    function previous() {
        self.prev--;
        self.margin += self.slide_div_length + 20;
        self.slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = self.margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
        if (self.prev <= 0) {
            self.margin = -(self.slide_div_length + 20) * 4;
            self.prev = 5;
            self.slides_div_margin = document.getElementsByClassName("slides")[0].style.marginLeft = self.margin + 'px'; //her click-liyende slides divi-i hereket edir lefte dogru
        }
    }
}