var leesMeer = document.getElementById("meer");
var leesKnop = document.getElementById("meerknop");

leesKnop.addEventListener("click", meerLezen);

// Selecteer de knoppen en de ul waarin de waarden staan
const perGerechtBtn = document.getElementById('perGerecht');
const per100gBtn = document.getElementById('per100g');
const valuesList = document.getElementById('valuesList');

// Waarden voor per gerecht en per 100g
const perGerechtValues = ["902 kcal", "3774 KJ", "46.6 g", "9.1 g", "92.6 g", "18.9 g", "13.3 g", "22.1 g", "2.7 g"];
const per100gValues = ["155 kcal", "647 KJ", "7.99 g", "1.56 g", "15.88 g", "3.24 g", "2.28 g", "3.79 g", "0.46 g"];

function meerLezen() {
    // Toon de extra tekst
    console.log("het werkt")
    leesMeer.style.display = "block";

    // Verberg de knop na het klikken
    leesKnop.style.display = "none";
}

// Functie om de waarden te updaten
function updateValues(values) {
    const listItems = valuesList.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].textContent = values[i];
    }
}

// Event listeners voor de knoppen
perGerechtBtn.addEventListener('click', function() {
    updateValues(perGerechtValues);
});

per100gBtn.addEventListener('click', function() {
    updateValues(per100gValues);
});



