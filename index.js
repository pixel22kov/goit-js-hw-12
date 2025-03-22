import{a as q,i as a,S}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const P="49327575-d50cf96af4b1ede3148c0e758",$="https://pixabay.com/api/",g=async(i,r,s)=>{try{return(await q.get($,{params:{key:P,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:r}})).data}catch(o){a.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),console.error(o)}},y=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".more-btn");function f(){h.classList.remove("visually-hidden")}function l(){h.classList.add("visually-hidden")}function v(){m.style.display="none"}function R(){m.style.display="block"}const A=()=>{y.innerHTML=""},b=i=>{const r=i.map(({webformatURL:o,largeImageURL:e,tags:t,likes:n,views:w,comments:L,downloads:x})=>`<li class="gallery-item">
        <a class="gallery-link" href="${e}" alt="${t}">
          <div class="photo-wrapper">
            <img src="${o}" alt="${t}" />
            <div class="info-wrapper">
              <div class="info-box">
                <h3 class="gallery-title">Likes</h3>
                <p class="gallery-text">${n}</p>
              </div>
              <div class="info-box">
                <h3 class="gallery-title">Views</h3>
                <p class="gallery-text">${w}</p>
              </div>
              <div class="info-box">
                <h3 class="gallery-title">Comments</h3>
                <p class="gallery-text">${L}</p>
              </div>
              <div class="info-box">
                <h3 class="gallery-title">Downloads</h3>
                <p class="gallery-text">${x}</p>
              </div>
            </div>
          </div>
        </a>
      </li>`).join("");y.insertAdjacentHTML("beforeend",r),new S(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()},u=document.querySelector(".form"),B=document.querySelector(".form-input"),O=document.querySelector(".more-btn"),d=15;let c=1,p=0,D="";u.addEventListener("submit",async i=>{i.preventDefault();const r=B.value.trim();if(!r){a.warning({message:"Please enter a valid search query!",position:"topRight"});return}A(),f(),v();try{c=1;const s=await g(r,c,d),o=s.hits;if(l(),o.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u.reset();return}b(o),u.reset(),p=s.totalHits,p>d&&R()}catch(s){l(),a.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),console.error(s)}finally{l()}});O.addEventListener("click",async()=>{c+=1,f();try{const i=Math.ceil(p/d),r=await g(D,c,d);l();const s=r.hits;b(s);const{height:o}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"}),c>=i&&(v(),a.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"}))}catch(i){l(),a.error({message:"An error occurred while loading more images.",position:"topRight"}),console.error(i)}});
//# sourceMappingURL=index.js.map
