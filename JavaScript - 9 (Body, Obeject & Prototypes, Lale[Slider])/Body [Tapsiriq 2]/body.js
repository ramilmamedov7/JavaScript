    function body(className, spanColor, spanWidth, spanHeight) {
        var self = this;
        self.main = document.getElementById(className);
        self.img = self.main.children[0];
        self.img.addEventListener('click', function (event) {
            self.x = event.offsetX;
            self.y = event.offsetY;
            self.span = document.createElement('span');
            self.span.className = 'badge';
            self.span.style.top = self.y;
            self.span.style.left = self.x;
            self.span.style.background = spanColor;
            self.span.style.width = spanWidth;
            self.span.style.height = spanHeight;
            self.main.appendChild(self.span);
        });
        self.main.addEventListener('click', function (event) {
            if (event.target.className == 'badge') {
                self.main.removeChild(event.target);
            }
        })
    }