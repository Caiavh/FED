// Bron: https://dlo.mijnhva.nl/content/enforced/609314-FDMCI-2000FED121-DMCI-CMD-2425/FED%2024-25%20-%20Blok%201%20-%20Oefening%20JS%203-stap.pdf
// Bron: Danny
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


// Dark mode
document.querySelector('.lightdark').addEventListener('click', function() {
    const root = document.documentElement;

    // Check of de huidige achtergrondkleur donker is
    if (root.style.getPropertyValue('--primaire-achtergrond') === 'black') {
        // Zet naar licht thema
        root.style.setProperty('--primaire-achtergrond', 'white');
        root.style.setProperty('--secudaire-achtergrond', 'rgb(248, 248, 248)');
        root.style.setProperty('--font-kleur-primair', 'black');
        root.style.setProperty('--font-kleur-secundair', 'rgb(103, 103, 103)');
    } else {
        // Zet naar donker thema
        root.style.setProperty('--primaire-achtergrond', 'black');
        root.style.setProperty('--secudaire-achtergrond', 'rgb(33, 33, 33)');
        root.style.setProperty('--font-kleur-primair', 'white');
        root.style.setProperty('--font-kleur-secundair', 'rgb(150, 150, 150)');
    }
});