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
var dimg = function (k, i, c) { return '<img' + (c ? ' class="' + c + '"' : '') + ' src="' + GB + k + i + '.svg" alt="" width="' + Math.round(100 * DL.r[i]) + '" height="100">'; };
if (GB) {
Q('.svo-step').forEach(function (e) {
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
if (tall()) Q('video[data-pp]').forEach(function (v) { v.poster = v.dataset.pp; });
var b0 = G('.svo-snd');
var hush = function (k) {
Q('.svo-yt__v iframe').forEach(function (f) { var a = f.parentNode; if (a != k) { a.replaceChild(a._im, f); a.classList.remove('on'); } });
var q = G('.svo-qz video:not([data-v])'); if (q && q != k && !q.paused) q.pause();
Q('.svo-snd[aria-pressed="true"]').forEach(function (o) { if (o != k) snd(o, false); });
};
var CREW = [
[['v26', '莫斯科紅場', '同仁 Polly'], ['v28', '克里姆林宮 教堂廣場', '當地導遊'], ['v24', '莫斯科地鐵 新村站', '領隊 徐維閔'], ['v21', '伊茲麥洛夫市集', '領隊 張文譯'],
['v29', '弗拉基米爾 聖母升天大教堂', '當地導遊'], ['v22', '大諾夫哥羅德', '領隊 張文譯'], ['v31', '冬宮 1812年戰爭畫廊', '領隊 張文譯'], ['v27', '冬宮 聖喬治廳', '當地導遊'],
['v25', '彼得夏宮大宮殿', '領隊 徐維閔'], ['v23', '彼得夏宮上花園', '領隊 徐維閔'], ['v32', '葉卡捷琳娜宮 綠色餐廳', '領隊 徐維閔'], ['v20', '葉卡捷琳娜宮', '領隊 張文譯']],
[['v33', '午後的紅場', '領隊 許家樸'], ['v34', '莫斯科 現切大餅', '隨團領隊'], ['v36', '運河盡頭的滴血教堂', '領隊 張文譯']]
];
var cp = G('.svo-crew'), VS = window.svoV || {};
Q('.svo-crew__l').forEach(function (ul) {
var f = ul.dataset.l == '1';
CREW[+ul.dataset.l].forEach(function (c) {
var li = document.createElement('li'), v = document.createElement('video'), t = document.createElement('b'), src = VS[c[0]];
t.textContent = c[1]; li.appendChild(t); li.appendChild(document.createTextNode(c[2]));
v.poster = cp.dataset.p + c[0] + '.jpg';
v.muted = true; v.loop = true; v.preload = 'none'; v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
v.dataset.v = c[0]; if (src) v.dataset.src = src;
v.setAttribute('aria-label', c[1] + '，' + c[2] + (f ? '拍的影片' : '，在現場拍的影片'));
li.insertBefore(v, li.firstChild);
if (src && b0) { var b = b0.cloneNode(true); b.lastChild.textContent = f ? '聽現場聲音' : '聽現場講解'; li.appendChild(b); }
ul.appendChild(li);
});
});
var RT = [
['彩虹下的紅場，克里姆林宮救世主塔與聖瓦西里大教堂', '弗拉基米爾的金色凱旋門', '蘇茲達爾基督誕生大教堂的藍色圓頂'],
['雅羅斯拉夫爾的先知伊利亞教堂', '羅斯托夫的修道院倒映在涅羅湖上', '謝爾吉耶夫鎮聖三一修道院的藍底金星圓頂'],
['大諾夫哥羅德的聖索菲亞大教堂', '千年俄羅斯紀念碑與聖索菲亞大教堂', '加特契納大宮殿'],
['什利謝利堡核桃堡的石牆與圓塔', '彼得夏宮大瀑布與大宮殿', '葉卡捷琳娜宮琥珀廳的琥珀鑲板']
];
var ip = cp ? cp.dataset.p.replace('crew-', '') : '';
Q('.svo-route__leg').forEach(function (lg, i) {
if (!RT[i] || !cp) return;
var d = document.createElement('div'); d.className = 'svo-route__ph';
RT[i].forEach(function (a, j) {
var im = document.createElement('img');
im.src = ip + 'rt-' + (i + 1) + 'abc'[j] + '.jpg'; im.alt = a; im.width = 600; im.height = 400; im.loading = 'lazy';
d.appendChild(im);
});
lg.appendChild(d);
});
var end = G('.svo-end');
if (end && cp) {
var eb = document.createElement('div'); eb.className = 'svo-end__bg'; eb.setAttribute('aria-hidden', 'true');
['l1-red-square', 'l2-card-ascension', 'l3-card-vladimir', 'l4-card-elijah', 'l5-card-trinity', 'l6-card-kremlin', 'l7-card-palace-sq'].forEach(function (n) {
var im = document.createElement('img'); im.src = ip + n + '.jpg'; im.alt = ''; im.loading = 'lazy'; eb.appendChild(im);
});
end.insertBefore(eb, end.firstChild);
}
var qf = G('.svo-crew__l--f');
if (qf && cp) {
var qz = document.createElement('div'); qz.className = 'svo-qz';
qz.innerHTML = '<div><video playsinline preload="none" aria-label="女孩走上彼得夏宮花園的石頭地，水柱突然從地面噴出"></video></div><div><p class="svo-qz__k">謎題｜彼得夏宮花園</p>'
+ '<p class="svo-qz__q">她正走上這片石頭地，<br>下一秒會發生什麼事？</p><div class="svo-qz__o">'
+ '<button type="button"><b>A</b>什麼事都沒有</button><button type="button"><b>B</b>石頭會發出音樂</button><button type="button"><b>C</b>地上噴出水柱</button></div>'
+ '<p class="svo-qz__a" aria-live="polite"></p><p class="svo-credit">影片：領隊 張文譯 拍攝</p></div>';
var qv = qz.querySelector('video'), qa = qz.querySelector('.svo-qz__a'), qs = VS.v39;
qv.poster = cp.dataset.p + 'v39.jpg';
qz.querySelectorAll('button').forEach(function (bt, i) {
bt.addEventListener('click', function () {
qz.querySelectorAll('button').forEach(function (o, j) { o.className = j == 2 ? 'ok' : j == i ? 'no' : ''; });
qa.innerHTML = (i == 2 ? '<b>答對了！</b>' : '<b>答案是 C。</b>') + '石頭地底下藏著噴水孔，有人走上去時，水柱會突然從腳邊噴出來。彼得夏宮的花園裡還藏著好幾座這種捉弄人的「惡作劇噴泉」，走過時記得留意腳下。';
hush(qv);
if (qs) { if (!qv.src) qv.src = qs; qv.muted = false; qv.currentTime = 0; var p = qv.play(); if (p && p.catch) p.catch(function () {}); }
});
});
qf.parentNode.insertBefore(qz, qf);
var mk = document.createElement('div'); mk.className = 'svo-qz svo-qz--m';
mk.innerHTML = '<div><video data-v="v35" muted loop playsinline preload="none" aria-label="蘇茲達爾草地市集：手織毛線帽、木雕小蘑菇、木砧板與一整攤木碗木匙"></video></div><div><p class="svo-qz__k">花絮｜蘇茲達爾</p>'
+ '<p class="svo-qz__q">草地上的<br>手作市集</p>'
+ '<p class="svo-qz__a">領隊在蘇茲達爾遇到的市集：古城邊的草地上搭起一排木頭攤子，有手織毛線帽、木雕小蘑菇、一整桌木砧板，還有堆成小山的木碗木匙，遠處就是古城的白色教堂。</p>'
+ '<p class="svo-qz__a">市集不是每一團都遇得到，遇上了，就留點時間慢慢逛。</p><p class="svo-credit">影片：隨團領隊 拍攝</p></div>';
var mv = mk.querySelector('video'); mv.poster = cp.dataset.p + 'v35.jpg'; mv.setAttribute('muted', ''); if (VS.v35) mv.dataset.src = VS.v35;
qf.parentNode.insertBefore(mk, qf);
}
var snd = function (b, on) {
var c = b.closest('.svo-shot,.svo-crew__l li'), v = c.querySelector('video');
if (!b.dataset.l) b.dataset.l = b.lastChild.textContent;
if (on && c.tagName == 'LI') {   // 一次只聽一位領隊：其他卡片關聲音，這支從頭講
Q('.svo-crew .svo-snd[aria-pressed="true"]').forEach(function (o) { if (o != b) snd(o, false); });
v.currentTime = 0;
}
if (on) hush(b);
v.muted = !on; b.setAttribute('aria-pressed', on ? 'true' : 'false');
b.lastChild.textContent = on ? '關閉聲音' : b.dataset.l;
if (on) { if (!v.src && v.dataset.src) v.src = (tall() && v.dataset.srcp) || v.dataset.src; var p = v.play(); if (p && p.catch) p.catch(function () {}); }
};
Q('.svo-snd').forEach(function (b) {
b.addEventListener('click', function () { snd(b, b.getAttribute('aria-pressed') != 'true'); });
});
var cl = function (v) { return v < 0 ? 0 : v > 1 ? 1 : v; };
var hero = G('.svo-hero'), gate = G('.svo-gate'), art = gate && gate.querySelector('.art'), ta = G('.svo-hero__a'), tb = G('.svo-hero__b');
var hp = 0, ht = 0;
var scenes = Q('.svo-scene').map(function (sc) {
var shots = [].slice.call(sc.querySelectorAll('.svo-shot'));
return { el: sc, shots: shots, img: shots.map(function (s) { return s.querySelector(':scope>img,:scope>video'); }), tx: shots.map(function (s) { return s.querySelector('.svo-shot__tx'); }),
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
var v = sh.querySelector(':scope>video');
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
var ec = G('.svo-end__c');
if (ec) {
var t0 = ec.querySelector('a[href^="tel:"]'); if (t0) t0.textContent = '台北 ' + TEL[0][1];
TEL.slice(1).forEach(function (t) { var a = document.createElement('a'); a.href = 'tel:' + t[2]; a.textContent = t[0] + ' ' + t[1]; ec.appendChild(a); });
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
e.source.postMessage('{"method":"addEventListener","value":"ended"}', e.origin);
e.source.postMessage('{"method":"addEventListener","value":"finish"}', e.origin);
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
if (!v.src && v.dataset.src) v.src = (tall() && v.dataset.srcp) || v.dataset.src;
if (!still && v.src) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
} else {
v.pause();
var b = v.parentNode.querySelector('.svo-snd');
if (b && !v.muted) snd(b, false);
}
});
}, { threshold: .1 });
Q('video[data-v]').forEach(function (v) { vo.observe(v); });
}
})();