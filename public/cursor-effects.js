/*!
 * Emoji Cursor.js
 * - 90's cursors collection
 * -- https://github.com/tholman/90s-cursor-effects
 * -- https://codepen.io/tholman/full/rxJpdQ
 */

(function emojiCursor() {

    var possibleEmoji = [
        ":3",
        "^w^",
        "♫",
        "♪",
    ];
    var width = window.innerWidth;
    var height = window.innerHeight;
    var cursor = {
        x: width / 2,
        y: width / 2
    };
    var particles = [];

    function init() {
        bindEvents();
        loop();

        const waterfall = document.getElementById('emoticon-watefall');

        // waterfall
        setInterval(() => {
            const x = waterfall.offsetLeft + Math.random() * waterfall.offsetWidth;
            const y = waterfall.offsetTop + 20 + Math.random() * (waterfall.offsetHeight * 0.7);

            addParticle(x, y, possibleEmoji[Math.floor(Math.random() * possibleEmoji.length)]);
        }, 50);
    }

    // Bind events that are needed
    function bindEvents() {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchstart', onTouchMove);

        window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize(e) {
        width = window.innerWidth;
        height = window.innerHeight;
    }

    function onTouchMove(e) {
        if (e.touches.length > 0) {
            for (var i = 0; i < e.touches.length; i++) {
                addParticle(e.touches[i].clientX, e.touches[i].clientY, possibleEmoji[Math.floor(Math.random() * possibleEmoji.length)]);
            }
        }
    }

    function onMouseMove(e) {
        cursor.x = e.clientX;
        cursor.y = e.clientY;

        addParticle(cursor.x, cursor.y + window.pageYOffset, possibleEmoji[Math.floor(Math.random() * possibleEmoji.length)]);
    }

    function addParticle(x, y, character) {
        if (Math.random() > 0.2) return;

        var particle = new Particle();
        particle.init(x, y, character);
        particles.push(particle);
    }

    function updateParticles() {

        // Updated
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
        }

        // Remove dead particles
        for (let i = particles.length - 1; i >= 0; i--) {
            if (particles[i].lifeSpan < 0) {
                particles[i].die();
                particles.splice(i, 1);
            }
        }

    }

    function loop() {
        requestAnimationFrame(loop);
        updateParticles();
    }

    /**
     * Particles
     */

    function Particle() {

        this.lifeSpan = 120; //ms
        this.initialStyles = {
            "position": "absolute",
            "display": "block",
            "pointerEvents": "none",
            "z-index": "100000",
            "fontSize": "1rem",
            "will-change": "transform",
            color: "black",
        };

        // Init, and set properties
        this.init = function(x, y, character) {
            this.velocity = {
                x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
                y: 1
            };

            this.position = {
                x: x - 10,
                y: y - 20
            };

            this.element = document.createElement('span');
            this.element.innerHTML = character;
            applyProperties(this.element, this.initialStyles);
            this.update();

            document.body.appendChild(this.element);
        };

        this.update = function() {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.lifeSpan--;

            this.element.style.transform = "scale(" + (this.lifeSpan / 120) + ")";
            this.element.style.left = this.position.x + 'px';
            this.element.style.top = this.position.y + 'px';
        };

        this.die = function() {
            this.element.parentNode.removeChild(this.element);
        };

    }

    /**
     * Utils
     */

    // Applies css `properties` to an element.
    function applyProperties(target, properties) {
        for (var key in properties) {
            target.style[key] = properties[key];
        }
    }

    init();
})();