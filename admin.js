const PASSWORD = "Զաքար";
let ads = JSON.parse(localStorage.getItem("ads")) || [];

function login() {
  const pass = document.getElementById("password").value;

  if (pass === PASSWORD) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
    renderAds();
  } else {
    alert("Սխալ գաղտնաբառ");
  }
}

function addAd() {
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;

  if (!title || !price) {
    alert("Լրացրու բոլոր դաշտերը");
    return;
  }

  const ad = {
    id: Date.now(),
    title,
    price
  };

  ads.push(ad);
  save();
  renderAds();

  document.getElementById("title").value = "";
  document.getElementById("price").value = "";
}

function deleteAd(id) {
  ads = ads.filter(ad => ad.id !== id);
  save();
  renderAds();
}

function renderAds() {
  const list = document.getElementById("adsList");
  list.innerHTML = "";

  ads.forEach(ad => {
    const div = document.createElement("div");
    div.style.border = "1px solid red";
    div.style.margin = "5px";
    div.style.padding = "5px";

    div.innerHTML = `
      ${ad.title} - ${ad.price}
      <button onclick="deleteAd(${ad.id})">Ջնջել</button>
    `;

    list.appendChild(div);
  });
}

function save() {
  localStorage.setItem("ads", JSON.stringify(ads));
}
