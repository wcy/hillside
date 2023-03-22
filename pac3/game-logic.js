const pac = new Pac();
const ghost_0 = new Ghost(100, 100, 0);
const ghost_1 = new Ghost(400, 100, 1);
const ghost_2 = new Ghost(100, 400, 2);
const ghost_3 = new Ghost(400, 400, 3);

const wall_0 = new Wall(200, 200, 10, 100);
const wall_1 = new Wall(300, 200, 10, 100);
const wall_2 = new Wall(200, 300, 110, 10);

const walls = [wall_0, wall_1, wall_2];

let frame = 0;

function game_logic() {
    frame++;

    //context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    wall_0.draw(context);
    wall_1.draw(context);
    wall_2.draw(context);

    pac.move();
    pac.draw(context, frame);
    
    ghost_0.move();
    ghost_0.draw(context, frame);
    
    ghost_1.move();
    ghost_1.draw(context, frame);
    
    ghost_2.move();
    ghost_2.draw(context, frame);
    
    ghost_3.move();
    ghost_3.draw(context, frame);
}
