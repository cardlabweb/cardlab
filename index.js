document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("adsContainer");
  if (!container) return;

  const ads = JSON.parse(localStorage.getItem("ads")) || [];
const firebaseConfig = { ... };
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

  container.innerHTML = "";

  ads.forEach(ad => {
    const div = document.createElement("div");
    div.style.border = "1px solid #000";
    div.style.margin = "10px";
    div.style.padding = "10px";

    div.innerHTML = `
      <strong>${ad.title}</strong><br>
      Գին՝ ${ad.price}
    `;



