const grid = document.getElementById("grid");
const timerDisplay = document.getElementById("timer");

const cardsArray = ["🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍉", "🍉", "🍓", "🍓", "🍒", "🍒", "🥝", "🥝", "🍍", "🍍"];
let firstCard = null;
let secondCard = null;
let hasFlippedCard = false;
let lockBoard = false;
let matchedPairs = 0;
let timerInterval;
let secondsElapsed = 0;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startTimer() {
    timerInterval = setInterval(() => {
        secondsElapsed++;
        timerDisplay.innerText = formatTime(secondsElapsed);
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
}

function createBoard() {
    const shuffledCards = shuffle(cardsArray);
    shuffledCards.forEach((symbol) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.symbol = symbol;
        card.innerHTML = `<span>${symbol}</span>`;
        card.querySelector("span").style.visibility = "hidden";
        card.addEventListener("click", flipCard);
        grid.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (!timerInterval) startTimer();
    const card = this;
    if (card === firstCard) return;

    card.classList.add("flipped");
    card.querySelector("span").style.visibility = "visible";

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = card;
    } else {
        secondCard = card;
        checkForMatch();
    }
}

function checkForMatch() {
    if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
        disableCards();
        matchedPairs++;
        if (matchedPairs === cardsArray.length / 2) {
            setTimeout(() => {
                alert(`You won! Time: ${formatTime(secondsElapsed)}`);
                stopTimer();
                resetGame();
            }, 500);
        }
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        firstCard.querySelector("span").style.visibility = "hidden";
        secondCard.querySelector("span").style.visibility = "hidden";
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function resetGame() {
    grid.innerHTML = "";
    matchedPairs = 0;
    secondsElapsed = 0;
    timerDisplay.innerText = "00:00";
    stopTimer();
    createBoard();
}

createBoard();
