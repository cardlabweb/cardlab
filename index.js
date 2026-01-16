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

    container.appendChild(div);
  });
});
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3GWm__vMzHBH01yBH_nOLO-dLrQ9we3g",
  authDomain: "cardlabarmenian.firebaseapp.com",
  projectId: "cardlabarmenian",
  storageBucket: "cardlabarmenian.firebasestorage.app",
  messagingSenderId: "226139663046",
  appId: "1:226139663046:web:4353e70d03272f6e40c5c7",
  measurementId: "G-1HCB71GJ44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


