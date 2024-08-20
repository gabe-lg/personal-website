$(() => {
  main.intersectFadeInOut("#projects", 0.3);

  main.intersect("#content-buffer", 0, entry => {
    if (entry.isIntersecting) {
      document
        .querySelectorAll("#content")
        .forEach(entry => entry.classList.add("active"));
      document
        .querySelectorAll("#content #fixed")
        .forEach(entry => entry.classList.add("fixed"));
    } else
      document
        .querySelectorAll("#content #fixed")
        .forEach(entry => entry.classList.remove("fixed"));
  });

  main.intersect("#contacts", 0.3, entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

const index = {};

index.updateTime = () => {
  const now = new Date();
  const options = {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const timeString = now.toLocaleString("en-US", options);
  document.getElementById("time-content").textContent = timeString;
};

setInterval(index.updateTime, 1000);

// BUTTONS
function jumbotronButtonScroll() {
  window.scrollBy(0, window.innerHeight / 3);
}

function jumbotronButton() {
  main.goToElement("#content-buffer");
}
