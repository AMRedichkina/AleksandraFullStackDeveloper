document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let circles = [];

    function Circle(x, y, radius, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;

        this.draw = function() {
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); // Яркий центр
            gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.7)'); // Переход
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Прозрачные края
        
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = gradient; // Используем градиент для заливки
            ctx.fill();
            ctx.closePath();
        };
        this.update = function() {
            if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }

            if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        };
    }

    function init() {
        circles = [];
        for (let i = 0; i < 5; i++) {
            let radius = Math.random() * 30 + 20; // Random radius between 20 and 50
            let x = Math.random() * (canvas.width - radius * 2) + radius;
            let y = Math.random() * (canvas.height - radius * 2) + radius;
            let dx = (Math.random() - 0.5) * 4; // Speed and direction
            let dy = (Math.random() - 0.5) * 4; // Speed and direction
            circles.push(new Circle(x, y, radius, dx, dy));
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < circles.length; i++) {
            circles[i].update();
        }
    }

    init();
    animate();

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });
});