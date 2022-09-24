//Create grid container
let maingrid = document.createElement('div')
maingrid.setAttribute("id", "grid-container")
document.body.appendChild(maingrid)

//Resize Grid Button- Red
let btn = document.createElement('button')
btn.textContent = "Choose Grid Layout"
btn.setAttribute("id", "grid-btn")
document.body.appendChild(btn)
btn.addEventListener('click', chooseGrid)

//Resize Grid Button- Rainbow
let btn2 = document.createElement('button')
btn2.textContent = "Choose Grid Layout"
btn2.setAttribute("id", "grid-btn2")
document.body.appendChild(btn2)
btn2.addEventListener('click', chooseGrid2)


//Change grid items to red on click
function hoverColor() {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.backgroundColor = `red`;
      });
    });
  }

//Form a grid based on userInput. Add eventlistener to change grid items to red
function chooseGrid(result) {
  maingrid.innerHTML = ""
   result = (prompt("Choose number of squares per side"))
  if (result <= 100) {
    maingrid.style.gridTemplateRows = `repeat(${result}, 1fr)`;
    maingrid.style.gridTemplateColumns = `repeat(${result}, 1fr)`;
    for(i = 0; i < result*result; i++) { 
    let grids = document.createElement('div')
    grids.setAttribute("class", "grid-item")
    maingrid.appendChild(grids)
    grids.addEventListener('mouseover', hoverColor)
  
    }
  
}
}

//Call randomColor in randomHover()
let randomColor = function() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//Change grid items to rainbow on click
function randomHover() {
  let items = document.querySelectorAll('.grid-item');
  items.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = `${randomColor()}`;
    });
  });
}

//Form a grid based on userInput. Add eventlistener to change grid items to rainbow
function chooseGrid2(result) {
  maingrid.innerHTML = ""
   result = (prompt("Choose number of squares per side"))
  if (result <= 100) {
    maingrid.style.gridTemplateRows = `repeat(${result}, 1fr)`;
    maingrid.style.gridTemplateColumns = `repeat(${result}, 1fr)`;
    for(i = 0; i < result*result; i++) { 
    let grids = document.createElement('div')
    grids.setAttribute("class", "grid-item")
    maingrid.appendChild(grids)
    grids.addEventListener('mouseover', randomHover)
    }
}
}







