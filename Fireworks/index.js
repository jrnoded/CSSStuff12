const particleCount = 150; //try changing the particle count and see what happens
const colors = ["Red", "White", "Blue", "Green"]; // you're not limited to just 2 colors here!
const particles = [];

const canvas = document.getElementById("fireworkCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = Math.random() * 3 + 1;
        const randomAngle = Math.random() * 2 * Math.PI;
        const initialVelocity = Math.random() * 5;
// radial velocity and gravity code stolen from https://codepen.io/bloodeath
        this.velocity = {
            x: Math.cos(randomAngle) * initialVelocity,
            y: Math.sin(randomAngle) * initialVelocity,
        };
        this.alpha = 1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.closePath();
        ctx.fill();
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.velocity.y += 0.05;
        this.alpha -= 0.01;
        this.radius -= 0.01;

        this.draw();
    }
}

function createFirework(x, y) {
    for (let i = 0; i < particleCount; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const particle = new Particle(x, y, color);
        particles.push(particle);
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // The splice below adds a "1" into the particles array if the alpha or radius of the updated particle has gone below 1.
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();

        if (particles[i].alpha <= 0 || particles[i].radius <= 0) {
            particles.splice(i, 1);
            i--;
        }
    }
    requestAnimationFrame(animate);
}

canvas.addEventListener("click", function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    createFirework(mouseX, mouseY);
});

animate();
