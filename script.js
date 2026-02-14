const textElement = document.getElementById('alternating-text');
const messages = ["Jaber ❤️", "My Beautiful One 🌹"];
let currentIndex = 0;

// Alternate Text Logic
function rotateText() {
    textElement.classList.add('fade-out');
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        textElement.textContent = messages[currentIndex];
        textElement.classList.remove('fade-out');
        textElement.classList.add('fade-in');
    }, 1000);
}

setInterval(rotateText, 3000);

// Generate Floating Hearts
function createHeart() {
    const container = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 400);