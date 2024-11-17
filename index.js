import{a as g,S as h,i as s}from"./assets/vendor-C4-ZuMk8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();async function v(r){const e=await g.get("https://pixabay.com/api/",{params:r});return console.log(e.config.url),e.data}let u=null;async function w(r){const e=document.querySelector(".gallery-list"),n=await r.map(o=>`
      <li class="photo-item">
        <a href="${o.largeImageURL}" class="gallery-item">
          <img src="${o.webformatURL}" alt="${o.tags}" width="360" height="152" />
        </a>
        <div class="info">
          <div class="info-item">
            <p>Likes</p>
            <p>${o.likes}</p>
          </div>
          <div class="info-item">
            <p>Views</p>
            <p>${o.views}</p>
          </div>
          <div class="info-item">
            <p>Comments</p>
            <p>${o.comments}</p>
          </div>
          <div class="info-item">
            <p>Downloads</p>
            <p>${o.downloads}</p>
          </div>
        </div>
      </li>`).join("");e.insertAdjacentHTML("beforeend",n),u?u.refresh():u=new h(".gallery-item",{captionsData:"alt",captionDelay:250})}const b=document.querySelector(".form"),L=document.querySelector(".search-input"),p=document.querySelector(".gallery"),l=document.querySelector(".load-button"),q=document.querySelector(".gallery-list");let a=1,f=15,m=0,c="";b.addEventListener("submit",async r=>{if(r.preventDefault(),c=L.value.trim(),!c){s.warning({title:"Warning",message:"Please enter a search query."});return}a=1,q.innerHTML="",l.style.display="none",await y()});l.addEventListener("click",async()=>{await y();const r=document.querySelector(".photo-item");if(r){const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}});async function y(){if(!c)return;p.style.display="block";const r={key:"47040880-6387dd83a064ed0d7a9fde087",q:c,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:f,page:a};try{const e=await v(r);if(p.style.display="none",!e||e.hits.length===0){s.error({title:"Error",message:"No images found. Try again with a different query."});return}m=e.totalHits,await w(e.hits),a++,(a-1)*f+e.hits.length>=m?(l.style.display="none",s.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."})):l.style.display="block"}catch(e){p.style.display="none",s.error({title:"Error",message:`Something went wrong. Error: ${e.message}`})}}s.settings({timeout:1e4,position:"topRight",resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX"});
//# sourceMappingURL=index.js.map
