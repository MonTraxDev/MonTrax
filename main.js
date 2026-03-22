initLanguage();

function openViewer(src) {
  document.getElementById("viewer-img").src = src;
  document.getElementById("overlay").classList.add("active");
}

function closeViewer() {
  document.getElementById("overlay").classList.remove("active");
}

// Fermer avec la touche Échap
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeViewer();
});
