// L'anno in corso, preso dalla data di oggi
const annoCorrente = new Date().getFullYear();

// Lo scrivo nello span con id "anno"
document.getElementById("anno").textContent = annoCorrente;

//Pulsante "torna su": compare dopo aver scorso un po'
const pulsanteSu = document.querySelector(".torna-su");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    pulsanteSu.classList.add("visibile");
  } else {
    pulsanteSu.classList.remove("visibile");
  }
});

// Menu sul cellulare: il pulsante apre e chiude il menu
const pulsanteMenu = document.querySelector(".menu-pulsante");
const menu = document.querySelector("nav");

pulsanteMenu.addEventListener("click", function () {
  menu.classList.toggle("aperto");

  const aperto = menu.classList.contains("aperto");
  pulsanteMenu.setAttribute("aria-expanded", aperto);
});

// Toccando una voce, il menu si chiude
const vociMenu = document.querySelectorAll("nav a");

vociMenu.forEach(function (voce) {
  voce.addEventListener("click", function () {
    menu.classList.remove("aperto");
    pulsanteMenu.setAttribute("aria-expanded", false);
  });
});

// Toccando fuori dal menu, il menu si chiude
document.addEventListener("click", function (evento) {
  const dentroMenu = menu.contains(evento.target);
  const suPulsante = pulsanteMenu.contains(evento.target);

  if (!dentroMenu && !suPulsante) {
    menu.classList.remove("aperto");
    pulsanteMenu.setAttribute("aria-expanded", false);
  }
});