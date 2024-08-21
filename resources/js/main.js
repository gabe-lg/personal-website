$(() => {
  main.loadAllResources();

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

main.copyrightText =
  "\u00A9 2024 Gabriel Leung. All rights reserved.<br>This work is protected by copyright law. Permission is explicitly not granted to any individual or entity, except the copyright holder, to utilize, modify, or distribute this software and its accompanying documentation files without explicit written consent from the copyright holder.";

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

main.loadResource = (selector, url) => {
  return new Promise((resolve, reject) => {
    $(selector).load(url, (_, status) => {
      if (status === "error") {
        reject(new Error(`Failed to load ${url}`));
      } else {
        resolve();
      }
    });
  });
};

main.loadAllResources = async () => {
  try {
    await main.loadResource("head", "/resources/snippets/head.html");
    await main.loadResource("header", "/resources/snippets/header.html");
    await main.loadResource("footer", "/resources/snippets/footer.html");
    await main.loadResource(
      "#header-perm",
      "/resources/snippets/header-perm-snippet.html"
    );
    await main.loadResource(
      ".header-menu",
      "/resources/snippets/header-menu-snippet.html"
    );
    await main.loadResource(
      ".header-menu-perm",
      "/resources/snippets/header-menu-snippet.html"
    );
    $("#copyright").html(main.copyrightText);
    $("body").fadeIn(500);
    main.logWelcomeText();
  } catch (error) {
    console.error(error);
  }
};

main.logWelcomeText = () => {
  const ascii = `
 __      __          ___                                      __     
/\\ \\  __/\\ \\        /\\_ \\                                    /\\ \\    
\\ \\ \\/\\ \\ \\ \\     __\\//\\ \\     ___    ___     ___ ___      __\\ \\ \\   
 \\ \\ \\ \\ \\ \\ \\  /'__\`\\\\ \\ \\   /'___\\ / __\`\\ /' __\` __\`\\  /'__\`\\ \\ \\  
  \\ \\ \\_/ \\_\\ \\/\\  __/ \\_\\ \\_/\\ \\__//\\ \\L\\ \\/\\ \\/\\ \\/\\ \\/\\  __/\\ \\_\\ 
   \\ \`\\___x___/\\ \\____\\/\\____\\ \\____\\ \\____/\\ \\_\\ \\_\\ \\_\\ \\____\\\\/\\_\\
    '\\/__//__/  \\/____/\\/____/\\/____/\\/___/  \\/_/\\/_/\\/_/\\/____/ \\/_/
`;
  console.log(
    "%c" +
      ascii +
      "\n%cHi devs, thanks for visiting my site!\nFind the source code at " +
      "https://github.com/gabe-lg/personal-website. \n\n" +
      "%cCopyright notice:\n%c" +
      main.copyrightText.replace("<br>", "\n"),
    "font-weight: bold",
    "font-size: 16px",
    "font-weight: bold; font-size: 20px",
    "font-size: 16px"
  );
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
