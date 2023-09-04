// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const playButtonEl = document.getElementById("play-button");
const resetButtonEl = document.getElementById("reset-button");
const gridEl = document.getElementById("grid");
const titleEl = document.getElementById("title");
const numberCells = 100;

/**
 * Generate a grid with n cells
 * @param {number} numberCells 
 */
function generateCells(numberCells) {
   for (let i = 0; i < numberCells; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.innerHTML = i + 1;
      gridEl.append(cell);

      cell.addEventListener("click", function(){
         this.classList.toggle("bg-click");
         console.log(cell.innerHTML);
      });
   }
}

/**
 * Toggle class d-none on DomEl
 * @param {DomEl} domEl1 
 * @param {DomEl} domEl2 
 * @param {DomEl} domEl3 
 */
function toggle (domEl1, domEl2, domEl3){
   domEl1.classList.toggle("d-none");
   domEl2.classList.toggle("d-none");
   domEl3.classList.toggle("d-none");
}

playButtonEl.addEventListener("click", function(){
   generateCells(numberCells);

   toggle(playButtonEl, resetButtonEl, titleEl);

})

resetButtonEl.addEventListener("click", function(){
   gridEl.innerHTML = "";

   toggle(playButtonEl, resetButtonEl, titleEl);
})



