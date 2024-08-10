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
const main = {};

main.goToElement = id => {
  $(".cover").fadeIn();
  setTimeout(() => main.scroll(id), 500);
  setTimeout(() => $(".cover").fadeOut(), 1000);
};

main.intersect = (selector, threshold, cb) => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: threshold,
  };

  function callback(entries) {
    entries.forEach(entry => cb(entry));
  }

  const observer = new IntersectionObserver(callback, options);

  document
    .querySelectorAll(selector)
    .forEach(element => observer.observe(element));
};

main.intersectFadeInOut = (
  selector,
  threshold,
  funcIf,
  funcElse,
  funcTimeout
) => {
  main.intersect(selector, threshold, entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      entry.target.classList.remove("default");
      if (funcIf != undefined) funcIf(entry);
    } else {
      entry.target.classList.remove("active");
      entry.target.classList.add("inactive");
      if (funcElse != undefined) funcElse(entry);

      // hide after .5s
      setTimeout(() => {
        entry.target.classList.remove("inactive");
        entry.target.classList.add("default");
        if (funcTimeout != undefined) funcTimeout(entry);
      }, 500);
    }
  });
};

main.scroll = id => {
  window.scrollTo({
    top: document.querySelector(id).offsetTop,
    behavior: "smooth",
  });
};

function topButton() {
  main.goToElement("body");
}
