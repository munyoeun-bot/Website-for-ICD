function initHeader() {

  // prevent double init
  const header = document.getElementById("header");
  if (!header || header.dataset.init === "true") return;
  header.dataset.init = "true";

  // DROPDOWN
  header.querySelectorAll(".dropdown-toggle").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      const parent = btn.parentElement;

      header.querySelectorAll(".dropdown").forEach(d => {
        if (d !== parent) d.classList.remove("active");
      });

      parent.classList.toggle("active");
    });
  });

  // CLOSE OUTSIDE
  document.addEventListener("click", () => {
    header.querySelectorAll(".dropdown").forEach(d => {
      d.classList.remove("active");
    });
  });

  // MOBILE MENU
  const hamburger = header.querySelector(".hamburger");
  const menu = header.querySelector(".menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }

  // DARK MODE
  const mode = header.querySelector(".mode");

  if (mode) {
    mode.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }
}