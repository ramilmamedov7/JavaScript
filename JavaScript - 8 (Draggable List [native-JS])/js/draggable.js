//function Draggable(container) {
//    var self = this;
//
//    self.container = document.querySelector(container);
//
//    self.container.addEventListener('dragover', function(ev) {
//        ev.preventDefault();
//    });
//    self.container.addEventListener('drop', function(event) {
//        event.preventDefault();
//        var id = event.dataTransfer.getData("id");
//        self.container.appendChild(document.getElementById(id));
//    });
//
//
//    for (var i = 0; i < self.container.childElementCount; i++) {
//        self.container.children[i].setAttribute('draggable', true);
//        self.container.children[i].id = 'item_' + (i + 1);
//
//        self.container.children[i].addEventListener('dragstart', function(event) {
//            event.dataTransfer.setData("id", event.target.id);
//        });
//    }
//}
function sortable(a, b) {
    if (a.parentNode == b.parentNode) {
        for (var i = a; i; i = i.previousSibling) {
            if (i === b) {
                return true;
            }
        }
    }
    return false;
}

function dragenter(event) {
    if (sortable(yer, event.target)) {
        event.target.parentNode.insertBefore(yer, event.target);
    }
    else {
        event.target.parentNode.insertBefore(yer, event.target.nextSibling);
    }
}

function dragstart(event) {
    this.yer = event.target;
    event.dataTransfer.effectAllowed = 'move';
}