for (let i = 0; i < 99; i++) {
  let bigSquare = document.querySelector(".squares") as HTMLElement;
  let smallSquares = document.createElement("div") as HTMLElement;
  bigSquare.appendChild(smallSquares);
  smallSquares.classList.add("square");
  smallSquares.addEventListener("click", startGame);
}

let score = document.querySelector(".score") as HTMLElement;
let rslt = document.querySelector(".result") as HTMLElement;
let rslt1: any = 0;

function startGame(e: any) {
  let rand = Math.floor(Math.random() * 10 + 1);
  if (score.innerHTML === "BOOM!") {
   document.querySelector('.square')?.removeEventListener('click', startGame);
  } else if (rand === 1) {
    e.target.style.backgroundColor = "red";
    score.innerHTML = "BOOM!";
  } else if (e.target.style.backgroundColor == "green" || e.target.style.backgroundColor == "red") {
    document.querySelector('.square')?.removeEventListener('click', startGame);
  } else if (rslt1 == 5) {
    document.querySelector('.square')?.removeEventListener('click', startGame);
    score.innerHTML = "YOU WON!";
  } else {
    e.target.style.backgroundColor = "green";
    rslt1++;
    rslt.innerHTML = `Your score: ${rslt1}`;
  }
}

document.querySelector('.btn')?.addEventListener('click', e => {
  rslt1 = 0;
  rslt.innerHTML = `Your score: ${rslt1}`;
  score.innerHTML = "";
})


