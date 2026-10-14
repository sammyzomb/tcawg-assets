!function(){
var e=document.getElementById("sa-experience");if(!e)return;
/* 讓整頁滿版：量出可視寬度（扣掉捲軸） */
function vw(){e.style.setProperty("--sa-vw",document.documentElement.clientWidth+"px")}
vw();addEventListener("resize",vw);addEventListener("orientationchange",vw);addEventListener("load",vw);
var reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
var rv=[].slice.call(e.querySelectorAll(".sa-rv"));
var navA=[].slice.call(e.querySelectorAll(".sa-nav a"));
var secs=navA.map(function(a){return document.querySelector(a.getAttribute("href"))});
var prog=document.getElementById("sa-prog");
/* 影片：有 Vimeo 編號就嵌背景播放器；沒有就用 data-src 直接播（預覽用） */
var vids=[].map.call(e.querySelectorAll("video[data-vm],video[data-src]"),function(v){
  v.parentNode.classList.add("sa-vbox");
  var r=(v.getAttribute("data-r")||"16:9").split(":");
  return{v:v,id:(v.getAttribute("data-vm")||"").replace(/\D/g,""),f:null}});
function vimeo(o){var f=document.createElement("iframe");f.tabIndex=-1;f.setAttribute("aria-hidden","true");f.setAttribute("allow","autoplay; fullscreen; picture-in-picture");f.src="https://player.vimeo.com/video/"+o.id+"?background=1&autoplay=1&loop=1&muted=1&dnt=1";f.onload=function(){setTimeout(function(){f.classList.add("on")},800)};o.v.parentNode.appendChild(f);o.f=f}
function tick(){
  var h=innerHeight;
  rv=rv.filter(function(n){if(n.getBoundingClientRect().top<h*.9){n.classList.add("is-in");return false}return true});
  var line=h*.35,cur=-1;
  secs.forEach(function(s,i){if(s&&s.getBoundingClientRect().top<line)cur=i});
  navA.forEach(function(a,i){a.classList.toggle("is-on",i===cur)});
  var b=e.getBoundingClientRect(),t=e.offsetHeight-h;
  if(prog)prog.style.width=Math.min(100,Math.max(0,-b.top/t*100))+"%";
  if(reduce)return;
  vids.forEach(function(o){
    var r=o.v.getBoundingClientRect(),on=r.bottom>-200&&r.top<h+200&&r.width>0;
    if(o.id){
      if(on&&!o.f)vimeo(o);else if(!on&&o.f){o.f.parentNode.removeChild(o.f);o.f=null}
    }else{
      if(on){if(!o.v.getAttribute("src")&&o.v.getAttribute("data-src"))o.v.src=o.v.getAttribute("data-src");if(o.v.paused){var p=o.v.play();if(p&&p.catch)p.catch(function(){})}}
      else if(!o.v.paused)o.v.pause()
    }})}
addEventListener("scroll",tick,{passive:!0});addEventListener("resize",tick);tick();
/* 燈箱 */
var lb=document.getElementById("sa-lb"),li=lb.querySelector("img");
e.addEventListener("click",function(ev){var t=ev.target.closest("[data-zoom]");if(t){li.src=t.currentSrc||t.src;li.alt=t.alt;lb.classList.add("on")}});
lb.addEventListener("click",function(){lb.classList.remove("on")});
addEventListener("keydown",function(k){if(k.key==="Escape")lb.classList.remove("on")});
/* 列印前把延遲載入的圖片載入 */
function pre(){[].forEach.call(e.querySelectorAll("img"),function(i){i.loading="eager";i.decoding="sync";if(i.decode&&!i.__d){i.__d=1;i.decode()["catch"](function(){})}});[].forEach.call(e.querySelectorAll("video[poster]"),function(v){if(v.parentNode.querySelector(".sa-pimg"))return;var m=document.createElement("img");m.className="sa-pimg";m.alt="";m.src=v.getAttribute("poster");v.parentNode.appendChild(m)})}
if(document.readyState==="complete")setTimeout(pre,300);else addEventListener("load",function(){setTimeout(pre,500)});addEventListener("scroll",function(){pre()},{once:true,passive:true});
addEventListener("beforeprint",function(){pre();[].forEach.call(e.querySelectorAll("details"),function(d){if(!d.open){d.open=true;d.setAttribute("data-pr","")}})});
addEventListener("afterprint",function(){[].forEach.call(e.querySelectorAll("details[data-pr]"),function(d){d.open=false;d.removeAttribute("data-pr")})});
/* 右下角快速工具 */
var q=document.getElementById("sa-quick");
if(q){
  var t=q.querySelector(".sa-quick__toggle"),tm,te;
  function dk(){var b=document.getElementById("index-float-btn"),h=0;if(b&&getComputedStyle(b).display!=="none")h=b.getBoundingClientRect().height;e.style.setProperty("--dock",h+"px")}
  dk();addEventListener("resize",dk);addEventListener("load",dk);
  function cl(){clearTimeout(tm);q.classList.remove("is-open");t.setAttribute("aria-expanded","false")}
  function arm(){clearTimeout(tm);if(q.classList.contains("is-open"))tm=setTimeout(cl,3600)}
  t.addEventListener("click",function(ev){ev.stopPropagation();var o=q.classList.toggle("is-open");t.setAttribute("aria-expanded",o?"true":"false");if(o)arm();else clearTimeout(tm)});
  q.addEventListener("click",function(ev){if(ev.target.closest("a"))cl();else arm()});
  function toast(m){if(!te){te=document.createElement("div");te.className="sa-toast";q.parentNode.appendChild(te)}te.textContent=m;te.classList.add("is-on");clearTimeout(te.t);te.t=setTimeout(function(){te.classList.remove("is-on")},1900)}
  function copy(){var u=location.href;if(navigator.clipboard){navigator.clipboard.writeText(u).then(function(){toast("已複製此頁連結")},function(){prompt("複製此頁連結",u)})}else prompt("複製此頁連結",u)}
  q.querySelector(".sa-quick__share").addEventListener("click",function(){cl();if(navigator.share){navigator.share({title:document.title,url:location.href})["catch"](function(x){if(!x||x.name!=="AbortError")copy()})}else copy()});
  q.querySelector(".sa-quick__top").addEventListener("click",function(){cl();scrollTo({top:0,behavior:"smooth"})})
}
}();
