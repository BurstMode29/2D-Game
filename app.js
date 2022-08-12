// canvas setup
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 1080
canvas.height = 700

ctx.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 1


//space background
const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './img/Nebula Blue.png'
})

// red vortex animation
var vortex = new Sprite({
    position: {
        x: 500,
        y: 200
    },
    imageSrc: './img/vortex.png',
    scale: 2,
    framesMax: 8
})


//player ship
const player = new Player ({
    position: {
        x:400,
        y:400
    },

    velocity: {
        x: 0,
        y: 0
    },
})
player.draw()

// function to draw on canvas

function animate() {
    window.requestAnimationFrame(animate)
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height) 
    background.update()
    vortex.update()
    player.update()
   

   
}

animate();

// movement keys
window.addEventListener('keydown', (event) => {
    switch (event.key) {
            case 'ArrowRight':
            player.velocity.x = 5
            
            break 
            
            case 'ArrowLeft':
            player.velocity.x = -5
            break 
            
            case 'ArrowUp':
            player.velocity.y = -5
            break
            
            case 'ArrowDown':
            player.velocity.y = 5
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
            
            case 'ArrowDown':
            player.velocity.y = 0
            break  
    }

})