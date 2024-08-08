(() => {
  "use strict";

  angular
    .module("HeaderApp", [])
    .controller("LogoController", LogoController)
    .service("HeaderService", HeaderService);

  LogoController.$inject = ["HeaderService"];
  function LogoController(hs) {
    const lc = this;
    
    lc.logos = [
      new hs.Logo(
        "https://instagram.com/hey.its.gabee",
        "instagram.png",
        "Instagram"
      ),
      new hs.Logo(
        "https://linkedin.com/in/gabriel-lg",
        "linkedin.png",
        "Linkedin"
      ),
      new hs.Logo("https://github.com/gabe-lg", "github.png", "Github"),
      new hs.Logo("mailto:mail@gabriel-lg.com", "email.png", "Email"),
    ];
  }

  function HeaderService() {
    const hs = this;

    hs.Logo = function (href, src, alt) {
      this.href = href;
      this.src = src;
      this.alt = alt;
    };
  }
})();
