(()=>{"use strict";const e=()=>{const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("home-page");const n=document.createElement("div");n.classList.add("text");const d=document.createElement("div");d.classList.add("headline"),d.innerHTML="<h1>Best pizza in the universe</h1>",n.appendChild(d);const i=document.createElement("div");i.classList.add("title"),i.innerHTML="<h1>Universe Pizza</h1>";const a=document.createElement("div");a.classList.add("home-pizza"),a.innerHTML='<img src="https://media.istockphoto.com/id/1042948900/photo/pizza-pepperoni-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=5TZsBkiQFd8FCz1HU1jdSfc-eZbCpkV6vyuxtvsBjWc="></img>',t.appendChild(a);const c=document.createElement("div");c.classList.add("home-copy"),c.innerHTML="<p>Lorem ipsum dolor sit amet, mel et odio percipit, ridens salutatus pertinacia ut mel, vim tritani voluptua eu. Id eum ferri doming. Ne mel lucilius disputationi, ad nec autem inciderint. Mea mazim commodo admodum an, legere nominavi duo at, te vis lorem probatus. Vim id tamquam suscipit. Ad sea lorem viris audiam, hinc semper sed eu.</p>",n.appendChild(c);const s=document.createElement("button");s.classList.add("book-online"),s.textContent="Book Online",n.appendChild(s),t.appendChild(n),e.appendChild(t)};function t(){const e=document.querySelector("content");document.querySelectorAll(".home-page, .menu-page, .contact-page").forEach((t=>{t&&e.removeChild(t)}))}(()=>{const n=document.querySelector(".content"),d=document.createElement("header");d.classList.add("header");const i=document.createElement("div");i.classList.add("tabs");const a=document.createElement("div");a.classList.add("title");const c=document.createElement("div1"),s=document.createElement("div2"),o=document.createElement("div3"),l=document.createElement("div4"),r=document.createElement("div5"),m=document.createElement("div6"),u=document.createElement("div7");c.setAttribute("id","home-btn"),s.setAttribute("id","menu-btn"),o.setAttribute("id","contact-btn"),l.setAttribute("id","about-btn"),r.setAttribute("id","careers-btn"),m.setAttribute("id","reserve-btn"),u.setAttribute("id","title-btn"),c.classList.add("tab"),s.classList.add("tab"),o.classList.add("tab"),l.classList.add("tab"),r.classList.add("tab"),m.classList.add("tab"),c.textContent="Home",s.textContent="Menu",o.textContent="Contact",l.textContent="About",r.textContent="Careers",m.textContent="Reserve a table",u.innerHTML="Universe Pizza",i.appendChild(c),i.appendChild(s),i.appendChild(o),i.appendChild(l),i.appendChild(r),i.appendChild(m),a.appendChild(u),c.addEventListener("click",(()=>{alert("hello world"),t(),e()})),s.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("menu-page"),e.appendChild(t)})()})),o.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("contact-page"),e.appendChild(t)})()})),l.addEventListener("click",(()=>{t(),aboutPage()})),r.addEventListener("click",(()=>{t(),careersPage()})),m.addEventListener("click",(()=>{t(),reservePage()})),d.appendChild(i),d.appendChild(a),n.appendChild(d)})(),e()})();