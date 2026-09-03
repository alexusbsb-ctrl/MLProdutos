(function(){
  var CFG=window.SITE_CONFIG||{};
  var KEY="cookie_consent";
  function read(){try{return JSON.parse(localStorage.getItem(KEY)||"null")}catch(e){return null}}
  function save(v){v.ts=Date.now();localStorage.setItem(KEY,JSON.stringify(v));    document.cookie=KEY+"="+encodeURIComponent(JSON.stringify(v))+";path=/;max-age="+((CFG.cookieDays||180)*86400)+";SameSite=Lax";}
  function activate(consent){
    document.querySelectorAll('script[type="text/plain"][data-cookiecategory]').forEach(function(node){
      var cat=node.getAttribute("data-cookiecategory");
      if(!consent[cat])return;
      var s=document.createElement("script");
      if(node.src){s.src=node.src;s.async=true}else{s.textContent=node.textContent}
      document.head.appendChild(s);node.remove();
    });
    window.dataLayer=window.dataLayer||[];
    window.dataLayer.push({event:"consent_update",analytics:!!consent.analytics,marketing:!!consent.marketing});
  }
  var banner=document.getElementById("cookie-banner");
  var saved=read();
  if(saved){activate(saved)}else if(banner){banner.hidden=false}
  document.addEventListener("click",function(ev){
    var el=ev.target.closest("[data-cookie]");if(!el)return;ev.preventDefault();
    var action=el.getAttribute("data-cookie");
    if(action==="prefs"){banner.querySelector(".cookie__prefs").hidden=false;      var sv=banner.querySelector('[data-cookie="save"]');if(sv)sv.hidden=false;return}
    if(action==="reopen"){if(banner){banner.hidden=false}return}
    var consent={necessary:true,analytics:false,marketing:false};
    if(action==="accept"){consent.analytics=true;consent.marketing=true}
    if(action==="save"){consent.analytics=!!document.getElementById("ck-analytics").checked;      consent.marketing=!!document.getElementById("ck-marketing").checked}
    save(consent);activate(consent);if(banner)banner.hidden=true;
  });
  // menu mobile
  var toggle=document.querySelector(".nav-toggle");
  if(toggle){toggle.addEventListener("click",function(){document.querySelector(".nav").classList.toggle("open")})}
  // tracking de cliques em links de afiliado e anúncios
  document.addEventListener("click",function(ev){
    var a=ev.target.closest('a[data-track="affiliate"],[data-ad-id] a');if(!a)return;
    window.dataLayer=window.dataLayer||[];
    window.dataLayer.push({event:a.dataset.track==="affiliate"?"affiliate_click":"ad_click",
      item:a.dataset.post||a.dataset.adId||"",position:a.dataset.adPos||"",href:a.href});
  });
  // formulário de contato
  var form=document.getElementById("contact-form");
  if(form&&CFG.formEndpoint){form.addEventListener("submit",function(ev){ev.preventDefault();
    var status=form.querySelector(".form__status");status.textContent="Enviando...";
    fetch(CFG.formEndpoint,{method:"POST",body:new FormData(form),mode:"no-cors"})
      .then(function(){status.textContent="Mensagem enviada com sucesso!";form.reset()})
      .catch(function(){status.textContent="Não foi possível enviar. Tente novamente."});
  })}
})();