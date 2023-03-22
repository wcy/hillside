document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 37: // left
            pac.look_left();
            break;
        case 38: // up
            pac.look_up();
            break;
        case 39: // right
            pac.look_right();
            break;
        case 40: // down
            pac.look_down();
            break;
    }
});
