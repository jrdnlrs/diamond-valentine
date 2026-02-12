function openLetter() {
    // 1. Hide Overlay
    const overlay = document.getElementById('overlay');
    overlay.style.opacity = '0';
    setTimeout(() => { overlay.style.visibility = 'hidden'; }, 1500);

    // 2. Reveal Letter
    const letter = document.getElementById('main-letter');
    letter.style.opacity = '1';
    letter.style.transform = 'scale(1)';
    
    // 3. Trigger Fade-ins
    setTimeout(() => { 
        letter.classList.add('active'); 
    }, 500);

    // 4. Start Music
    const player = document.getElementById('music-player');
    player.src = "https://www.youtube.com/embed/gn7HgzOEdHU?autoplay=1&enablejsapi=1";

    // 5. Start Petals
    setInterval(createPetal, 400);
}

// NO BUTTON EVASION
const noBtn = document.getElementById('no-btn');
noBtn.addEventListener('mouseover', () => {
    noBtn.style.position = 'fixed';
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 40) + 20;
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 40) + 20;
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// SUCCESS SCREEN
document.getElementById('yes-btn').addEventListener('click', () => {
    document.querySelector('.actions').style.display = 'none';
    document.getElementById('gallery').style.display = 'block';
    
    document.getElementById('letter-content').innerHTML = `
        <h1 class="dearest">Splendid!</h1>
        <p>The gossip columns will have much to say about this development. This author is truly delighted.</p>
        <p style="font-style: italic; margin-top: 20px;">"You are, and have always been, my Diamond."</p>
    `;
});

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * window.innerWidth + 'px';
    petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(petal);
    setTimeout(() => { petal.remove(); }, 5000);
}