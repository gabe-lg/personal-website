$(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };
  function cb(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        $("#content #cover").hide();
        scroll("content");
      }
    });
  }
  const observer = new IntersectionObserver(cb, options);

  document
    .querySelectorAll("#content")
    .forEach(element => observer.observe(element));
});

function jumbotronButton() {
  scroll("content");
}
