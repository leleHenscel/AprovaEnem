const teste = document.querySelector(".teste");
const navMenu = document.querySelector(".nav-menu");

teste.addEventListener("click", () =>{
teste.classList.toggle('active');
navMenu.classList.toggle('active');
})