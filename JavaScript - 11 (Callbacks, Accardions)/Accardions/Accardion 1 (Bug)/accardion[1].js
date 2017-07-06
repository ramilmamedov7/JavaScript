var accordion = document.getElementsByClassName('accordion').item(0);
sections = accordion.getElementsByClassName('item');

function openBelow(el) {
    el.style.marginTop = '0px';
}

function closeBelow(el) {
    el.style.marginTop = -el.offsetHeight + 'px';
}
for (var i = 0; i < sections.length; i++) {
    (function () {
        var section = sections.item(i)
            , anchor = sections.item(i).children[0]
            , below = sections.item(i).children[1];
        closeBelow(below, -below.offsetHeight);
        anchor.onclick = function () {
            if (section.getAttribute('class') == 'active') {
                section.setAttribute('class', '');
                closeBelow(below);
            }
            else {
                section.setAttribute('class', 'active');
                openBelow(below);
            }
        }
    })();
}