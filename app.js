/* Open */
function open() {
    document.getElementById("splash").style.display = "block";
  }
  
  /* Close */
  function close() {
    document.getElementById("splash").style.display = "none";
  }

// canvas setup
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 1440
canvas.height = 700

ctx.fillRect(0, 0, canvas.width, canvas.height)

let score = 0

let music = document.getElementById("music")

let health = document.getElementById("health")
health.value = 100; 

let health1 = document.getElementById("health")
health1.value = 100;

let health2 = document.getElementById("health")
health2.value = 100;

let health3 = document.getElementById("health")
health3.value = 100;

let health4 = document.getElementById("health")
health4.value = 100;

let health5 = document.getElementById("health")
health5.value = 100;

let health6 = document.getElementById("health")
health6.value = 100;

let health7 = document.getElementById("health")
health7.value = 100;

let health8 = document.getElementById("health")
health8.value = 100;

let health9 = document.getElementById("health")
health9.value = 100;

let health10 = document.getElementById("health")
health10.value = 100;

let projectile = document.getElementById("projectile")

function drawScore() {
    ctx.font = "30px Silkscreen";
    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${score}`, 8, 20);
    score += 1
  }

drawScore();

//space background
const background = new Background({  
    position: {
        x: 0,
        y: -7900
    },
    velocity: {
        x: 0,
        y: 2
    },
    imageSrc: './img/bg.png',
    scale: 2,
})




// Obsticals-------------------------------------------------------
const obstical = new Obstical({
    position: {
        x:500,
        y:-300
    },

    velocity: {
        x: 0,
        y: 30
    },
    
    imageSrc: './img/sunburn.png',
    framesMax: 8,
})

var obstical1 = new Obstical({
    position: {
        x:500,
        y:-600
    },

    velocity: {
        x: 0,
        y: 30
    },
    
    imageSrc: './img/sunburn.png',
    framesMax: 8,
})

var obstical2 = new Obstical({
    position: {
        x:700,
        y:-900
    },

    velocity: {
        x: 0,
        y: 30
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical3 = new Obstical({
    position: {
        x:500,
        y:-1200
    },

    velocity: {
        x: 0,
        y: 30
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical4 = new Obstical({
    position: {
        x:500,
        y:-1500
    },

    velocity: {
        x: 0,
        y: 30
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical5 = new Obstical({
    position: {
        x:700,
        y:-1800
    },

    velocity: {
        x: 0,
        y: 35
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical6 = new Obstical({
    position: {
        x:550,
        y:-2100
    },

    velocity: {
        x: 0,
        y: 20
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical7 = new Obstical({
    position: {
        x:300,
        y:-2400
    },

    velocity: {
        x: 0,
        y: 20
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical8 = new Obstical({
    position: {
        x:700,
        y:-2700
    },

    velocity: {
        x: 0,
        y: 40
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical9 = new Obstical({
    position: {
        x:500,
        y:-3000
    },

    velocity: {
        x: 0,
        y: 10
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical10 = new Obstical({
    position: {
        x:500,
        y:-3300
    },

    velocity: {
        x: 0,
        y: 40
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})






var obstical11 = new Obstical({
    position: {
        x:500,
        y:-3600
    },

    velocity: {
        x: 0,
        y: 70
    },
    
    imageSrc: './img/sunburn.png',
    framesMax: 8,
})

var obstical12 = new Obstical({
    position: {
        x:700,
        y:-3900
    },

    velocity: {
        x: 0,
        y: 10
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical13 = new Obstical({
    position: {
        x:500,
        y:-4200
    },

    velocity: {
        x: 0,
        y: 30
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical14 = new Obstical({
    position: {
        x:500,
        y:-4500
    },

    velocity: {
        x: 0,
        y: 15
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical15 = new Obstical({
    position: {
        x:500,
        y:-4800
    },

    velocity: {
        x: 0,
        y: 30
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical16 = new Obstical({
    position: {
        x:450,
        y:-5100
    },

    velocity: {
        x: 0,
        y: 40
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical17 = new Obstical({
    position: {
        x:500,
        y:-5400
    },

    velocity: {
        x: 0,
        y: 20
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical18 = new Obstical({
    position: {
        x:500,
        y:-5700
    },

    velocity: {
        x: 0,
        y: 45
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical19 = new Obstical({
    position: {
        x:300,
        y:-6000
    },

    velocity: {
        x: 0,
        y: 10
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical20 = new Obstical({
    position: {
        x:500,
        y:-6300
    },

    velocity: {
        x: 0,
        y: 30
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})









var obstical21 = new Obstical({
    position: {
        x:500,
        y:-600
    },

    velocity: {
        x: 0,
        y: 30
    },
    
    imageSrc: './img/vortex.png',
    framesMax: 8,
})

var obstical2 = new Obstical({
    position: {
        x:700,
        y:-900
    },

    velocity: {
        x: 0,
        y: 30
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical3 = new Obstical({
    position: {
        x:500,
        y:-1200
    },

    velocity: {
        x: 0,
        y: 30
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical4 = new Obstical({
    position: {
        x:500,
        y:-1500
    },

    velocity: {
        x: 0,
        y: 30
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical5 = new Obstical({
    position: {
        x:700,
        y:-1800
    },

    velocity: {
        x: 0,
        y: 35
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical6 = new Obstical({
    position: {
        x:550,
        y:-2100
    },

    velocity: {
        x: 0,
        y: 20
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical7 = new Obstical({
    position: {
        x:300,
        y:-2400
    },

    velocity: {
        x: 0,
        y: 20
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical8 = new Obstical({
    position: {
        x:700,
        y:-2700
    },

    velocity: {
        x: 0,
        y: 40
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical9 = new Obstical({
    position: {
        x:500,
        y:-3000
    },

    velocity: {
        x: 0,
        y: 10
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical10 = new Obstical({
    position: {
        x:500,
        y:-3300
    },

    velocity: {
        x: 0,
        y: 40
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical11 = new Obstical({
    position: {
        x:500,
        y:-3600
    },

    velocity: {
        x: 0,
        y: 70
    },
    
    imageSrc: './img/sunburn.png',
    framesMax: 8,
})

var obstical12 = new Obstical({
    position: {
        x:700,
        y:-3900
    },

    velocity: {
        x: 0,
        y: 10
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical13 = new Obstical({
    position: {
        x:500,
        y:-4200
    },

    velocity: {
        x: 0,
        y: 30
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical14 = new Obstical({
    position: {
        x:500,
        y:-4500
    },

    velocity: {
        x: 0,
        y: 15
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical15 = new Obstical({
    position: {
        x:500,
        y:-4800
    },

    velocity: {
        x: 0,
        y: 30
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical16 = new Obstical({
    position: {
        x:450,
        y:-5100
    },

    velocity: {
        x: 0,
        y: 40
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical17 = new Obstical({
    position: {
        x:500,
        y:-5400
    },

    velocity: {
        x: 0,
        y: 20
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical18 = new Obstical({
    position: {
        x:500,
        y:-5700
    },

    velocity: {
        x: 0,
        y: 45
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical19 = new Obstical({
    position: {
        x:300,
        y:-6000
    },

    velocity: {
        x: 0,
        y: 10
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})

var obstical20 = new Obstical({
    position: {
        x:500,
        y:-6300
    },

    velocity: {
        x: 0,
        y: 30
    },
    
    imageSrc: './img/sunburn.png',
    scale: 3,
    framesMax: 8,
})
//Obsticals---------------------------------------------------------

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
    obstical2.update()
    obstical3.update()
    obstical4.update()
    obstical5.update()
    obstical6.update()
    obstical7.update()
    obstical8.update()
    obstical9.update()
    obstical10.update()

    obstical11.update()
    obstical12.update()
    obstical13.update()
    obstical14.update()
    obstical15.update()
    obstical16.update()
    obstical17.update()
    obstical18.update()
    obstical19.update()
    obstical20.update()

    player.update()
    panel.update()
    panel1.update()
    
  

    if( player.position.x + player.width  >= obstical.position.x &&
        player.position.x <= obstical.position.x + obstical.width  &&
        player.position.y + player.height  >= obstical.position.y && 
        player.position.y <= obstical.position.y + obstical.height 
    )   {
            console.log('you lose')
            }



            if( player.position.x * 2 + player.width >= obstical.position.x * 2 &&
                player.position.x <= obstical.position.x + obstical.width * 2 &&
                player.position.y * 2 + player.height >= obstical.position.y * 2 && 
                player.position.y <= obstical.position.y + obstical.height * 2
            ) 

            {
                     health = health.value -= 20
                    }


                    if( player.position.x + player.width >= obstical1.position.x &&
                        player.position.x <= obstical1.position.x + obstical1.width &&
                        player.position.y + player.height >= obstical1.position.y && 
                        player.position.y <= obstical1.position.y + obstical1.height 
                    ) 
        
                    {
                             health1 = health1.value -= 20
                            }

                            if( player.position.x + player.width >= obstical2.position.x &&
                                player.position.x <= obstical2.position.x + obstical2.width &&
                                player.position.y + player.height >= obstical2.position.y && 
                                player.position.y <= obstical2.position.y + obstical2.height 
                            ) 
                
                            {
                                     health2 = health2.value -= 20
                                    }

                                    if( player.position.x + player.width >= obstical3.position.x &&
                                        player.position.x <= obstical3.position.x + obstical3.width &&
                                        player.position.y + player.height >= obstical3.position.y && 
                                        player.position.y <= obstical3.position.y + obstical3.height 
                                    ) 
                        
                                    {
                                             health3 = health3.value -= 20
                                            }


                                            if( player.position.x + player.width >= obstical4.position.x &&
                                                player.position.x <= obstical4.position.x + obstical4.width &&
                                                player.position.y + player.height >= obstical4.position.y && 
                                                player.position.y <= obstical4.position.y + obstical4.height 
                                            ) 
                                
                                            {
                                                     health4 = health4.value -= 20
                                                    }


                                                    if( player.position.x + player.width >= obstical5.position.x &&
                                                        player.position.x <= obstical5.position.x + obstical5.width &&
                                                        player.position.y + player.height >= obstical5.position.y && 
                                                        player.position.y <= obstical5.position.y + obstical5.height 
                                                    ) 
                                        
                                                    {
                                                             health5 = health5.value -= 20
                                                            }
                                        
                                                            if( player.position.x + player.width >= obstical6.position.x &&
                                                                player.position.x <= obstical6.position.x + obstical6.width &&
                                                                player.position.y + player.height >= obstical6.position.y && 
                                                                player.position.y <= obstical6.position.y + obstical6.height 
                                                            ) 
                                                
                                                            {
                                                                     health6 = health6.value -= 20
                                                                    }
                                                                    if( player.position.x + player.width >= obstical7.position.x &&
                                                                        player.position.x <= obstical7.position.x + obstical7.width &&
                                                                        player.position.y + player.height >= obstical7.position.y && 
                                                                        player.position.y <= obstical7.position.y + obstical7.height 
                                                                    ) 
                                                        
                                                                    {
                                                                             health7 = health7.value -= 20
                                                                            }

                                                                            if( player.position.x + player.width >= obstical8.position.x &&
                                                                                player.position.x <= obstical8.position.x + obstical8.width &&
                                                                                player.position.y + player.height >= obstical8.position.y && 
                                                                                player.position.y <= obstical8.position.y + obstical8.height 
                                                                            ) 
                                                                
                                                                            {
                                                                                     health8 = health8.value -= 20
                                                                                    }

                                                                                    if( player.position.x + player.width >= obstical9.position.x &&
                                                                                        player.position.x <= obstical9.position.x + obstical9.width &&
                                                                                        player.position.y + player.height >= obstical9.position.y && 
                                                                                        player.position.y <= obstical9.position.y + obstical9.height 
                                                                                    ) 
                                                                        
                                                                                    {
                                                                                             health9 = health9.value -= 20
                                                                                            }


                                                                                            if( player.position.x + player.width >= obstical10.position.x &&
                                                                                                player.position.x <= obstical10.position.x + obstical10.width &&
                                                                                                player.position.y + player.height >= obstical10.position.y && 
                                                                                                player.position.y <= obstical10.position.y + obstical10.height 
                                                                                            ) 
                                                                                
                                                                                            {
                                                                                                     health10 = health10.value -= 20
                                                                                                    }

                                                                                                    

                                                                                                 
            if(timer = 1000) {
                return score = score += 1
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

