// logo hover
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const collectionOfLogo = [
    ["./assets/logo/logof.png", "./assets/logo/logoi.png", "./assets/logo/logot.png", "./assets/logo/logoy.png"],
    ["./assets/logo/logof-white.png", "./assets/logo/logoi-white.png", "./assets/logo/logot-white.png", "./assets/logo/logoy-white.png"]
];

img1.addEventListener("mouseover", () => {img1.src = collectionOfLogo[1][0]});
img1.addEventListener("mouseout", () => {img1.src = collectionOfLogo[0][0]});

img2.addEventListener("mouseover", () => {img2.src = collectionOfLogo[1][1]});
img2.addEventListener("mouseout", () => {img2.src = collectionOfLogo[0][1]});

img3.addEventListener("mouseover", () => {img3.src = collectionOfLogo[1][2]});
img3.addEventListener("mouseout", () => {img3.src = collectionOfLogo[0][2]});

img4.addEventListener("mouseover", () => {img4.src = collectionOfLogo[1][3]});
img4.addEventListener("mouseout", () => {img4.src = collectionOfLogo[0][3]});

// code qui souligne les menus au survole
const lines = document.querySelectorAll("li");

for (let line of lines) {
    line.addEventListener("mouseover", (l) => {
        l.preventDefault();
        line.style.borderBottom = "3px solid #ffffff";
        if (line.classList.contains("list_")) {
            line.style.borderBottom = "none";
        }
    });
    line.addEventListener("mouseout", (l) => {
        l.preventDefault();
        line.style.borderBottom = "none";
    });
}

// animation titre: fade in 
const titre = document.querySelector(".titre");
const valueOfTitle = titre.textContent;
var e;
e = 0;

// Animation sous-titre: opacity
const sousTitre = document.querySelector(".description");

function opacitySousTitre() {
    sousTitre.style.opacity = e;
    if (e < 1) {
        setTimeout("opacitySousTitre()", 100);
        e = e + 0.1;
    }
}

titre.style.transform = "translateX(0%)"
opacitySousTitre();

// ****************************************************************************************************************