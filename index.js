import{a as y,i as l,S as f}from"./assets/vendor-5l-LjSpL.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="49327575-d50cf96af4b1ede3148c0e758",m="https://pixabay.com/api/",v=s=>y.get(m,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>{l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),console.error(r)}),c=document.querySelector(".gallery"),d=document.querySelector(".loader");function b(){d.classList.remove("visually-hidden")}function x(){d.classList.add("visually-hidden")}const L=()=>{c.innerHTML=""},q=s=>{const r=s.map(({webformatURL:i,largeImageURL:e,tags:t,likes:a,views:u,comments:p,downloads:h})=>`<li class="gallery-item">
        <a class="gallery-link" href="${e}" alt="${t}">
          <div class="photo-wrapper">
            <img src="${i}" alt="${t}" />
            <div class="info-wrapper">
              <div class="info-box">
                <h3 class="gallery-title">Likes</h3>
                <p class="gallery-text">${a}</p>
              </div>
              <div class="info-box">
                <h3 class="gallery-title">Views</h3>
                <p class="gallery-text">${u}</p>
              </div>
              <div class="info-box">
                <h3 class="gallery-title">Comments</h3>
                <p class="gallery-text">${p}</p>
              </div>
              <div class="info-box">
                <h3 class="gallery-title">Downloads</h3>
                <p class="gallery-text">${h}</p>
              </div>
            </div>
          </div>
        </a>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()},n=document.querySelector(".form"),w=document.querySelector(".form-input");n.addEventListener("submit",s=>{s.preventDefault();const r=w.value.trim();if(!r){l.warning({message:"Please enter a valid search query!",position:"topRight"});return}L(),b(),v(r).then(o=>{if(o.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.reset();return}q(o),n.reset()}).catch(o=>{l.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),console.error(o)}).finally(()=>{x()})});
//# sourceMappingURL=index.js.map
