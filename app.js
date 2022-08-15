// canvas setup
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 1440
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
        x: 800,
        y: 300
    },
    imageSrc: './img/vortex.png',
    scale: 2,
    framesMax: 8
})


var obstical = new Obstical({
    position: {
        x:500,
        y:200
    },

    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './img/sunburn.png',
    scale: 2,
    framesMax: 8

})

var panel = new leftPanel ({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './img/leftPanel.png',

})

var panel1 = new rightPanel ({
    position: {
        x: 1040,
        y: 0
    },
    imageSrc: './img/rightPanel.png',

})

//player ship
const player = new Player ({
    position: {
        x:500,
        y:400,
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
    obstical.update()
    player.update()
    panel.update()
    panel1.update()

  
    if(player.position.x < 400) {
        player.position.x = player.position.x + 5;
    }   
    
   
    if(player.position.y + player.height >= obstical.position.y && player.position.y <= obstical.position.y + obstical.height
        && player.position.x + player.width >= obstical.position.x && player.position.x <= obstical.position.x + obstical.width) {
        console.log('true');
    }

   
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


