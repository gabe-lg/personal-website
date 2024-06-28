/* Request full screen */
var bg = document.querySelector('body#projects-bg-default'); 

bg.addEventListener('click', function (e) {
    bg.requestFullscreen();
})

/* Time */
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

document.getElementById("bg-time").textContent = `${hours}:${minutes}:${seconds}`;