(function(){
var R=document.getElementById("scl");if(!R)return;
function setVW(){R.style.setProperty("--vw",document.documentElement.clientWidth+"px")}setVW();addEventListener("resize",setVW);addEventListener("orientationchange",setVW);addEventListener("load",setVW);
function Q(s){return R.querySelector(s)}
function QA(s){return Array.prototype.slice.call(R.querySelectorAll(s))}
var reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
var hv=Q(".scl-hero__fig video");if(hv&&!reduce){var hb=hv.parentNode,id=hv.getAttribute("data-vm");
if(id){var fr=document.createElement("iframe");fr.tabIndex=-1;fr.setAttribute("aria-hidden","true");fr.setAttribute("allow","autoplay");fr.src="https://player.vimeo.com/video/"+id+"?background=1&autoplay=1&loop=1&muted=1&dnt=1";hb.appendChild(fr);
var fit=function(){var w=hb.clientWidth,h=hb.clientHeight,W=Math.max(w,h*16/9),H=W*9/16;fr.style.cssText="position:absolute;border:0;width:"+W+"px;height:"+H+"px;left:"+(w-W)/2+"px;top:"+(h-H)/2+"px"};fit();addEventListener("resize",fit)}
else if(hv.getAttribute("src")){hv.muted=hv.loop=hv.playsInline=true;var pp=hv.play();pp&&pp["catch"]&&pp["catch"](function(){})}}
if(!reduce&&"IntersectionObserver" in window)QA(".scl-pin video,.scl-carn__ph video").forEach(function(v){v.muted=v.loop=v.playsInline=true;var id=v.getAttribute("data-vm"),f=null;
new IntersectionObserver(function(es){var on=es[0].isIntersecting;
if(id){if(on&&!f){f=document.createElement("iframe");f.tabIndex=-1;f.setAttribute("aria-hidden","true");f.setAttribute("allow","autoplay");f.src="https://player.vimeo.com/video/"+id+"?background=1&autoplay=1&loop=1&muted=1&dnt=1";v.parentNode.insertBefore(f,v.nextSibling)}else if(!on&&f){f.parentNode.removeChild(f);f=null}}
else if(v.getAttribute("src")){if(on){var p=v.play();p&&p["catch"]&&p["catch"](function(){})}else v.pause()}},{rootMargin:"100px"}).observe(v)});
var rt=Q(".scl-route");if(rt){var rtGo=function(){
var box=Q(".scl-route__map"),cam=Q(".scl-route__cam"),svg=Q(".scl-route__svg"),me=Q(".scl-route__me"),legs=QA(".scl-route__leg"),NS="http://www.w3.org/2000/svg",VB=svg.getAttribute("viewBox").split(" "),MW=+VB[2],MH=+VB[3];
var df=document.createElementNS(NS,"defs");svg.insertBefore(df,svg.firstChild);
var L=QA(".scl-route__ln").map(function(p,i){var m=document.createElementNS(NS,"mask"),k=p.cloneNode();k.setAttribute("class","scl-route__mk");m.id="scl-rm"+i;m.setAttribute("maskUnits","userSpaceOnUse");m.appendChild(k);df.appendChild(m);p.setAttribute("mask","url(#scl-rm"+i+")");
var n=p.getTotalLength(),g=p.getAttribute("data-g"),S=[],j;for(j=0;j<=160;j++)S.push(p.getPointAtLength(n*j/160));
var st=QA('.scl-route__st[data-g="'+g+'"]').map(function(e){var t=e.getAttribute("transform").match(/[-\d.]+/g),x=+t[0],y=+t[1],b=0,bd=1e9;S.forEach(function(q,i){var d=(q.x-x)*(q.x-x)+(q.y-y)*(q.y-y);if(d<bd){bd=d;b=i}});return{e:e,f:b/160,x:x,y:y}});
var xs=S.map(function(o){return o.x}),ys=S.map(function(o){return o.y});
return{p:p,k:k,n:n,st:st,bb:[Math.min.apply(0,xs),Math.min.apply(0,ys),Math.max.apply(0,xs),Math.max.apply(0,ys)],f:-1}});
var cur=null,tw=0,N=L.length;
function view(i){var b=i<0?[10,10,MW-10,MH-10]:L[i].bb,w=box.clientWidth,h=box.clientHeight,P=i<0?10:Math.min(90,w*.16),s0=Math.min(w/MW,h/MH),z=Math.min(w/(b[2]-b[0]+P*2),h/(b[3]-b[1]+P*2),s0*4.5);z=Math.max(z,s0);return{z:z,x:w/2-z*(b[0]+b[2])/2,y:h/2-z*(b[1]+b[3])/2}}
function put(v){cam.style.transform="translate("+v.x.toFixed(1)+"px,"+v.y.toFixed(1)+"px) scale("+v.z.toFixed(4)+")";cam.style.setProperty("--z",v.z.toFixed(4));
L.forEach(function(o){o.p.style.strokeWidth=2.2/v.z;o.p.style.strokeDasharray=(7/v.z)+" "+(5/v.z);o.k.style.strokeWidth=14/v.z})}
function go(v){if(!cur||reduce||full){cur=v;put(v);return}var a={x:cur.x,y:cur.y,z:cur.z},t0=performance.now();cancelAnimationFrame(tw);
(function f(t){var k=Math.min(1,(t-t0)/1100),e=k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2,lz=Math.log(a.z)+(Math.log(v.z)-Math.log(a.z))*e;
cur={x:a.x+(v.x-a.x)*e,y:a.y+(v.y-a.y)*e,z:Math.exp(lz)};put(cur);if(k<1)tw=requestAnimationFrame(f)})(t0)}
var on=-2,full=false;
function draw(){var h=innerHeight,act=0,tip=null,all=reduce||full;
legs.forEach(function(l,i){var r=l.getBoundingClientRect(),f=all?1:Math.min(1,Math.max(0,(h*.72-r.top)/Math.max(200,r.height*.7)));if(r.top<h*.74)act=i;
var o=L[i];if(f!==o.f){o.f=f;o.k.style.strokeDasharray=o.n+" "+o.n;o.k.style.strokeDashoffset=o.n*(1-f);o.st.forEach(function(s){s.e.classList.toggle("is-on",f>=s.f-.02&&f>0)})}
if(f>0)tip=o.p.getPointAtLength(o.n*f);l.classList.toggle("is-on",i===act)});
if(all)act=-1;if(act!==on){on=act;svg.classList.toggle("is-all",all);L.forEach(function(o,i){o.st.forEach(function(s){s.e.classList.toggle("is-cur",i===act)})});go(view(act))}
me.style.display=tip&&!all?"":"none";if(tip)me.setAttribute("transform","translate("+tip.x.toFixed(1)+" "+tip.y.toFixed(1)+")")}
var rk;addEventListener("scroll",function(){if(!rk){rk=1;requestAnimationFrame(function(){rk=0;draw()})}},{passive:true});
addEventListener("resize",function(){cur=null;on=-2;draw()});draw();
addEventListener("beforeprint",function(){full=true;L.forEach(function(o){o.f=-1});on=-2;draw()});
};if(Q(".scl-route__svg"))rtGo();else if(window.fetch)fetch(rt.getAttribute("data-r")).then(function(r){return r.text()}).then(function(t){Q(".scl-route__cam").insertAdjacentHTML("beforeend",t);rtGo()})["catch"](function(){})
QA("[data-s]").forEach(function(box){box.className="scl-art";var h="",d="",bs=rt.getAttribute("data-b");box.getAttribute("data-s").split(",").forEach(function(x,i){var p=x.split(" ");h+='<figure class="scl-art__s'+(i?'':' is-on')+'"><img src="'+bs+p[0]+'.jpg" alt="'+p[1]+'" width="1000" height="625"'+(i?' loading="lazy"':'')+'><figcaption>'+p[1]+'</figcaption></figure>';d+='<button type="button" aria-label="'+p[1]+'"'+(i?'':' aria-current="true"')+'></button>'});box.innerHTML=h+'<div class="scl-art__dots">'+d+'</div>';var S=[].slice.call(box.querySelectorAll(".scl-art__s")),B=[].slice.call(box.querySelectorAll(".scl-art__dots button")),k=0,tm=null,seen=false;
function show(n){S[k].classList.remove("is-on");B[k].removeAttribute("aria-current");k=(n+S.length)%S.length;S[k].classList.add("is-on");B[k].setAttribute("aria-current","true");var nx=S[(k+1)%S.length].querySelector("img");if(nx)nx.loading="eager"}
function play(){if(!tm&&!reduce)tm=setInterval(function(){show(k+1)},4000)}function stop(){clearInterval(tm);tm=null}
B.forEach(function(b,i){b.addEventListener("click",function(){stop();show(i);if(seen)play()})});
if("IntersectionObserver" in window)new IntersectionObserver(function(es){seen=es[0].isIntersecting;if(seen)play();else stop()},{threshold:.5}).observe(box)})}
addEventListener("beforeprint",function(){QA("img").forEach(function(i){i.loading="eager"});QA("details").forEach(function(d){if(!d.open){d.open=true;d.setAttribute("data-pr","")}})});
addEventListener("afterprint",function(){QA("details[data-pr]").forEach(function(d){d.open=false;d.removeAttribute("data-pr")})});
var ld=document.createElement("script");ld.type="application/ld+json";ld.textContent=JSON.stringify([{"@context":"https://schema.org","@type":"TouristTrip",name:"南美洲三國 智利 阿根廷 巴西 世界盡頭次南極 18日",description:(Q(".scl-route details p")||Q(".scl-route__t")).textContent.trim(),touristType:"自然景觀與文化",provider:{"@type":"TravelAgency",name:"鄉野旅行社",url:"https://www.tcawg.com/",telephone:"+886-2-7741-5198"}},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:QA(".scl-faq details").map(function(d){return{"@type":"Question",name:d.querySelector("summary").textContent,acceptedAnswer:{"@type":"Answer",text:d.querySelector("p").textContent}}})}]);document.head.appendChild(ld);
var q=Q(".scl-quick"),t=q.querySelector(".scl-quick__t"),tm;
function sw(o){q.classList.toggle("is-open",o);t.setAttribute("aria-expanded",o?"true":"false")}
var hv=matchMedia("(hover:hover) and (pointer:fine)");
t.addEventListener("click",function(){sw(hv.matches||!q.classList.contains("is-open"))});
q.addEventListener("mouseenter",function(){if(hv.matches){clearTimeout(tm);sw(true)}});
q.addEventListener("mouseleave",function(){if(hv.matches)tm=setTimeout(function(){sw(false)},350)});
q.addEventListener("click",function(e){if(e.target.closest("a"))sw(false)});
addEventListener("keydown",function(e){if(e.key==="Escape"&&q.classList.contains("is-open")){sw(false);t.focus()}});
function cp(){var u=location.href;navigator.clipboard&&navigator.clipboard.writeText(u);prompt("此頁連結",u)}
q.querySelector(".scl-quick__s").addEventListener("click",function(){sw(false);navigator.share?navigator.share({title:document.title,url:location.href})["catch"](function(e){if(!e||e.name!=="AbortError")cp()}):cp()});
q.querySelector(".scl-quick__u").addEventListener("click",function(){sw(false);scrollTo({top:0,behavior:reduce?"auto":"smooth"})});
})();