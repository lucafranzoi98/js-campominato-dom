const playButtonEl = document.getElementById("play-button");
const resetButtonEl = document.getElementById("reset-button");
const gridEl = document.getElementById("grid");
const menuEl = document.getElementById("menu");
const resultEl = document.getElementById("result");
const titleEl = document.querySelector("h1");
const containerEl = document.getElementById("container");
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

/**
 * Generate 16 different random numbers and push in array
 * @param {number} numberCells 
 */
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
 * Generate a grid with n cells clickables
 * @param {number} numberCells 
 */
function generateCells(numberCells) {
   for (let i = 1; i <= numberCells; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width = `calc(100% / ${Math.sqrt(numberCells)})`;
      cell.innerHTML = i;
      gridEl.append(cell);

      cell.addEventListener("click", function(){
         const numberSafeCells = document.querySelectorAll(".bg-success").length;
         if (numberSafeCells < (numberCells - 16)) {

            if (bombs.includes(i)) {
               this.classList.add("bg-bomb");
               toggle(resultEl);
               resultEl.innerHTML = `Your score: ${numberSafeCells}`;
               gridEl.classList.add("pe-none");
            } else {
               this.classList.add("bg-success");
            }

         } else {
            toggle(resultEl)
            resultEl.innerHTML = `YOU WON!!! Your score: ${numberSafeCells}`;
            gridEl.classList.add("pe-none");
         }
         
      });
   }
}

/**
 * Toggle class d-none on DomEl
 * @param {DomEl} domEl1 
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
   toggle(titleEl);
   console.log(bombs);
});


resetButtonEl.addEventListener("click", function(){
   gridEl.innerHTML = "";
   bombs.length = 0;
   resultEl.innerHTML = "";
   gridEl.classList.remove("pe-none");

   toggle(menuEl);
   toggle(resetButtonEl);  
   toggle(titleEl);
   toggle(resultEl);
});