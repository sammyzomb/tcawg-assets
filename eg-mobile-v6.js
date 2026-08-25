/**
 * CAI12A Mobile V6 — operates ONLY #eg-mobile-experience
 * No scroll listeners, no #eg-experience access
 */
(function () {
  'use strict';

  var MOBILE_MAX = 767;
  var CDN_DOM = 'https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/mobile-v6-dom.html';

var EGM_DOM_HTML="<main class=\"egm-main\"><section class=\"egm-scene egm-hero egm-layout--hero\" id=\"egm-hero\" aria-labelledby=\"egm-hero-title\" data-hero-state=\"poster\"><div class=\"egm-hero__media egm-media egm-media--hero\"><img class=\"egm-hero__poster\" src=\"https://www.tcawg.com/data/images/202608/CAI12A/sphinx.jpg\" alt=\"\" width=\"1920\" height=\"1280\" decoding=\"async\" fetchpriority=\"high\"><div class=\"egm-hero__stage\" data-egm-vimeo=\"1218241427\" data-egm-ratio=\"4:5\"><iframe class=\"egm-hero__video\" id=\"egm-hero-video\" title=\"埃及神話古文明 開場影片\" tabindex=\"-1\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture; encrypted-media\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe></div></div><div class=\"egm-hero__veil\"></div><div class=\"egm-hero__copy egm-reveal\"><p class=\"egm-kicker\">01 / 12 · EGYPT</p><h1 class=\"egm-hero__title\" id=\"egm-hero-title\">沿著尼羅河，走進五千年文明</h1><p class=\"egm-hero__brand\">不是走過埃及，而是讀懂埃及。</p><p class=\"egm-body\">從開羅出發，以五星尼羅河遊輪串起吉薩高原、路克索神殿群與阿布辛貝，十二天走完埃及神話古文明。</p></div></section><section class=\"egm-scene egm-nile egm-layout--card\" id=\"egm-nile\" aria-labelledby=\"egm-nile-title\"><div class=\"egm-nile__frame\"><div class=\"egm-nile__media egm-media egm-media--45\"><img src=\"https://www.tcawg.com/data/images/202608/CAI12A/cruise-1.jpg\" alt=\"\" decoding=\"async\"><div class=\"egm-nile__river\" aria-hidden=\"true\"><svg viewBox=\"0 0 400 600\" preserveAspectRatio=\"xMidYMid slice\"><path class=\"egm-nile__path\" d=\"M198 580 C210 520 185 460 205 400 S220 280 200 220 190 120 205 60\"/></svg></div><div class=\"egm-nile__veil\"></div></div><div class=\"egm-nile__copy egm-card egm-card--navy egm-reveal\"><p class=\"egm-kicker\">02 / 12 · THE NILE</p><h2 class=\"egm-title\" id=\"egm-nile-title\">尼羅河與古埃及文明</h2><p class=\"egm-lead\">沒有尼羅河，就沒有埃及。</p><p class=\"egm-body\">河流到哪裡，生命就出現在哪裡。尼羅河把開羅、亞斯文與路克索連成同一條文明走廊。</p></div></div></section><section class=\"egm-scene egm-pyramids egm-layout--graphic\" id=\"egm-pyramids\" aria-labelledby=\"egm-pyramids-title\"><div class=\"egm-pyramids__head egm-reveal\"><p class=\"egm-kicker\">03 / 12 · PYRAMIDS</p><h2 class=\"egm-title\" id=\"egm-pyramids-title\">埃及金字塔與吉薩古文明</h2></div><div class=\"egm-pyramids__showcase\" id=\"egm-pyramids-showcase\"><img class=\"egm-pyramids__bg\" src=\"https://www.tcawg.com/data/images/202608/CAI12A/sphinx.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"><div class=\"egm-pyramids__canvas\" aria-hidden=\"true\"><svg class=\"egm-pyr-svg is-on\" data-stage=\"1\" viewBox=\"0 0 200 120\"><path d=\"M70 20h60v20H70zM55 40h90v20H55zM40 60h120v20H40zM25 80h150v20H25z\"/></svg><svg class=\"egm-pyr-svg\" data-stage=\"2\" viewBox=\"0 0 200 120\" hidden><path d=\"M100 15 L175 105 H25 Z\"/></svg><svg class=\"egm-pyr-svg\" data-stage=\"3\" viewBox=\"0 0 200 120\" hidden><path d=\"M100 8 L185 112 H15 Z\"/></svg><svg class=\"egm-pyr-svg\" data-stage=\"4\" viewBox=\"0 0 200 120\" hidden><path d=\"M100 8 L185 112 H15 Z\"/><path d=\"M45 55 L75 105 H15 Z\" opacity=\".7\"/><path d=\"M145 60 L170 105 H120 Z\" opacity=\".7\"/></svg></div><div class=\"egm-pyramids__caption\" aria-live=\"polite\"><div class=\"egm-pyramids__stage\" data-stage=\"1\"><p class=\"egm-pyr-en\">Step Pyramid</p><p class=\"egm-pyr-zh\">左塞爾階梯金字塔</p><p class=\"egm-pyr-era\">c. 2667–2648 BCE · Saqqara</p></div><div class=\"egm-pyramids__stage\" data-stage=\"2\" hidden><p class=\"egm-pyr-en\">Red Pyramid</p><p class=\"egm-pyr-zh\">紅色金字塔</p><p class=\"egm-pyr-era\">c. 2575 BCE · Dahshur</p></div><div class=\"egm-pyramids__stage\" data-stage=\"3\" hidden><p class=\"egm-pyr-en\">Giza</p><p class=\"egm-pyr-zh\">吉薩金字塔</p><p class=\"egm-pyr-era\">c. 2600–2500 BCE · Giza Plateau</p></div><div class=\"egm-pyramids__stage\" data-stage=\"4\" hidden><p class=\"egm-pyr-en\">Giza · Great Pyramid</p><p class=\"egm-pyr-zh\">從階梯到完美幾何</p><p class=\"egm-pyr-era\">人類用了數代法老，才走進這個幾何。</p></div></div><div class=\"egm-pyramids__dots\" aria-hidden=\"true\"><span class=\"is-on\"></span><span></span><span></span><span></span></div></div></section><section class=\"egm-scene egm-museum egm-layout--editorial\" id=\"egm-museum\" aria-labelledby=\"egm-museum-title\"><div class=\"egm-museum__hero egm-reveal\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/04-museum-mask.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"></div><div class=\"egm-museum__copy egm-reveal\"><p class=\"egm-kicker\">04 / 12 · GRAND MUSEUM</p><h2 class=\"egm-title\" id=\"egm-museum-title\">大埃及博物館與圖坦卡門國寶</h2><p class=\"egm-body\">收藏圖坦卡門黃金面具與跨越古王國至新王國的重要文物，讓吉薩的尺度回到完整歷史脈絡。</p></div><div class=\"egm-museum__gallery egm-reveal\" aria-label=\"博物館文物跑馬燈\"><div class=\"egm-museum__track\"><figure><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/museum/mus-01.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"></figure><figure><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/museum/mus-02.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"></figure><figure><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/museum/mus-03.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"></figure><figure><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/museum/mus-04.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"></figure><figure><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/museum/mus-05.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"></figure><figure><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/museum/mus-06.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"></figure></div></div></section><section class=\"egm-scene egm-journey egm-layout--hero\" id=\"egm-journey\" aria-labelledby=\"egm-journey-title\"><div class=\"egm-journey__photo egm-media egm-media--hero\"><img src=\"https://www.tcawg.com/data/images/202608/CAI12A/11-nile-cruise.jpg\" alt=\"\" decoding=\"async\"></div><div class=\"egm-journey__veil\"></div><div class=\"egm-journey__copy\"><p class=\"egm-kicker egm-reveal\">05 / 12 · NILE JOURNEY</p><h2 class=\"egm-title egm-reveal\" id=\"egm-journey-title\">尼羅河遊輪與上埃及神殿</h2><p class=\"egm-line\" data-line=\"1\">埃及不是一個個景點。</p><p class=\"egm-line\" data-line=\"2\">它是一條河。</p><p class=\"egm-line\" data-line=\"3\">文明沿著它發生。</p><p class=\"egm-body egm-journey__seo egm-reveal\">五星尼羅河遊輪從亞斯文出發，經考姆翁布、埃德夫抵達路克索，在河上依序閱讀上埃及。</p><p class=\"egm-line egm-journey__ship\"><a href=\"https://nilecapitalcruises.com/en/nile-capital-cruise/accommodation\" target=\"_blank\">Nile Capital · 艙房介紹</a></p></div></section><section class=\"egm-scene egm-gods egm-layout--graphic\" id=\"egm-gods\" aria-labelledby=\"egm-gods-title\"><div class=\"egm-gods__head egm-reveal\"><p class=\"egm-kicker\">06 / 12 · GODS</p><h2 class=\"egm-title\" id=\"egm-gods-title\">費萊、埃德夫與考姆翁布神殿</h2></div><div class=\"egm-gods__carousel\" id=\"egm-gods-carousel\"><article class=\"egm-god-card is-active\" data-god=\"isis\"><div class=\"egm-god-card__inner\"><div class=\"egm-god-card__media\"><img class=\"egm-god-card__photo\" src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/temple-philae.jpg\" alt=\"\" loading=\"lazy\"><img class=\"egm-god-card__fig\" src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/god-isis.png\" alt=\"\" loading=\"lazy\"></div><div class=\"egm-god-card__text\"><h3 class=\"egm-god-card__en\">Isis</h3><p class=\"egm-god-card__zh\">伊西斯</p><p class=\"egm-god-card__site\">費萊神殿 Philae</p><p class=\"egm-god-card__note\">費萊神殿祭祀伊西斯，象徵守護與復生。</p></div></div></article><article class=\"egm-god-card\" data-god=\"horus\" hidden><div class=\"egm-god-card__inner\"><div class=\"egm-god-card__media\"><img class=\"egm-god-card__photo\" src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/temple-edfu.jpg\" alt=\"\" loading=\"lazy\"><img class=\"egm-god-card__fig\" src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/god-horus.png\" alt=\"\" loading=\"lazy\"></div><div class=\"egm-god-card__text\"><h3 class=\"egm-god-card__en\">Horus</h3><p class=\"egm-god-card__zh\">荷魯斯</p><p class=\"egm-god-card__site\">埃德夫神殿 Edfu</p><p class=\"egm-god-card__note\">埃德夫神殿獻給鷹首神荷魯斯，象徵天空與王權。</p></div></div></article><article class=\"egm-god-card\" data-god=\"sobek\" hidden><div class=\"egm-god-card__inner\"><div class=\"egm-god-card__media\"><img class=\"egm-god-card__photo\" src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/temple-komombo.jpg\" alt=\"\" loading=\"lazy\"><img class=\"egm-god-card__fig\" src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/god-sobek.png\" alt=\"\" loading=\"lazy\"></div><div class=\"egm-god-card__text\"><h3 class=\"egm-god-card__en\">Sobek</h3><p class=\"egm-god-card__zh\">索貝克</p><p class=\"egm-god-card__site\">考姆翁布 Kom Ombo</p><p class=\"egm-god-card__note\">考姆翁布雙神殿分祀索貝克與哈羅里斯。</p></div></div></article></div><div class=\"egm-gods__dots\" id=\"egm-gods-dots\" aria-hidden=\"true\"><button type=\"button\" class=\"is-on\" data-god=\"isis\"></button><button type=\"button\" data-god=\"horus\"></button><button type=\"button\" data-god=\"sobek\"></button></div></section><section class=\"egm-scene egm-luxor egm-luxor--east egm-layout--card\" id=\"egm-luxor-east\" aria-labelledby=\"egm-luxor-east-title\"><div class=\"egm-luxor__frame\"><div class=\"egm-luxor__media egm-media egm-media--58\"><img src=\"https://www.tcawg.com/data/images/202608/CAI12A/14-karnak-columns.jpg\" alt=\"\" decoding=\"async\"><div class=\"egm-luxor__veil\"></div></div><div class=\"egm-luxor__card egm-card egm-card--warm egm-reveal\"><p class=\"egm-kicker\">07 / 12 · EAST BANK</p><h2 class=\"egm-title\" id=\"egm-luxor-east-title\">路克索東岸：卡納克與王權神殿</h2><p class=\"egm-body\">日出所在的東岸屬於生者：卡納克神殿以石柱大廳承接祭儀，路克索神殿沿河展開王權舞台。</p></div></div></section><section class=\"egm-scene egm-luxor egm-luxor--west egm-layout--card\" id=\"egm-luxor-west\" aria-labelledby=\"egm-luxor-west-title\"><div class=\"egm-luxor__frame\"><div class=\"egm-luxor__media egm-media egm-media--58\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/15-hatshepsut-valley.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"><div class=\"egm-luxor__veil\"></div></div><div class=\"egm-luxor__card egm-card egm-card--cool egm-reveal\"><p class=\"egm-kicker\">08 / 12 · WEST BANK</p><h2 class=\"egm-title\" id=\"egm-luxor-west-title\">路克索西岸：帝王谷與來世信仰</h2><p class=\"egm-body\">日落所在的西岸屬於亡者：帝王谷把陵墓鑿進山腹，哈姬蘇神殿以層層柱廊貼近峭壁。</p></div></div></section><section class=\"egm-scene egm-abu egm-layout--hero\" id=\"egm-abu\" aria-labelledby=\"egm-abu-title\"><div class=\"egm-abu__photo egm-media egm-media--hero\"><img src=\"https://www.tcawg.com/data/images/202608/CAI12A/abusimbel-1.jpg\" alt=\"\" decoding=\"async\"></div><div class=\"egm-abu__copy egm-reveal\"><p class=\"egm-kicker\">09 / 12 · ABU SIMBEL</p><h2 class=\"egm-title\" id=\"egm-abu-title\">阿布辛貝神廟</h2><p class=\"egm-lead\">他把整座山，變成神殿。</p><p class=\"egm-body\">拉美西斯二世把神殿鑿進山壁，一年兩次陽光走進最深處。</p></div></section><section class=\"egm-scene egm-redsea egm-layout--hero\" id=\"egm-redsea\" aria-labelledby=\"egm-redsea-title\"><div class=\"egm-redsea__photo egm-media egm-media--hero\"><img src=\"https://www.tcawg.com/data/images/202608/CAI12A/redsea-1.jpg\" alt=\"\" decoding=\"async\"></div><div class=\"egm-redsea__grad\"></div><div class=\"egm-redsea__copy\"><p class=\"egm-kicker egm-reveal\">10 / 12 · RED SEA</p><h2 class=\"egm-title egm-reveal\" id=\"egm-redsea-title\">胡爾加達與埃及紅海</h2><p class=\"egm-line\" data-line=\"1\">And then,</p><p class=\"egm-line\" data-line=\"2\">Everything</p><p class=\"egm-line\" data-line=\"3\">Turns blue.</p><p class=\"egm-body egm-reveal\">然後，埃及突然變成藍色。珊瑚礁與熱帶魚群讓節奏慢下來。</p></div></section><section class=\"egm-scene egm-timeline egm-layout--graphic\" id=\"egm-timeline\" aria-labelledby=\"egm-timeline-title\"><div class=\"egm-timeline__hero egm-reveal\"><img class=\"egm-timeline__photo\" src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/10-break-nile-sunset.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"><div class=\"egm-timeline__hero-grad\"></div><div class=\"egm-timeline__head\"><p class=\"egm-kicker\">11 / 12 · TIMELINE</p><h2 class=\"egm-title\" id=\"egm-timeline-title\">十二日軸線</h2><p class=\"egm-body\">十二天，收成一條沿著尼羅河的文明脈絡。</p></div></div><div class=\"egm-timeline__panel egm-reveal\"><div class=\"egm-timeline__rail\"><svg class=\"egm-timeline__svg\" viewBox=\"0 0 48 360\" aria-hidden=\"true\"><path class=\"egm-tl-river\" d=\"M24 8 C18 60 30 120 24 180 S18 280 24 352\"/></svg><ol class=\"egm-timeline__nodes\"><li class=\"egm-tl-node\" data-stop=\"1\"><span class=\"egm-tl-dot\"></span><span class=\"egm-tl-name\">金字塔</span><span class=\"egm-tl-era\">西元前 2667–2500 年</span></li><li class=\"egm-tl-node\" data-stop=\"2\"><span class=\"egm-tl-dot\"></span><span class=\"egm-tl-name\">底比斯 · 路克索</span><span class=\"egm-tl-era\">西元前 1500 年</span></li><li class=\"egm-tl-node\" data-stop=\"3\"><span class=\"egm-tl-dot\"></span><span class=\"egm-tl-name\">埃德夫</span><span class=\"egm-tl-era\">托勒密時期</span></li><li class=\"egm-tl-node\" data-stop=\"4\"><span class=\"egm-tl-dot\"></span><span class=\"egm-tl-name\">亞斯文</span><span class=\"egm-tl-era\">上埃及門戶</span></li><li class=\"egm-tl-node\" data-stop=\"5\"><span class=\"egm-tl-dot\"></span><span class=\"egm-tl-name\">阿布辛貝</span><span class=\"egm-tl-era\">西元前 1279 年</span></li><li class=\"egm-tl-node\" data-stop=\"6\"><span class=\"egm-tl-dot\"></span><span class=\"egm-tl-name\">今日</span><span class=\"egm-tl-era\">你就在這裡</span></li></ol></div><div class=\"egm-timeline__foot\"><p class=\"egm-timeline__brand\">五千年文明，一條航線</p><a class=\"egm-cta\" href=\"#schedule\">查看完整埃及行程</a></div></div></section><section class=\"egm-scene egm-route egm-layout--editorial\" id=\"egm-route\" aria-labelledby=\"egm-route-title\"><div class=\"egm-route__head egm-reveal\"><p class=\"egm-kicker\">12 / 12 · ALL INCLUDED</p><h2 class=\"egm-title\" id=\"egm-route-title\">埃及自費項目太多，我們都包含起來了</h2><p class=\"egm-route__tag\">Included · No extra pay</p></div><div class=\"egm-route__body egm-reveal\"><ul class=\"egm-route__list\"><li>阿布辛貝燈光秀</li><li>努比亞村落尋奇與騎駱駝</li><li>尼羅河風帆船</li><li>四輪驅動撒哈拉沙漠飆沙</li><li>紅海浮潛與玻璃船</li></ul><p class=\"egm-route__dine\">我們還安排米納宮與哈利利百年文學餐廳</p><div class=\"egm-route__points\"><figure class=\"egm-route__hit\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/ds-p01.jpg\" alt=\"米納宮午餐\" loading=\"lazy\"><p class=\"egm-route__point\"><b>Point!</b> 在米納宮用餐，金字塔近在咫尺，怎麼拍怎麼美</p></figure><figure class=\"egm-route__hit\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/ds-p02.jpg\" alt=\"哈利利百年文學餐廳\" loading=\"lazy\"><p class=\"egm-route__point\"><b>Point!</b> 哈利利百年文學餐廳，傳統的料理，撫慰我們的胃</p></figure></div><p class=\"egm-route__dine\">紅海與撒哈拉體驗</p><div class=\"egm-route__points\"><figure class=\"egm-route__hit\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/ds-p03.jpg\" alt=\"玻璃底船與浮潛\" loading=\"lazy\"><p class=\"egm-route__point\"><b>玻璃底船＋浮潛</b> 紅海是大自然贈與埃及的禮物，在清澈碧藍的海水下面，生長著五顏六色的珊瑚和稀有的海洋生物。搭乘時透過觀景窗，您能看到珊瑚礁奇觀，和一望無垠不同色彩的紅海。</p></figure><figure class=\"egm-route__hit\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/ds-p04.jpg\" alt=\"四輪傳動與貝都因村落\" loading=\"lazy\"><p class=\"egm-route__point\"><b>四輪傳動 · 貝都因村落</b> 安排搭乘四輪傳動車奔馳在廣闊的荒漠沙源，追逐層層沙浪，一望無際的撒哈拉沙漠就在眼前，並前往貝都因部落，抵達後享受他們熱情的貝都因部落傳統風味餐招待，並體驗貝都因人以獨特的方式寧靜的生活在這片沙漠中，怡然自得！</p></figure></div></div><p class=\"egm-route__cap egm-reveal\"><b>領隊實拍</b><span>Photos from our own departures</span></p><div class=\"egm-route__gallery egm-reveal\" aria-label=\"領隊實拍跑馬燈\"><div class=\"egm-route__track\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/tour/tr-01.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/tour/tr-02.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/tour/tr-03.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/tour/tr-04.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/tour/tr-05.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/tour/tr-06.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/tour/tr-07.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/tour/tr-08.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/tour/tr-09.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/tour/tr-10.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/tour/tr-11.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/tour/tr-12.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/tour/tr-13.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/tour/tr-14.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/tour/tr-15.jpg\" alt=\"\" loading=\"lazy\"><img src=\"https://cdn.jsdelivr.net/gh/sammyzomb/tcawg-assets@main/tour/tr-16.jpg\" alt=\"\" loading=\"lazy\"></div></div></section></main><nav class=\"egm-quick\" id=\"egm-quick\" aria-label=\"快速聯絡\"><button type=\"button\" class=\"egm-quick__top\" aria-label=\"回到頂部\">↑</button><a href=\"tel:+886277415198\" aria-label=\"電話諮詢\">☎</a><a class=\"egm-quick__line\" href=\"https://lin.ee/VmT3y1Bv\" target=\"_blank\" rel=\"noopener noreferrer\">LINE</a></nav>";


  function isMobile() {
    return window.innerWidth <= MOBILE_MAX ||
      window.matchMedia('(max-width:' + MOBILE_MAX + 'px)').matches;
  }

  function root() {
    return document.getElementById('eg-mobile-experience');
  }

  function injectDom(html) {
    var el = root();
    if (!el || el.dataset.egmReady) return false;
    el.innerHTML = html;
    el.dataset.egmReady = '1';
    el.removeAttribute('aria-hidden');
    fixBrokenImgs(el);
    return true;
  }

  function fixBrokenImgs(el) {
    el.querySelectorAll('img[src^="/data/images/"]').forEach(function (img) {
      img.src = 'https://www.tcawg.com' + img.getAttribute('src');
    });
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
    el.querySelectorAll('.egm-reveal:not(.egm-line)').forEach(function (node) {
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
    var showcase = el.querySelector('#egm-pyramids-showcase');
    if (!showcase) return;
    var stages = [].slice.call(showcase.querySelectorAll('.egm-pyramids__stage'));
    var svgs = [].slice.call(showcase.querySelectorAll('.egm-pyr-svg'));
    var dots = [].slice.call(showcase.querySelectorAll('.egm-pyramids__dots span'));
    var idx = 0;
    var timer = null;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var AUTO_MS = 2800;

    function showStage(n) {
      idx = n;
      stages.forEach(function (s, i) {
        s.hidden = i !== n;
        if (i === n) {
          s.classList.remove('is-in');
          void s.offsetWidth;
          s.classList.add('is-in');
        }
      });
      svgs.forEach(function (s, i) {
        var active = i === n;
        s.hidden = !active;
        s.classList.toggle('is-on', active);
        if (active) {
          s.classList.remove('is-in');
          void s.offsetWidth;
          s.classList.add('is-in');
        } else {
          s.classList.remove('is-in');
        }
      });
      dots.forEach(function (d, i) {
        d.classList.toggle('is-on', i === n);
      });
      showcase.setAttribute('data-pyr-stage', String(n + 1));
    }

    function nextStage() {
      showStage((idx + 1) % stages.length);
    }

    function stopAuto() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function startAuto() {
      stopAuto();
      if (reduce || stages.length < 2) return;
      timer = setInterval(nextStage, AUTO_MS);
    }

    showStage(0);

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) startAuto();
          else stopAuto();
        });
      }, { threshold: 0.35 });
      io.observe(showcase);
    } else {
      startAuto();
    }

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stopAuto();
      else if (showcase.getBoundingClientRect().top < window.innerHeight) startAuto();
    });
  }

  function initMarquee(el, sel) {
    var track = el.querySelector(sel);
    if (!track || track.dataset.egmMarquee === '1') return;
    var items = [].slice.call(track.children);
    if (!items.length) return;
    items.forEach(function (node) {
      track.appendChild(node.cloneNode(true));
    });
    track.dataset.egmMarquee = '1';
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
    var cur = 0;
    var startX = 0;
    var tracking = false;
    var timer = null;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var AUTO_MS = 3200;

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

    function stopAuto() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function startAuto() {
      stopAuto();
      if (reduce || cards.length < 2) return;
      timer = setInterval(function () { show(cur + 1); }, AUTO_MS);
    }

    show(0);

    if (dots) {
      dots.querySelectorAll('button').forEach(function (btn, i) {
        btn.addEventListener('click', function () {
          show(i);
          startAuto();
        });
      });
    }

    wrap.addEventListener('touchstart', function (e) {
      if (!e.touches || !e.touches[0]) return;
      startX = e.touches[0].clientX;
      tracking = true;
      stopAuto();
    }, { passive: true });

    wrap.addEventListener('touchend', function (e) {
      if (!tracking) return;
      tracking = false;
      var endX = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : startX;
      var dx = endX - startX;
      if (Math.abs(dx) >= 40) show(dx < 0 ? cur + 1 : cur - 1);
      startAuto();
    }, { passive: true });

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) startAuto();
          else stopAuto();
        });
      }, { threshold: 0.35 });
      io.observe(wrap);
    } else {
      startAuto();
    }

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stopAuto();
      else {
        var rect = wrap.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) startAuto();
      }
    });
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

  function initQuick(el) {
    var topBtn = el.querySelector('.egm-quick__top');
    if (topBtn) {
      topBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  function initHero(el) {
    var hero = el.querySelector('#egm-hero');
    var frame = el.querySelector('#egm-hero-video');
    var stage = frame ? frame.parentNode : null;
    if (!hero || !frame || !stage) return;

    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var VIMEO = 'https://player.vimeo.com';
    var vimeoId = (stage.getAttribute('data-egm-vimeo') || '').trim();
    var ratioParts = String(stage.getAttribute('data-egm-ratio') || '4:5').split(':');
    var heroRatio = (parseFloat(ratioParts[0]) / parseFloat(ratioParts[1])) || (4 / 5);
    var heroSrc = '';
    var wired = false;

    function setState(state) {
      hero.setAttribute('data-hero-state', state);
    }

    function fit() {
      var w = stage.clientWidth;
      var h = stage.clientHeight;
      if (!w || !h) return;
      var fw, fh;
      if (w / h > heroRatio) {
        fw = w;
        fh = w / heroRatio;
      } else {
        fh = h;
        fw = h * heroRatio;
      }
      frame.style.width = Math.ceil(fw) + 'px';
      frame.style.height = Math.ceil(fh) + 'px';
    }

    function post(method) {
      if (!frame.contentWindow) return;
      try {
        frame.contentWindow.postMessage(JSON.stringify({ method: method }), VIMEO);
      } catch (e) {}
    }

    function scheduleFit() {
      requestAnimationFrame(function () {
        requestAnimationFrame(fit);
      });
    }

    function wire() {
      if (wired) return;
      wired = true;
      window.addEventListener('message', function (e) {
        if (e.origin !== VIMEO || e.source !== frame.contentWindow) return;
        var data;
        try { data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data; } catch (err) { return; }
        if (data && data.event === 'ready') {
          post('play');
          fit();
          setState('playing');
        }
      });
      frame.addEventListener('load', function () {
        if (!heroSrc) return;
        scheduleFit();
        window.setTimeout(function () {
          if (heroSrc && hero.getAttribute('data-hero-state') !== 'playing') {
            fit();
            setState('playing');
          }
        }, 2500);
      });
      window.addEventListener('resize', fit, { passive: true });
      window.addEventListener('load', scheduleFit, { once: true });
      if ('ResizeObserver' in window) {
        var ro = new ResizeObserver(function () { fit(); });
        ro.observe(stage);
      }
    }

    if (reduce || !vimeoId) {
      setState('static');
      return;
    }

    wire();
    scheduleFit();
    var url = VIMEO + '/video/' + encodeURIComponent(vimeoId) +
      '?background=1&autoplay=1&loop=1&muted=1&autopause=0&dnt=1&playsinline=1';
    if (url !== heroSrc) {
      heroSrc = url;
      setState('poster');
      frame.src = url;
      scheduleFit();
    }
  }

  function boot(el) {
    if (el.dataset.egmBooted === '1') return;
    el.dataset.egmBooted = '1';
    initHero(el);
    initReveals(el);
    initNile(el);
    initPyramids(el);
    initMarquee(el, '.egm-museum__track');
    initMarquee(el, '.egm-route__track');
    initLines(el, '#egm-journey .egm-line');
    initLines(el, '#egm-redsea .egm-line');
    initGods(el);
    initAbu(el);
    initTimeline(el);
    initQuick(el);
    window.__EGM_V6_READY__ = true;
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

  function scheduleStart() {
    start();
    window.addEventListener('load', start, { once: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scheduleStart);
  } else {
    scheduleStart();
  }

  window.addEventListener('resize', function () {
    if (isMobile() && root() && !root().dataset.egmReady) start();
  }, { passive: true });
})();
