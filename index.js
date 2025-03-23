import{a as S,i,S as P}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const $="49327575-d50cf96af4b1ede3148c0e758",R="https://pixabay.com/api/",g=async(o,r,a)=>{try{return(await S.get(R,{params:{key:$,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:a,page:r}})).data}catch(s){i.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),console.error(s)}},y=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".more-btn");function f(){m.classList.remove("visually-hidden")}function v(){m.classList.add("visually-hidden")}function b(){h.style.display="none"}function A(){h.style.display="block"}const B=()=>{y.innerHTML=""},w=o=>{const r=o.map(({webformatURL:s,largeImageURL:e,tags:t,likes:n,views:L,comments:x,downloads:q})=>`<li class="gallery-item">
        <a class="gallery-link" href="${e}" alt="${t}">
          <div class="photo-wrapper">
            <img src="${s}" alt="${t}" />
            <div class="info-wrapper">
              <div class="info-box">
                <h3 class="gallery-title">Likes</h3>
                <p class="gallery-text">${n}</p>
              </div>
              <div class="info-box">
                <h3 class="gallery-title">Views</h3>
                <p class="gallery-text">${L}</p>
              </div>
              <div class="info-box">
                <h3 class="gallery-title">Comments</h3>
                <p class="gallery-text">${x}</p>
              </div>
              <div class="info-box">
                <h3 class="gallery-title">Downloads</h3>
                <p class="gallery-text">${q}</p>
              </div>
            </div>
          </div>
        </a>
      </li>`).join("");y.insertAdjacentHTML("beforeend",r),new P(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()},u=document.querySelector(".form"),O=document.querySelector(".form-input"),D=document.querySelector(".more-btn"),d=15;let l=1,p=0,c="";u.addEventListener("submit",async o=>{if(o.preventDefault(),c=O.value.trim(),!c){i.warning({message:"Please enter a valid search query!",position:"topRight"});return}B(),f(),b();try{l=1;const r=await g(c,l,d),a=r.hits;if(a.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u.reset();return}w(a),u.reset(),p=r.totalHits,p>d&&A()}catch(r){i.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),console.error(r)}finally{v()}});D.addEventListener("click",async()=>{l+=1,f();try{const o=Math.ceil(p/d),a=(await g(c,l,d)).hits;w(a),setTimeout(()=>{const s=document.querySelector(".gallery-item");if(s){const{height:e}=s.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}},100),l>=o&&(b(),i.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"}))}catch(o){i.error({message:"An error occurred while loading more images.",position:"topRight"}),console.error(o)}finally{v()}});
//# sourceMappingURL=index.js.map
