class Ghost {
    constructor(draw_x, draw_y, type) {
        this.image = new Image();
        this.image.src = "https://www.spriters-resource.com/resources/sheets/50/52631.png";
        
        let canvas = document.getElementById("myCanvas");
        this.canvas_width = canvas.width;
        this.canvas_height = canvas.height;

        this.look_right();
        this.image_width = 16;
        this.image_height = 16;
        
        this.draw_x = draw_x;
        this.draw_y = draw_y;
        this.draw_width = 16;
        this.draw_height = 16;
        
        this.speed = 2 + type;
        this.type = type;
    }

    look_up() {
        this.direction = "up";
        this.image_coordinates = [
            [456 + 64, 0 + 64 + this.type*16],
            [456 + 80, 0 + 64 + this.type*16]
        ];
    }
    
    look_down() {
        this.direction = "down";
        this.image_coordinates = [
            [456 +  96, 0 + 64 + this.type*16],
            [456 + 112, 0 + 64 + this.type*16]
        ];
    }
    
    look_left() {
        this.direction = "left";
        this.image_coordinates = [
            [456 + 32, 0 + 64 + this.type*16],
            [456 + 48, 0 + 64 + this.type*16]
        ];
    }
    
    look_right() {
        this.direction = "right";
        this.image_coordinates = [
            [456,      0 + 64 + this.type*16],
            [456 + 16, 0 + 64 + this.type*16]
        ];
    }
    
    will_i_collide_with_wall() {
        for (const wall of walls) {
            if (is_collision(this.future_position(), wall))
                return true;
        }
//        return false;
    }
    
    future_position_y() {
        if (this.direction == "up")
            return this.draw_y - this.speed;
        else if (this.direction == "down")
            return this.draw_y + this.speed;
        else
            return this.draw_y;
    }
     
    future_position_x() {
        if (this.direction == "left")
            return this.draw_x - this.speed;
        else if (this.direction == "right")
            return this.draw_x + this.speed;
        else
            return this.draw_x;
    }
    
    future_position() {
        return {
            draw_x: this.future_position_x(),
            draw_y: this.future_position_y(),
            draw_width: this.draw_width,
            draw_height: this.draw_height
        };
    }
    
    move() {
        // make the ghost follow pac-man
        let diff_x = Math.abs(this.draw_x - pac.draw_x);
        let diff_y = Math.abs(this.draw_y - pac.draw_y);
        if (diff_x > diff_y) {
            if (this.draw_x < pac.draw_x)
                this.look_right();
            else if (pac.draw_x < this.draw_x)
                this.look_left();
        }
        else {
            if (this.draw_y < pac.draw_y)
                this.look_down();
            else if (pac.draw_y < this.draw_y)
                this.look_up();
        }
        
        if (this.will_i_collide_with_wall())
            return;
        
        // make this sprite move
        this.draw_y = this.future_position_y();
        this.draw_x = this.future_position_x();
        
        // if sprite goes to canvas edge, teleport the sprite to the other side of the canvas
        if (this.draw_x < 0) {
            this.draw_x = this.canvas_width;
        }
        else if (this.draw_x > this.canvas_width) {
            this.draw_x = 0;
        }
        if (this.draw_y < 0) {
            this.draw_y = this.canvas_height;
        }
        else if (this.draw_y > this.canvas_height) {
            this.draw_y = 0;
        }
    }
    
    draw(context, frame) {
        frame = frame % 2;
        let image_x = this.image_coordinates[frame][0];
        let image_y = this.image_coordinates[frame][1];
        
        context.drawImage(
            this.image,
            image_x,
            image_y,
            this.image_width,
            this.image_height,
            this.draw_x ,
            this.draw_y,
            this.draw_width,
            this.draw_height);
    }
}
