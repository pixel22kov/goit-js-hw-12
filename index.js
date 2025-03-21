import{a as x,i,S as q}from"./assets/vendor-30VqbI-A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const P="49327575-d50cf96af4b1ede3148c0e758",S="https://pixabay.com/api/",g=async(a,r,s)=>{try{return(await x.get(S,{params:{key:P,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:r}})).data}catch(o){i.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),console.error(o)}},h=document.querySelector(".gallery"),y=document.querySelector(".loader");function m(){y.classList.remove("visually-hidden")}function l(){y.classList.add("visually-hidden")}function f(){moreBtn.style.display="none"}const $=()=>{h.innerHTML=""},v=a=>{const r=a.map(({webformatURL:o,largeImageURL:e,tags:t,likes:n,views:b,comments:w,downloads:L})=>`<li class="gallery-item">
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
                <p class="gallery-text">${b}</p>
              </div>
              <div class="info-box">
                <h3 class="gallery-title">Comments</h3>
                <p class="gallery-text">${w}</p>
              </div>
              <div class="info-box">
                <h3 class="gallery-title">Downloads</h3>
                <p class="gallery-text">${L}</p>
              </div>
            </div>
          </div>
        </a>
      </li>`).join("");h.insertAdjacentHTML("beforeend",r),new q(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()},p=document.querySelector(".form"),R=document.querySelector(".form-input"),A=document.querySelector(".more-btn"),d=15;let c=1,u=0,B="";p.addEventListener("submit",async a=>{a.preventDefault();const r=R.value.trim();if(!r){i.warning({message:"Please enter a valid search query!",position:"topRight"});return}$(),m(),f();try{c=1;const s=await g(r,c,d),o=s.hits;if(l(),o.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),p.reset();return}v(o),p.reset(),u=s.totalHits,u>d&&showLoadBtn()}catch(s){l(),i.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),console.error(s)}finally{l()}});A.addEventListener("click",async()=>{c+=1,m();try{const a=Math.ceil(u/d),r=await g(B,c,d);l();const s=r.hits;v(s);const{height:o}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"}),c>=a&&(f(),i.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"}))}catch(a){l(),i.error({message:"An error occurred while loading more images.",position:"topRight"}),console.error(a)}});
//# sourceMappingURL=index.js.map
