/* Theme toggle (shares the mu2sd preference key) + copy buttons */
(function(){
  var root=document.documentElement, btn=document.getElementById('tgl');
  function cur(){var t=root.getAttribute('data-theme'); if(t) return t; return matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';}
  try{var s=localStorage.getItem('mu2sd-theme'); if(s) root.setAttribute('data-theme',s);}catch(e){}
  if(btn) btn.addEventListener('click',function(){
    var next=cur()==='dark'?'light':'dark'; root.setAttribute('data-theme',next);
    try{localStorage.setItem('mu2sd-theme',next);}catch(e){}
  });

  document.querySelectorAll('button.copy').forEach(function(b){
    b.addEventListener('click',function(){
      var el=document.getElementById(b.getAttribute('data-target')); if(!el) return;
      var text=el.innerText.trim();
      function done(){var o=b.textContent; b.textContent='Copied'; setTimeout(function(){b.textContent=o;},1600);}
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(text).then(done,function(){fallback();});
      } else fallback();
      function fallback(){
        var r=document.createRange(); r.selectNodeContents(el);
        var sel=window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
        try{document.execCommand('copy'); done();}catch(e){}
        sel.removeAllRanges();
      }
    });
  });
})();

/* Downloads marked data-check show "Coming soon" until the file exists */
(function(){
  document.querySelectorAll('a.dl[data-check]').forEach(function(a){
    function off(){a.classList.add('pending'); var g=a.querySelector('.go'); if(g) g.textContent='Coming soon';}
    try{ fetch(a.getAttribute('href'),{method:'HEAD'}).then(function(r){ if(!r.ok) off(); }).catch(off); }catch(e){ off(); }
  });
})();

/* Video facades: load the YouTube player only when clicked */
(function(){
  document.querySelectorAll('.video a.facade[data-yt]').forEach(function(a){
    a.addEventListener('click',function(e){
      e.preventDefault();
      var id=a.getAttribute('data-yt'), start=a.getAttribute('data-start')||0;
      var f=document.createElement('iframe');
      f.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0&start='+start;
      f.title=a.getAttribute('aria-label')||'Video';
      f.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      f.allowFullscreen=true;
      a.parentNode.replaceChild(f,a);
    });
  });
})();
