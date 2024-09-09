/// Question 1:
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
const COLOR_FORM = document.getElementById('colorForm');

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

COLOR_FORM.addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData(COLOR_FORM);
    let color = formData.get('colorAdd')
    let anchor = document.createElement('a');
    anchor.innerText = color.toUpperCase(); 

    MENU.appendChild(anchor);
    anchor.addEventListener('click', changeBoxColor);
});

//// Question 3:
function setPosition(position) {
    let textContainer = document.querySelector('.text-container');
    textContainer.className = 'text-container question3'; 
    textContainer.classList.add(position); 
}

//// Question 4:
const INFO_FORM = document.getElementById("information-form");
const INFO_TABLE = document.getElementById("information-table");

INFO_FORM.addEventListener('submit', function(event){
    event.preventDefault();

    let formData = new FormData(event.target);
    addToTable(formData);
});

function addToTable(formData){
    let id = Math.floor(Math.random() * 99999999);
    let name = formData.get('Name');
    let age = formData.get('Age');
    let gender = formData.get('Gender');

    const NEW_ROW = document.createElement('tr');

    if (id && name && age && gender){
        
        let dataList = [id, name, age, gender];

        dataList.forEach(data => {
            
            let newTableData = document.createElement('td');
            newTableData.innerText = data;
            
            NEW_ROW.appendChild(newTableData);
        });
        INFO_TABLE.appendChild(NEW_ROW);
    }
};

//// Question 5:

//// Question 6:
