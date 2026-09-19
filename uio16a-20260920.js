(function () {
  function syncBleed(el) {
    if (!el) return;
    el.style.setProperty("--uio-vw", document.documentElement.clientWidth + "px");
  }
  function syncAllBleed() {
    syncBleed(document.getElementById("uio-r"));
    syncBleed(document.getElementById("uio-m"));
  }
  syncAllBleed();
  window.addEventListener("resize", syncAllBleed);
  window.addEventListener("orientationchange", syncAllBleed);
})();

(function () {
  var root = document.getElementById("uio-r");
  if (!root) return;
  var iframe = root.querySelector(".hero-vimeo");
  var heroIn = root.querySelector(".hero-in");
  if (!iframe || !heroIn) return;

  var moveAt = parseFloat(heroIn.getAttribute("data-move-at") || "5.8", 10);
  var docked = false;

  function setDock(on) {
    if (on === docked) return;
    docked = on;
    heroIn.classList.toggle("hero-in--dock", on);
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setDock(true);
    return;
  }

  function syncDock(seconds) {
    setDock(seconds >= moveAt);
  }

  if (typeof Vimeo === "undefined") {
    window.setTimeout(function () { setDock(true); }, moveAt * 1000);
    return;
  }

  var player = new Vimeo.Player(iframe);
  player.on("timeupdate", function (data) {
    syncDock(data.seconds);
  });
  player.on("seeked", function (data) {
    syncDock(data.seconds);
  });
})();

(function () {
  var mobileRoot = document.getElementById("uio-m");
  if (!mobileRoot) return;
  var iframe = mobileRoot.querySelector(".om-hero-vimeo");
  var heroIn = mobileRoot.querySelector(".om-hero-in");
  if (!iframe || !heroIn) return;

  var fadeBefore = parseFloat(heroIn.getAttribute("data-fade-before") || "20", 10);
  var fadeDuration = parseFloat(heroIn.getAttribute("data-fade-duration") || "10", 10);
  var duration = 0;
  var player = null;
  var mobileMq = window.matchMedia("(max-width: 767px)");

  function syncHeroTextFade(seconds) {
    if (!duration) {
      heroIn.style.opacity = "1";
      return;
    }
    var fadeStart = Math.max(0, duration - fadeBefore);
    if (seconds < fadeStart) {
      heroIn.style.opacity = "1";
      return;
    }
    if (seconds >= fadeStart + fadeDuration) {
      heroIn.style.opacity = "0";
      return;
    }
    var progress = (seconds - fadeStart) / fadeDuration;
    heroIn.style.opacity = String(Math.max(0, 1 - progress));
  }

  function bindPlayer(vimeoPlayer) {
    vimeoPlayer.getDuration().then(function (d) {
      duration = d;
    });
    vimeoPlayer.on("timeupdate", function (data) {
      if (!duration) {
        vimeoPlayer.getDuration().then(function (d) {
          duration = d;
          syncHeroTextFade(data.seconds);
        });
        return;
      }
      syncHeroTextFade(data.seconds);
    });
    vimeoPlayer.on("seeked", function (data) {
      syncHeroTextFade(data.seconds);
    });
    vimeoPlayer.on("loaded", function () {
      vimeoPlayer.getDuration().then(function (d) {
        duration = d;
      });
    });
    vimeoPlayer.play().catch(function () {});
  }

  function setupMobileHeroTextFade() {
    if (!mobileMq.matches || typeof Vimeo === "undefined") return;
    if (player) return;
    player = new Vimeo.Player(iframe);
    bindPlayer(player);
  }

  if (typeof mobileMq.addEventListener === "function") {
    mobileMq.addEventListener("change", setupMobileHeroTextFade);
  } else if (typeof mobileMq.addListener === "function") {
    mobileMq.addListener(setupMobileHeroTextFade);
  }

  setupMobileHeroTextFade();
})();

(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (typeof IntersectionObserver === "undefined") return;

  function attachScrollVideo(root, containerSel, iframeSel) {
    var container = root.querySelector(containerSel);
    var iframe = root.querySelector(iframeSel);
    if (!container || !iframe) return;

    var src = iframe.getAttribute("data-vimeo-src");
    if (!src) return;

    var player = null;
    var loaded = false;

    function ensurePlayer() {
      if (player) return player.ready();
      if (!loaded) {
        iframe.src = src;
        loaded = true;
      }
      if (typeof Vimeo === "undefined") return Promise.reject();
      player = new Vimeo.Player(iframe);
      return player.ready();
    }

    function playFromStart() {
      ensurePlayer()
        .then(function (p) {
          return p.setCurrentTime(0).catch(function () {}).then(function () {
            return p.play();
          });
        })
        .catch(function () {});
    }

    function pauseVideo() {
      if (!player) return;
      player.pause().catch(function () {});
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            playFromStart();
          } else if (loaded) {
            pauseVideo();
          }
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(container);
  }

  var desk = document.getElementById("uio-r");
  if (desk) attachScrollVideo(desk, ".closing-video", ".closing-vimeo");
  var mob = document.getElementById("uio-m");
  if (mob) attachScrollVideo(mob, ".om-close-video", ".om-close-vimeo");
})();
