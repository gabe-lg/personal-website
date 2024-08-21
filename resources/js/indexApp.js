(() => {
  "use strict";

  angular
    .module("IndexApp", [])
    .controller("ResumeController", ResumeController)
    .controller("ContactsController", ContactsController)
    .controller("ContentController", ContentController)
    .directive("resume", ResumeDirective)
    .directive("contact", ContactDirective)
    .directive("tile", TileDirective);

  function ResumeController() {
    const rc = this;

    rc.show = false;
    rc.button = "Show resume";
    rc.onClick = () => {
      rc.show = !rc.show;
      rc.button = rc.show ? "Hide resume" : "Show resume";
      console.log("onclick");
    };
  }

  function ContactsController() {
    const csc = this;

    csc.ContactObject = function (name, content, link) {
      this.name = name;
      this.content = content;
      this.link = link;
    };

    csc.contacts = [
      new csc.ContactObject("location", "Ithaca, NY"),
      new csc.ContactObject("time"),
      new csc.ContactObject(
        "linkedin",
        "gabriel-lg",
        "https://linkedin.com/in/gabriel-lg"
      ),
      new csc.ContactObject(
        "instagram",
        "hey.its.gabee",
        "https://instagram.com/hey.its.gabee"
      ),
      new csc.ContactObject("github", "gabe-lg", "https://github.com/gabe-lg"),
      new csc.ContactObject(
        "email",
        "mail@gabriel-lg.com",
        "mailto:mail@gabriel-lg.com"
      ),
    ];
  }

  function ContentController() {
    const cc = this;

    cc.tiles = ["Projects", "Music", "Travels"];
  }

  function ResumeDirective() {
    return {
      templateUrl: "/resources/snippets/index-resume-snippet.html",
      scope: { show: "<", button: "<", onClick: "<" },
    };
  }

  function ContactDirective() {
    return {
      templateUrl: "/resources/snippets/index-contacts-snippet.html",
      scope: { contacts: "<" },
    };
  }

  function TileDirective() {
    return {
      templateUrl: "/resources/snippets/index-tile-snippet.html",
      scope: { tiles: "<" },
    };
  }
})();
