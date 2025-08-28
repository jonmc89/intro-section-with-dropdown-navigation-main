console.log("Script Loaded");
const openMenuBtn = document.getElementById("menuBtn");
const hiddenNav = document.getElementById("hiddenNav");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

openMenuBtn.addEventListener("click", () => {
  hiddenNav.classList.add("unhide-nav");
  overlay.classList.add("show-overlay");
});

closeBtn.addEventListener("click", () => {
  hiddenNav.classList.remove("unhide-nav");
  overlay.classList.remove("show-overlay");
});
