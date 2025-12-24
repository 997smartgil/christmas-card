const bgm = document.getElementById("bgm");
const muteBtn = document.getElementById("muteBtn");

// play music on first interaction
document.body.addEventListener("click", () => {
  bgm.play();
}, { once: true });

// mute toggle
muteBtn.onclick = () => {
  bgm.muted = !bgm.muted;
  muteBtn.textContent = bgm.muted ? "🔇" : "🔊";
};

// gift open
function openGift() {
  document.getElementById("page1").classList.remove("active");
  document.getElementById("page2").classList.add("active");
}

// next page
function nextPage(n) {
  document.getElementById(`page${n}`).classList.remove("active");
  document.getElementById(`page${n+1}`).classList.add("active");
}

// typing
const text = "No distance can stop my love for you.\nJe t’aime, always ❤️";
let i = 0;

function typeText() {
  if (i < text.length) {
    typing.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    setTimeout(typeText, 60);
  }
}
typeText();

// snow
for (let i = 0; i < 40; i++) {
  const snow = document.createElement("div");
  snow.className = "snow";
  snow.style.left = Math.random() * 100 + "vw";
  snow.style.animationDuration = 3 + Math.random() * 5 + "s";
  document.body.appendChild(snow);
}

// hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 800);

