function AccordionFn() {
    this.init(0);
    this._ = this;
}
AccordionFn.prototype = {
    time: 10
    , divid: 10
    , arr: []
    , init: function (indx) {
        var i = 0
            , that = this;
        this.l = document.querySelectorAll('dt');
        for (; i < this.l.length; i++) {
            this.l[i].addEventListener('click', this.fn.bind(that, this));
            this.arr[i] = this.l[i];
        }
        var dd = document.getElementsByTagName('dd');
        i = 0
        for (; i < dd.length; i++) {
            dd[i].tOut = i;
            var d = dd[i];
            dd[i].offHt = d.clientHeight;
            dd[i].style.display = 'none';
            dd[i].style.height = 0;
        }
        for (var e = 0; e < this.arr.length; e++) {
            if (indx == e) {
                this.fn(that, this.arr[e]);
            }
        }
    }
    , fn: function (self, o) {
        var elem = o.currentTarget ? o.currentTarget.nextElementSibling : o.nextElementSibling
            , b = o.currentTarget || o;
        for (var j = 0; j < self.arr.length; j++) {
            if (self.arr[j].nextElementSibling.style.display == 'none' && self.arr[j] == b) {
                self.arr[j].classList.add('active');
                self.arr[j].nextElementSibling.style.display = "";
                self.setIntval(self.arr[j].nextElementSibling, 1, self);
            }
            else if (self.arr[j].classList.contains('active')) {
                self.arr[j].classList.remove('active');
                self.setIntval(self.arr[j].nextElementSibling, -1, self);
            }
        }
    }
    , setIntval: function (elem, isDisplay, self) {
        elem.tOut = setInterval(function () {
            self.calcFn(elem, isDisplay);
        }, 5)
    }
    , calcFn: function (elem, isDisplay) {
        var d = isDisplay == 1 ? elem.offHt - elem.clientHeight : elem.clientHeight;
        elem.style.height = elem.clientHeight + (Math.ceil(d / 10) * isDisplay) + 'px';
        elem.style.opacity = elem.clientHeight / elem.offHt;
        elem.style.filter = 'alpha(opacity=' + elem.clientHeight * 100 / elem.offHt + ')';
        if (isDisplay == 1 && elem.clientHeight >= elem.offHt) {
            clearInterval(elem.tOut);
        }
        else if (isDisplay != 1 && elem.clientHeight == 1) {
            elem.style.display = "none";
            clearInterval(elem.tOut);
        }
    }
}
var a = new AccordionFn();