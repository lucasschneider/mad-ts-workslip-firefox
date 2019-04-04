(function(){
  'use strict';
  document.addEventListener("keydown", function (e) {
    if (e.keyCode === 59 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      browser.runtime.sendMessage({"key": "printWorkslip"});
    }
  }, false);
})();
