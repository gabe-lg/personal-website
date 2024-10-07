$(() => {
  main.intersect(".hidden", 0, entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const index = {};

index.updateTime = () => {
  const now = new Date();
  const options = {
    timeZone: "America/New_York",
    hour: "numeric",
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
  main.goToElement("#content");
}
