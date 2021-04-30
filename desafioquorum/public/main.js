let featuredBtn = document.getElementById("featuredBtn");
let gamesBtn = document.getElementById("gamesBtn");
let storeBtn = document.getElementById("storeBtn");
let featured = document.getElementById("featured");
let games = document.getElementById("games");
let store = document.getElementById("store");
let container = document.getElementById("container");

featuredBtn.addEventListener("click", (e) => {
  featured.scrollIntoView({ behavior: "smooth" });
});

gamesBtn.addEventListener("click", (e) => {
  games.scrollIntoView({ behavior: "smooth" });
});

storeBtn.addEventListener("click", (e) => {
  store.scrollIntoView({ behavior: "smooth" });
});

function social() {
  Swal.fire("No existe!", "Es una landing de prueba", "error");
}
function buyMain() {
  Swal.fire(
    "Successfully purchased!",
    "You just bought the VR headset",
    "success"
  );
}
function buyFirst() {
  Swal.fire(
    "Successfully purchased!",
    "You just bought the BEAT SABER game.",
    "success"
  );
}
function buySecond() {
  Swal.fire(
    "Successfully purchased!",
    "You just bought the JURASSIC WORLD game.",
    "success"
  );
}
function buyThird() {
  Swal.fire(
    "Successfully purchased!",
    "You just bought HALF LIFE VR game.",
    "success"
  );
}
function buyStore() {
  Swal.fire(
    "Successfully purchased!",
    "You just bought the full VR set.",
    "success"
  );
}

new Splide(".splide", {
  type: "loop",
  perPage: 2,
  breakpoints: {
    768: {
      perPage: 1,
    },
  },
  perMove: 1,
}).mount();
