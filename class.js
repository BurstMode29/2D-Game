// Background Image
class Sprite {
    constructor({position, imageSrc, scale = 1, framesMax = 2}) {
        this.position = position
        this.height = 10
        
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.framesMax = framesMax
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 9
    }

    draw() {
        ctx.drawImage(

            this.image,
            this.framesCurrent * (this.image.width / this.framesMax),
            this.framesCurrent * (this.image.height / this.framesMax),
            this.image.width / this.framesMax,
            this.image.height / this.framesMax,

            this.position.x,
            this.position.y,
            (this.image.width / this.framesMax) * this.scale,
            (this.image.height / this.framesMax)* this.scale
        )
    }

    update() {
        this.draw()
        this.framesElapsed++

        if (this.framesElapsed % this.framesHold === 0) {

        if (this.framesCurrent < this.framesMax - 3){
        this.framesCurrent++
        } else {
            this.framesCurrent = 0
        }
      }
        
    }
}


// Obstical 

class Obstical {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.height = 100
        this.width = 100
    }

    draw() {

            ctx.fillStyle = 'red'
            ctx.fillRect(this.position.x, this.position.y, 50, this.height)
        }

    update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } 
    }
}


// Player Object
class Player {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.height = 100
        this.width = 60

        var image = new Image()
        image.src = './img/ship-center.png'
        this.image = image
        this.frames = 0        
        
        
    }

    draw() {
            //ctx.fillStyle = 'red'
            //ctx.fillRect(this.position.x, this.position.y, 10, this.height)
            ctx.drawImage(
                this.image,
                0,
                0.09 * this.frames,
                20,
                37,
                this.position.x,
                this.position.y,
                this.width,
                this.height
            )
        }

    update() {
        this.frames++
        if (this.frames > 10 ) this.frames = 4
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } 
        
        
    }
}