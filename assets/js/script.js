const playButtonEl = document.getElementById("play-button");
const resetButtonEl = document.getElementById("reset-button");
const gridEl = document.getElementById("grid");
const menuEl = document.getElementById("menu");
const bombs = [];

/**
 * Generate a random number
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function getRndInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
 }

function generateNumberBombs (numberCells){
   for (let i = 0; i < 16; i++) {
      const bomb = getRndInteger(1, numberCells);
      if (bombs.includes(bomb)) {
         i--;
      } else {
         bombs.push(bomb);
      }
      
   }   
}

/**
 * Generate a grid with n cells
 * @param {number} numberCells 
 */
function generateCells(numberCells) {
   for (let i = 0; i < numberCells; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width = `calc(100% / ${Math.sqrt(numberCells)})`;
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
function toggle (domEl1){
   domEl1.classList.toggle("d-none");
}

playButtonEl.addEventListener("click", function(){
   const numberCells = document.querySelector("select").value;
   generateCells(numberCells);
   generateNumberBombs(numberCells);
   toggle(menuEl);
   toggle(resetButtonEl);
   console.log(bombs);
});

resetButtonEl.addEventListener("click", function(){
   gridEl.innerHTML = "";
   bombs.length = 0;

   toggle(menuEl);
   toggle(resetButtonEl);   
});


// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


