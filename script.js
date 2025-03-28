document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('open');
});
window.addEventListener("scroll",function(){
let e=document.getElementById("scrollIndicator");window.scrollY>10?e.classList.add("hide"):e.classList.remove("hide")}),
document.getElementById("scrollIndicator").addEventListener("click",function(){window.scrollTo({top:1050,behavior:"smooth"})});