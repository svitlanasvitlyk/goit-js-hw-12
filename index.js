import{a as y,S as g,i as n}from"./assets/vendor-C4-ZuMk8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();async function h(o){const e=await y.get("https://pixabay.com/api/",{params:o});return console.log(e.config.url),e.data}let d=null;async function v(o){const e=document.querySelector(".gallery-list"),s=await o.map(r=>`
      <li class="photo-item">
        <a href="${r.largeImageURL}" class="gallery-item">
          <img src="${r.webformatURL}" alt="${r.tags}" width="360" height="152" />
        </a>
        <div class="info">
          <div class="info-item">
            <p>Likes</p>
            <p>${r.likes}</p>
          </div>
          <div class="info-item">
            <p>Views</p>
            <p>${r.views}</p>
          </div>
          <div class="info-item">
            <p>Comments</p>
            <p>${r.comments}</p>
          </div>
          <div class="info-item">
            <p>Downloads</p>
            <p>${r.downloads}</p>
          </div>
        </div>
      </li>`).join("");e.insertAdjacentHTML("beforeend",s),d?d.refresh():d=new g(".gallery-item",{captionsData:"alt",captionDelay:250})}const w=document.querySelector(".form"),b=document.querySelector(".search-input"),u=document.querySelector(".gallery"),l=document.querySelector(".load-button"),L=document.querySelector(".gallery-list");let a=1,S=15,f=0,p="";w.addEventListener("submit",async o=>{o.preventDefault(),p=b.value.trim(),a=1,L.innerHTML="",l.style.display="none",await m()});l.addEventListener("click",async()=>{await m();const o=document.querySelector(".photo-item");if(o){const e=o.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}});async function m(){if(!p)return;u.style.display="block";const o={key:"47040880-6387dd83a064ed0d7a9fde087",q:p,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:S,page:a};try{const e=await h(o);if(u.style.display="none",e.hits.length===0){n.error({title:"Error",message:"No images found. Try again with a different query."});return}f=e.totalHits,await v(e.hits),a++,(a-1)*15+hits.length>=f?(l.style.display="none",n.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."})):l.style.display="block"}catch(e){u.style.display="none",n.error({title:"Error",message:`Something went wrong. Error: ${e.message}`})}}n.settings({timeout:1e4,position:"topRight",resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX"});
//# sourceMappingURL=index.js.map
