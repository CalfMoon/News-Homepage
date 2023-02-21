navToggle = document.querySelector(".nav-toggle")

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
	navToggle.checked = false
    }
};
