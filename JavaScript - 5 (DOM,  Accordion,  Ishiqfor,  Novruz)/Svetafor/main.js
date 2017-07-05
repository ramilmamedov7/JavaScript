function svetafor() {
    var ishiq = document.getElementsByClassName('ishiq');
    ishiq[0].style.background = 'red';
    ishiq[1].style.background = '#ccc';
    ishiq[2].style.background = '#ccc';

    function changeToYellow() {
        ishiq[0].style.background = '#ccc';
        ishiq[1].style.background = 'yellow';
    }

    function changeToGreen() {
        ishiq[0].style.background = '#ccc';
        ishiq[1].style.background = '#ccc';
        ishiq[2].style.background = 'Green';
    }
    var x = setTimeout(changeToYellow, 5000);
    var y = setTimeout(changeToGreen, 7000);
    var start = setInterval(svetafor, 12000);
}
svetafor();