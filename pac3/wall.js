class Wall {
    constructor(draw_x, draw_y, draw_width, draw_height) {
        
//        let canvas = document.getElementById("myCanvas");
//        this.canvas_width = canvas.width;
//        this.canvas_height = canvas.height;

        this.draw_x = draw_x;
        this.draw_y = draw_y;
        this.draw_width = draw_width;
        this.draw_height = draw_height;
    }
    
    draw(context) {
        context.strokeStyle = 'blue';
        context.lineWidth = 2;

        // Draw the rectangle with the stroke
        context.strokeRect(
            this.draw_x,
            this.draw_y,
            this.draw_width,
            this.draw_height);
    }
}
