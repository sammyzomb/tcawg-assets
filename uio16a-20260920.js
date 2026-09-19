(function () {
  function prepPrintImages(root) {
    if (!root) return;
    var imgs = root.querySelectorAll("img");
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      img.loading = "eager";
      if (img.complete && img.naturalWidth > 0) continue;
      var src = img.getAttribute("src") || img.currentSrc;
      if (!src) continue;
      img.src = src;
    }
  }
  function onPrint() {
    prepPrintImages(document.getElementById("uio-r"));
    prepPrintImages(document.getElementById("uio-m"));
  }
  window.addEventListener("beforeprint", onPrint);
  var mql = window.matchMedia && window.matchMedia("print");
  if (mql) {
    if (mql.addEventListener) mql.addEventListener("change", function (e) { if (e.matches) onPrint(); });
    else if (mql.addListener) mql.addListener(function (e) { if (e.matches) onPrint(); });
  }
})();

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

  function attachScrollVideo(root, containerSel, iframeSel) {
    var container = root.querySelector(containerSel);
    var iframe = root.querySelector(iframeSel);
    if (!container || !iframe) return;

    var src = iframe.getAttribute("data-vimeo-src");
    if (!src) return;
    if (src.indexOf("autoplay=1") === -1) {
      src = src.indexOf("?") >= 0 ? src + "&autoplay=1" : src + "?autoplay=1";
    }

    var playing = false;

    function playVideo() {
      if (playing && iframe.src) return;
      playing = true;
      iframe.src = src;
    }

    function pauseVideo() {
      if (!playing) return;
      playing = false;
      iframe.removeAttribute("src");
    }

    function syncVisibility(isVisible) {
      if (isVisible) playVideo();
      else pauseVideo();
    }

    function isNearViewport() {
      var rect = container.getBoundingClientRect();
      var vh = window.innerHeight || document.documentElement.clientHeight;
      return rect.bottom > 0 && rect.top < vh * 0.92;
    }

    if (typeof IntersectionObserver === "undefined") {
      playVideo();
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          syncVisibility(entry.isIntersecting);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px 5% 0px" }
    );

    observer.observe(container);
    syncVisibility(isNearViewport());
    window.addEventListener("resize", function () {
      syncVisibility(isNearViewport());
    });
  }

  var desk = document.getElementById("uio-r");
  if (desk) attachScrollVideo(desk, ".closing-video", ".closing-vimeo");
  var mob = document.getElementById("uio-m");
  if (mob) attachScrollVideo(mob, ".om-close-video", ".om-close-vimeo");
})();

(function () {
  var quick = document.getElementById("uio-quick");
  if (!quick) return;
  var docEl = document.documentElement;
  var quickToggle = quick.querySelector(".uio-quick__toggle");
  var quickTimer;
  var toastEl;

  function measureSiteDock() {
    var vh = window.innerHeight;
    var dock = 0;
    var nodes = document.querySelectorAll("#index-float-btn,[class*='float'],[id*='float']");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el === quick || quick.contains(el)) continue;
      var st = getComputedStyle(el);
      if (st.position !== "fixed" && st.position !== "sticky") continue;
      if (st.display === "none" || st.visibility === "hidden") continue;
      var r = el.getBoundingClientRect();
      if (r.height < 8 || r.width < 8) continue;
      if (r.top < vh && r.bottom > vh - 140) dock = Math.max(dock, vh - r.top);
    }
    docEl.style.setProperty("--uio-site-dock", dock + "px");
  }

  function closeQuick() {
    clearTimeout(quickTimer);
    quick.classList.remove("is-open");
    if (quickToggle) quickToggle.setAttribute("aria-expanded", "false");
  }

  function armAutoClose() {
    clearTimeout(quickTimer);
    if (quick.classList.contains("is-open")) quickTimer = setTimeout(closeQuick, 3600);
  }

  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "uio-toast";
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("is-on");
    clearTimeout(toastEl.t);
    toastEl.t = setTimeout(function () { toastEl.classList.remove("is-on"); }, 1900);
  }

  measureSiteDock();
  window.addEventListener("resize", measureSiteDock, { passive: true });
  window.addEventListener("scroll", measureSiteDock, { passive: true });

  if (quickToggle) {
    quickToggle.addEventListener("click", function () {
      var open = quick.classList.toggle("is-open");
      quickToggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) armAutoClose(); else clearTimeout(quickTimer);
    });
  }

  quick.addEventListener("click", function (e) {
    if (e.target.closest("a")) closeQuick();
    else armAutoClose();
  });

  var shareBtn = quick.querySelector(".uio-quick__share");
  if (shareBtn) {
    shareBtn.addEventListener("click", function () {
      closeQuick();
      function fallback() {
        var url = location.href;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(
            function () { toast("已複製此頁連結"); },
            function () { window.prompt("複製此頁連結", url); }
          );
        } else {
          window.prompt("複製此頁連結", url);
        }
      }
      if (navigator.share) {
        try {
          navigator.share({ title: document.title, url: location.href })["catch"](function (err) {
            if (!err || err.name !== "AbortError") fallback();
          });
        } catch (e) {
          fallback();
        }
      } else {
        fallback();
      }
    });
  }

  var topBtn = quick.querySelector(".uio-quick__top");
  if (topBtn) {
    topBtn.addEventListener("click", function () {
      closeQuick();
      window.scrollTo(0, 0);
    });
  }
})();
