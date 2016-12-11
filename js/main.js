((win, doc) => {

  // touchmoveを無効にする
  // ダブルタップを無効にする

  "use strict";

  var INTERVAL = 200,
      tapFlag  = false,
      timer;

  doc.body.addEventListener("touchmove", (evt) => {
    evt.preventDefault();
  }, true);

  doc.body.addEventListener("touchstart", (evt) => {
    if (tapFlag) {
      evt.preventDefault();
    }
  }, true);

  doc.body.addEventListener("touchend", (evt) => {
    tapFlag = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      tapFlag = false;
    }, INTERVAL);
  }, true);
    
})(window, document);

((win, doc) => {

  "use strict";

  var btnReload  = doc.getElementById("btnReload"),
      btnClear   = doc.getElementById("btnClear");

  btnReload.addEventListener("click", () => {
    location.search = "date=" + Date.now();
  }, false);

  btnClear.addEventListener("click", () => {
    try {
      localStorage.clear();
    } catch(e) {

    }
  }, false);

})(window, document);

((win, doc) => {

  // 傾きに応じて音楽を再生する

  "use strict";

  var audio     = new Audio("./audio/bgm.mp3"),
      wrapper   = doc.getElementById("wrapper"),
      btnToggle = doc.getElementById("btnToggle");

  win.addEventListener("devicemotion", (evt) => {
    var LIMIT = 8,
        z     = Math.abs(evt.accelerationIncludingGravity.z);

    if (z < LIMIT) {
      if (btnToggle.checked) {
        audio.play();
      }
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, false);

  btnToggle.addEventListener("change", () => {
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

})(window, document);