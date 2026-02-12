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
    const containerRect = valentineScreen.getBoundingClientRect();
    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = containerRect.height - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            font-family:Poppins;
            background:linear-gradient(135deg,#ff9a9e,#fad0c4);
            font-size:40px;
            text-align:center;
        ">
            YAYYYYY 😭❤️<br>
            You just made my year.
        </div>
    `;
});
