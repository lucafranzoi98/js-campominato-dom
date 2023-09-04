const playButtonEl = document.getElementById("play-button");
const resetButtonEl = document.getElementById("reset-button");
const gridEl = document.getElementById("grid");
const menuEl = document.getElementById("menu");

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
   toggle(menuEl);
   toggle(resetButtonEl);
   console.log(numberCells);

})

resetButtonEl.addEventListener("click", function(){
   gridEl.innerHTML = "";

   toggle(menuEl);
   toggle(resetButtonEl);   
})

// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;



