/**
 * CAI12A Mobile V4 — 手機覆寫 JS（≤767px）
 *
 * 載入順序（本機測試 / 正式上線時）：
 *   1. eg-v2-20260835.css
 *   2. eg-v2-mobile-v4.css
 *   3. eg-v2-mobile-v4.js   ← 必須在 base 之前（攔截 scroll / resize）
 *   4. eg-v2-20260835.js
 *
 * Desktop（≥768px）：bootstrap 不動作，init 只標記 class 不影響版面。
 */
(function (global) {
  'use strict';

  var MQ = '(max-width: 767px)';
  var ROOT_ID = 'eg-experience';
  var V4_CLASS = 'eg-mobile-v4';

  function isMobileV4() {
    return global.matchMedia && global.matchMedia(MQ).matches;
  }

  function markAllowed(fn) {
    fn.__egV4Allowed = true;
    return fn;
  }

  /* ---------- Phase A：在 base JS 之前攔截 window scroll / resize ---------- */
  if (!global.__EG_V4_BOOT__) {
    global.__EG_V4_BOOT__ = true;

    if (isMobileV4()) {
      var nativeAdd = EventTarget.prototype.addEventListener;
      var blocked = { scroll: [], resize: [] };

      EventTarget.prototype.addEventListener = function (type, listener, options) {
        if (this === global && (type === 'scroll' || type === 'resize')) {
          if (!listener || !listener.__egV4Allowed) {
            blocked[type].push(listener);
            return;
          }
        }
        return nativeAdd.call(this, type, listener, options);
      };

      global.__EG_V4_BLOCKED = blocked;
    }
  }

  /* ---------- Phase B：DOM 就緒後套用 V4 靜態終態 ---------- */
  function applyStaticStates(root) {
    var nilScene = document.getElementById('eg-nile');
    if (nilScene) {
      nilScene.style.setProperty('--nil-draw', '1');
      nilScene.style.setProperty('--nil-belt', '1');
      nilScene.style.setProperty('--nil-green', '1');
      nilScene.setAttribute('data-nil-stage', '3');
      Array.prototype.forEach.call(nilScene.querySelectorAll('.nil__life'), function (el) {
        el.classList.add('is-on');
      });
    }

    var njy = document.getElementById('eg-nile-journey');
    if (njy) njy.setAttribute('data-njy-stage', '3');

    var gods = document.getElementById('eg-gods');
    if (gods) {
      gods.setAttribute('data-gods', 'isis');
      gods.setAttribute('data-gods-lit', 'on');
    }

    var rs = document.getElementById('eg-red-sea');
    if (rs) {
      rs.setAttribute('data-rs-stage', '3');
      rs.classList.add('is-coda');
    }

    var tl = document.getElementById('eg-timeline');
    if (tl) {
      tl.setAttribute('data-tl-stage', '3');
      tl.style.setProperty('--tl-draw', '1');
      tl.style.setProperty('--tl-brand', '1');
      tl.style.setProperty('--tl-fade', '1');
      tl.classList.add('is-journey', 'is-coda', 'is-cta');
      Array.prototype.forEach.call(tl.querySelectorAll('.tl__node'), function (n) {
        n.classList.add('is-on');
        if (n.getAttribute('data-tl-era')) n.classList.add('is-era');
      });
    }

    var pyr = document.getElementById('eg-pyramids');
    if (pyr) {
      pyr.setAttribute('data-pyr-stage', '4');
      var coda = pyr.querySelector('[data-pyr-coda]');
      if (coda) coda.classList.add('is-on');
      Array.prototype.forEach.call(pyr.querySelectorAll('[data-pyr-name]'), function (el) {
        el.classList.toggle('is-on', el.getAttribute('data-pyr-name') === 'giza');
      });
      Array.prototype.forEach.call(pyr.querySelectorAll('[data-pyr-svg]'), function (el) {
        var k = el.getAttribute('data-pyr-svg');
        var on = k === 'giza' || k === 'companions';
        el.classList.toggle('is-on', on);
        if (k === 'giza') el.classList.add('is-shrink');
      });
    }

    var abu = document.getElementById('eg-abusimbel');
    if (abu) {
      abu.setAttribute('data-abu-stage', '5');
      abu.style.setProperty('--abu-light', '0.82');
      abu.style.setProperty('--abu-reveal', '1');
      abu.style.setProperty('--abu-zoom', '0');
    }

    Array.prototype.forEach.call(root.querySelectorAll('.scene'), function (scene) {
      scene.classList.add('is-in');
      scene.classList.remove('is-out');
    });
  }

  function heroPosterOnly() {
    var hero = document.getElementById('eg-gate');
    var frame = document.getElementById('eg-hero-video');
    var stage = frame && frame.parentNode;
    if (!hero) return;
    if (frame) {
      frame.removeAttribute('src');
      frame.style.display = 'none';
      frame.style.width = '';
      frame.style.height = '';
    }
    if (stage) stage.style.opacity = '1';
    hero.setAttribute('data-hero-state', 'poster');
  }

  function measureSafeOnce(root) {
    var vh = global.innerHeight || 0;
    if (!vh) return;
    var top = 0;
    var bot = vh;
    var vw = document.documentElement.clientWidth;
    var probe = document.querySelectorAll(
      'body > *, body > * > *, [class*="fixed"], header, nav'
    );
    var bars = [];
    for (var i = 0; i < probe.length && bars.length < 12; i++) {
      var el = probe[i];
      if (el === root || root.contains(el)) continue;
      var cs = global.getComputedStyle(el);
      if (cs.position !== 'fixed') continue;
      if (cs.display === 'none' || parseFloat(cs.opacity) < 0.5) continue;
      var r = el.getBoundingClientRect();
      if (r.width < vw * 0.55 || r.height < 8 || r.height > vh * 0.32) continue;
      bars.push({ top: r.top, bottom: r.bottom });
    }
    bars.sort(function (a, b) { return a.top - b.top; });
    for (var j = 0; j < bars.length; j++) {
      if (bars[j].top <= top + 2 && bars[j].bottom > top) top = bars[j].bottom;
    }
    for (var k = bars.length - 1; k >= 0; k--) {
      if (bars[k].bottom >= bot - 2 && bars[k].top < bot) bot = bars[k].top;
    }
    root.style.setProperty('--eg-safe-top', Math.round(top) + 'px');
    root.style.setProperty('--eg-safe-bot', Math.round(vh - bot) + 'px');
    root.style.setProperty('--eg-site-dock', Math.round(vh - bot) + 'px');
  }

  function init() {
    var root = document.getElementById(ROOT_ID);
    if (!root) return;

    root.classList.add(V4_CLASS);

    if (!isMobileV4()) return;

    heroPosterOnly();
    applyStaticStates(root);
    measureSafeOnce(root);

    global.setTimeout(heroPosterOnly, 0);
    global.setTimeout(heroPosterOnly, 100);
    global.setTimeout(heroPosterOnly, 2600);

    if (root.__egV4Bound) return;
    root.__egV4Bound = true;

    markAllowed(function onOrient() {
      measureSafeOnce(root);
    });
    global.addEventListener('orientationchange', onOrient, { passive: true });
    global.addEventListener('resize', markAllowed(function onResize() {
      if (global.matchMedia(MQ).matches) measureSafeOnce(root);
    }), { passive: true });

    global.__EG_V4_READY__ = true;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  }
  global.addEventListener('load', init);
  /* 等 base.js（下一個 script）跑完再收尾 */
  global.setTimeout(init, 0);
  global.setTimeout(init, 50);
  global.setTimeout(init, 2800);
})(window);
