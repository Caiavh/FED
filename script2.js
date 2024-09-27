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

    // Check of de huidige achtergrondkleur donker is     --font-kleur-tertair: rgb(181 181 181);
    if (root.style.getPropertyValue('--primaire-achtergrond') === 'black') {
        // Zet naar licht thema 
        root.style.setProperty('--primaire-achtergrond', 'white');
        root.style.setProperty('--secudaire-achtergrond', 'rgb(248, 248, 248)');
        root.style.setProperty('--font-kleur-primair', 'black');
        root.style.setProperty('--font-kleur-secundair', 'rgb(103, 103, 103)');
        root.style.setProperty('--font-kleur-tertair', 'rgb(181 181 181)');
        root.style.setProperty('--Fresh-groen', 'rgb(103, 103, 103)');
    } else {
        // Zet naar donker thema
        root.style.setProperty('--primaire-achtergrond', 'black');
        root.style.setProperty('--secudaire-achtergrond', 'rgb(33, 33, 33)');
        root.style.setProperty('--tertaire-achtergrond', 'rgb(111, 111, 111)');
        root.style.setProperty('--font-kleur-primair', 'white');
        root.style.setProperty('--font-kleur-secundair', 'rgb(150, 150, 150)');
        root.style.setProperty('--font-kleur-tertair', 'rgb(113 113 113);');
        root.style.setProperty('--Fresh-groen', 'rgb(25 173 106);');
    }
});

// bron: https://css-tricks.com/snippets/css/typewriter-effect/

// Simpele Typewriter class zoals eerder
class Typewriter {
    constructor(el, toRotate, period) {
      this.toRotate = JSON.parse(toRotate);
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.isDeleting = false;
      this.tick();
    }
  
    tick() {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];
  
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;
  
      let delta = 200;
      if (this.isDeleting) delta /= 2;
  
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
  
      setTimeout(() => this.tick(), delta);
    }
  }
  
  window.onload = () => {
    const h3Element = document.querySelector('h3');
  
    // Check of 'prefers-reduced-motion' aan staat
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Als prefers-reduced-motion aan is, verwijder dan de animatie
      h3Element.style.animation = 'none'; // Verwijder elke animatie
      h3Element.innerHTML = "Stress, Tijd en Geld"; // Zet de tekst direct neer
    } else {
      // Anders start de typemachine-animatie
      startTypewriterAnimation();
    }
  
    // Inject CSS for the cursor effect
    const css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff }";
    document.head.appendChild(css);
  };
  
  // Functie om de typemachine-animatie te starten
  function startTypewriterAnimation() {
    const elements = document.querySelectorAll('.typewrite');
    elements.forEach(el => {
      const toRotate = el.getAttribute('data-type');
      const period = el.getAttribute('data-period');
      if (toRotate) {
        new Typewriter(el, toRotate, period);
      }
    });
  }
  
  

// Selecteer het logo en de limoenen
const logoKnop = document.querySelector('header img');
const limoenen = document.querySelector('.limoenen');

// Voeg event listener toe aan het logo voor het starten van de animatie
logoKnop.addEventListener('click', function() {
    // Verwijder de 'limoenregen' klasse als deze al is toegevoegd, zodat je de animatie opnieuw kunt starten
    if (limoenen.classList.contains('limoenregen')) {
        limoenen.classList.remove('limoenregen');
        
        // Forceer een reflow om de klasse opnieuw toe te kunnen voegen (zorgt ervoor dat de animatie opnieuw start)
        void limoenen.offsetWidth; // Dit zorgt voor een herberekening van de stijl van het element
    }

    // Voeg de 'limoenregen' klasse toe om de animatie te starten
    limoenen.classList.add('limoenregen');
});

// Voeg event listener toe om te luisteren naar het einde van de animatie (transition)
limoenen.addEventListener('transitionend', function() {
    // Verwijder de 'limoenregen' klasse als de animatie klaar is, zodat je opnieuw kunt klikken
    limoenen.classList.remove('limoenregen');
});
