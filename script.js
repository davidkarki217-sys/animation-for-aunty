const hiText = document.getElementById("hiText");
const glitch = document.getElementById("glitch");
const scary = document.getElementById("scary");

// 3 sec पछि HI AUNTY हट्छ
// अनि glitch आउँछ
setTimeout(() => {
    hiText.style.display = "none";
    glitch.style.display = "block";
}, 3000);

// अर्को 3 sec पछि glitch हट्छ
// अनि ONLY scary smile आउँछ
setTimeout(() => {
    glitch.style.display = "none";
    scary.style.display = "flex";
}, 6000);