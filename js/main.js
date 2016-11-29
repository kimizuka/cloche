((win, doc, $) => {

  "use strict";

  var audio     = new Audio("./audio/bgm.mp3"),
      wrapper   = doc.getElementById("wrapper"),
      btn       = doc.getElementById("btn");

  win.addEventListener("devicemotion", (evt) => {
    var z = Math.abs(evt.accelerationIncludingGravity.z);

    if (z < 9.8) {
      if (btn.checked) {
        audio.play();
      }
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, false);

  doc.body.addEventListener("touchmove", (evt) => {
    evt.preventDefault();
  }, true);

  btn.addEventListener("change", () => {
    if (!btn.checked) {
      audio.pause();
      audio.currentTime = 0;
      canvas.stop();
    }
  }, false);

  wrapper.addEventListener("click", handleClick, false);

  function handleClick() {
    audio.play();
    audio.pause();
    wrapper.removeEventListener("click", handleClick, false);
  }

})(window, document, jQuery);