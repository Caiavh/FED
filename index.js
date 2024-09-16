var receptButton = document.querySelectorAll('.recepten section');

receptButton.addEventListener('click', openRecept);


function openRecept() {
    console.log("hallo fresh");
    var receptBurger = document.querySelector('article.detailpagina');
    receptBurger.classList.add('popUp');
}

