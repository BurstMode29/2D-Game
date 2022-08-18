// Background Image

class Background {
    constructor({position, velocity, imageSrc, scale = 1, framesMax = 2}) {
        this.position = position
        this.velocity = velocity
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
        this.position.x 
        this.position.y 
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        }

        if(timer = 1000) {
            return score = score += 1
        }
        
    }
}



// Obstical 

class Obstical {
    constructor({position, velocity, imageSrc, scale = 1, framesMax = 2}) {
        this.position = position
        this.velocity = velocity
        this.height = 0
        this.width = 0
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

        this.position.x += this.velocity.x
      this.position.y += this.velocity.y
      }
      
  
      
    }
}


//Health bar



class leftPanel {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.height = 700
        this.width = 400

        var image = new Image()
        image.src = './img/leftPanel.png'
        this.image = image
    }
    
    draw() {
        //ctx.fillStyle = 'red'
        //ctx.fillRect(this.position.x, this.position.y, 10, this.height)
        ctx.font = "30px Silkscreen";
        ctx.fillStyle = "white";
        ctx.fillText(`Score: ${score}`, 110, 70);
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    update() {
        this.draw()

        this.position.x 
        this.position.y 
   
        
        
    }
}

class rightPanel {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.height = 700
        this.width = 400

        var image = new Image()
        image.src = './img/rightPanel.png'
        this.image = image
    }
    
    draw() {
        //ctx.fillStyle = 'red'
        //ctx.fillRect(this.position.x, this.position.y, 10, this.height)
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    update() {
        this.draw()

        this.position.x 
        this.position.y 
        
    }
}



// Player 
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
        this.health = 100
       
        
    }

    draw() {
            //ctx.fillStyle = 'red'
            //ctx.fillRect(this.position.x, this.position.y, 10, this.height`
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
        

        if( player.position.x < 390) {
            player.position.x = player.position.x + 5;
        }
        
        if( player.position.x > 995) {
            player.position.x = player.position.x - 5;
        } 
        
        if( player.position.y < 1) {
            player.position.y = player.position.y + 5;
        }

        if( player.position.y <= obstical.position.y &&
            player.position.x <= obstical.position.x ) {
            
        }

        
        if( player.position.x + player.width >= obstical.position.x &&
            player.position.x <= obstical.position.x + obstical.width &&
            player.position.y + player.height >= obstical.position.y && 
            player.position.y <= obstical.position.y + obstical.height
        )   {
                player.health -= 3
              return document.querySelector('#healthBar').style.width = player.health + '%'
                }


                if( player.position.x + player.width >= obstical1.position.x &&
                    player.position.x <= obstical1.position.x + obstical1.width &&
                    player.position.y + player.height >= obstical1.position.y && 
                    player.position.y <= obstical1.position.y + obstical1.height
                )   {
                        player.health -= 3
                       return document.querySelector('#healthBar').style.width = player.health + '%'
                        }
       
    }
}






