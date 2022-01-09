// Variabler der refererer til klasser
const btn = document.querySelector(".burgermenu");
const nav = document.querySelector("nav");

// toggler en klasse på nav, der hedder "shown"
function toggleMenu() {
  nav.classList.toggle("shown");
}

// Variabel der hedder menuShown, som viser sig hvis nav-variablen indeholder "shown"
const menuShown = nav.classList.contains("shown");

// Hvis nav'en har klassen "shown", lukkes btn.textContent
if (menuShown) {
  btn.textContent = "Luk";
  // Hvis nav'en ikke har klassen "shown", sættes btn.textContent til "Menu"
} else {
  btn.textContent = "Menu";
}

// Klik-event til btn, der sætter toggleMenu funktionen igang
btn.addEventListener("click", toggleMenu);
