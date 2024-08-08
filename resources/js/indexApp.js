(() => {
  "use strict";

  angular
    .module("IndexApp", [])
    .controller("ContentController", ContentController);
  
  function ContentController() {
    const cc = this;

    cc.tiles = ["Projects", "Music", "Travels"];
  }
})();
