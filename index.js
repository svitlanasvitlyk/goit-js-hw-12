import{a as g,S as h,i as s}from"./assets/vendor-C4-ZuMk8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&p(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const v="https://pixabay.com/api/";async function w(r,e=1){return(await g.get(v,{params:{key:"47040880-6387dd83a064ed0d7a9fde087",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}let c=null;async function b(r){document.querySelector(".gallery-list");const e=await r.map(i=>`
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
      </li>`).join("");galleryList.insertAdjacentHTML("beforeend",e),c?c.refresh():c=new h(".gallery-item",{captionsData:"alt",captionDelay:250})}const L=document.querySelector(".form"),q=document.querySelector(".search-input"),d=document.querySelector(".gallery"),a=document.querySelector(".load-button"),S=document.querySelector(".gallery-list");let n=1,f=15,m=0,u="";L.addEventListener("submit",async r=>{r.preventDefault(),u=q.value.trim(),n=1,S.innerHTML="",a.style.display="none",await y()});a.addEventListener("click",async()=>{await y();const r=document.querySelector(".photo-item");if(r){const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}});async function y(){if(!u)return;d.style.display="block";const r={key:"47040880-6387dd83a064ed0d7a9fde087",q:u,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:f,page:n};try{const e=await w(r);if(d.style.display="none",e.hits.length===0){s.error({title:"Error",message:"No images found. Try again with a different query."});return}m=e.totalHits,await b(e.hits),n++,n*f>=m?(a.style.display="none",s.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."})):a.style.display="block"}catch(e){d.style.display="none",s.error({title:"Error",message:`Something went wrong. Error: ${e.message}`})}}s.settings({timeout:1e4,position:"topRight",resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX"});
//# sourceMappingURL=index.js.map
