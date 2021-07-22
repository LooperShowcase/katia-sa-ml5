class Obstacle{
    constructor(){
        this.size =60;
        this.x = width;
        this.y = height - this.size;

    }
    show(){
        image(obimage, this.x,this.y, this.size,this.size)
    }
    move(){
        this.x -= 10;
    }
}