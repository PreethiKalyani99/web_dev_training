//  CHALLENGE 1 - YOUR AGE IN DAYS

function ageInDays(){
    let birthYear = prompt('Which year were you born ?');
    let ageindays = (2021 - birthYear) * 365;
    let h1 = document.createElement('h1');
    h1.setAttribute('id', 'ageInDays');
    let text = document.createTextNode('You are ' + ageindays + ' days old');
    h1.appendChild(text);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

//CHALLENGE 2 - GENERATE CAT

function generateCat(){
    let img = document.createElement('img');
    img.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    img.setAttribute('id','catreset')
    let div = document.getElementById('cat-gen');
    div.appendChild(img);
}

function resetCat(){
    document.getElementById('catreset').remove();
}

// CHALLENGE 3 - STONE, PAPER, SCISSOR 

function rpsGame(yourChoice) {
    let botChoice, humanChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomInt());
    console.log('Computer choice: ', botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message =  finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, computerChoice){
    rpsDatabase = {
        'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock' : 1 , 'paper': 0.5, 'scissor': 0},
        'scissor': {'paper' : 1, 'scissor': 0.5, 'rock': 0}
    }

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'You Lost!', 'color': 'red'};
    }
    else if(yourScore === 0.5){
        return {'message': 'You Tied!', 'color': 'yellow'};
    }
    else{
        return {'message': 'You Won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    let imageDatabase = {
      'rock': document.getElementById('rock').src,
      'paper': document.getElementById('paper').src,
      'scissor': document.getElementById('scissor').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src = '" + imageDatabase[humanImageChoice] + "' height = 150 width = 150 style = 'box-shadow : 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style ='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src = '" + imageDatabase[botImageChoice] + "' height = 150 width = 150 style = 'box-shadow : 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-RPS').appendChild(humanDiv);
    document.getElementById('flex-box-RPS').appendChild(messageDiv);
    document.getElementById('flex-box-RPS').appendChild(botDiv);
}

// CHALLENGE 4 - CHANGE THE COLOR OF ALL BUTTONS

let allButtons = document.getElementsByTagName('button');

let copyButtons = [];
for(let i = 0; i < allButtons.length; i++){
    copyButtons.push(allButtons[i].classList[1]);
}
// console.log(copyButtons);

function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red'){
        buttonRed();
    }
    else if(buttonThingy.value === 'green'){
        buttonGreen();
    }
    else if(buttonThingy.value === 'reset'){
        buttonColorReset();
    }
    else if(buttonThingy.value === 'random'){
        randomColors();
    }
}

function buttonRed(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function buttonColorReset(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyButtons[i]);
    }
}

function randomColors(){
    let choice = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for(let i = 0; i < allButtons.length; i++){
        let randomChoice = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choice[randomChoice]);
    }
}

// CHALLENGE 5: BLACKJACK

let blackJackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    'cardsMap': {'2': 2,'3': 3,'4': 4,'5': 5,'6': 6,'7': 7,'8': 8,'9': 9,'10': 10,'J': 10,'Q': 10,'K': 10,'A': [1,11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'isTurnsOver': false,
};

const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];

document.querySelector('#hit').addEventListener('click', blackJackHit);

document.querySelector('#stand').addEventListener('click', dealerLogic);

document.querySelector('#deal').addEventListener('click', blackJackDeal);

const hitSound = new Audio('cardPlacingSound.mp3');
const winSound = new Audio('claps.mp3');
const lossSound = new Audio('aww.mp3');

function blackJackHit(){
    if(blackJackGame['isStand'] === false){
        let card = randomCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
}

function randomCard(){
    let randomIndex = Math.floor(Math.random() * 13);
    return blackJackGame['cards'][randomIndex];
}

function showCard(card, activePlayer){
    if(activePlayer['score'] <= 21){
        let cardImage = document.createElement('img');
        cardImage.src = `${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackJackDeal(){
    if(blackJackGame['isTurnsOver'] === true){

        blackJackGame['isStand'] = false;

        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    
        for(let i = 0; i < yourImages.length; i++){
            yourImages[i].remove();
        }
    
        for(let i = 0; i < dealerImages.length; i++){
            dealerImages[i].remove();
        }
    
        YOU['score'] = 0;
        DEALER['score'] = 0;
    
        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;
    
        document.querySelector('#your-blackjack-result').style.color = '#ffffff';
        document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';
    
        document.querySelector('#blackjack-result').textContent = "Let's Play";
        document.querySelector('#blackjack-result').style.color = 'black';

        blackJackGame['isTurnsOver'] = true;
    }
}

function updateScore(card, activePlayer){
    if(card === 'A'){
        if(activePlayer['score'] + blackJackGame['cardsMap'][card][1] <= 21){
                activePlayer['score'] += blackJackGame['cardsMap'][card][1];
        }
        else{
            activePlayer['score'] += blackJackGame['cardsMap'][card][0];
        }
    }
    else{
        activePlayer['score'] += blackJackGame['cardsMap'][card];
    }
}

function showScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));

}
async function dealerLogic(){
    blackJackGame['isStand'] = true;

    while(DEALER['score'] < 16 && (blackJackGame['isStand'] === true)){
        let card = randomCard();
        showCard(card,DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
    
    blackJackGame['isTurnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
}

function computeWinner(){
    let winner;

    if(YOU['score'] <= 21){
        if((YOU['score'] > DEALER['score']) || (DEALER['score'] > 21)){
            blackJackGame['wins']++;
            winner = YOU;
        }
        else if(YOU['score'] < DEALER['score']){
            blackJackGame['losses']++
            winner = DEALER;
        }
        else if(YOU['score'] === DEALER['score']){
            blackJackGame['draws']++
        }
    }
    else if(YOU['score'] > 21 && DEALER['score'] <= 21){
        blackJackGame['losses']++;
        winner = DEALER;
    }
    else if(YOU['score'] > 21 && DEALER['score'] > 21){
        blackJackGame['draws']++
    }
    return winner;
}

function showResult(winner){
    let message, messageColor;

    if(blackJackGame['isTurnsOver'] === true){
        if(winner === YOU){
            document.querySelector('#wins').textContent = blackJackGame['wins'];
            message = 'You Won!';
            messageColor = 'green';
            winSound.play();
        }
        else if(winner === DEALER){
            document.querySelector('#losses').textContent = blackJackGame['losses'];
            message = 'You Lost!';
            messageColor = 'red';
            lossSound.play();
        }
        else{
            document.querySelector('#draws').textContent = blackJackGame['draws'];
            message = 'You Drew!';
            messageColor = 'black'
        }
    
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}