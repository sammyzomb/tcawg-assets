(function () {
var R = document.getElementById('svo14e');
if (!R) return;
var D = document.documentElement;
var Q = function (s) { return [].slice.call(R.querySelectorAll(s)); };
var G = function (s) { return R.querySelector(s); };
var still = window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches;
var io = 'IntersectionObserver' in window;
var me = document.currentScript, GB = me ? me.src.replace(/\.js(\?.*)?$/, '-') : '';
var DL = (function (s, r) { return { s: s, r: r }; })([1,0.78,0.6084,0.4685,0.3514,0.2565,0.1795],[0.487,0.507,0.522,0.535,0.545,0.554,0.561]);
var dimg = function (k, i, c) { return '<img' + (c ? ' class="' + c + '"' : '') + ' src="' + GB + k + i + (k == 'p' ? '.webp' : '.svg') + '" alt="" width="' + Math.round(100 * DL.r[i]) + '" height="100">'; };
if (GB) {
if (!matchMedia('(max-width:820px)').matches) Q('.svo-step').forEach(function (e) {
var n = +e.dataset.n, h = '';
DL.s.forEach(function (sc, i) { h += '<i' + (i == n - 1 ? ' class="on"' : '') + ' style="--h:' + sc + '">' + dimg(i < n ? 'p' : 'w', i) + '</i>'; });
e.innerHTML = h;
});
Q('.svo-diy').forEach(function (e) {
var h = '';
DL.s.forEach(function (sc, i) { h += '<i style="--h:' + sc + ';--n:' + i + '">' + dimg('w', i) + dimg('p', i, 'p') + '</i>'; });
e.innerHTML = h;
});
}
var vw = function () { R.style.setProperty('--vw', D.clientWidth + 'px'); };
vw(); addEventListener('resize', vw);
R.classList.add('svo-js');
var tall = function () { return innerHeight > innerWidth; };
var mob = matchMedia('(max-width:820px)').matches;
var later = function (el, fn) {
if (!mob || !window.IntersectionObserver) return fn();
var o = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { o.disconnect(); fn(); } }, { rootMargin: '120% 100%' });
o.observe(el);
};
var topT = -1, botT = -1, mW = 0;
var probe = function (y, bottom) {
var el = document.elementFromPoint(innerWidth / 2, y), t = 0;
if (!el || R.contains(el)) return -1;
while (el && el !== document.body && el !== D) {
var ps = getComputedStyle(el).position, rc = el.getBoundingClientRect();
if (ps == 'fixed' || ps == 'sticky') t = Math.max(t, Math.round(bottom ? innerHeight - rc.top : rc.bottom));
el = el.parentElement;
}
return t > innerHeight / 3 ? 0 : t;
};
var measureTop = function () {
if (!mob) return;
if (mW != innerWidth) { mW = innerWidth; topT = botT = -1; }
if (topT <= 0) { var a = probe(4); if (a > 0) { topT = a; R.style.setProperty('--svo-top', a + 'px'); } }
if (botT <= 0) { var b = probe(innerHeight - 4, 1); if (b > 0) { botT = b; R.style.setProperty('--svo-bot', b + 'px'); } }
};
if (mob) {
measureTop(); addEventListener('load', measureTop); addEventListener('resize', measureTop);
var mt, mn = 0; addEventListener('scroll', function () { if ((topT > 0 && botT > 0) || mn > 12 || mt) return; mt = setTimeout(function () { mt = 0; mn++; measureTop(); }, 400); }, { passive: true });
}
Q('video[data-po]').forEach(function (v) { var u = (tall() && v.dataset.pp) || v.dataset.po; later(v, function () { v.poster = u; }); });
var VM = {"v02":["1249959874",426,240],"v01":["1249959875",240,300],"v02p":["1249959877",240,426],"v00":["1249959878",426,240],"v03p":["1249959924",240,426],"v03":["1249959925",426,240],"v04p":["1249959926",240,426],"v04":["1249959927",426,240],"v06p":["1249959953",240,426],"v06":["1249959954",426,240],"v07p":["1249959981",240,426],"v07":["1249959982",1280,720],"v09":["1249960011",426,240],"v09p":["1249960013",240,426],"v10p":["1249960014",240,426],"v10":["1249960016",426,240],"v11":["1249960032",426,240],"v11p":["1249960033",240,426],"v12":["1249960038",426,240],"v12p":["1249960042",240,426],"v13":["1249960047",426,240],"v13p":["1249960055",240,300],"v20":["1249960062",240,320],"v21":["1249960065",240,320],"v22":["1249960086",240,320],"v23":["1249960103",240,320],"v24":["1249960106",240,320],"v25":["1249960108",240,320],"v26":["1249960129",240,320],"v27":["1249960150",240,320],"v28":["1249960153",240,320],"v29":["1249960166",240,320],"v30":["1249960183",240,320],"v31":["1249960190",240,320],"v14":["1249591159",240,240],"v39":["1250211658",240,320],"v32":["1250217806",240,320],"v33":["1250217807",240,320],"v35":["1250217808",240,320],"v34":["1250217809",240,320],"v36":["1250217821",240,320],"v38":["1250217823",288,240],"v08":["1250537924",426,240],"v08p":["1250537928",240,426],"v05":["1250537926",426,240],"v05p":["1250537925",240,426]}, VO = 'https://player.vimeo.com';
var vmize = function (v, key) {
var k = key || v.dataset.v, m = (tall() && VM[k + 'p']) || VM[k];
if (!m || v.dataset.src) return v;
var w = document.createElement('div'), f = null, st = { p: true, mu: true, t: 0 };
w.className = (v.getAttribute('class') ? v.getAttribute('class') + ' ' : '') + 'svo-vmw';
if (v.dataset.v) w.dataset.v = v.dataset.v;
var vy = v.dataset.y && !tall() ? +v.dataset.y : -1;   // 電腦版畫面垂直對齊（0＝上緣），預設置中
if (vy >= 0) w.style.backgroundPosition = '50% ' + vy * 100 + '%';
w.setAttribute('role', 'img'); if (v.getAttribute('aria-label')) w.setAttribute('aria-label', v.getAttribute('aria-label'));
var tell = function (mt, val) { if (f && f.contentWindow) f.contentWindow.postMessage(JSON.stringify(val === undefined ? { method: mt } : { method: mt, value: val }), VO); };
w._fit = function () {
if (!f || w.classList.contains('is-full')) return;
var bw = w.clientWidth, bh = w.clientHeight, ar = m[1] / m[2], W = Math.max(bw, bh * ar), H = W / ar;
f.style.cssText = 'width:' + W + 'px;height:' + H + 'px;left:' + (bw - W) / 2 + 'px;top:' + (w.closest('.svo-shot--live') ? 0 : (bh - H) * (vy >= 0 ? vy : .5)) + 'px';
};
w._ready = function () { tell('setVolume', st.mu ? 0 : 1); if (st.t) tell('setCurrentTime', st.t); if (st.p) tell('pause'); };
Object.defineProperty(w, 'poster', { get: function () { return ''; }, set: function (u) { if (u) w.style.backgroundImage = 'url("' + u + '")'; } });
Object.defineProperty(w, 'src', { get: function () { return 'vimeo'; }, set: function () {} });
Object.defineProperty(w, 'paused', { get: function () { return st.p; } });
Object.defineProperty(w, 'muted', { get: function () { return st.mu; }, set: function (x) { st.mu = !!x; tell('setVolume', x ? 0 : 1); } });
Object.defineProperty(w, 'currentTime', { get: function () { return st.t; }, set: function (x) { st.t = x; tell('setCurrentTime', x); } });
w.play = function () {
st.p = false;
if (!f) {
f = document.createElement('iframe'); f.tabIndex = -1; f.setAttribute('aria-hidden', 'true'); f.title = '';
f.allow = 'autoplay; fullscreen; picture-in-picture';
f.src = VO + '/video/' + m[0] + '?background=1&autoplay=1&loop=1&muted=1&autopause=0&dnt=1';
w.appendChild(f); w._fit();
} else tell('play');
return Promise.resolve();
};
w.pause = function () { st.p = true; tell('pause'); };
w._full = function () {
if (f) w.removeChild(f);
f = document.createElement('iframe'); f.title = w.getAttribute('aria-label') || '';
f.allow = 'autoplay; fullscreen; picture-in-picture';
f.src = VO + '/video/' + m[0] + '?autoplay=1&muted=0&loop=1&playsinline=1&title=0&byline=0&portrait=0&dnt=1';
st.p = false; st.mu = false; w.classList.add('is-on', 'is-full'); w.appendChild(f);
};
var pu = (tall() && v.dataset.pp) || v.dataset.po || v.getAttribute('poster');
w.dataset.pu = v.dataset.po || v.getAttribute('poster') || '';
if (v.parentNode) v.parentNode.replaceChild(w, v);
later(w, function () { w.poster = pu; });
return w;
};
Q('video[data-v]').forEach(function (v) { vmize(v); });
addEventListener('resize', function () { Q('.svo-vmw').forEach(function (w) { w._fit(); }); });
var b0 = G('.svo-snd');
var hush = function (k) {
Q('.svo-yt__v iframe').forEach(function (f) { var a = f.parentNode; if (a != k) { a.replaceChild(a._im, f); a.classList.remove('on'); } });
var q = G('.svo-qzv'); if (q && q != k && !q.paused) q.pause();
Q('.svo-snd[aria-pressed="true"]').forEach(function (o) { if (o != k) snd(o, false); });
};
var CREW = [
[['v26', '莫斯科紅場', '領隊 馬筠家'], ['v28', '克里姆林宮 教堂廣場', '當地導遊'], ['v24', '莫斯科地鐵 新村站', '領隊 徐哈利'], ['v21', '伊茲麥洛夫市集', '領隊 張文譯'],
['v29', '弗拉基米爾 聖母升天大教堂', '當地導遊'], ['v22', '大諾夫哥羅德', '領隊 張文譯'], ['v31', '冬宮 1812年戰爭畫廊', '領隊 張文譯'], ['v27', '冬宮 聖喬治廳', '當地導遊'],
['v25', '彼得夏宮大宮殿', '領隊 徐哈利'], ['v23', '彼得夏宮上花園', '領隊 徐哈利'], ['v32', '葉卡捷琳娜宮 綠色餐廳', '領隊 徐哈利'], ['v20', '葉卡捷琳娜宮', '領隊 張文譯']],
[['v33', '午後的紅場', '領隊 許家樸'], ['v34', '莫斯科 現切大餅', '隨團領隊'], ['v36', '運河盡頭的滴血教堂', '領隊 張文譯']]
];
var cp = G('.svo-crew'), VS = window.svoV || {};
Q('.svo-crew__l').forEach(function (ul) {
var f = ul.dataset.l == '1';
CREW[+ul.dataset.l].forEach(function (c) {
var li = document.createElement('li'), v = document.createElement('video'), t = document.createElement('b'), src = VS[c[0]];
t.textContent = c[1]; li.appendChild(t); li.appendChild(document.createTextNode(c[2]));
var pu = cp.dataset.p + c[0] + '.jpg';
v.muted = true; v.loop = true; v.preload = 'none'; v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
v.dataset.v = c[0]; if (src) v.dataset.src = src;
v.setAttribute('aria-label', c[1] + '，' + c[2] + (f ? '拍的影片' : '，在現場拍的影片'));
li.insertBefore(v, li.firstChild); v = vmize(v);
(function (x) { if (x.dataset) x.dataset.pu = pu; later(ul, function () { x.poster = pu; }); })(v);   // 整排卡片接近時一起載入封面（左右滑時不會空白）
if ((src || v._fit) && b0) { var b = b0.cloneNode(true); b.lastChild.textContent = f ? '聽現場聲音' : '聽現場講解'; li.appendChild(b); }
li._c = c; li._src = src; li._f = f;
ul.appendChild(li);
});
});
var RT = [
['彩虹下的紅場，克里姆林宮救世主塔與聖瓦西里大教堂', '弗拉基米爾的金色凱旋門', '空拍蘇茲達爾基督誕生大教堂的藍底金星圓頂與古城'],
['雅羅斯拉夫的先知伊利亞教堂', '羅斯托夫的修道院倒映在涅羅湖上', '謝爾吉耶夫鎮聖三一修道院的聖母升天大教堂，藍底金星圓頂與金色主圓頂'],
['大諾夫哥羅德的聖索菲亞大教堂', '千年俄羅斯紀念碑與聖索菲亞大教堂', '加特契納大宮殿'],
['彼得夏宮大宮殿與大瀑布噴泉，金色雕像沿著水道排開', '什利謝利堡的石牆與圓塔，隔著湖水', '葉卡捷琳娜宮琥珀廳的牆角，琥珀鑲板與金色雕飾']
];
var RTF = ['abe', 'abd', 'abc', 'def'];   // 各段三張圖的檔名字尾（預設 a、b、c；換過圖的用新字尾，避免瀏覽器讀到舊圖）
var ip = cp ? cp.dataset.p.replace('crew-', '') : '';
var rhd = G('.svo-route__hd');
if (rhd) { var gn = document.createElement('p'); gn.className = 'svo-route__gr'; gn.innerHTML = '<b>「金環」名稱的由來</b>1967 年，蘇聯記者兼作家尤里・比奇科夫走訪莫斯科周邊的古老城鎮，把沿途見聞寫成系列文章，題為「俄羅斯金環」（<span lang="ru">Золотое кольцо России</span>），後來成為這條旅遊路線的名稱。'; rhd.appendChild(gn); }
Q('.svo-route__leg').forEach(function (lg, i) {
if (!RT[i] || !cp) return;
var d = document.createElement('div'); d.className = 'svo-route__ph';
RT[i].forEach(function (a, j) {
var im = document.createElement('img');
im.loading = 'lazy'; im.src = ip + 'rt-' + (i + 1) + (RTF[i] || 'abc')[j] + '.jpg'; im.alt = a; im.width = 600; im.height = 400;
d.appendChild(im);
});
lg.appendChild(d);
});
var end = G('.svo-end');
if (end && cp) {
var eb = document.createElement('div'); eb.className = 'svo-end__bg'; eb.setAttribute('aria-hidden', 'true');
['l1-red-square', 'l2-card-ascension', 'l3-card-vladimir', 'l4-card-elijah', 'l5-card-trinity', 'l6-card-kremlin', 'l7-card-palace-sq'].forEach(function (n) {
var im = document.createElement('img'); im.loading = 'lazy'; im.src = ip + n + '.jpg'; im.alt = ''; eb.appendChild(im);
});
end.insertBefore(eb, end.firstChild);
}
var qf = G('.svo-crew__l--f');
if (qf && cp) {
var qz = document.createElement('div'); qz.className = 'svo-qz';
qz.innerHTML = '<div><video class="svo-qzv" playsinline preload="none" aria-label="女孩走上彼得夏宮花園的石頭地，水柱突然從地面噴出"></video></div><div><p class="svo-qz__k">謎題｜彼得夏宮花園</p>'
+ '<p class="svo-qz__q">她正走上這片石頭地，<br>下一秒會發生什麼事？</p><div class="svo-qz__o">'
+ '<button type="button"><b>A</b>什麼事都沒有</button><button type="button"><b>B</b>石頭會發出音樂</button><button type="button"><b>C</b>地上噴出水柱</button></div>'
+ '<p class="svo-qz__a" aria-live="polite"></p><p class="svo-credit">影片：領隊 張文譯 拍攝</p></div>';
var qv = qz.querySelector('video'), qa = qz.querySelector('.svo-qz__a'), qs = VS.v39;
var qpu = cp.dataset.p + 'v39.jpg';
if (!qs) qv = vmize(qv, 'v39');
qv.dataset.pu = qpu; later(qv, function () { qv.poster = qpu; });
qz.querySelectorAll('button').forEach(function (bt, i) {
bt.addEventListener('click', function () {
qz.querySelectorAll('button').forEach(function (o, j) { o.className = j == 2 ? 'ok' : j == i ? 'no' : ''; });
qa.innerHTML = (i == 2 ? '<b>答對了！</b>' : '<b>答案是 C。</b>') + '石頭地底下藏著噴水孔，有人走上去時，水柱會突然從腳邊噴出來。彼得夏宮的花園裡還藏著好幾座這種捉弄人的「惡作劇噴泉」，走過時記得留意腳下。';
hush(qv);
if (qs || qv.play && qv.className.indexOf('svo-vmw') >= 0) { if (!qv.src) qv.src = qs; qv.muted = false; qv.currentTime = 0; var p = qv.play(); if (p && p.catch) p.catch(function () {}); }
});
});
qf.parentNode.insertBefore(qz, qf);
}
var snd = function (b, on) {
var c = b.closest('.svo-shot,.svo-crew__l li'), v = c.querySelector('video,.svo-vmw');
if (!b.dataset.l) b.dataset.l = b.lastChild.textContent;
if (on && c.tagName == 'LI') {   // 一次只聽一位領隊：其他卡片關聲音，這支從頭講
Q('.svo-crew .svo-snd[aria-pressed="true"]').forEach(function (o) { if (o != b) snd(o, false); });
v.currentTime = 0;
}
if (on) hush(b);
v.muted = !on; b.setAttribute('aria-pressed', on ? 'true' : 'false');
b.lastChild.textContent = on ? '關閉聲音' : b.dataset.l;
if (on) {
if (mob && v._full) { v._full(); return; }
if (!v.src && v.dataset.src) v.src = (tall() && v.dataset.srcp) || v.dataset.src; var p = v.play(); if (p && p.catch) p.catch(function () {});
}
};
Q('.svo-snd').forEach(function (b) {
b.addEventListener('click', function () {
if (mob && b.closest('.svo-crew__l')) return lbOpen(b.closest('li'));
snd(b, b.getAttribute('aria-pressed') != 'true');
});
});
if (!mob) Q('.svo-crew__l li').forEach(function (li) {
var vid = function () { return li.querySelector('video,.svo-vmw'); };
var on = function () {
var v = vid(); if (!v) return;
if (!v.src && v.dataset.src) v.src = v.dataset.src;
var p = v.play(); if (p && p.catch) p.catch(function () {});
};
var off = function () {
var v = vid(), b = li.querySelector('.svo-snd');
if (!v || (b && b.getAttribute('aria-pressed') == 'true')) return;
v.pause();
};
li.addEventListener('mouseenter', on); li.addEventListener('mouseleave', off);
li.addEventListener('focusin', on); li.addEventListener('focusout', function (e) { if (!li.contains(e.relatedTarget)) off(); });
});
var lb = null, lbList = [], lbI = 0;
var lbShow = function () {
var li = lbList[lbI], c = li._lb ? [0, li._lb.title, ''] : li._c, m = li._lb ? [li._lb.id] : VM[c[0]], wide = !!li._lb, box = lb.querySelector('.svo-lb__v');
box.innerHTML = ''; box.classList.toggle('is-wide', wide);
lb.querySelector('.svo-lb__h').hidden = !(m && !li._src);   // 只有 Vimeo 播放器需要這行提示（Unmute 是 Vimeo 的字，網頁改不到）
if (m && !li._src) {
var f = document.createElement('iframe'); f.title = c[1];
f.allow = 'autoplay; fullscreen; picture-in-picture'; f.allowFullscreen = true;
f.src = VO + '/video/' + m[0] + '?autoplay=1&muted=0' + (wide ? '' : '&loop=1') + '&playsinline=1&title=0&byline=0&portrait=0&dnt=1' + (wide && li._lb.t ? '#t=' + li._lb.t + 's' : '');
box.appendChild(f);
} else if (li._src) {
var v = document.createElement('video'); v.src = li._src; v.controls = true; v.autoplay = true; v.setAttribute('playsinline', '');
box.appendChild(v); var pp = v.play(); if (pp && pp.catch) pp.catch(function () {});
}
lb.querySelector('.svo-lb__t').textContent = c[1];
lb.querySelector('.svo-lb__w').textContent = c[2];
lb.querySelector('.svo-lb__n').textContent = (lbI + 1) + ' / ' + lbList.length;
};
var lbClose = function () {
if (!lb || lb.hidden) return;
lb.querySelector('.svo-lb__v').innerHTML = ''; lb.hidden = true; D.style.overflow = ''; scrollTo(0, lb._y);   // 回到打開前的位置，頁面不跳
if (lb._from) lb._from.focus({ preventScroll: true });
};
var lbOpen = function (li) {
if (!lb) {
lb = document.createElement('div'); lb.className = 'svo-lb'; lb.hidden = true;
lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', '影片播放');
lb.innerHTML = '<button type="button" class="svo-lb__x" aria-label="關閉">×</button><div class="svo-lb__v"></div><p class="svo-lb__h">沒有聲音時，請點影片上的「Unmute」開啟聲音</p>'
+ '<div class="svo-lb__tx"><b class="svo-lb__t"></b><span class="svo-lb__w"></span></div>'
+ '<div class="svo-lb__nav"><button type="button" class="svo-lb__p" aria-label="上一支">‹</button><span class="svo-lb__n"></span><button type="button" class="svo-lb__q" aria-label="下一支">›</button></div>';
R.appendChild(lb);
lb.querySelector('.svo-lb__x').addEventListener('click', lbClose);
lb.querySelector('.svo-lb__p').addEventListener('click', function () { lbI = (lbI + lbList.length - 1) % lbList.length; lbShow(); });
lb.querySelector('.svo-lb__q').addEventListener('click', function () { lbI = (lbI + 1) % lbList.length; lbShow(); });
lb.addEventListener('click', function (e) { if (e.target === lb) lbClose(); });
document.addEventListener('keydown', function (e) { if (e.key == 'Escape') lbClose(); });
}
hush(null);
lbList = [].slice.call(li.parentNode.children); lbI = lbList.indexOf(li);
lb._from = li.querySelector('.svo-snd,a'); lb._y = pageYOffset; lb.hidden = false; D.style.overflow = 'hidden';
lbShow(); lb.querySelector('.svo-lb__x').focus({ preventScroll: true });
};
if (mob) Q('.svo-crew__l li').forEach(function (li) {
var w = li.querySelector('.svo-vmw,video'); if (!w) return;
w.style.cursor = 'pointer'; w.addEventListener('click', function () { lbOpen(li); });
});
var cl = function (v) { return v < 0 ? 0 : v > 1 ? 1 : v; };
var hero = G('.svo-hero'), gate = G('.svo-gate'), art = gate && gate.querySelector('.art'), ta = G('.svo-hero__a'), tb = G('.svo-hero__b');
var hp = 0, ht = 0;
var scenes = Q('.svo-scene').map(function (sc) {
var shots = [].slice.call(sc.querySelectorAll('.svo-shot'));
return { el: sc, shots: shots, img: shots.map(function (s) { return s.querySelector(':scope>img,:scope>video,:scope>.svo-vmw'); }), tx: shots.map(function (s) { return s.querySelector('.svo-shot__tx'); }),
n: sc.querySelector('.svo-hud b'), bar: sc.querySelector('.svo-hud__bar i'), last: -1, x: 0, t: 0, p: 0 };
});
var measure = function () {
var vh = innerHeight, r;
if (hero) { r = hero.getBoundingClientRect(); if (r.height > vh) ht = cl(-r.top / (r.height - vh)); }
scenes.forEach(function (s) {
var k = s.shots.length; r = s.el.getBoundingClientRect();
s.vis = r.bottom > -vh && r.top < vh * 2;
var p = k > 1 ? cl(-r.top / ((k - 1) * vh)) : 0, X = p * (k - 1), i0 = Math.floor(X), f = X - i0;
var e = f < .45 ? 0 : (f - .45) / .55; e = e * e * (3 - 2 * e);
s.t = i0 + e; s.p = p;
});
};
var paint = function () {
if (gate) {
var p = hp, s0 = innerHeight > innerWidth ? 1.7 : 1;
gate.style.transform = 'scale(' + (s0 * (1 + 17 * Math.pow(cl(p / .8), 2.4))).toFixed(3) + ')';
gate.style.willChange = 'transform,opacity'; clearTimeout(gate._rt);
gate._rt = setTimeout(function () { gate.style.willChange = 'auto'; }, 150);
gate.style.opacity = cl((.86 - p) / .1);
if (art) art.style.opacity = cl((.62 - p) / .14);   // 彩繪層（含套娃的頭）先淡掉，頭巾不會留在大標題上方
ta.style.opacity = cl(1 - p / .22);
tb.classList[p > .6 ? 'add' : 'remove']('on');
}
scenes.forEach(function (s) {
if (!s.vis) return;
var x = s.x;
s.shots.forEach(function (sh, i) {
if (i) sh.style.opacity = cl(x - (i - 1)).toFixed(3);
if (s.img[i]) s.img[i].style.transform = 'scale(' + (1.02 + .1 * cl((x - i + 1) / 2)).toFixed(4) + ')';
if (s.tx[i]) { s.tx[i].style.opacity = cl(1 - Math.abs(x - i) * 2.4).toFixed(3); s.tx[i].style.transform = 'translateY(' + ((i - x) * 50).toFixed(1) + 'px)'; }
});
var cur = Math.round(x);
if (cur != s.last) {
if (s.n) s.n.textContent = cur + 1;
s.shots.forEach(function (sh, i) {
sh.classList[i == cur ? 'add' : 'remove']('on');
var v = sh.querySelector(':scope>video,:scope>.svo-vmw');
if (v) {
if ((i == cur || i == cur + 1) && !v.src && v.dataset.src) v.src = (tall() && v.dataset.srcp) || v.dataset.src;
if (i == cur && !still && v.src) { var pp = v.play(); if (pp && pp.catch) pp.catch(function () {}); } else v.pause();
}
var b = i != cur && sh.querySelector('.svo-snd');   // 換到別的鏡頭就把聲音關掉
if (b && b.getAttribute('aria-pressed') == 'true') snd(b, false);
});
s.last = cur;
}
if (s.bar) s.bar.style.transform = 'scaleX(' + s.p.toFixed(3) + ')';
});
};
var raf = 0;
var loop = function () {
raf = 0;
var busy = Math.abs(ht - hp) > .0004; hp += (ht - hp) * .12;
scenes.forEach(function (s) { if (Math.abs(s.t - s.x) > .0004) busy = 1; s.x += (s.t - s.x) * .12; });
paint();
if (busy) raf = requestAnimationFrame(loop);
};
var kick = function () { measure(); if (!raf) raf = requestAnimationFrame(loop); };
if (!still) {
addEventListener('scroll', kick, { passive: true });
addEventListener('resize', kick);
measure(); hp = ht; scenes.forEach(function (s) { s.x = s.t; }); paint();
} else {
if (tb) tb.classList.add('on');
scenes.forEach(function (s) { s.shots.forEach(function (sh) { sh.classList.add('on'); }); });
}
var st = G('.svo-hero__st');
if (st && io && !still) {
var ld = document.createElement('div'); ld.className = 'svo-ld'; ld.setAttribute('aria-hidden', 'true'); ld.innerHTML = '<b>3</b><i></i>'; st.appendChild(ld);
var lo = new IntersectionObserver(function (es) {
if (!es[0].isIntersecting) return;
lo.disconnect(); ld.classList.add('go');
var b = ld.firstChild, c = 3, tm = setInterval(function () { c--; if (c > 0) b.textContent = c; else { clearInterval(tm); ld.classList.add('out'); setTimeout(function () { ld.remove(); }, 800); } }, 420);
}, { threshold: .5 });
lo.observe(st);
}
var rv = Q('.svo-intro .svo-cap,.svo-intro__p,.svo-cred li,.svo-board__hd,.svo-board__l li');
rv.forEach(function (e, i) { e.classList.add('svo-rv'); if (e.tagName == 'LI') e.style.transitionDelay = (i % 4) * 90 + 'ms'; });
if (!io || still) rv.forEach(function (e) { e.classList.add('in'); });
else {
var ro = new IntersectionObserver(function (es) {
es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); ro.unobserve(x.target); } });
}, { rootMargin: '0px 0px -10% 0px' });
rv.forEach(function (e) { ro.observe(e); });
}
var VMS = [['1248593554', 'a7', '在聖彼得堡，走進宮殿'], ['1249958935', 'yt1', '莫斯科'], ['1249958937', 'yt2', '聖彼得堡', 6],
['1249958939', 'yt3', '聖彼得堡・夏宮'], ['1249958938', 'yt4', '舌尖上的俄羅斯'], ['1249959102', 'yt5', '俄羅斯的冬季交響樂']];
Q('.svo-yt__l').forEach(function (ul) {
VMS.forEach(function (c) {
var li = document.createElement('li'), a = document.createElement('a'), t = document.createElement('b');
a.className = 'svo-yt__v'; a.href = 'https://vimeo.com/' + c[0]; a.dataset.p = c[1]; if (c[3]) a.dataset.t = c[3];
t.textContent = c[2]; a.appendChild(t); li.appendChild(a); ul.appendChild(li);
li._lb = { id: c[0], title: c[2], t: c[3] };
});
});
var TEL = [['台北', '02-7741-5198', '+886277415198'], ['台中', '04-3509-3955', '+886435093955'], ['高雄', '07-9735-398', '+88679735398']];
var root = document.getElementById('svo14e') || document.body, qk = document.createElement('nav');
qk.className = 'svo-quick'; qk.setAttribute('aria-label', '快速聯絡與工具');
qk.innerHTML = '<button type="button" class="svo-quick__t" aria-label="聯絡我們與快速工具" aria-expanded="false">聯絡</button>'
+ '<a href="https://lin.ee/VmT3y1Bv" target="_blank" rel="noopener noreferrer" aria-label="用 LINE 諮詢">LINE</a>'
+ TEL.map(function (t) { return '<a href="tel:' + t[2] + '" aria-label="撥打' + t[0] + ' ' + t[1] + '">' + t[0] + '</a>'; }).join('')
+ '<button type="button" data-q="s" aria-label="分享此頁">分享</button><a href="/TRAVEL/favourites.html">最愛</a><a href="/TRAVEL/planning.html">客製</a>'
+ '<button type="button" data-q="u" aria-label="回到頂部">頂部</button>';
root.appendChild(qk);
var qt = qk.querySelector('.svo-quick__t'), qm, hv = matchMedia('(hover:hover) and (pointer:fine)');
var qo = function (o) { qk.classList.toggle('is-open', o); qt.setAttribute('aria-expanded', o ? 'true' : 'false'); };
qt.addEventListener('click', function () { qo(hv.matches || !qk.classList.contains('is-open')); });
qk.addEventListener('mouseenter', function () { if (hv.matches) { clearTimeout(qm); qo(true); } });
qk.addEventListener('mouseleave', function () { if (hv.matches) qm = setTimeout(function () { qo(false); }, 350); });
document.addEventListener('click', function (e) { if (!qk.contains(e.target)) qo(false); });
document.addEventListener('keydown', function (e) { if (e.key == 'Escape') qo(false); });
qk.querySelector('[data-q="s"]').addEventListener('click', function () {
qo(false); var u = location.href;
if (navigator.share) navigator.share({ title: document.title, url: u }).catch(function () {});
else { if (navigator.clipboard) navigator.clipboard.writeText(u); prompt('此頁連結', u); }
});
qk.querySelector('[data-q="u"]').addEventListener('click', function () { qo(false); scrollTo({ top: 0, behavior: 'smooth' }); });
if (mob) {
var qd;
addEventListener('scroll', function () {
if (qk.classList.contains('is-open')) return;
qk.classList.add('is-dim'); clearTimeout(qd);
qd = setTimeout(function () { qk.classList.remove('is-dim'); }, 700);
}, { passive: true });
}
var ec = G('.svo-end__c');
if (ec) {
var t0 = ec.querySelector('a[href^="tel:"]'); if (t0) t0.textContent = '台北 ' + TEL[0][1];
TEL.slice(1).forEach(function (t) { var a = document.createElement('a'); a.href = 'tel:' + t[2]; a.textContent = t[0] + ' ' + t[1]; ec.appendChild(a); });
}
var FAQ = [
['這個行程會走訪哪些世界遺產？', '七項 UNESCO 世界文化遺產：莫斯科克里姆林宮與紅場、卡洛明斯科婭耶穌升天教堂、弗拉基米爾與蘇茲達爾白石古蹟群、雅羅斯拉夫歷史中心、謝爾吉耶夫鎮聖三一修道院建築群、大諾夫哥羅德及周邊歷史古蹟、聖彼得堡歷史中心及相關建築群；另外安排葉卡捷琳娜宮與琥珀廳。'],
['什麼是俄羅斯金環？', '俄羅斯金環（Золотое кольцо России）是位於莫斯科東北部、串聯古羅斯歷史古城的主題旅遊路線，以 12 至 18 世紀的東正教教堂、修道院、克里姆林宮與傳統工藝聞名。本行程走訪其中的弗拉基米爾、蘇茲達爾、伊萬諾沃、科斯特羅馬、雅羅斯拉夫、羅斯托夫與謝爾吉耶夫鎮。'],
['要怎麼飛？需要轉機嗎？', '參考航班為東方航空，去回程都經上海轉機：去程當晚先住上海機場附近的酒店，隔天再飛莫斯科；回程從聖彼得堡經上海回台北。實際航班以出團公告為準。'],
['住宿安排如何？要常常換飯店嗎？', '莫斯科住 3 晚（Izmailovo Vega 或同級），聖彼得堡連住 4 晚（Cosmos Pulkovskaya 或同級），不必天天整理行李。團費以兩人一室計價，單人參團可指定單人房並補房差。實際入住以行前確認為準。'],
['團費包含哪些？簽證要自己辦嗎？', '團費包含團體經濟艙機票與燃油附加費、簽證、兩人一室住宿、行程所列餐食、遊覽車與門票、旅遊契約責任險 500 萬與意外醫療險 20 萬，以及領隊、導遊、司機小費。不含護照與台胞證辦理、飯店床頭與行李小費、網路卡、洗衣與個人開支。'],
['餐食吃什麼？', '以俄式風味料理搭配中式七菜一湯為主，其中一晚品嚐烏茲別克風味料理。當地的水要煮沸再喝，建議自備保溫瓶，可在飯店餐廳或火車上裝水。'],
['錢怎麼帶？手機怎麼充電？', '國外發行的信用卡目前無法在俄羅斯使用，請備妥足夠的現金。建議在台灣先換好美金或歐元，到當地銀行或飯店兌換盧布，路邊匯兌亭手續費高。俄羅斯電壓 220 伏特，插頭為兩孔圓柱型。']
];
var vmS = G('.svo-vm') || G('.svo-end');
if (vmS) {
var fq = document.createElement('section'); fq.className = 'svo-yt svo-faq';
fq.innerHTML = '<p class="svo-cap">常見問題</p><h3 class="svo-h">出發前，<wbr>你可能想知道</h3><div class="svo-faq__l">'
+ FAQ.map(function (q, i) { return '<details' + (i ? '' : ' open') + '><summary>' + q[0] + '</summary><p>' + q[1] + '</p></details>'; }).join('') + '</div>'
+ '<p class="svo-faq__n">以上依本行程的團費說明與旅遊須知整理，實際內容以出團公告與行前說明會資料為準。</p>';
vmS.parentNode.insertBefore(fq, vmS);
var ldj = document.createElement('script'); ldj.type = 'application/ld+json';
ldj.textContent = JSON.stringify([
{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map(function (q) { return { '@type': 'Question', name: q[0], acceptedAnswer: { '@type': 'Answer', text: q[1] } }; }) },
{ '@context': 'https://schema.org', '@type': 'TouristTrip', name: '莫斯科大金環 聖彼得堡大銀環 古城小資 14日', url: 'https://www.tcawg.com/travel/tours/SVO14E',
description: '14 天從莫斯科克里姆林宮與紅場出發，走訪弗拉基米爾、蘇茲達爾、雅羅斯拉夫等金環古城與大諾夫哥羅德，最後到聖彼得堡與葉卡捷琳娜宮琥珀廳，串聯俄羅斯 7 項 UNESCO 世界文化遺產。莫斯科住 3 晚、聖彼得堡連住 4 晚。',
touristType: '世界遺產、文化古蹟', image: G('.svo-shot img') ? G('.svo-shot img').src : undefined,
itinerary: { '@type': 'ItemList', itemListElement: FAQ[0][1].split('：')[1].split('；')[0].replace(/。$/, '').split('、').map(function (n, i) { return { '@type': 'ListItem', position: i + 1, item: { '@type': 'TouristAttraction', name: n } }; }) },
provider: { '@type': 'TravelAgency', name: '鄉野旅行社（航向世界旅遊）', url: 'https://www.tcawg.com/', telephone: '+886-2-7741-5198',
address: { '@type': 'PostalAddress', streetAddress: '南京東路三段215號5樓', addressLocality: '台北市中山區', addressCountry: 'TW' } } }
]);
document.head.appendChild(ldj);
}
var stx = G('.svo-shot--story .svo-shot__tx');
if (stx) { var cr = document.createElement('p'); cr.className = 'svo-credit'; cr.textContent = '照片：隨團領隊 拍攝'; stx.appendChild(cr); }
var loadAll = function () {
Q('img').forEach(function (i) { i.loading = 'eager'; });
Q('.svo-faq details').forEach(function (d) { d.open = true; });
Q('.svo-vmw,video').forEach(function (w) {
var u = w.dataset.pu || w.dataset.po || w.getAttribute('poster');
if (!u || (w.nextElementSibling && w.nextElementSibling.className == 'svo-pimg') || w.querySelector('.svo-pimg')) return;
var im = document.createElement('img'); im.className = 'svo-pimg'; im.alt = ''; im.src = u;
if (w.tagName == 'VIDEO') w.parentNode.insertBefore(im, w.nextSibling); else w.appendChild(im);
});
var qa0 = G('.svo-qz__a'); if (qa0 && !qa0.textContent) qa0.innerHTML = '<b>答案：地上噴出水柱。</b>石頭地底下藏著噴水孔，有人走上去時，水柱會突然從腳邊噴出來。';
};
addEventListener('beforeprint', loadAll);
if (/action=print/.test(location.search) || R.closest('#travel-print')) {
loadAll();
var op = window.print;
window.print = function () {
var w = Q('img').filter(function (i) { return !i.complete; }), n = w.length, go = function () { op.call(window); }, tm;
if (!n) return go();
tm = setTimeout(go, 20000);
w.forEach(function (i) { var d = function () { if (--n <= 0) { clearTimeout(tm); go(); } }; i.addEventListener('load', d); i.addEventListener('error', d); });
};
}
Q('.svo-crew__l,.svo-yt__l').forEach(function (ul) {
var h = document.createElement('p'); h.className = 'svo-swipe'; h.setAttribute('aria-hidden', 'true'); h.textContent = '左右滑動，看更多 →';
ul.parentNode.insertBefore(h, ul.nextSibling);
});
Q('.svo-yt__v').forEach(function (a) {
var id = a.href.split(/v=|vimeo\.com\//)[1], vm = /vimeo/.test(a.href) && id;
a.target = '_blank'; a.rel = 'noopener';
var im = document.createElement('img'); im.src = vm ? a.parentNode.parentNode.dataset.p + a.dataset.p + '.jpg' : 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg'; im.alt = ''; im.loading = 'lazy'; im.width = 480; im.height = 360;
im.onerror = function () { im.onerror = null; im.src = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27/%3E"; };
a.insertBefore(im, a.firstChild); a._im = im;
a.addEventListener('click', function (e) {
if (mob && vm) { e.preventDefault(); return lbOpen(a.parentNode); }   // 手機：跳出大畫面播放
if (a.classList.contains('on')) return;
e.preventDefault(); hush(a); a.classList.add('on');
var f = document.createElement('iframe');
f.src = vm ? 'https://player.vimeo.com/video/' + vm + '?autoplay=1&dnt=1&title=0&byline=0&portrait=0' + (a.dataset.t ? '#t=' + a.dataset.t + 's' : '') : 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&enablejsapi=1' + (a.dataset.t ? '&start=' + a.dataset.t : '');
f.title = a.textContent; f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen'; f.allowFullscreen = true;
if (!vm) f.onload = function () { f.contentWindow.postMessage('{"event":"listening","id":1}', '*'); };
a.replaceChild(f, a._im);
});
});
addEventListener('message', function (e) {
if (!/youtube-nocookie\.com|vimeo\.com/.test(e.origin)) return;
var d; try { d = typeof e.data == 'string' ? JSON.parse(e.data) : e.data; } catch (x) { return; }
if (d && d.event == 'ready' && /vimeo/.test(e.origin)) {
var bw = Q('.svo-vmw iframe').filter(function (f) { return f.contentWindow === e.source; })[0];
if (bw) {
bw.parentNode._ready();
['play', 'playing', 'timeupdate'].forEach(function (x) { e.source.postMessage(JSON.stringify({ method: 'addEventListener', value: x }), e.origin); });
return;
}
e.source.postMessage('{"method":"addEventListener","value":"ended"}', e.origin);
e.source.postMessage('{"method":"addEventListener","value":"finish"}', e.origin);
return;
}
if (d && /^(play|playing|timeupdate)$/.test(d.event)) {
Q('.svo-vmw iframe').forEach(function (f) { if (f.contentWindow === e.source) { f.parentNode.classList.add('is-on'); f.contentWindow.postMessage('{"method":"removeEventListener","value":"timeupdate"}', e.origin); } });
return;
}
if (!d || !(d.info && d.info.playerState === 0 || d.event == 'ended' || d.event == 'finish')) return;
Q('.svo-yt__v iframe').forEach(function (f) {
if (f.contentWindow !== e.source) return;
var a = f.parentNode; a.replaceChild(a._im, f); a.classList.remove('on');
});
});
var rt = G('.svo-route');
var rtGo = function (t) {
var box = G('.svo-route__map'), cam = G('.svo-route__cam'), NS = 'http://www.w3.org/2000/svg';
if (t) cam.insertAdjacentHTML('beforeend', t);
var svg = G('.svo-route__svg'), me = G('.svo-route__me'), legs = Q('.svo-route__leg');
cam.appendChild(svg);   // 路線層一定要疊在底圖上面
var df = document.createElementNS(NS, 'defs'); svg.insertBefore(df, svg.firstChild);
var L = Q('.svo-route__ln').map(function (p, i) {
var m = document.createElementNS(NS, 'mask'), k = p.cloneNode();
k.setAttribute('class', 'svo-route__mk'); m.id = 'svo-rm' + i; m.setAttribute('maskUnits', 'userSpaceOnUse');
m.appendChild(k); df.appendChild(m); p.setAttribute('mask', 'url(#svo-rm' + i + ')');
var n = p.getTotalLength(), S = [], j;
for (j = 0; j <= 160; j++) S.push(p.getPointAtLength(n * j / 160));
var st = Q('.svo-route__st[data-g="' + (i + 1) + '"]').map(function (e) {
var c = e.getAttribute('transform').match(/[-\d.]+/g), x = +c[0], y = +c[1], b = 0, bd = 1e9;
S.forEach(function (q, h) { var d = (q.x - x) * (q.x - x) + (q.y - y) * (q.y - y); if (d < bd) { bd = d; b = h; } });
return { e: e, f: b / 160 };
});
var xs = S.map(function (q) { return q.x; }), ys = S.map(function (q) { return q.y; });
return { p: p, k: k, n: n, st: st, bb: [Math.min.apply(0, xs), Math.min.apply(0, ys), Math.max.apply(0, xs), Math.max.apply(0, ys)], f: -1 };
});
var cur = null, tw = 0, on = -2;
function view(i) {
var b = i < 0 ? [0, 0, 588, 436] : L[i].bb, w = box.clientWidth, h = box.clientHeight, P = i < 0 ? 0 : Math.min(60, w * .1), s0 = Math.min(w / 588, h / 436),
z = Math.max(s0, Math.min(w / (b[2] - b[0] + P * 2), h / (b[3] - b[1] + P * 2), s0 * 7));
return { z: z, x: w / 2 - z * (b[0] + b[2]) / 2, y: h / 2 - z * (b[1] + b[3]) / 2 };
}
function put(v) {
cam.style.transform = 'translate(' + v.x.toFixed(1) + 'px,' + v.y.toFixed(1) + 'px) scale(' + v.z.toFixed(4) + ')';
cam.style.setProperty('--z', v.z.toFixed(4));
L.forEach(function (o) { o.p.style.strokeWidth = 2 / v.z; o.p.style.strokeDasharray = (6 / v.z) + ' ' + (4 / v.z); o.k.style.strokeWidth = 14 / v.z; });
}
function go(v) {
if (!cur || still) { cur = v; put(v); return; }
var a = cur, t0 = performance.now(); cancelAnimationFrame(tw);
(function f(t) {
var k = Math.min(1, (t - t0) / 1100), e = k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
cur = { x: a.x + (v.x - a.x) * e, y: a.y + (v.y - a.y) * e, z: Math.exp(Math.log(a.z) + (Math.log(v.z) - Math.log(a.z)) * e) };
put(cur); if (k < 1) tw = requestAnimationFrame(f);
})(t0);
}
var lc = G('.svo-route__legs');
function draw() {
var h = innerHeight, act = 0, tip = null, q = null;
if (!still && getComputedStyle(lc).position === 'sticky') {
var sr = rt.getBoundingClientRect(), cs = getComputedStyle(rt), sp = parseFloat(getComputedStyle(rt, '::after').height) || h * 3, U = sp / legs.length;
var top0 = sr.bottom - parseFloat(cs.paddingBottom) - sp - lc.offsetHeight;
q = (parseFloat(getComputedStyle(lc).top) - top0) / U;   // 還沒黏住時是負的，往上捲進來時路線先開始畫
}
legs.forEach(function (l, i) {
var r = l.getBoundingClientRect(), f = still ? 1 : q !== null ? Math.min(1, Math.max(0, (q - i + .2) / .7)) : Math.min(1, Math.max(0, (h * .72 - r.top) / Math.max(200, r.height * .7))), o = L[i];
if (q !== null ? q >= i - .05 : r.top < h * .74) act = i;
if (f !== o.f) {
o.f = f; o.k.style.strokeDasharray = o.n + ' ' + o.n; o.k.style.strokeDashoffset = o.n * (1 - f);
o.st.forEach(function (s) { s.e.classList.toggle('is-on', f > 0 && f >= s.f - .02); });
}
if (f > 0 && f < 1) tip = o.p.getPointAtLength(o.n * f);
});
var tx = q !== null && q > legs.length - .12 ? -1 : act;   // 手機：段落快捲完時最後一頁先淡出，不會被地圖切到一半
legs.forEach(function (l, i) { l.classList.toggle('is-on', i === tx); });   // 先算出目前是哪一段，再一次切換，避免前一段也亮著
if (still) act = -1;
if (act !== on) { on = act; svg.setAttribute('data-on', act + 1); go(view(act)); }
if (!tip && act >= 0) { var o = L[act]; if (o.f > 0) tip = o.p.getPointAtLength(o.n * o.f); }
me.style.display = tip ? '' : 'none';
if (tip) me.setAttribute('transform', 'translate(' + tip.x.toFixed(1) + ' ' + tip.y.toFixed(1) + ')');
}
var rk;
addEventListener('scroll', function () { if (!rk) { rk = 1; requestAnimationFrame(function () { rk = 0; draw(); }); } }, { passive: true });
addEventListener('resize', function () { cur = null; on = -2; draw(); });
draw();
};
if (rt) { if (G('.svo-route__svg')) rtGo(); else if (window.fetch) fetch(rt.dataset.r).then(function (r) { return r.text(); }).then(rtGo)['catch'](function () {}); }
if (io) {
var vo = new IntersectionObserver(function (es) {
es.forEach(function (x) {
var v = x.target;
if (x.isIntersecting) {
var sh = v.closest('.svo-shot');
if (sh && !sh.classList.contains('on')) return;   // 鏡頭裡的影片由上面的鏡頭切換負責
if (v.closest('.svo-crew__l')) return;   // 實拍／花絮卡片不自動播：電腦版滑鼠移上去才播（見下方），手機按「聽現場講解」才播
if (!v.src && v.dataset.src) v.src = (tall() && v.dataset.srcp) || v.dataset.src;
if (!still && v.src) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
} else {
v.pause();
var b = v.parentNode.querySelector('.svo-snd');
if (b && !v.muted) snd(b, false);
}
});
}, { threshold: .1 });
Q('video[data-v],.svo-vmw[data-v]').forEach(function (v) { vo.observe(v); });
}
})();