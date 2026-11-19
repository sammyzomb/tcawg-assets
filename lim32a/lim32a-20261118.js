(function(){
var R=document.getElementById("lim");if(!R)return;
function setVW(){R.style.setProperty("--vw",document.documentElement.clientWidth+"px")}setVW();addEventListener("resize",setVW);addEventListener("orientationchange",setVW);addEventListener("load",setVW);
function Q(s){return R.querySelector(s)}
function QA(s){return Array.prototype.slice.call(R.querySelectorAll(s))}
var reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
var line=Q(".lim-line"),nav=QA(".lim-nav a"),secs=nav.map(function(a){return document.getElementById(a.getAttribute("href").slice(1))}),tk;
var vs=QA("video").map(function(v){v.muted=v.loop=v.playsInline=true;var r=(v.getAttribute("data-r")||"16:9").split(":");return{v:v,b:v.parentNode,id:v.getAttribute("data-vm"),ar:r[0]/r[1],f:null}});
function fit(o){var w=o.b.clientWidth,h=o.b.clientHeight,W=Math.max(w,h*o.ar),H=W/o.ar;o.f.style.cssText="position:absolute;border:0;width:"+W+"px;height:"+H+"px;left:"+(w-W)/2+"px;top:"+(h-H)/2+"px"}
function vid(o,on){if(reduce)on=false;
if(o.id){if(on&&!o.f){var f=document.createElement("iframe");f.tabIndex=-1;f.setAttribute("aria-hidden","true");f.setAttribute("allow","autoplay");f.src="https://player.vimeo.com/video/"+o.id+"?background=1&autoplay=1&loop=1&muted=1&dnt=1";o.b.insertBefore(f,o.b.querySelector("figcaption"));o.f=f;fit(o)}else if(!on&&o.f){o.b.removeChild(o.f);o.f=null}}
else if(o.v.getAttribute("src")){if(on){var p=o.v.play();p&&p["catch"]&&p["catch"](function(){})}else o.v.pause()}}
function upd(){tk=0;var h=innerHeight,r=line.getBoundingClientRect(),p=Math.min(1,Math.max(0,(h*.6-r.top)/r.height));line.style.setProperty("--p",p.toFixed(3));
var on=-1;secs.forEach(function(s,i){if(s&&s.getBoundingClientRect().top<h*.35)on=i});nav.forEach(function(a,i){a.classList.toggle("is-on",i===on);if(i===on)a.setAttribute("aria-current","true");else a.removeAttribute("aria-current")});
vs.forEach(function(o){var b=o.b.getBoundingClientRect();vid(o,b.bottom>-100&&b.top<h+100)})}
addEventListener("scroll",function(){if(!tk){tk=1;requestAnimationFrame(upd)}},{passive:true});addEventListener("resize",function(){vs.forEach(function(o){if(o.f)fit(o)});upd()});upd();
var st=Q(".lim-stats");if(st&&!reduce&&"IntersectionObserver"in window){var nb=QA(".lim-stats__list b").map(function(b){var t=b.firstChild,n=+t.nodeValue.replace(/,/g,"");t.nodeValue="0";return{t:t,n:n}}),run=0;
var so=new IntersectionObserver(function(es){var my=++run;if(!es[0].isIntersecting){nb.forEach(function(o){o.t.nodeValue="0"});return}var t0=performance.now();(function f(now){if(my!==run)return;var k=Math.min(1,(now-t0)/1600),e=1-Math.pow(1-k,3);nb.forEach(function(o){o.t.nodeValue=Math.round(o.n*e).toLocaleString("en-US")});if(k<1)requestAnimationFrame(f)})(t0)},{threshold:.35});so.observe(st)}
var rt=Q(".lim-route");if(rt){var rtGo=function(){
var box=Q(".lim-route__map"),cam=Q(".lim-route__cam"),svg=Q(".lim-route__svg"),me=Q(".lim-route__me"),legs=QA(".lim-route__leg"),NS="http://www.w3.org/2000/svg";
var df=document.createElementNS(NS,"defs");svg.insertBefore(df,svg.firstChild);
var L=QA(".lim-route__ln").map(function(p,i){var m=document.createElementNS(NS,"mask"),k=p.cloneNode();k.setAttribute("class","lim-route__mk");m.id="lim-rm"+i;m.setAttribute("maskUnits","userSpaceOnUse");m.appendChild(k);df.appendChild(m);p.setAttribute("mask","url(#lim-rm"+i+")");
var n=p.getTotalLength(),g=p.getAttribute("data-g"),S=[],j;for(j=0;j<=160;j++)S.push(p.getPointAtLength(n*j/160));
var st=QA('.lim-route__st[data-g="'+g+'"]').map(function(e){var t=e.getAttribute("transform").match(/[-\d.]+/g),x=+t[0],y=+t[1],b=0,bd=1e9;S.forEach(function(q,i){var d=(q.x-x)*(q.x-x)+(q.y-y)*(q.y-y);if(d<bd){bd=d;b=i}});return{e:e,f:b/160,x:x,y:y}});
var xs=st.map(function(o){return o.x}),ys=st.map(function(o){return o.y});
return{p:p,k:k,n:n,st:st,bb:[Math.min.apply(0,xs),Math.min.apply(0,ys),Math.max.apply(0,xs),Math.max.apply(0,ys)],f:-1}});
L[2].bb=[20,60,470,685];
var cur=null,tgt=null,tw=0,zz=0;
function view(i){var b=L[i].bb,w=box.clientWidth,h=box.clientHeight,P=i<2?Math.min(70,w*.11):30,s0=Math.min(w/498,h/695),z=Math.min(w/(b[2]-b[0]+P*2),h/(b[3]-b[1]+P*2),s0*5);z=Math.max(z,s0);return{z:z,x:w/2-z*(b[0]+b[2])/2,y:h/2-z*(b[1]+b[3])/2}}
function put(v){cam.style.transform="translate("+v.x.toFixed(1)+"px,"+v.y.toFixed(1)+"px) scale("+v.z.toFixed(4)+")";cam.style.setProperty("--z",v.z.toFixed(4));
L.forEach(function(o){o.p.style.strokeWidth=2.2/v.z;o.p.style.strokeDasharray=(7/v.z)+" "+(5/v.z);o.k.style.strokeWidth=14/v.z})}
function go(v){if(!cur||reduce||full){cur=v;put(v);return}tgt=v;var a={x:cur.x,y:cur.y,z:cur.z},t0=performance.now();cancelAnimationFrame(tw);
(function f(t){var k=Math.min(1,(t-t0)/1100),e=k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2,lz=Math.log(a.z)+(Math.log(v.z)-Math.log(a.z))*e;
cur={x:a.x+(v.x-a.x)*e,y:a.y+(v.y-a.y)*e,z:Math.exp(lz)};put(cur);if(k<1)tw=requestAnimationFrame(f)})(t0)}
var on=-2,full=false;
function draw(){var h=innerHeight,act=0,tip=null;
legs.forEach(function(l,i){var r=l.getBoundingClientRect(),f=reduce||full?1:Math.min(1,Math.max(0,(h*.72-r.top)/Math.max(200,r.height*.7)));if(r.top<h*.74)act=i;
var o=L[i];if(f!==o.f){o.f=f;o.k.style.strokeDasharray=o.n+" "+o.n;o.k.style.strokeDashoffset=o.n*(1-f);o.st.forEach(function(s){s.e.classList.toggle("is-on",f>=s.f-.02&&f>0)})}
if(f>0)tip=o.p.getPointAtLength(o.n*f);l.classList.toggle("is-on",i===act)});
if(reduce||full)act=2;if(act!==on){on=act;svg.setAttribute("data-on",act+1);go(view(act))}
me.style.display=tip?"":"none";if(tip)me.setAttribute("transform","translate("+tip.x.toFixed(1)+" "+tip.y.toFixed(1)+")")}
var rk;addEventListener("scroll",function(){if(!rk){rk=1;requestAnimationFrame(function(){rk=0;draw()})}},{passive:true});
addEventListener("resize",function(){cur=null;on=-2;draw()});draw();
QA("[data-s]").forEach(function(box){box.className="lim-art";var h="",d="",bs=Q(".lim-route").getAttribute("data-b");box.getAttribute("data-s").split(",").forEach(function(x,i){var p=x.split(" ");h+='<figure class="lim-art__s'+(i?'':' is-on')+'"><img src="'+bs+p[0]+'.jpg" alt="'+p[1]+'" width="1000" height="625"'+(i?' loading="lazy"':'')+'><figcaption>'+p[1]+'</figcaption></figure>';d+='<button type="button" aria-label="'+p[1]+'"'+(i?'':' aria-current="true"')+'></button>'});box.innerHTML=h+'<div class="lim-art__dots">'+d+'</div><p class="lim-art__cr">照片：'+(box.getAttribute("data-c")||"攝影領隊李明峰")+'</p>';var S=[].slice.call(box.querySelectorAll(".lim-art__s")),B=[].slice.call(box.querySelectorAll(".lim-art__dots button")),k=0,tm=null,seen=false;
function show(n){S[k].classList.remove("is-on");B[k].removeAttribute("aria-current");k=(n+S.length)%S.length;S[k].classList.add("is-on");B[k].setAttribute("aria-current","true");var nx=S[(k+1)%S.length].querySelector("img");if(nx)nx.loading="eager"}
function play(){if(!tm&&!reduce)tm=setInterval(function(){show(k+1)},4000)}function stop(){clearInterval(tm);tm=null}
B.forEach(function(b,i){b.addEventListener("click",function(){stop();show(i);if(seen)play()})});
if("IntersectionObserver" in window)new IntersectionObserver(function(es){seen=es[0].isIntersecting;if(seen)play();else stop()},{threshold:.5}).observe(box)});
addEventListener("beforeprint",function(){full=true;L.forEach(function(o){o.f=-1});draw()});
};if(Q(".lim-route__svg"))rtGo();else if(window.fetch)fetch(rt.getAttribute("data-r")).then(function(r){return r.text()}).then(function(t){Q(".lim-route__cam").insertAdjacentHTML("beforeend",t);rtGo()})["catch"](function(){})}
if(!reduce&&"IntersectionObserver" in window)QA(".lim-yt a").forEach(function(a){var id=(a.href.match(/v=([\w-]+)/)||[])[1],fr=null;if(!id)return;
new IntersectionObserver(function(es){var on=es[0].isIntersecting;
if(on&&!fr){fr=document.createElement("iframe");fr.src="https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1&mute=1&loop=1&playlist="+id+"&playsinline=1&rel=0&controls=0&disablekb=1&fs=0&iv_load_policy=3";fr.title=a.querySelector("img").alt.replace("在 YouTube 觀看","");fr.allow="autoplay; encrypted-media";fr.tabIndex=-1;fr.setAttribute("aria-hidden","true");a.appendChild(fr);a.classList.add("is-play")}
else if(!on&&fr){a.removeChild(fr);fr=null;a.classList.remove("is-play")}},{threshold:.25}).observe(a)});
addEventListener("beforeprint",function(){QA("img").forEach(function(i){i.loading="eager"});QA("details").forEach(function(d){if(!d.open){d.open=true;d.setAttribute("data-pr","")}});line.style.setProperty("--p","0")});
addEventListener("afterprint",function(){QA("details[data-pr]").forEach(function(d){d.open=false;d.removeAttribute("data-pr")})});
var ld=document.createElement("script");ld.type="application/ld+json";ld.textContent=JSON.stringify([{"@context":"https://schema.org","@type":"TouristTrip",name:"南美洲六國 巴西 阿根廷 巴拉圭 祕魯馬丘比丘 玻利維亞 智利復活節島 32日",description:Q(".lim-route__t").textContent+"。"+Q(".lim-route__leg p").textContent,touristType:"文化古蹟與自然景觀",provider:{"@type":"TravelAgency",name:"鄉野旅行社",url:"https://www.tcawg.com/",telephone:"+886-2-7741-5198"}},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:QA(".lim-faq details").map(function(d){return{"@type":"Question",name:d.querySelector("summary").textContent,acceptedAnswer:{"@type":"Answer",text:d.querySelector("p").textContent}}})}]);document.head.appendChild(ld);
var q=Q(".lim-quick"),t=q.querySelector(".lim-quick__t"),tm;
function sw(o){q.classList.toggle("is-open",o);t.setAttribute("aria-expanded",o?"true":"false")}
var hv=matchMedia("(hover:hover) and (pointer:fine)");
t.addEventListener("click",function(){sw(hv.matches||!q.classList.contains("is-open"))});
q.addEventListener("mouseenter",function(){if(hv.matches){clearTimeout(tm);sw(true)}});
q.addEventListener("mouseleave",function(){if(hv.matches)tm=setTimeout(function(){sw(false)},350)});
q.addEventListener("click",function(e){if(e.target.closest("a"))sw(false)});
addEventListener("keydown",function(e){if(e.key==="Escape"&&q.classList.contains("is-open")){sw(false);t.focus()}});
function cp(){var u=location.href;navigator.clipboard&&navigator.clipboard.writeText(u);prompt("此頁連結",u)}
q.querySelector(".lim-quick__s").addEventListener("click",function(){sw(false);navigator.share?navigator.share({title:document.title,url:location.href})["catch"](function(e){if(!e||e.name!=="AbortError")cp()}):cp()});
q.querySelector(".lim-quick__u").addEventListener("click",function(){sw(false);scrollTo({top:0,behavior:reduce?"auto":"smooth"})});
})();