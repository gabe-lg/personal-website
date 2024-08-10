$(() => {
  const index = {};

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
});

// buttons
function jumbotronButtonScroll() {
  window.scrollBy(0, window.innerHeight / 3);
}

function jumbotronButton() {
  main.goToElement("#content");
}
