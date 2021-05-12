const buttons = document.querySelectorAll("buttons");
let allImages = document.querySelectorAll('.image');

let image = document.querySelectorAll('img');

let buttonContainer = document.querySelector ('button-container');

let newButton = document.createElement('button');
let buttonText = document.createTextNode('Ice Hockey')
   newButton.appendChild(buttonText);
   buttonContainer.appendChild(newButton);

function toggleImages (dataclass);

//buttons change color to blue and text white

/*for( let counter = 0; buttons.length;counter++ ) {
    buttons[counter].style.backgroundColor = 'blue';
    buttons[counter].style.color = 'white';
}*/

/*buttons.forEach (button => {
    button.style.backgroundColor = 'blue';
    button.style.color = 'white';
}
    )
for(let counter = 0; counter<images.length; counter++)
    images[counter].setAttribute('src', 'https://via.placeholder.com/150');*/