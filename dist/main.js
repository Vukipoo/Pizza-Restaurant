(()=>{"use strict";const e=()=>{const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("home-page");const i=document.createElement("div");i.classList.add("text");const d=document.createElement("div");d.classList.add("headline"),d.innerHTML="<h1>Best pizza in the universe</h1>",i.appendChild(d);const n=document.createElement("div");n.classList.add("home-pizza"),n.innerHTML='<img src="https://media.istockphoto.com/id/1042948900/photo/pizza-pepperoni-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=5TZsBkiQFd8FCz1HU1jdSfc-eZbCpkV6vyuxtvsBjWc="></img>',t.appendChild(n);const a=document.createElement("div");a.classList.add("home-copy"),a.innerHTML="<p>Lorem ipsum dolor sit amet, mel et odio percipit, ridens salutatus pertinacia ut mel, vim tritani voluptua eu. Id eum ferri doming. Ne mel lucilius disputationi, ad nec autem inciderint. Mea mazim commodo admodum an, legere nominavi duo at, te vis lorem probatus. Vim id tamquam suscipit. Ad sea lorem viris audiam, hinc semper sed eu.</p>",i.appendChild(a);const s=document.createElement("button");s.classList.add("book-online"),s.textContent="Book Online",i.appendChild(s),t.appendChild(i),e.appendChild(t)};function t(){const e=document.querySelector(".content");document.querySelectorAll(".home-page, .menu-page, .contact-page, .press-page").forEach((t=>{t&&e.removeChild(t)}))}(()=>{const i=document.querySelector(".content"),d=document.createElement("header");d.classList.add("header");const n=document.createElement("div");n.classList.add("tabs");const a=document.createElement("div");a.classList.add("title");const s=document.createElement("div1"),o=document.createElement("div2"),c=document.createElement("div3"),m=document.createElement("div4"),r=document.createElement("div5"),l=document.createElement("div6"),u=document.createElement("div7"),p=document.createElement("div8");s.setAttribute("id","home-btn"),o.setAttribute("id","menu-btn"),c.setAttribute("id","press-btn"),m.setAttribute("id","contact-btn"),r.setAttribute("id","about-btn"),l.setAttribute("id","careers-btn"),u.setAttribute("id","reserve-btn"),p.setAttribute("id","title-btn"),s.classList.add("tab"),o.classList.add("tab"),c.classList.add("tab"),m.classList.add("tab"),r.classList.add("tab"),l.classList.add("tab"),u.classList.add("tab"),s.textContent="Home",o.textContent="Menu",c.textContent="Press",m.textContent="Contact",r.textContent="About",l.textContent="Careers",u.textContent="Reserve a table",p.innerHTML="Universe Pizza",n.appendChild(s),n.appendChild(o),n.appendChild(c),n.appendChild(m),n.appendChild(r),n.appendChild(l),n.appendChild(u),a.appendChild(p),s.addEventListener("click",(()=>{t(),e()})),o.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("menu-page");const i=document.createElement("div");i.classList.add("high-light");const d=document.createElement("div");d.classList.add("highLight-text"),d.innerHTML="<h2>Highlight item $9.99</h2><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>";const n=document.createElement("div");n.classList.add("highlight-img"),n.innerHTML='<img src = "https://rare-gallery.com/uploads/posts/805971-Fast-food-Pizza-White-background-Basil.jpg">';const a=document.createElement("div");a.classList.add("menu-items");const s=document.createElement("div"),o=document.createElement("div"),c=document.createElement("div"),m=document.createElement("div");s.classList.add("menu-item-div"),o.classList.add("menu-item-div"),c.classList.add("menu-item-div"),m.classList.add("menu-item-div"),s.innerHTML="<h3>Menu Item $9.99</h3><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",o.innerHTML="<h3>Menu Item $9.99</h3><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",c.innerHTML="<h3>Menu Item $9.99</h3><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",m.innerHTML="<h3>Menu Item $9.99</h3><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",a.appendChild(s),a.appendChild(o),a.appendChild(c),a.appendChild(m),i.appendChild(d),i.appendChild(n),t.appendChild(i),t.appendChild(a),e.appendChild(t)})()})),c.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("press-page");const i=document.createElement("div");i.classList.add("press-img-div"),i.innerHTML='<img src="https://media.istockphoto.com/id/1088702690/photo/dog-with-a-slice-of-pizza.jpg?s=612x612&w=0&k=20&c=kVE9voMZkqhR8uV36HlbnV4VhRs9jPnWtDRg2hQ-vGo=">',t.appendChild(i);const d=document.createElement("div");d.classList.add("press-comments-div");const n=document.createElement("div");n.classList.add("press-comment"),n.innerHTML="<h3>05/07/2023</h3><h2>Popular Pizza Critic</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",d.appendChild(n);const a=document.createElement("div");a.classList.add("press-comment"),a.innerHTML="<h3>05/07/2023</h3><h2>Popular Restaurant Critic</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",d.appendChild(a);const s=document.createElement("div");s.classList.add("press-comment"),s.innerHTML="<h3>05/07/2023</h3><h2>Popular Restaurant Critic</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",d.appendChild(s),t.appendChild(d),e.appendChild(t)})()})),m.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("contact-page"),e.appendChild(t)})()})),r.addEventListener("click",(()=>{t(),aboutPage()})),l.addEventListener("click",(()=>{t(),careersPage()})),u.addEventListener("click",(()=>{t(),reservePage()})),d.appendChild(n),d.appendChild(a),i.appendChild(d)})(),e()})();