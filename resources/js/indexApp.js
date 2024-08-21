(() => {
  "use strict";

  angular
    .module("IndexApp", [])
    .controller("ContactsController", ContactsController)
    .controller("ContentController", ContentController)
    .directive("contact", ContactDirective)
    .directive("tile", TileDirective);

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
