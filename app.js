"use strict";
const firstButton = document.querySelector(".firstButton");
const secondButton = document.querySelector(".secondButton");
const firstScoreDisplay = document.querySelector(".firstScore");
const secondScoreDisplay = document.querySelector(".secondScore");
const resultDisplay = document.querySelector(".result");
const winnerDisplay = document.querySelector(".winnerMessage"); // Modal ichidagi xabar
const modal = document.querySelector("#winnerModal");
const closeModal = document.querySelector(".close");
const restartButton = document.querySelector(".restartButton");

let firstCount = 0;
let secondCount = 0;

const randomNumber = (player) => {
  const current = +(Math.random() * 10).toFixed(); // 1-10 oralig'ida random son

  if (player === "first") {
    if (firstCount + current > 100) {
      firstCount = 100;
    } else {
      firstCount += current;
    }
    firstScoreDisplay.textContent = firstCount.toString();
    firstButton.disabled = true; // Player 1 tugmasini o'chirish
    secondButton.disabled = false; // Player 2 tugmasini yoqish
  } else if (player === "second") {
    if (secondCount + current > 100) {
      secondCount = 100;
    } else {
      secondCount += current;
    }
    secondScoreDisplay.textContent = secondCount.toString();
    secondButton.disabled = true; // Player 2 tugmasini o'chirish
    firstButton.disabled = false; // Player 1 tugmasini yoqish
  }

  checkWinner();
};

const checkWinner = () => {
  if (firstCount >= 100) {
    displayWinner("Player 1", "Congratulations! Player 1 is the winner!");
  } else if (secondCount >= 100) {
    displayWinner("Player 2", "Great job! Player 2 is the champion!");
  }
};

const displayWinner = (playerName, message) => {
  winnerDisplay.textContent = message;
  modal.style.display = "block"; // Modal oynani ko'rsatish
  firstButton.disabled = true;
  secondButton.disabled = true;
};

// Modalni yopish uchun
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Restart tugmasi bosilganda
restartButton.addEventListener("click", () => {
  firstCount = 0;
  secondCount = 0;
  firstScoreDisplay.textContent = "0";
  secondScoreDisplay.textContent = "0";
  modal.style.display = "none"; // Modal oynani yopish
  firstButton.disabled = false;
  secondButton.disabled = true; // O'yin boshida Player 1 gal boshlaydi
});

secondButton.disabled = true; // O'yinni Player 1 boshlashi kerak

firstButton.addEventListener("click", () => randomNumber("first"));
secondButton.addEventListener("click", () => randomNumber("second"));


// "use strict";
// const secondScoreDisplay = document.querySelector(".secondScore");
// const firstButton = document.querySelector(".firstButton");
// const secondButton = document.querySelector(".secondButton");
// const firstScoreDisplay = document.querySelector(".firstScore");
// const winnerDisplay = document.querySelector(".winnerMessage");
// const resultDisplay = document.querySelector(".result");
// const closeModal = document.querySelector(".close");
// const modal = document.querySelector("#winnerModal");
// const restartButton = document.querySelector(".restartButton");

// let firstCount = 0;
// let secondCount = 0;

// const randomNumber = (player) => {
//   const current = +(Math.random() * 10).toFixed();
  
//   if (player === "first") {

//     if (firstCount + current > 100) {
//       firstCount = 100;
//     } else {
//       firstCount += current;
//     }
//     firstScoreDisplay.textContent = firstCount.toString();
//     firstButton.disabled = true;
//     secondButton.disabled = false;
//   } else if (player === "second") {

//     if (secondCount + current > 100) {
//       secondCount = 100;
//     } else {
//       secondCount += current;
//     }
//     secondScoreDisplay.textContent = secondCount.toString();
//     secondButton.disabled = true;
//     firstButton.disabled = false;
//   }

//   checkWinner();
// };

// const checkWinner = () => {
//   if (firstCount >= 100) {
//     displayWinner("Player 1", "Congratulations! Player 1 is the winner!");
//   } else if (secondCount >= 100) {
//     displayWinner("Player 2", "Great job! Player 2 is the champion!");
//   }
// };

// const displayWinner = (playerName, message) => {
//   winnerDisplay.textContent = message;
//   modal.style.display = "block";
//   firstButton.disabled = true;
//   secondButton.disabled = true;
// };


// closeModal.addEventListener("click", () => {
//   modal.style.display = "none";
// });


// restartButton.addEventListener("click", () => {
//   firstCount = 0;
//   secondCount = 0;
//   firstScoreDisplay.textContent = "0";
//   secondScoreDisplay.textContent = "0";
//   modal.style.display = "none";
//   firstButton.disabled = false;
//   secondButton.disabled = true;
// });

// secondButton.disabled = true;

// firstButton.addEventListener("click", () => randomNumber("first"));
// secondButton.addEventListener("click", () => randomNumber("second"));