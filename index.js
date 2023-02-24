const navToggle = document.querySelector(".nav-toggle");

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.key === 'Escape') {
        navToggle.checked = false;
    };
};
