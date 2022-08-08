const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

//player object
const gravity = 0.2

class Sprite {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.height = 10
    }

    draw() {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, 10, this.height)
    }

    update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else this.velocity.y += gravity
        
        
    }
}


const player = new Sprite({
    position: {
        x:0,
        y:0
    },
    velocity: {
        x: 0,
        y: 0
    }
})

function animate() {
    window.requestAnimationFrame(animate)
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
}

animate()

window.addEventListener('keydown', (event) => {
    switch (event.key) {
            case 'ArrowRight':
            player.velocity.x = 1
            break 
            
            case 'ArrowLeft':
            player.velocity.x = -1
            break 
            
            case 'ArrowUp':
            player.velocity.y = -5
            break   
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
            case 'ArrowRight':
            player.velocity.x = 0
            break

            case 'ArrowLeft':
            player.velocity.x = 0
            break
            
            case 'ArrowUp':
            player.velocity.y = 0
            break   
    }

})