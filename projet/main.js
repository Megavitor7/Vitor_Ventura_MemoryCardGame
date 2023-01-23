const cards = document.querySelectorAll(".card");
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
let score = document.getElementById("score");
let timer = document.getElementById("timer");
let seconds = 0;
let minutes = 0;
let intervalId;
let currentTime = timer.innerhtml
currentTime = score
const startButton = document.getElementById("start-button");
const gameBoard = document.getElementById("game-board");
let playerName = document.getElementById("playerName").value;


function startTimer() {
    interval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        timer.innerHTML = `${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);
}

// Function to stop the timer
function stopTimer() {
    clearInterval(interval);
}

startButton.addEventListener("click", () => {
    playerName.innerHTML = input.value;
    startTimer();
});

function saveScore() {
    var playerName = document.getElementById("playerName").value;
    var score = document.getElementById("score").textContent;
    var newRow = table.insertRow();
    var nameCell = newRow.insertCell();
    var scoreCell = newRow.insertCell();
    nameCell.innerHTML = playerName;
    scoreCell.innerHTML = score;
}

startButton.addEventListener("click", function () {
    // Affichez le plateau de jeu
    gameBoard.style.display = "flex";
    // Démarrez le chronomètre
    startTimer();
    // Mélangez les cartes aléatoirement
    shuffleCards();
});

function flipCard({
    target: clickedCard
}) {
    if (cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
            cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        matched++;
        if (matched == 8) {
            alert("gg mdr ")
            stopTimer()
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);
    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() - 0.5);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `images/img-${arr[i]}.jpg`;
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});