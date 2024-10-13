//varaibles
// -------------------------------
    let player = {
        name: "Per",
        chips: 200
    }

    let cards = []
    let sum = 0;
    let isAlive = false
    let message = ""
    let messageEl;
    let sumEl; 
    let cardsEl; 
    let playerEl;
    let start;
    let newBtn;
    let enterBtn;
    let standBtn;

//Functions
//----------------------------------------------
window.onload = function(){

    messageEl = document.getElementById("message-el")
    sumEl = document.getElementById("sum-el")
    cardsEl = document.getElementById("cards-el")
    playerEl = document.getElementById("player-el")
    start = document.getElementById("start");
    newBtn = document.getElementById("new");
    enterBtn = document.getElementById("enter");
    standBtn = document.getElementById("stand");
    start.style.backgroundColor = "gray";
    newBtn.style.backgroundColor = "gray";
    standBtn.style.backgroundColor = "gray";
    enterBtn.disabled = false;



}//onload


function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}//getRandomCard

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    
    

    start.style.backgroundColor = "gray";
    start.disabled = true;


    renderGame()

}//startGame

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        newBtn.disabled = false;
        newBtn.style.backgroundColor = "goldenrod"
        
        standBtn.disabled = false;
        standBtn.style.backgroundColor = "goldenrod"

    } else if (sum === 21) {
        message = "You've got Blackjack!"
        
        start.disabled = false;
        start.style.backgroundColor = "goldenrod";
        newBtn.style.backgroundColor = "gray";
        newBtn.disabled = true;
        standBtn.style.backgroundColor = "gray";
        standBtn.disabled = true;
        player.chips *= 2;
        playerEl.textContent = player.name + "   $" + player.chips;


    } else {
        message = "You're out of the game!"
        isAlive = false;
        start.disabled = false;
        start.style.backgroundColor = "goldenrod";

        newBtn.style.backgroundColor = "gray";
        newBtn.disabled = true;

        standBtn.style.backgroundColor = "gray";
        standBtn.disabled = true;
        player.chips = 0;
        playerEl.textContent = player.name + "   $" + player.chips;
     

    }
    messageEl.textContent = message;
}//renderGame

function newCard() {
    if (isAlive === true ) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();        
    }
}//newCard

function enter(){

    let name = playerName.value;


    console.log("Entered Name:", name) //debuging 


    if(name === ""){
        messageEl.textContent = "Dear User, Please enter a username before beginning the game";
        
    }else{
        messageEl.textContent = "LETS PLAY";

        player.name = name;
        playerEl.textContent = player.name + "   $" + player.chips;
        start.disabled = false;
        start.style.backgroundColor = "goldenrod";
        
        enterBtn.style.backgroundColor = "gray";
        enterBtn.disabled = true;



}//else


function stand(){



}
}//enter

function stand(){

    messageEl.textContent = "You chose to stand"
    player.chips *= 2;
    playerEl.textContent = player.name + "   $" + player.chips;
    newBtn.style.backgroundColor = "gray";
    newBtn.disabled = true;
    start.disabled = false;
    start.style.backgroundColor = "goldenrod";
    standBtn.style.backgroundColor = "gray";
    standBtn.disabled = true;




}


function restart(){

    location.reload();

}