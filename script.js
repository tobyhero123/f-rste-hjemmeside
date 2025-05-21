const felt = document.getElementById("talfelt");
const status = document.getElementById("status");

// Når siden loader, tjek om der er gemt data
window.onload = function() {
  const gemtTal = localStorage.getItem("mitTal");
  if (gemtTal !== null) {
    felt.value = gemtTal;
    status.textContent = "Tidligere gemt tal: " + gemtTal;
  }
};

// Når brugeren skriver i feltet, gem tallet
felt.addEventListener("input", function() {
  localStorage.setItem("mitTal", felt.value);
  status.textContent = "Gemmer: " + felt.value;
});
