const list=document.getElementById("apps"),empty=document.getElementById("empty"),search=document.getElementById("search");
function render(){
 const q=search.value.trim().toLowerCase();
 list.innerHTML="";
 const shown=APPS.filter(a=>(a.name+" "+a.description).toLowerCase().includes(q));
 empty.classList.toggle("hidden",shown.length!==0);
 shown.forEach(a=>{
   const card=document.createElement("article"); card.className="card";
   card.innerHTML=`<img class="icon" src="${a.icon||'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2264%22 height=%2264%22%3E%3Crect width=%2264%22 height=%2264%22 rx=%2216%22 fill=%22%234f46e5%22/%3E%3Ctext x=%2232%22 y=%2240%22 text-anchor=%22middle%22 font-size=%2224%22 fill=%22white%22%3EA%3C/text%3E%3C/svg%3E'}" alt="">
   <div class="name">${escapeHtml(a.name)}</div>
   <div class="meta">Version ${escapeHtml(a.version||"1.0")} • ${escapeHtml(a.size||"APK")}</div>
   <div class="desc">${escapeHtml(a.description||"Download this APK.")}</div>
   <a class="download" href="${a.file}" download>Download APK</a>`;
   list.appendChild(card);
 });
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
search.addEventListener("input",render); render();
