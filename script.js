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

(function (d, s, id) {
    if (d.getElementById(id)) {
        if (window.__TOMORROW__) {
            window.__TOMORROW__.renderWidget();
        }
        return;
    }
    const fjs = d.getElementsByTagName(s)[0];
    const js = d.createElement(s);
    js.id = id;
    js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

    fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'tomorrow-sdk');