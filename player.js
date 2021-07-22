class Player {
    constructor(){
        this.size = 150;
        this.x = this.size;
        this.y = height - this.size;
        this.velocityY = 0;
        this.gravity = 2;
    }
    jump(){
        if(this.y===height-this.size)
        this.velocityY = -25;
    }
    move (){
        this.y += this.velocityY;
        this.velocityY = this.velocityY + this.gravity;
        this.y = constrain(this.y , 0 , height -this.size);
    }
    show(){
        image(plimage,this.x , this.y , this.size,this.size);
    }

    collided(obstacleToCheck){
        let isColliding = collideRectRect(
            this.x,
            this.y,
            this.size-60,
            this.size,
            obstacleToCheck.x,
            obstacleToCheck.y,
            obstacleToCheck.size-5,
            obstacleToCheck.size-5
        );
        return isColliding;
    }
}