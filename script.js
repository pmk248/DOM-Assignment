//// Question 1:
const QUESTION1_ELEMENT = document.getElementById("question1");

QUESTION1_ELEMENT.addEventListener("mouseover", changeTextOnHover);
QUESTION1_ELEMENT.addEventListener("mouseout", changeTextWhenUnhover);
QUESTION1_ELEMENT.addEventListener("click", changeOnClick);

function changeTextOnHover(){
    QUESTION1_ELEMENT.innerText = "MOUSE ON";
}

function changeTextWhenUnhover() {
    QUESTION1_ELEMENT.innerText = "MOUSE OFF"
}

function changeOnClick(){
    QUESTION1_ELEMENT.style.color = "red";
    QUESTION1_ELEMENT.style.background = "yellow";
    QUESTION1_ELEMENT.style.textDecoration = "italics";
    QUESTION1_ELEMENT.style.border = "solid";
    QUESTION1_ELEMENT.innerText = "CLICKED!"
}

//// Question 2:
const HAMBURGER = document.getElementById("hamburger");
const MENU = document.getElementById("menu");
const COLORS = MENU.querySelectorAll("*");
const QUESTION2_ELEMENT = document.getElementById("question2");

HAMBURGER.addEventListener("click", activateMenu);
COLORS.forEach(function(element){
    element.addEventListener("click", changeBoxColor)
});

function activateMenu(){
    MENU.classList.toggle('active');
}
function changeBoxColor(element){
    let selColor = element.target.innerText.toLowerCase();
    QUESTION2_ELEMENT.style.background = selColor;
    if (QUESTION2_ELEMENT.style.background.toString() !== selColor){
        QUESTION2_ELEMENT.style.background = "white";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const FORM = document.getElementById('colorForm');

    FORM.addEventListener('submit', function(event) {
        event.preventDefault();

        let formData = new FormData(FORM);
        let color = formData.get('colorAdd')
        let anchor = document.createElement('a');
        anchor.innerText = color.toUpperCase(); 

        MENU.appendChild(anchor);
        anchor.addEventListener('click', changeBoxColor);
    });
});

//// Question 3:
function setPosition(position) {
    let textContainer = document.querySelector('.text-container');
    textContainer.className = 'text-container question3'; 
    textContainer.classList.add(position); 
}

//// Question 4: