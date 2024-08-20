$(() => {
  $("head").load("/resources/snippets/head.html", () => {
    $("header").load("/resources/snippets/header.html", () => {
      $("footer").load("/resources/snippets/footer.html", () => {
        $("#header-perm").load(
          "/resources/snippets/header-perm-snippet.html",
          () => {
            $(".header-menu").load(
              "/resources/snippets/header-menu-snippet.html",
              () => {
                $(".header-menu-perm").load(
                  "/resources/snippets/header-menu-snippet.html",
                  () => $("body").fadeIn(500)
                );
              }
            );
          }
        );
      });
    });
  });

  if (!load[0]) load[0] = title.toLowerCase().replaceAll(" ", "-");
  if (!load[1]) $.getScript("/resources/js/" + load[0] + ".js");
  if (!load[2]) {
    $("body").append(
      '<link rel="stylesheet" href="/resources/styles/' + load[0] + '.css">'
    );
  }

  main.intersect("header", 0, entry => {
    try {
      const elem = document.getElementById("header-perm");
      if (entry.isIntersecting) {
        elem.classList.remove("show");
        elem.classList.add("hide");
      } else {
        elem.classList.add("show");
        elem.classList.remove("hide");
      }
    } catch {}
  });
});

/* GLOBAL FUNCTIONS */
const main = {};

/**
 * Shows the cover image if the html page provides one, scrolls to the first
 *  element corresponding to `selector`, then hides the cover.
 *
 * @param {string} selector
 */
main.goToElement = selector => {
  $(".cover").fadeIn();
  setTimeout(() => main.scroll(selector), 500);
  setTimeout(() => $(".cover").fadeOut(), 1000);
};

/**
 * Sets up a new IntersectionObserver that runs `cb()` if the intersection
 *  between the window and the first element corresponding to `selector`
 *  reaches `threshold`.
 *
 * @param {string} selector
 * @param {number} threshold
 * @param {Function} cb
 */
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

/**
 * A more complex function that sets up a new IntersectionObserver (see
 *  main.intersect).
 *
 * @param {string} selector
 * @param {number} threshold
 * @param {Function} funcIf Optional
 * @param {Function} funcElse Optional
 * @param {Function} funcTimeout Optional
 */
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

/**
 * Scrolls to the first element corresponding to `selector`.
 *
 * @param {string} selector
 */
main.scroll = selector => {
  window.scrollTo({
    top: document.querySelector(selector).offsetTop,
    behavior: "smooth",
  });
};

/* FOOTER BUTTONS */
function topButton() {
  main.goToElement("body");
}
