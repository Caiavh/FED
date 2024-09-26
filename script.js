var body = document.querySelector('body');
var openButton = document.querySelector(".hamburgermenu");
console.log(openButton);
var deNav = document.querySelector(".menu");

var sluitButton = document.querySelector(".sluitmenu");


openButton.addEventListener('click',openMenu);
sluitButton.addEventListener('click',sluitMenu);

function openMenu() {
    console.log("hallo")
    deNav.classList.add("toonMenu");
    body.classList.add('disable');
}

function sluitMenu() {
    deNav.classList.remove("toonMenu")
    body.classList.remove('disable');  
}

var leesMeer = document.getElementById("meer");
var leesKnop = document.getElementById("meerknop");

leesKnop.addEventListener("click", meerLezen);

function meerLezen() {
    console.log("het werkt")
    leesMeer.style.display = "block";
    leesKnop.style.display = "none";
}

// Geholpen door ChatGPT: prompt
const perGerechtBtn = document.getElementById('perGerecht');
const per100gBtn = document.getElementById('per100g');
const valuesList = document.getElementById('valuesList');

function updateValues(values) {
    const listItems = valuesList.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].textContent = values[i];
    }
}


perGerechtBtn.addEventListener('click', function () {
    updateValues(perGerechtValues);
});

per100gBtn.addEventListener('click', function () {
    updateValues(per100gValues);
});


const perGerechtValues = ["902 kcal", "3774 KJ", "46.6 g", "9.1 g", "92.6 g", "18.9 g", "13.3 g", "22.1 g", "2.7 g"];
const per100gValues = ["155 kcal", "647 KJ", "7.99 g", "1.56 g", "15.88 g", "3.24 g", "2.28 g", "3.79 g", "0.46 g"];


const knoppen = document.querySelectorAll('.hoeveelheid-knop');
const hoeveelheden = document.querySelectorAll('.hoeveelheid');


const standaardHoeveelheden = [
    { basis: 2, eenheid: 'stuk(s)' },   // Hamburgerbol
    { basis: 100, eenheid: 'gram' },    // Aardappelschijfjes
    { basis: 5, eenheid: 'stuk(s)' },   // Vega nuggets
    { basis: 0.25, eenheid: 'head' },   // IJsbergsla
    { basis: 30, eenheid: 'gram' },     // Mangoketchup
    { basis: 1, eenheid: 'stuk(s)' },   // Tomaat
    { basis: 20, eenheid: 'gram' },     // Yoghurtdressing
    { basis: 0.5, eenheid: 'el' },      // Zonnebloemolie
    { basis: 0.5, eenheid: 'el' },      // Plantaardige roomboter
    { basis: 1, eenheid: 'el' }         // Mayonaise
];

// Functie om de hoeveelheden aan te passen
function updateHoeveelheden(vermenigvuldiger) {
    // Loop door elke hoeveelheid heen
    hoeveelheden.forEach(function(hoeveelheid, index) {
        // Haal het bijbehorende item op uit standaardHoeveelheden array
        const item = standaardHoeveelheden[index];
        
        // Bereken de nieuwe waarde door de basiswaarde te vermenigvuldigen
        const nieuweWaarde = item.basis * vermenigvuldiger;
        
        // Variabele om de nieuwe hoeveelheid op te slaan
        let weergaveWaarde;

        // Als de eenheid 'head' is, hoef je de waarde niet te bewerken
        if (item.eenheid === 'head') {
            weergaveWaarde = nieuweWaarde;
        } 
        // Als de eenheid 'el' of 'stuk(s)' is, controleer je of het een decimaal getal is
        else if (item.eenheid === 'el' || item.eenheid === 'stuk(s)') {
            // Als het geen heel getal is, rond af naar 1 decimaal, anders naar het dichtstbijzijnde hele getal
            if (nieuweWaarde % 1 !== 0) {
                weergaveWaarde = nieuweWaarde.toFixed(1); // Afronden op 1 decimaal
            } else {
                weergaveWaarde = Math.round(nieuweWaarde); // Afronden op een heel getal
            }
        } 
        // Voor andere eenheden rond je de waarde altijd af naar het dichtstbijzijnde hele getal
        else {
            weergaveWaarde = Math.round(nieuweWaarde);
        }

        // Update de tekstinhoud van het element met de nieuwe hoeveelheid en eenheid
        hoeveelheid.textContent = weergaveWaarde + ' ' + item.eenheid;
    });
}


knoppen.forEach((knop) => {
    knop.addEventListener('click', () => {
        const vermenigvuldiger = parseInt(knop.textContent, 10);  // Haal het nummer van de knop op
        updateHoeveelheden(vermenigvuldiger);  // Pas de hoeveelheden aan
    });
});

