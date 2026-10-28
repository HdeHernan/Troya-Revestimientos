const menuToggle=document.querySelector(".menu-toggle");
const nav=document.querySelector("#nav");
menuToggle.addEventListener("click",()=>{const isOpen=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(isOpen));});
nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");}));
document.querySelectorAll(".filter").forEach(button=>button.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(item=>item.classList.remove("active"));
  button.classList.add("active");
  const selected=button.dataset.filter;
  document.querySelectorAll(".project-card").forEach(card=>{card.hidden=selected!=="todos"&&card.dataset.category!==selected;});
}));
document.querySelector("#year").textContent=new Date().getFullYear();
