let maingrid = document.createElement('div')
maingrid.setAttribute("id", "grid-container")
document.body.appendChild(maingrid)

let btn = document.createElement('button')
btn.textContent = "Choose Grid Layout"
btn.setAttribute("id", "grid-btn")

btn.addEventListener('click', chooseGrid)
document.body.appendChild(btn)

function hoverColor() {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.backgroundColor = `red`;
      });
    });
  }



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

function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string + ' ';
    times--;
  }
  return repeatedString;
}







