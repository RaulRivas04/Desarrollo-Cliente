const words = {
    "Cities": ["london", "paris", "tokyo", "berlin", "madrid"],
};
let chosenCategory = "Cities";
let word = "";
let guesses = [];
let lives = 10;
let remainingLives = document.getElementById("remaining-lives");
remainingLives.innerHTML = lives;

function initializeGame() {
    const categories = Object.keys(words);
    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = words[chosenCategory][Math.floor(Math.random() * words[chosenCategory].length)];
    document.getElementById("chosen-category").innerText = chosenCategory;
    document.getElementById("word").innerText = "_ ".repeat(word.length).trim();
    guesses = [];
}

function createAlphabetButtons() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const alphabetContainer = document.getElementById("alphabet");

    alphabet.forEach(letter => {
        const button = document.createElement("button");
        button.innerText = letter;
        button.addEventListener("click", () => guessLetter(letter, button));
        alphabetContainer.appendChild(button);
    });
}

function guessLetter(letter, button) {
    button.disabled = true;
    if (word.includes(letter)) {
        updateWord(letter);
    } else {
        lives--;
        remainingLives.innerHTML = lives;
        if (lives === 0) {
            alert("Game Over! The word was: " + word);
            resetGame();
        }
    }
    checkWin();
}

function updateWord(letter) {
    let displayWord = "";
    for (let i = 0; i < word.length; i++) {
        if (guesses.includes(word[i]) || word[i] === letter) {
            displayWord += word[i] + " ";
        } else {
            displayWord += "_ ";
        }
    }
    document.getElementById("word").innerText = displayWord.trim();
    guesses.push(letter);
}

function checkWin() {
    if (!document.getElementById("word").innerText.includes("_")) {
        alert("Congratulations! You guessed the word!");
        resetGame();
    }
}

function resetGame() {
    document.getElementById("alphabet").innerHTML = "";
    lives = 10;
    remainingLives.innerHTML = lives;
    initializeGame();
    createAlphabetButtons();
}

document.getElementById("hint").addEventListener("click", () => {
    const hints = {
        london: "Capital of England",
        paris: "City of Love",
        tokyo: "Capital of Japan",
        berlin: "Capital of Germany",
        madrid: "Capital of Spain",
    };
    document.getElementById("clue").innerText = hints[word];
});

initializeGame();
createAlphabetButtons();
