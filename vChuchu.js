const envelope = document.getElementById("envelope");
const envelopeScreen = document.getElementById("envelope-screen");
const valentineScreen = document.getElementById("valentine-screen");
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.querySelector(".button-row");

envelopeScreen.addEventListener("click", () => {
    envelope.classList.add("open");

    setTimeout(() => {
        envelopeScreen.style.display = "none";
        valentineScreen.style.display = "block";
    }, 800);
});

noBtn.style.left = (container.clientWidth - noBtn.offsetWidth) + "px";

noBtn.addEventListener("mouseover", () => {
    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// Heart animation for YES button
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.animationDuration = (3 + Math.random() * 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

yesBtn.addEventListener("click", () => {
    for (let i = 0; i < 40; i++) {
        createHeart();
    }

    setTimeout(() => {
        window.location.href = "vYes.html";
    }, 1800);
});
