const envelope = document.getElementById("envelope");
const envelopeScreen = document.getElementById("envelope-screen");
const valentineScreen = document.getElementById("valentine-screen");
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

envelopeScreen.addEventListener("click", () => {
    envelope.classList.add("open");

    setTimeout(() => {
        envelopeScreen.style.display = "none";
        valentineScreen.style.display = "block";
    }, 800);
});

noBtn.addEventListener("mouseover", () => {
    const container = valentineScreen; // the parent container
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const maxX = containerWidth - noBtn.offsetWidth;
    const maxY = containerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Keep initial "right" style: calculate relative to container
    noBtn.style.left = randomX + "px";  // using left now inside container
    noBtn.style.top = randomY + "px";
});


function createHeart()
{
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
    for (let i = 0; i < 40; i++)
    {
        createHeart();
    }

    setTimeout(() => 
    {
        window.location.href = "vYes.html";
    }, 1800);
});
