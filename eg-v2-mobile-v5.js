/**
 * CAI12A Mobile V5 — IO 輕動畫（≤767px）
 * 載入順序：20260835.css → mobile-v5.css → mobile-v5.js → 20260835.js
 * Desktop：bootstrap 不攔截；init 只加 class，不影響版面。
 */
(function (global) {
  'use strict';

  var MQ = '(max-width: 767px)';
  var ROOT_ID = 'eg-experience';
  var V5 = 'eg-mobile-v5';
  var REDUCE = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function isMobileV5() {
    return global.matchMedia && global.matchMedia(MQ).matches;
  }

  function markAllowed(fn) {
    fn.__egV5Allowed = true;
    return fn;
  }

  /* ---------- 攔截 base 的 window scroll（保留 resize 給 bleed / safe） ---------- */
  if (!global.__EG_V5_BOOT__) {
    global.__EG_V5_BOOT__ = true;
    if (isMobileV5()) {
      var nativeAdd = EventTarget.prototype.addEventListener;
      global.__EG_V5_BLOCKED = { scroll: [] };
      EventTarget.prototype.addEventListener = function (type, listener, options) {
        if (this === global && type === 'scroll') {
          if (!listener || !listener.__egV5Allowed) {
            global.__EG_V5_BLOCKED.scroll.push(listener);
            return;
          }
        }
        return nativeAdd.call(this, type, listener, options);
      };
    }
  }

  function onceIO(el, cb, opts) {
    if (!el || !('IntersectionObserver' in global)) {
      cb();
      return null;
    }
    var opt = opts || { threshold: 0.18, rootMargin: '0px 0px -8% 0px' };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        cb(entry);
        io.unobserve(entry.target);
      });
    }, opt);
    io.observe(el);
    return io;
  }

  function markAnim(root) {
    var sel = [
      '.nil__head', '.nil__coda', '.nil__seo', '.pyr__head',
      '.njy__head', '.njy__seo', '.gods__head', '.gods__lede', '.gods__door',
      '.feature__head', '.feature__body', '.mus-strip', '.mus-note',
      '.abu__kicker', '.abu__copy', '.abu__coda', '.abu__seo',
      '.rs__head', '.rs__coda', '.rs__seo',
      '.tl__head', '.tl__rail', '.tl__brand', '.tl__cta', '.tl__seo', '.wall'
    ].join(',');
    Array.prototype.forEach.call(root.querySelectorAll(sel), function (el) {
      el.classList.add('eg-v5-anim');
    });
  }

  function reveal(el, cls) {
    if (!el) return;
    el.classList.add('eg-v5-anim', cls || 'eg-v5-in');
  }

  function measureSafe(root) {
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

  function setupNavIO(root) {
    var tracks = root.querySelectorAll('.scene-track');
    var fill = document.getElementById('eg-story-progress-fill');
    var marker = document.getElementById('eg-story-progress-marker');
    var links = root.querySelectorAll('[data-scene]');
    var active = '';

    function setActive(id) {
      if (id === active) return;
      active = id;
      links.forEach(function (a) {
        var on = a.getAttribute('data-scene') === id;
        a.classList.toggle('is-current', on);
      });
    }

    function updateProgress() {
      var vh = global.innerHeight || 1;
      var max = Math.max(1, document.documentElement.scrollHeight - vh);
      var y = global.scrollY || global.pageYOffset || 0;
      var p = Math.max(0, Math.min(1, y / max));
      root.style.setProperty('--progress', String(p));
      if (fill) fill.style.setProperty('--progress', String(p));
      if (marker) marker.style.setProperty('--progress', String(p));
    }

    tracks.forEach(function (track) {
      var id = track.getAttribute('data-scene');
      onceIO(track, function () {
        if (id) setActive(id);
      }, { threshold: 0.35, rootMargin: '-10% 0px -45% 0px' });
    });

    markAllowed(function onScrollLite() {
      updateProgress();
    });
    global.addEventListener('scroll', onScrollLite, { passive: true });
    updateProgress();
  }

  function setupGate(root) {
    var hero = document.getElementById('eg-gate');
    if (!hero) return;
    onceIO(hero, function () {
      reveal(hero.querySelector('.hero__frame'));
    });
    /* Hero Vimeo：交給 base setupHero；V5 不強制 poster */
  }

  function setupNile() {
    var scene = document.getElementById('eg-nile');
    if (!scene) return;
    onceIO(scene, function () {
      scene.classList.add('eg-v5-nil-live');
      scene.setAttribute('data-nil-stage', '3');
      scene.style.setProperty('--nil-draw', '1');
      scene.style.setProperty('--nil-belt', '1');
      scene.style.setProperty('--nil-green', '1');
      Array.prototype.forEach.call(scene.querySelectorAll('.nil__life'), function (el, i) {
        if (REDUCE) {
          el.classList.add('is-on');
          return;
        }
        global.setTimeout(function () {
          el.classList.add('is-on');
        }, 80 + i * 120);
      });
      reveal(scene.querySelector('.nil__head'));
      reveal(scene.querySelector('.nil__coda'));
      reveal(scene.querySelector('.nil__seo'));
    });
  }

  function setupPyramids() {
    var scene = document.getElementById('eg-pyramids');
    if (!scene) return;
    var names = scene.querySelectorAll('[data-pyr-name]');
    var svgs = scene.querySelectorAll('[data-pyr-svg]');
    var era = scene.querySelector('[data-pyr-era]');
    var coda = scene.querySelector('[data-pyr-coda]');
    var beats = scene.querySelectorAll('.eg-v5-pyr-beat');

    function setStage(n) {
      scene.setAttribute('data-pyr-stage', String(n));
      var key = n === 1 ? 'step' : n === 2 ? 'red' : 'giza';
      names.forEach(function (el) {
        el.classList.toggle('is-on', el.getAttribute('data-pyr-name') === key || (n >= 4 && el.getAttribute('data-pyr-name') === 'giza'));
      });
      svgs.forEach(function (el) {
        var k = el.getAttribute('data-pyr-svg');
        var on = (n === 1 && k === 'step') ||
          (n === 2 && (k === 'step' || k === 'red')) ||
          (n >= 3 && (k === 'giza' || (n >= 4 && k === 'companions')));
        el.classList.toggle('is-on', on);
        el.classList.toggle('is-shrink', n >= 4 && k === 'giza');
      });
      if (era) era.classList.toggle('is-on', n === 1);
      if (coda) coda.classList.toggle('is-on', n >= 4);
    }

    if (!beats.length) {
      setStage(4);
      return;
    }
    beats.forEach(function (beat, idx) {
      onceIO(beat, function () {
        setStage(idx + 1);
        reveal(beat);
      }, { threshold: 0.5, rootMargin: '0px 0px -5% 0px' });
    });
    onceIO(scene, function () {
      reveal(scene.querySelector('.pyr__head'));
      setStage(1);
    });
  }

  function setupNileJourney() {
    var scene = document.getElementById('eg-nile-journey');
    if (!scene) return;
    onceIO(scene, function () {
      scene.setAttribute('data-njy-stage', '3');
      scene.style.setProperty('--njy-life', '1');
      scene.style.setProperty('--njy-far', '1');
      ['.njy__line--1', '.njy__line--2', '.njy__line--3'].forEach(function (sel, i) {
        var el = scene.querySelector(sel);
        if (!el) return;
        if (REDUCE) {
          reveal(el);
          return;
        }
        global.setTimeout(function () { reveal(el); }, 200 + i * 380);
      });
      reveal(scene.querySelector('.njy__head'));
      reveal(scene.querySelector('.njy__seo'));
    });
  }

  function setupGods() {
    var scene = document.getElementById('eg-gods');
    if (!scene) return;
    var doors = Array.prototype.slice.call(scene.querySelectorAll('.gods__door'));
    var notes = {
      isis: document.getElementById('eg-gods-note-isis'),
      horus: document.getElementById('eg-gods-note-horus'),
      sobek: document.getElementById('eg-gods-note-sobek')
    };
    var keys = ['isis', 'horus', 'sobek'];
    var idx = 0;

    function showGod(key) {
      scene.setAttribute('data-gods', key);
      scene.setAttribute('data-gods-lit', 'on');
      doors.forEach(function (d) {
        d.classList.toggle('eg-v5-god-active', d.getAttribute('data-god') === key);
      });
    }

    var rail = scene.querySelector('.gods__doors');
    if (rail && !scene.querySelector('.eg-v5-gods-ui')) {
      var ui = document.createElement('div');
      ui.className = 'eg-v5-gods-ui';
      ui.setAttribute('aria-hidden', 'true');
      keys.forEach(function (k) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'eg-v5-gods-dot';
        b.dataset.god = k;
        ui.appendChild(b);
      });
      rail.parentNode.insertBefore(ui, rail.nextSibling);
      ui.addEventListener('click', function (e) {
        var btn = e.target.closest('.eg-v5-gods-dot');
        if (!btn) return;
        var k = btn.dataset.god;
        idx = keys.indexOf(k);
        if (idx < 0) idx = 0;
        showGod(k);
      });
    }

    if (rail) {
      var sx = 0;
      rail.addEventListener('touchstart', function (e) {
        sx = e.changedTouches[0].clientX;
      }, { passive: true });
      rail.addEventListener('touchend', function (e) {
        var dx = e.changedTouches[0].clientX - sx;
        if (Math.abs(dx) < 40) return;
        idx = dx < 0 ? Math.min(keys.length - 1, idx + 1) : Math.max(0, idx - 1);
        showGod(keys[idx]);
      }, { passive: true });
    }

    onceIO(scene, function () {
      showGod('isis');
      reveal(scene.querySelector('.gods__head'));
      reveal(scene.querySelector('.gods__lede'));
      doors.forEach(function (d) { reveal(d); });
    });
  }

  function setupMuseum() {
    var scene = document.getElementById('eg-museum');
    if (!scene) return;
    onceIO(scene, function () {
      reveal(scene.querySelector('.feature__head'));
      reveal(scene.querySelector('.feature__body'));
      reveal(scene.querySelector('.mus-strip'));
      reveal(scene.querySelector('.mus-note'));
    });
  }

  function setupFeature(id) {
    var scene = document.getElementById(id);
    if (!scene) return;
    onceIO(scene, function () {
      reveal(scene.querySelector('.feature__head'));
      reveal(scene.querySelector('.feature__body'));
      var wall = scene.querySelector('.wall');
      if (wall) reveal(wall);
    });
  }

  function setupAbu() {
    var scene = document.getElementById('eg-abusimbel');
    if (!scene) return;
    onceIO(scene, function () {
      scene.setAttribute('data-abu-stage', '5');
      scene.classList.add('eg-v5-abu-live');
      scene.style.setProperty('--abu-light', '0.82');
      scene.style.setProperty('--abu-reveal', '1');
      reveal(scene.querySelector('.abu__kicker'));
      reveal(scene.querySelector('.abu__copy'));
      reveal(scene.querySelector('.abu__coda'));
      reveal(scene.querySelector('.abu__seo'));
    });
  }

  function setupRedSea() {
    var scene = document.getElementById('eg-red-sea');
    if (!scene) return;
    onceIO(scene, function () {
      scene.setAttribute('data-rs-stage', '3');
      scene.classList.add('is-coda');
      scene.style.setProperty('--rs-blue', '1');
      scene.style.setProperty('--rs-ink', 'rgb(6, 42, 52)');
      ['.rs__line--1', '.rs__line--2', '.rs__line--3'].forEach(function (sel, i) {
        var el = scene.querySelector(sel);
        if (!el) return;
        if (REDUCE) {
          reveal(el);
          return;
        }
        global.setTimeout(function () { reveal(el); }, 180 + i * 340);
      });
      reveal(scene.querySelector('.rs__head'));
      reveal(scene.querySelector('.rs__coda'));
      reveal(scene.querySelector('.rs__seo'));
    });
  }

  function setupTimeline() {
    var scene = document.getElementById('eg-timeline');
    if (!scene) return;
    var nodes = scene.querySelectorAll('.tl__node');
    onceIO(scene, function () {
      scene.classList.add('is-journey', 'is-coda', 'is-cta');
      scene.style.setProperty('--tl-draw', '1');
      scene.style.setProperty('--tl-brand', '1');
      reveal(scene.querySelector('.tl__head'));
      reveal(scene.querySelector('.tl__rail'));
    });
    nodes.forEach(function (node, i) {
      onceIO(node, function () {
        node.classList.add('is-on');
        if (node.getAttribute('data-tl-era')) node.classList.add('is-era');
        reveal(node);
      }, { threshold: 0.45, rootMargin: '0px 0px -6% 0px' });
    });
    onceIO(scene.querySelector('.tl__brand'), function () {
      reveal(scene.querySelector('.tl__brand'));
      reveal(scene.querySelector('.tl__cta'));
      reveal(scene.querySelector('.tl__seo'));
    });
  }

  function injectPyramidBeats() {
    var scene = document.getElementById('eg-pyramids');
    if (!scene || scene.querySelector('.eg-v5-pyr-beats')) return;
    var frame = scene.querySelector('.scene__frame');
    if (!frame) return;
    var wrap = document.createElement('div');
    wrap.className = 'eg-v5-pyr-beats';
    wrap.setAttribute('aria-hidden', 'true');
    for (var i = 0; i < 4; i++) {
      var s = document.createElement('span');
      s.className = 'eg-v5-pyr-beat eg-v5-sentinel';
      wrap.appendChild(s);
    }
    frame.appendChild(wrap);
  }

  function init() {
    var root = document.getElementById(ROOT_ID);
    if (!root) return;
    root.classList.add(V5);

    if (!isMobileV5()) return;

    injectPyramidBeats();
    markAnim(root);
    measureSafe(root);
    markAllowed(function onOrient() { measureSafe(root); });
    global.addEventListener('orientationchange', onOrient, { passive: true });
    global.addEventListener('resize', markAllowed(function onResize() {
      if (global.matchMedia(MQ).matches) measureSafe(root);
    }), { passive: true });

    setupNavIO(root);
    setupGate(root);
    setupNile();
    setupPyramids();
    setupNileJourney();
    setupGods();
    setupMuseum();
    setupFeature('eg-luxor-east');
    setupFeature('eg-luxor-west');
    setupFeature('eg-route');
    setupAbu();
    setupRedSea();
    setupTimeline();

    Array.prototype.forEach.call(root.querySelectorAll('.scene'), function (sc) {
      sc.classList.add('is-in');
    });

    global.__EG_V5_READY__ = true;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  global.addEventListener('load', init);
  global.setTimeout(init, 0);
  global.setTimeout(init, 2800);
})(window);
