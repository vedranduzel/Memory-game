
const allCards = document.querySelectorAll(".card");
const deck = document.querySelector(".deck");

//empty array to push clicked cards and give them open class
let openCards = [];

//For restart icon to reload the browser
const restarts = document.querySelector(".restart");

//moves
const movesNum = document.querySelector(".moves");
let moves = 0;

//Show stars in modal
const starsStats = document.querySelector(".modal_stars");
let stars = document.querySelector(".stars");

//
let matched = 0;

//timer variables
let time = 0;
const clock = document.querySelector(".clock");
const modaltime = document.querySelector(".modal_time");

//this comment reminds me never ever again to forget to write let timer; in global scope
let timer;
let minutes;
let seconds;



//functions to hide modal box, shuffle cards and start timer
toggleModal();
shuffleDeck();
startClock();




//Code to shuffle deck
function shuffleDeck(){
    const cardsToShuffle = Array.from(allCards);
    const shuffledCards = shuffle(cardsToShuffle);
    for (card of shuffledCards) {
        deck.appendChild(card);
    }
};
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

//Flipping cards eventlistener, removes double clik bug, removes bug that adds open to card with match class, calls functions for moves, match and number of stars
deck.addEventListener("click", function(e) {
    const clickedCard = event.target;
    if (!openCards.includes(clickedCard) && clickedCard.classList.contains("card") && openCards.length < 2 && !clickedCard.classList.contains("match")){
        clickedCard.classList.add("open");
        openCards.push(clickedCard);

    if (openCards.length == 2){
        movesCounter();
        ifTheyMatch();
        starsNumber();
        }
    }
});

//Function to check if cards were matched (removes open class and adds match)
function ifTheyMatch(){
    if (openCards[0].firstElementChild.className === openCards[1].firstElementChild.className) {
        openCards[0].classList.remove("open");
        openCards[0].classList.add("match");
        openCards[1].classList.remove("open");
        openCards[1].classList.add("match");
        openCards = [];
        matched++;
        gameOver();
    }
// Remove open if it isn't a match with setTimeout
    else {
        setTimeout(function(){
        openCards[0].classList.remove("open");
        openCards[1].classList.remove("open");
        openCards = [];
      }, 1000);
    }
};

//This restarts the game when you click on restart icon
restarts.addEventListener("click", function (){
    window.location.reload();
    });

//Function to count moves
function movesCounter(){
    moves++;
    movesNum.innerText = moves;
    };

//hides stars in game when you open them
function starsNumber (){
    if(moves >= 15){
        stars.children[2].style.display = "none";
    }
    if(moves >= 18){
        stars.children[1].style.display = "none";
    }
};

//function to activate modal box when you match all cards
function toggleModal() {
    const modal = document.querySelector(".modal_background");
    modal.classList.toggle("hide");
};


//GAME OVER function that stops the clock, shows hidden modal box and add number of moves and stars on it
function gameOver(){
    if (matched === 8){
        clearTimer();
        toggleModal();
        scores();
        showStars();
        }
    };
//This is to show how many moves player had in game
function scores() {
    const movesStats = document.querySelector(".modal_moves");
    movesStats.innerHTML = `You finished the game in ${moves} moves.`;
};

//timer functions for start and finish
function startClock() {
    timer = setInterval(function() {
    time++;
    clock.innerHTML = time;
    seconds = time % 60;
    minutes = Math.floor(time / 60);
    if (seconds < 10){
        clock.innerHTML = `${minutes}:0${seconds}`;
    } else {
        clock.innerHTML = `${minutes}:${seconds}`;
    }
}, 1000);
};

//function that stops the timer and shows time in modal
function clearTimer(){
    clearInterval(timer);
    modaltime.innerHTML = `Your time is ${minutes} minutes and ${seconds} seconds.`;
    };

//Function to show stars in modal box
function showStars(){
    if (moves < 15){
        starsStats.innerHTML = `Your star rating is: <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>`;
    }
    else if (moves < 18){
        starsStats.innerHTML = `Your star rating is: <i class="fa fa-star"></i><i class="fa fa-star"></i>`;
    }
    else {
        starsStats.innerHTML = `Your star rating is: <i class="fa fa-star"></i>`;
    }
};

//Function to make button reload the game
function restarting(){
    window.location.reload();
    };
