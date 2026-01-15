import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  // 🔴 ԱՅՍՏԵՂ ԴՈՒ ՔՈ FIREBASE CONFIG-Ն ԵՍ ԴՆՈՒՄ
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const cardsRef = ref(db, "cards");
const container = document.getElementById("cards");

onValue(cardsRef, snapshot => {
  container.innerHTML = "";
  snapshot.forEach(item => {
    const data = item.val();
    container.innerHTML += `
      <div class="card">
        <img src="${data.image}">
        <h3>${data.title}</h3>
      </div>
    `;
  });
});
