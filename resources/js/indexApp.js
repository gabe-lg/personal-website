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

    csc.contactObject = function (name, content, link) {
      this.name = name;
      this.content = content;
      this.link = link;
    };

    csc.contacts = [
      new csc.contactObject("location", "Ithaca, NY"),
      new csc.contactObject("time"),
      new csc.contactObject(
        "linkedin",
        "gabriel-lg",
        "https://linkedin.com/in/gabriel-lg"
      ),
      new csc.contactObject(
        "instagram",
        "hey.its.gabe",
        "https://instagram.com/hey.its.gabee"
      ),
      new csc.contactObject("github", "gabe-lg", "https://github.com/gabe-lg"),
      new csc.contactObject(
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
