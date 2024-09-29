// Het hamburgermenu
var body = document.querySelector('body');
var openButton = document.querySelector(".hamburgermenu");
console.log(openButton);
var deNav = document.querySelector(".menu");

var sluitButton = document.querySelector(".sluitmenu");


openButton.addEventListener('click', openMenu);
sluitButton.addEventListener('click', sluitMenu);

function openMenu() {
    console.log("hallo")
    deNav.classList.add("toonMenu");
    body.classList.add('disable');
}

function sluitMenu() {
    deNav.classList.remove("toonMenu")
    body.classList.remove('disable');
}

// knop voor de 'lees meer' knop
var leesMeer = document.getElementById("meer");
var leesKnop = document.getElementById("meerknop");

leesKnop.addEventListener("click", meerLezen);

function meerLezen() {
    console.log("het werkt")
    leesMeer.style.display = "block";
    leesKnop.style.display = "none";
}

const perGerechtButton = document.getElementById('perGerecht');
const per100gButton = document.getElementById('per100g');
const valuesList = document.getElementById('valuesList');

// bron: https://www.shecodes.io/athena/1958-what-is-document-queryselectorall-in-javascript
function updateValues(values) {
    const listItems = valuesList.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].textContent = values[i];
    }
}

perGerechtButton.addEventListener('click', veranderGerecht)
per100gButton.addEventListener('click', verander100G)

function veranderGerecht() {
    updateValues(perGerechtValues);
};

function verander100G() {
    updateValues(per100gValues);
};

// Bron: https://www.w3schools.com/js/js_arrays.asp
const perGerechtValues = ["902 kcal", "3774 KJ", "46.6 g", "9.1 g", "92.6 g", "18.9 g", "13.3 g", "22.1 g", "2.7 g"];
const per100gValues = ["155 kcal", "647 KJ", "7.99 g", "1.56 g", "15.88 g", "3.24 g", "2.28 g", "3.79 g", "0.46 g"];

const knoppen = document.querySelectorAll('.hoeveelheid-knop');
const hoeveelheden = document.querySelectorAll('.hoeveelheid');


// Bron: https://www.w3schools.com/js/js_objects.asp
const standaardHoeveelheden = [
    { basis: 2, eenheid: 'stuk(s)' },
    { basis: 100, eenheid: 'gram' },
    { basis: 5, eenheid: 'stuk(s)' },
    { basis: 0.25, eenheid: 'head' },
    { basis: 30, eenheid: 'gram' },
    { basis: 1, eenheid: 'stuk(s)' },
    { basis: 20, eenheid: 'gram' },
    { basis: 0.5, eenheid: 'el' },
    { basis: 0.5, eenheid: 'el' },
    { basis: 1, eenheid: 'el' }
];

// Functie om de hoeveelheden aan te passen
// bron: https://www.shecodes.io/athena/1958-what-is-document-queryselectorall-in-javascript

function updateHoeveelheden(vermenigvuldiger) {
    hoeveelheden.forEach(function (hoeveelheid, index) {
        const item = standaardHoeveelheden[index];
        const nieuweWaarde = item.basis * vermenigvuldiger;
        let weergaveWaarde;

        if (item.eenheid === 'head') {
            weergaveWaarde = nieuweWaarde;
        } else if (item.eenheid === 'el' || item.eenheid === 'stuk(s)') {
            weergaveWaarde = (nieuweWaarde % 1 !== 0) ? nieuweWaarde.toFixed(1) : Math.round(nieuweWaarde);
        } else {
            weergaveWaarde = Math.round(nieuweWaarde);
        }

        hoeveelheid.textContent = weergaveWaarde + ' ' + item.eenheid;
    });
}

// Event listeners toevoegen aan knoppen voor vermenigvuldiging
knoppen.forEach((knop) => {
    knop.addEventListener('click', () => {
        const vermenigvuldiger = parseInt(knop.textContent, 10);
        updateHoeveelheden(vermenigvuldiger);
    });
});


// 1.  Dark mode
var darkKnop = document.querySelector('.lightdark');
var innerHTML = document.querySelector('html')
darkKnop.addEventListener('click', darkMode);

function darkMode() {
    innerHTML.classList.toggle("darkmode");
    console.log("darkmode doet het");

}

// 2. blingbling

const logoKnop = document.querySelector('header img:first-of-type');
const limoenen = document.querySelector('.limoenen');
// 5. audio
let audioLimoen = new Audio("audio/limoenen.mp3")

logoKnop.addEventListener('click', limoenRegen);

function limoenRegen() {
    limoenen.classList.add('limoenregen');
    audioLimoen.play();
};

limoenen.addEventListener('transitionend', liemoenOpnieuw)

function liemoenOpnieuw() {
    limoenen.classList.remove('limoenregen');
};