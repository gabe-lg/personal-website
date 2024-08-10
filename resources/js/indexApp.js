(() => {
  "use strict";

  angular
    .module("IndexApp", [])
    .controller("ContentController", ContentController)
    .directive("tile", TileDirective);

  function ContentController() {
    const cc = this;

    cc.tiles = ["Projects", "Music", "Travels"];
  }

  function TileDirective() {
    return {
      templateUrl: "/resources/snippets/index-tile-snippet.html",
      scope: { tiles: "<" },
    };
  }
})();
