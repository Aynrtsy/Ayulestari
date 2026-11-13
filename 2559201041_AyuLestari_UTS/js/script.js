document.documentElement.classList.add("js");

const tombol = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");

tombol.addEventListener("click", function () {
  const terbuka = menu.classList.toggle("terbuka");
  tombol.setAttribute("aria-expanded", terbuka);
});
