fetch("/Components/Header.html")
.then(res => res.text())
.then(data => {
  document.getElementById("header").innerHTML = data;

  initHeader(); // 🔥 important
});

fetch("/Components/Footer.html")
.then(res => res.text())
.then(data => {
  document.getElementById("footer").innerHTML = data;
});


function initHeader(){

  // DROPDOWN
  document.querySelectorAll(".dropdown-toggle").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      const parent = btn.parentElement;

      document.querySelectorAll(".dropdown").forEach(d => {
        if (d !== parent) d.classList.remove("active");
      });

      parent.classList.toggle("active");
    });
  });

  // CLOSE OUTSIDE
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown").forEach(d => {
      d.classList.remove("active");
    });
  });

  // MOBILE MENU
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  if(hamburger && menu){
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }

  // DARK MODE
  const mode = document.querySelector(".mode");

  if(mode){
    mode.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }

}