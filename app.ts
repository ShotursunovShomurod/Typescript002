const firstButton = document.querySelector<HTMLButtonElement>(".firstButton")!;
const secondButton = document.querySelector<HTMLButtonElement>(".secondButton")!;
const firstScoreDisplay = document.querySelector<HTMLElement>(".firstScore")!;
const secondScoreDisplay = document.querySelector<HTMLElement>(".secondScore")!;
const winnerDisplay = document.querySelector<HTMLElement>(".winner")!;
const modal = document.querySelector<HTMLElement>("#winnerModal")!;
const closeModal = document.querySelector<HTMLElement>(".close")!;
const restartButton = document.querySelector<HTMLButtonElement>(".restartButton")!;

let firstCount = 0;
let secondCount = 0;

const randomNumber = (player: "first" | "second"): void => {
  const current: number = +(Math.random() * 10).toFixed();

  if (player === "first") {
    firstCount += current;
    firstScoreDisplay.textContent = firstCount.toString();
    firstButton.disabled = true;
    secondButton.disabled = false;
  } else if (player === "second") {
    secondCount += current;
    secondScoreDisplay.textContent = secondCount.toString();
    secondButton.disabled = true;
    firstButton.disabled = false;
  }

  checkWinner();
};

const checkWinner = (): void => {
  if (firstCount >= 100) {
    displayWinner("Winner: Player 1");
  } else if (secondCount >= 100) {
    displayWinner("Winner: Player 2");
  }
};

const displayWinner = (message: string): void => {
  winnerDisplay.textContent = message;
  modal.style.display = "block";
};

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

restartButton.addEventListener("click", () => {
  firstCount = 0;
  secondCount = 0;
  firstScoreDisplay.textContent = "0";
  secondScoreDisplay.textContent = "0";
  modal.style.display = "none";
  firstButton.disabled = false;
  secondButton.disabled = true;
});

secondButton.disabled = true;

firstButton.addEventListener("click", () => randomNumber("first"));
secondButton.addEventListener("click", () => randomNumber("second"));


// const firstButton = document.querySelector<HTMLButtonElement>(
//   ".firstButton"
// ) as HTMLButtonElement;
// const secondButton = document.querySelector<HTMLButtonElement>(
//   ".secondButton"
// ) as HTMLButtonElement;

// const firstScoreDisplay = document.querySelector<HTMLElement>(
//   ".firstScore"
// ) as HTMLElement;
// const secondScoreDisplay = document.querySelector<HTMLElement>(
//   ".secondScore"
// ) as HTMLElement;
// const resultDisplay = document.querySelector<HTMLElement>(
//   ".result"
// ) as HTMLElement;
// const winnerDisplay = document.querySelector<HTMLElement>(
//   ".winner"
// ) as HTMLElement;

// let firstCount: number = 0;
// let secondCount: number = 0;

// const randomNumber = (player: "first" | "second"): void => {
//   const current: number = +(Math.random() * 10).toFixed();

//   if (player === "first") {
//     firstCount += current;
//     firstScoreDisplay.textContent = firstCount.toString();
//     firstButton.disabled = true;
//     secondButton.disabled = false;
//   } else if (player === "second") {
//     secondCount += current;
//     secondScoreDisplay.textContent = secondCount.toString();
//     secondButton.disabled = true;
//     firstButton.disabled = false;
//   }

//   checkWinner();
// };

// const checkWinner = (): void => {
//   if (firstCount >= 100) {
//     displayWinner("Победитель - Игрок 1");
//   } else if (secondCount >= 100) {
//     displayWinner("Победитель - Игрок 2");
//   }
// };

// const displayWinner = (message: string): void => {
//   winnerDisplay.textContent = message;
//   resultDisplay.style.display = "block";
//   firstButton.disabled = true;
//   secondButton.disabled = true;
// };

// secondButton.disabled = true;

// firstButton.addEventListener("click", () => randomNumber("first"));
// secondButton.addEventListener("click", () => randomNumber("second"));
