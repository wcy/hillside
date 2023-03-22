function is_collision(a, b) {
    return !(
        ((a.draw_y + a.draw_height) < (b.draw_y)) ||
        (a.draw_y > (b.draw_y + b.draw_height)) ||
        ((a.draw_x + a.draw_width) < b.draw_x) ||
        (a.draw_x > (b.draw_x + b.draw_width))
    );
}
