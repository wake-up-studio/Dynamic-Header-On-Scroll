window.addEventListener("DOMContentLoaded", (event) => {
  window.addEventListener("scroll", (event) => {
    let nav = document.querySelector("nav");
    let menu = document.querySelector("menu");

    if (window.scrollY > 200) {
      logo.style.display = "block";
      nav.style.width = "38%";
      nav.style.justifyContent = "space-between";
      nav.style.padding = "0 4rem";
      menu.style.gap = "0rem";
    } else {
      logo.style.display = "none";
      nav.style.width = "32%";
      nav.style.padding = "0 2rem";
      nav.style.justifyContent = "center";
      menu.style.gap = "1em";
    }
  });
});
