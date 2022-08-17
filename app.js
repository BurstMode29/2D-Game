// canvas setup
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 1440
canvas.height = 700
ctx.fillRect(0, 0, canvas.width, canvas.height)

//space background
const background = new Background({  
    position: {
        x: 0,
        y: -7930
    },
    velocity: {
        x: 0,
        y: 2
    },
    imageSrc: './img/bg.png',
    scale: 2,
})


// Obsticals
var obstical = new Obstical({
    position: {
        x:500,
        y:-300
    },

    velocity: {
        x: 0,
        y: 30
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical1 = new Obstical({
    position: {
        x:700,
        y:-500
    },

    velocity: {
        x: 0,
        y: 30
    },
    
    imageSrc: './img/vortex.png',
    scale: 2,
    framesMax: 8,
})


// Panels
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

//Player Spaceship
const player = new Player ({
    position: {
        x:500,
        y:400,
    },

    velocity: {
        x: 0,
        y: 0
    },

    death: {
        imageSrc: './img/death.png',
        framesMax: 9
        
    }
})
player.draw()

 
//Draw on canvas
function animate() {
    window.requestAnimationFrame(animate)
    background.update()
    obstical.update()
    obstical1.update()
    player.update()
    panel.update()
    panel1.update()
   

    if( player.position.x + player.width >= obstical.position.x &&
        player.position.x <= obstical.position.x + obstical.width &&
        player.position.y + player.height >= obstical.position.y && 
        player.position.y <= obstical.position.y + obstical.height
    )   {
            console.log('you lose')
            }

    

    
}
animate();



// Action&Movement Keys
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

