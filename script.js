var leesMeer = document.getElementById("meer");
var leesKnop = document.getElementById("meerknop");

leesKnop.addEventListener("click", meerLezen);

function meerLezen() {
    // Toon de extra tekst
    console.log("het werkt")
    leesMeer.style.display = "block";

    // Verberg de knop na het klikken
    leesKnop.style.display = "none";
};



