// het hamburgermenu
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


// 1. // Dark mode
// Met behulp van Hadil
var darkKnop = document.querySelector('.lightdark');
var innerHTML = document.querySelector('html')
darkKnop.addEventListener('click', darkMode);

function darkMode() {
    innerHTML.classList.toggle("darkmode");
    console.log("darkmode doet het");

}


// bron: https://css-tricks.com/snippets/css/typewriter-effect/
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
    const pElement = document.querySelector('section:first-of-type p');
      startTypewriterAnimation();
    };
  
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
  
  

// 2. de blingbling 
// dat gebeurd bij het drukken op het logo

const logoKnop = document.querySelector('header img:first-of-type');
const limoenen = document.querySelector('.limoenen');
// 5. audio
// bron: eerder project bij inleiding programmeren
let audioLimoen = new Audio("audio/limoenen.mp3") 

logoKnop.addEventListener('click', limoenRegen);

function limoenRegen() {
    limoenen.classList.add('limoenregen');
    audioLimoen.play();
};

limoenen.addEventListener('transitionend', limoenOpnieuw)

function limoenOpnieuw() {
    limoenen.classList.remove('limoenregen');
};

// 4. Scroll animation
// Bron: https://medium.com/@burcuuusaglam/intersection-observer-in-javascript-and-lazy-load-images-38618f2c5864
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
const derdeSectionImages = document.querySelectorAll('section:nth-of-type(3) img');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      console.log("ik kan het zien")
    } else {
    }
  });
});

// Met behulp van ChatGPT / Prompt: Hoe zorg ik ervoor dat de plaatjes rustig in het scherm gebracht worden? 
derdeSectionImages.forEach(image => {
  image.classList.add('hidden');
  observer.observe(image);
});



