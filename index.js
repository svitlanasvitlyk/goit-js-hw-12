import{a as g,S as h,i as s}from"./assets/vendor-C4-ZuMk8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();async function v(r){const e=await g.get("https://pixabay.com/api/",{params:r});return console.log(e.config.url),e.data}let d=null;async function w(r){const e=document.querySelector(".gallery-list"),l=await r.map(i=>`
      <li class="photo-item">
        <a href="${i.largeImageURL}" class="gallery-item">
          <img src="${i.webformatURL}" alt="${i.tags}" width="360" height="152" />
        </a>
        <div class="info">
          <div class="info-item">
            <p>Likes</p>
            <p>${i.likes}</p>
          </div>
          <div class="info-item">
            <p>Views</p>
            <p>${i.views}</p>
          </div>
          <div class="info-item">
            <p>Comments</p>
            <p>${i.comments}</p>
          </div>
          <div class="info-item">
            <p>Downloads</p>
            <p>${i.downloads}</p>
          </div>
        </div>
      </li>`).join("");e.insertAdjacentHTML("beforeend",l),d?d.refresh():d=new h(".gallery-item",{captionsData:"alt",captionDelay:250})}const b=document.querySelector(".form"),L=document.querySelector(".search-input"),u=document.querySelector(".gallery"),a=document.querySelector(".load-button"),S=document.querySelector(".gallery-list");let n=1,f=15,m=0,p="";b.addEventListener("submit",async r=>{r.preventDefault(),p=L.value.trim(),n=1,S.innerHTML="",a.style.display="none",await y()});a.addEventListener("click",async()=>{await y();const r=document.querySelector(".photo-item");if(r){const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}});async function y(){if(!p)return;u.style.display="block";const r={key:"47040880-6387dd83a064ed0d7a9fde087",q:p,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:f,page:n};try{const e=await v(r);if(u.style.display="none",e.hits.length===0){s.error({title:"Error",message:"No images found. Try again with a different query."});return}m=e.totalHits,await w(e.hits),n++,n*f>=m?(a.style.display="none",s.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."})):a.style.display="block"}catch(e){u.style.display="none",s.error({title:"Error",message:`Something went wrong. Error: ${e.message}`})}}s.settings({timeout:1e4,position:"topRight",resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX"});
//# sourceMappingURL=index.js.map
