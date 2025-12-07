
function go(page){ window.location.href = page; }
function scrollToMenu(){ const el=document.getElementById('menu')||document.getElementById('categories'); if(el) el.scrollIntoView({behavior:'smooth',block:'center'}); }
