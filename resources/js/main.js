$(() => {
  $("head").load("/resources/snippets/head.html", () => {
    $("header").load("/resources/snippets/header.html", () => {
      $("footer").load("/resources/snippets/footer.html", () => {
        $("body").fadeIn(500);
      });
    });
  });

  if (!load[1]) $.getScript("/resources/js/" + load[0] + ".js");
  if (!load[2]) {
    $("body").append(
      '<link rel="stylesheet" href="/resources/styles/' + load[0] + '.css">'
    );
  }
});

// global functions
function scroll(id) {
  for (let i = 0; i <= 1200; i += 100) {
    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById(id).offsetTop,
        behavior: "smooth",
      });
    }, i);
  }
}
