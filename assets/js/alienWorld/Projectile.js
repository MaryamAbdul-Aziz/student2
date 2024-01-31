class Monkey {
    constructor() {
        this.position = {
            x: canvas.width / 2,
            y: canvas.height / 2
        };

        this.velocity = {
            x: 0,
            y: 0
        };

        this.rotation = 0;
        this.speed = 5;

        const image = new Image();
        image.src = "{{site.baseurl}}/images/whitechicken.png";
        image.onload = () => {
            // After the image has loaded, update and draw the player
            this.image = image;
            this.width = 100;
            this.height = 100;
            this.draw();
        };
    }

    draw() {
        if (this.image) {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;
    }
}

const defaultChickenImageSrc = "whitechicken.png"; // Default chicken image source
// have a space because that's what works ;-;
const player = new Player(defaultChickenImageSrc);

// Function to change the chicken image source
function changeChicken(imageSrc) {
    player.image.src = imageSrc;
}

//keep no space so chicken shows up
constplayer = new Player();

document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        player.velocity.x = -player.speed;
    } else if (event.key === 'd') {
        player.velocity.x = player.speed;
        //case 87 = w key
    } else if (event.key === ' ','w' && player.image) {
        // Shoot a projectile when space bar is pressed
        const projectile = new Projectile(player.position.x, player.position.y, 5, "{{site.baseurl}}/images/egg-projectile.png");
        projectiles.push(projectile);
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'a' || event.key === 'd') {
        player.velocity.x = 0;
    }
});

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.update();

    for (let i = projectiles.length - 1; i >= 0; i--) {
        projectiles[i].update();
        // Remove projectiles that are out of view
        if (projectiles[i].position.y < 0) {
            projectiles.splice(i, 1);
        }
    }
}

const projectiles = [];

class Projectile {
    constructor(x, y, speed, imageSrc) {
        this.position = {
            x,
            y
        };
        this.speed = speed;
        this.image = new Image();
        this.image.src = imageSrc;
        this.width = 50;
        this.height = 50;
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        this.position.y -= this.speed;
    }
}

animate();