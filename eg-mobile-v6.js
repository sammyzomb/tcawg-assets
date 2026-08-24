/**
 * CAI12A Mobile V6 — operates ONLY #eg-mobile-experience
 * No scroll listeners, no #eg-experience access
 */
(function () {
  'use strict';

  var MOBILE_MAX = 767;
  var CDN_DOM = 'https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/mobile-v6-dom.html';

var EGM_DOM_HTML="<nav class=\"egm-nav\" id=\"egm-nav\" aria-label=\"場景導覽\"><button type=\"button\" class=\"egm-nav__toggle\" id=\"egm-nav-toggle\" aria-expanded=\"false\" aria-controls=\"egm-nav-panel\">&#x13080;</button><ol class=\"egm-nav__list\" id=\"egm-nav-panel\" hidden></ol></nav><main class=\"egm-main\"><section class=\"egm-scene egm-hero\" id=\"egm-hero\" aria-labelledby=\"egm-hero-title\"><div class=\"egm-hero__media\"><img class=\"egm-hero__img\" src=\"/data/images/202608/CAI12A/sphinx.jpg\" alt=\"\" width=\"1920\" height=\"1280\" decoding=\"async\" fetchpriority=\"high\"></div><div class=\"egm-hero__veil\"></div><div class=\"egm-hero__copy egm-reveal\"><p class=\"egm-kicker\">01 / 12 · EGYPT</p><h1 class=\"egm-hero__title\" id=\"egm-hero-title\">沿著尼羅河，走進五千年文明</h1><p class=\"egm-hero__brand\">不是走過埃及，而是讀懂埃及。</p><p class=\"egm-body\">從開羅出發，以五星尼羅河遊輪串起吉薩高原、路克索神殿群與阿布辛貝，十二天走完埃及神話古文明。</p></div></section><section class=\"egm-scene egm-nile\" id=\"egm-nile\" aria-labelledby=\"egm-nile-title\"><div class=\"egm-nile__photo\"><img src=\"/data/images/202608/CAI12A/cruise-1.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"></div><div class=\"egm-nile__river\" aria-hidden=\"true\"><svg viewBox=\"0 0 400 600\" preserveAspectRatio=\"xMidYMid slice\"><path class=\"egm-nile__path\" d=\"M198 580 C210 520 185 460 205 400 S220 280 200 220 190 120 205 60\"/></svg></div><div class=\"egm-nile__copy egm-reveal\"><p class=\"egm-kicker\">02 / 12 · THE NILE</p><h2 class=\"egm-title\" id=\"egm-nile-title\">尼羅河與古埃及文明</h2><p class=\"egm-lead\">沒有尼羅河，就沒有埃及。</p><p class=\"egm-body\">河流到哪裡，生命就出現在哪裡。尼羅河把開羅、亞斯文與路克索連成同一條文明走廊。</p></div></section><section class=\"egm-scene egm-pyramids\" id=\"egm-pyramids\" aria-labelledby=\"egm-pyramids-title\"><div class=\"egm-pyramids__head egm-reveal\"><p class=\"egm-kicker\">03 / 12 · PYRAMIDS</p><h2 class=\"egm-title\" id=\"egm-pyramids-title\">埃及金字塔與吉薩古文明</h2></div><div class=\"egm-pyramids__card egm-reveal\"><div class=\"egm-pyramids__art\" aria-hidden=\"true\"><svg class=\"egm-pyr-svg\" data-stage=\"1\" viewBox=\"0 0 200 120\"><path d=\"M70 20h60v20H70zM55 40h90v20H55zM40 60h120v20H40zM25 80h150v20H25z\"/></svg><svg class=\"egm-pyr-svg\" data-stage=\"2\" viewBox=\"0 0 200 120\" hidden><path d=\"M100 15 L175 105 H25 Z\"/></svg><svg class=\"egm-pyr-svg\" data-stage=\"3\" viewBox=\"0 0 200 120\" hidden><path d=\"M100 8 L185 112 H15 Z\"/></svg><svg class=\"egm-pyr-svg\" data-stage=\"4\" viewBox=\"0 0 200 120\" hidden><path d=\"M100 8 L185 112 H15 Z\"/><path d=\"M45 55 L75 105 H15 Z\" opacity=\".7\"/><path d=\"M145 60 L170 105 H120 Z\" opacity=\".7\"/></svg></div><div class=\"egm-pyramids__stage\" data-stage=\"1\"><p class=\"egm-pyr-en\">Step Pyramid</p><p class=\"egm-pyr-zh\">左塞爾階梯金字塔</p><p class=\"egm-pyr-era\">c. 2650 BCE · Saqqara</p></div><div class=\"egm-pyramids__stage\" data-stage=\"2\" hidden><p class=\"egm-pyr-en\">Red Pyramid</p><p class=\"egm-pyr-zh\">紅色金字塔</p><p class=\"egm-pyr-era\">c. 2575 BCE · Dahshur</p></div><div class=\"egm-pyramids__stage\" data-stage=\"3\" hidden><p class=\"egm-pyr-en\">Giza</p><p class=\"egm-pyr-zh\">吉薩金字塔</p><p class=\"egm-pyr-era\">c. 2550 BCE · Giza Plateau</p></div><div class=\"egm-pyramids__stage\" data-stage=\"4\" hidden><p class=\"egm-pyr-en\">Giza · Great Pyramid</p><p class=\"egm-pyr-zh\">從階梯到完美幾何</p><p class=\"egm-pyr-era\">人類用了數代法老，才走進這個幾何。</p></div></div></section><section class=\"egm-scene egm-journey\" id=\"egm-journey\" aria-labelledby=\"egm-journey-title\"><div class=\"egm-journey__photo\"><img src=\"/data/images/202608/CAI12A/11-nile-cruise.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"></div><div class=\"egm-journey__veil\"></div><div class=\"egm-journey__copy\"><p class=\"egm-kicker egm-reveal\">04 / 12 · NILE JOURNEY</p><h2 class=\"egm-title egm-reveal\" id=\"egm-journey-title\">尼羅河遊輪與上埃及神殿</h2><p class=\"egm-line egm-reveal\" data-line=\"1\">埃及不是一個個景點。</p><p class=\"egm-line egm-reveal\" data-line=\"2\">它是一條河。</p><p class=\"egm-line egm-reveal\" data-line=\"3\">文明沿著它發生。</p></div></section><section class=\"egm-scene egm-gods\" id=\"egm-gods\" aria-labelledby=\"egm-gods-title\"><div class=\"egm-gods__head egm-reveal\"><p class=\"egm-kicker\">05 / 12 · GODS</p><h2 class=\"egm-title\" id=\"egm-gods-title\">費萊、埃德夫與考姆翁布神殿</h2></div><div class=\"egm-gods__carousel\" id=\"egm-gods-carousel\"><article class=\"egm-god-card is-active\" data-god=\"isis\"><img class=\"egm-god-card__photo\" src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/temple-philae.jpg\" alt=\"\" loading=\"lazy\"><img class=\"egm-god-card__fig\" src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/god-isis.png\" alt=\"\" loading=\"lazy\"><h3 class=\"egm-god-card__en\">Isis</h3><p class=\"egm-god-card__zh\">伊西斯</p><p class=\"egm-god-card__site\">費萊神殿 Philae</p><p class=\"egm-god-card__note\">費萊神殿祭祀伊西斯，象徵守護與復生。</p></article><article class=\"egm-god-card\" data-god=\"horus\" hidden><img class=\"egm-god-card__photo\" src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/temple-edfu.jpg\" alt=\"\" loading=\"lazy\"><img class=\"egm-god-card__fig\" src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/god-horus.png\" alt=\"\" loading=\"lazy\"><h3 class=\"egm-god-card__en\">Horus</h3><p class=\"egm-god-card__zh\">荷魯斯</p><p class=\"egm-god-card__site\">埃德夫神殿 Edfu</p><p class=\"egm-god-card__note\">埃德夫神殿獻給鷹首神荷魯斯，象徵天空與王權。</p></article><article class=\"egm-god-card\" data-god=\"sobek\" hidden><img class=\"egm-god-card__photo\" src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/temple-komombo.jpg\" alt=\"\" loading=\"lazy\"><img class=\"egm-god-card__fig\" src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/god-sobek.png\" alt=\"\" loading=\"lazy\"><h3 class=\"egm-god-card__en\">Sobek</h3><p class=\"egm-god-card__zh\">索貝克</p><p class=\"egm-god-card__site\">考姆翁布 Kom Ombo</p><p class=\"egm-god-card__note\">考姆翁布雙神殿分祀索貝克與哈羅里斯。</p></article></div><div class=\"egm-gods__dots\" id=\"egm-gods-dots\" aria-hidden=\"true\"><button type=\"button\" class=\"is-on\" data-god=\"isis\"></button><button type=\"button\" data-god=\"horus\"></button><button type=\"button\" data-god=\"sobek\"></button></div></section><section class=\"egm-scene egm-museum\" id=\"egm-museum\" aria-labelledby=\"egm-museum-title\"><div class=\"egm-museum__hero egm-reveal\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/04-museum-mask.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"></div><div class=\"egm-museum__copy egm-reveal\"><p class=\"egm-kicker\">06 / 12 · GRAND MUSEUM</p><h2 class=\"egm-title\" id=\"egm-museum-title\">大埃及博物館與圖坦卡門國寶</h2><p class=\"egm-body\">收藏圖坦卡門黃金面具與跨越古王國至新王國的重要文物，讓吉薩的尺度回到完整歷史脈絡。</p></div><div class=\"egm-museum__gallery egm-reveal\" tabindex=\"0\"><div class=\"egm-museum__track\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/museum/mus-01.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/museum/mus-02.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/museum/mus-03.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/museum/mus-04.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/museum/mus-05.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/museum/mus-06.jpg\" alt=\"\" loading=\"lazy\"></div></div></section><section class=\"egm-scene egm-luxor egm-luxor--east\" id=\"egm-luxor-east\" aria-labelledby=\"egm-luxor-east-title\"><div class=\"egm-luxor__photo\"><img src=\"/data/images/202608/CAI12A/14-karnak-columns.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"></div><div class=\"egm-luxor__card egm-reveal\"><p class=\"egm-kicker\">07 / 12 · EAST BANK</p><h2 class=\"egm-title\" id=\"egm-luxor-east-title\">路克索東岸：卡納克與王權神殿</h2><p class=\"egm-body\">日出所在的東岸屬於生者：卡納克神殿以石柱大廳承接祭儀，路克索神殿沿河展開王權舞台。</p></div></section><section class=\"egm-scene egm-luxor egm-luxor--west\" id=\"egm-luxor-west\" aria-labelledby=\"egm-luxor-west-title\"><div class=\"egm-luxor__photo\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/15-hatshepsut-valley.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"></div><div class=\"egm-luxor__card egm-reveal\"><p class=\"egm-kicker\">08 / 12 · WEST BANK</p><h2 class=\"egm-title\" id=\"egm-luxor-west-title\">路克索西岸：帝王谷與來世信仰</h2><p class=\"egm-body\">日落所在的西岸屬於亡者：帝王谷把陵墓鑿進山腹，哈姬蘇神殿以層層柱廊貼近峭壁。</p></div></section><section class=\"egm-scene egm-abu\" id=\"egm-abu\" aria-labelledby=\"egm-abu-title\"><div class=\"egm-abu__photo\"><img src=\"/data/images/202608/CAI12A/abusimbel-1.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"></div><div class=\"egm-abu__beam\" aria-hidden=\"true\"></div><div class=\"egm-abu__copy egm-reveal\"><p class=\"egm-kicker\">09 / 12 · ABU SIMBEL</p><h2 class=\"egm-title\" id=\"egm-abu-title\">阿布辛貝神廟</h2><p class=\"egm-lead\">他把整座山，變成神殿。</p><p class=\"egm-body\">拉美西斯二世把神殿鑿進山壁，一年兩次陽光走進最深處。</p></div></section><section class=\"egm-scene egm-redsea\" id=\"egm-redsea\" aria-labelledby=\"egm-redsea-title\"><div class=\"egm-redsea__photo\"><img src=\"/data/images/202608/CAI12A/redsea-1.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"></div><div class=\"egm-redsea__grad\"></div><div class=\"egm-redsea__copy\"><p class=\"egm-kicker egm-reveal\">10 / 12 · RED SEA</p><h2 class=\"egm-title egm-reveal\" id=\"egm-redsea-title\">胡爾加達與埃及紅海</h2><p class=\"egm-line egm-reveal\" data-line=\"1\">And then,</p><p class=\"egm-line egm-reveal\" data-line=\"2\">Everything</p><p class=\"egm-line egm-reveal\" data-line=\"3\">Turns blue.</p><p class=\"egm-body egm-reveal\">然後，埃及突然變成藍色。珊瑚礁與熱帶魚群讓節奏慢下來。</p></div></section><section class=\"egm-scene egm-timeline\" id=\"egm-timeline\" aria-labelledby=\"egm-timeline-title\"><div class=\"egm-timeline__head egm-reveal\"><p class=\"egm-kicker\">11 / 12 · TIMELINE</p><h2 class=\"egm-title\" id=\"egm-timeline-title\">十二日軸線</h2><p class=\"egm-body\">十二天，收成一條沿著尼羅河的文明脈絡。</p></div><div class=\"egm-timeline__rail egm-reveal\"><svg class=\"egm-timeline__svg\" viewBox=\"0 0 48 360\" aria-hidden=\"true\"><path class=\"egm-tl-river\" d=\"M24 8 C18 60 30 120 24 180 S18 280 24 352\"/></svg><ol class=\"egm-timeline__nodes\"><li class=\"egm-tl-node egm-reveal\" data-stop=\"1\"><span class=\"egm-tl-dot\"></span><span class=\"egm-tl-name\">金字塔</span><span class=\"egm-tl-era\">西元前 2700 年</span></li><li class=\"egm-tl-node egm-reveal\" data-stop=\"2\"><span class=\"egm-tl-dot\"></span><span class=\"egm-tl-name\">底比斯 · 路克索</span><span class=\"egm-tl-era\">西元前 1500 年</span></li><li class=\"egm-tl-node egm-reveal\" data-stop=\"3\"><span class=\"egm-tl-dot\"></span><span class=\"egm-tl-name\">埃德夫</span><span class=\"egm-tl-era\">托勒密時期</span></li><li class=\"egm-tl-node egm-reveal\" data-stop=\"4\"><span class=\"egm-tl-dot\"></span><span class=\"egm-tl-name\">亞斯文</span><span class=\"egm-tl-era\">上埃及門戶</span></li><li class=\"egm-tl-node egm-reveal\" data-stop=\"5\"><span class=\"egm-tl-dot\"></span><span class=\"egm-tl-name\">阿布辛貝</span><span class=\"egm-tl-era\">西元前 1279 年</span></li><li class=\"egm-tl-node egm-reveal\" data-stop=\"6\"><span class=\"egm-tl-dot\"></span><span class=\"egm-tl-name\">今日</span><span class=\"egm-tl-era\">你就在這裡</span></li></ol></div><div class=\"egm-timeline__foot egm-reveal\"><p class=\"egm-timeline__brand\">五千年文明，一條航線</p><a class=\"egm-cta\" href=\"#schedule\">查看完整埃及行程</a></div></section></main><nav class=\"egm-quick\" id=\"egm-quick\" aria-label=\"快速聯絡\"><button type=\"button\" class=\"egm-quick__top\" aria-label=\"回到頂部\">↑</button><a href=\"tel:+886277415198\" aria-label=\"電話諮詢\">☎</a><a class=\"egm-quick__line\" href=\"https://lin.ee/VmT3y1Bv\" target=\"_blank\" rel=\"noopener noreferrer\">LINE</a></nav>";


  function isMobile() {
    return window.matchMedia('(max-width:' + MOBILE_MAX + 'px)').matches;
  }

  function root() {
    return document.getElementById('eg-mobile-experience');
  }

  function injectDom(html) {
    var el = root();
    if (!el || el.dataset.egmReady) return false;
    el.innerHTML = html;
    el.dataset.egmReady = '1';
    buildNav(el);
    return true;
  }

  function buildNav(el) {
    var panel = el.querySelector('#egm-nav-panel');
    if (!panel) return;
    var scenes = el.querySelectorAll('.egm-scene[id]');
    var frag = document.createDocumentFragment();
    scenes.forEach(function (sec, i) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + sec.id;
      a.textContent = (i + 1) + '. ' + (sec.querySelector('.egm-title, .egm-hero__title') || {}).textContent || sec.id;
      a.addEventListener('click', function (e) {
        e.preventDefault();
        sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        panel.hidden = true;
      });
      li.appendChild(a);
      frag.appendChild(li);
    });
    panel.appendChild(frag);
  }

  function observeReveal(el, opts) {
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-in');
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, opts || { root: null, threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return io;
  }

  function initReveals(el) {
    el.querySelectorAll('.egm-reveal').forEach(function (node) {
      observeReveal(node);
    });
  }

  function initNile(el) {
    var sec = el.querySelector('#egm-nile');
    if (!sec) return;
    if (!('IntersectionObserver' in window)) {
      sec.classList.add('is-revealed');
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        sec.classList.add('is-revealed');
        io.unobserve(sec);
      });
    }, { threshold: 0.3 });
    io.observe(sec);
  }

  function initPyramids(el) {
    var card = el.querySelector('.egm-pyramids__card');
    if (!card) return;
    var stages = [].slice.call(el.querySelectorAll('.egm-pyramids__stage'));
    var svgs = [].slice.call(el.querySelectorAll('.egm-pyr-svg'));
    var idx = 0;

    function showStage(n) {
      stages.forEach(function (s, i) {
        s.hidden = i !== n;
        if (i === n) {
          s.classList.remove('is-in');
          void s.offsetWidth;
          s.classList.add('is-in');
        }
      });
      svgs.forEach(function (s, i) {
        s.hidden = i !== n;
      });
    }

    showStage(0);

    if (!('IntersectionObserver' in window)) {
      stages.forEach(function (_, i) { setTimeout(function () { showStage(i); }, i * 400); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        function tick() {
          if (idx >= stages.length) {
            io.unobserve(card);
            return;
          }
          showStage(idx);
          idx += 1;
          if (idx < stages.length) setTimeout(tick, 520);
          else io.unobserve(card);
        }
        tick();
      });
    }, { threshold: 0.35 });
    io.observe(card);
  }

  function initLines(el, sel) {
    el.querySelectorAll(sel).forEach(function (line) {
      observeReveal(line, { threshold: 0.2, rootMargin: '0px 0px -5% 0px' });
    });
  }

  function initGods(el) {
    var wrap = el.querySelector('#egm-gods-carousel');
    var dots = el.querySelector('#egm-gods-dots');
    if (!wrap) return;
    var cards = [].slice.call(wrap.querySelectorAll('.egm-god-card'));
    var names = cards.map(function (c) { return c.dataset.god; });
    var cur = 0;
    var startX = 0;
    var tracking = false;

    function show(i) {
      cur = (i + cards.length) % cards.length;
      cards.forEach(function (c, j) {
        c.hidden = j !== cur;
        c.classList.toggle('is-active', j === cur);
        if (j === cur) {
          c.classList.remove('is-switching');
          void c.offsetWidth;
          c.classList.add('is-switching');
        }
      });
      if (dots) {
        dots.querySelectorAll('button').forEach(function (b, j) {
          b.classList.toggle('is-on', j === cur);
        });
      }
    }

    show(0);

    if (dots) {
      dots.querySelectorAll('button').forEach(function (btn, i) {
        btn.addEventListener('click', function () { show(i); });
      });
    }

    wrap.addEventListener('touchstart', function (e) {
      if (!e.touches || !e.touches[0]) return;
      startX = e.touches[0].clientX;
      tracking = true;
    }, { passive: true });

    wrap.addEventListener('touchend', function (e) {
      if (!tracking) return;
      tracking = false;
      var endX = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : startX;
      var dx = endX - startX;
      if (Math.abs(dx) < 40) return;
      show(dx < 0 ? cur + 1 : cur - 1);
    }, { passive: true });
  }

  function initAbu(el) {
    var sec = el.querySelector('#egm-abu');
    if (!sec) return;
    if (!('IntersectionObserver' in window)) {
      sec.classList.add('is-lit');
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        sec.classList.add('is-lit');
        io.unobserve(sec);
      });
    }, { threshold: 0.35 });
    io.observe(sec);
  }

  function initTimeline(el) {
    var nodes = [].slice.call(el.querySelectorAll('.egm-tl-node'));
    if (!nodes.length) return;
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(function (n, i) {
        setTimeout(function () { n.classList.add('is-lit'); }, i * 180);
      });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.sort(function (a, b) {
        return (+a.target.dataset.stop || 0) - (+b.target.dataset.stop || 0);
      });
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var stop = +entry.target.dataset.stop || 0;
        setTimeout(function () {
          entry.target.classList.add('is-lit');
        }, (stop - 1) * 160);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.5, rootMargin: '0px 0px -10% 0px' });
    nodes.forEach(function (n) { io.observe(n); });
  }

  function initNav(el) {
    var toggle = el.querySelector('#egm-nav-toggle');
    var panel = el.querySelector('#egm-nav-panel');
    if (!toggle || !panel) return;
    toggle.addEventListener('click', function () {
      var open = panel.hidden;
      panel.hidden = !open;
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function initQuick(el) {
    var topBtn = el.querySelector('.egm-quick__top');
    if (topBtn) {
      topBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  function boot(el) {
    initReveals(el);
    initNile(el);
    initPyramids(el);
    initLines(el, '#egm-journey .egm-line');
    initLines(el, '#egm-redsea .egm-line');
    initGods(el);
    initAbu(el);
    initTimeline(el);
    initNav(el);
    initQuick(el);
  }

  function loadDom(cb) {
    if (typeof EGM_DOM_HTML === 'string' && EGM_DOM_HTML.length > 100) {
      cb(EGM_DOM_HTML);
      return;
    }
    fetch(CDN_DOM, { credentials: 'omit' })
      .then(function (r) { return r.text(); })
      .then(cb)
      .catch(function () {
        var el = root();
        if (el) el.innerHTML = '<p style="padding:2rem;color:#fff">Mobile V6 載入失敗</p>';
      });
  }

  function start() {
    if (!isMobile()) return;
    var el = root();
    if (!el) return;
    if (el.dataset.egmReady === '1') {
      boot(el);
      return;
    }
    loadDom(function (html) {
      if (!injectDom(html)) return;
      boot(root());
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  window.addEventListener('resize', function () {
    if (isMobile() && root() && !root().dataset.egmReady) start();
  }, { passive: true });
})();
