"use strict";
var _a;
for (let i = 0; i < 99; i++) {
    let bigSquare = document.querySelector(".squares");
    let smallSquares = document.createElement("div");
    bigSquare.appendChild(smallSquares);
    smallSquares.classList.add("square");
    smallSquares.addEventListener("click", startGame);
}
let score = document.querySelector(".score");
let rslt = document.querySelector(".result");
let rslt1 = 0;
function startGame(e) {
    var _a, _b, _c;
    let rand = Math.floor(Math.random() * 10 + 1);
    if (score.innerHTML === "BOOM!") {
        (_a = document.querySelector('.square')) === null || _a === void 0 ? void 0 : _a.removeEventListener('click', startGame);
    }
    else if (rand === 1) {
        e.target.style.backgroundColor = "red";
        score.innerHTML = "BOOM!";
    }
    else if (e.target.style.backgroundColor == "green" || e.target.style.backgroundColor == "red") {
        (_b = document.querySelector('.square')) === null || _b === void 0 ? void 0 : _b.removeEventListener('click', startGame);
    }
    else if (rslt1 == 5) {
        (_c = document.querySelector('.square')) === null || _c === void 0 ? void 0 : _c.removeEventListener('click', startGame);
        score.innerHTML = "YOU WON!";
    }
    else {
        e.target.style.backgroundColor = "green";
        rslt1++;
        rslt.innerHTML = `Your score: ${rslt1}`;
    }
}
(_a = document.querySelector('.btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', e => {
    rslt1 = 0;
    rslt.innerHTML = `Your score: ${rslt1}`;
    score.innerHTML = "";
});
