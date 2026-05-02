console.log("include.js running");

fetch("Components/Header.html")
  .then(res => {
    if (!res.ok) throw new Error("Header not found");
    return res.text();
  })
  .then(data => {
    document.getElementById("header").innerHTML = data;
    initHeader();
  })
  .catch(err => console.error("Header error:", err));

fetch("Components/footer.html")
  .then(res => {
    if (!res.ok) throw new Error("Footer not found");
    return res.text();
  })
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(err => console.error("Footer error:", err));