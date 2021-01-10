const ID_GAME_AREA = 'game-area';
const ID_START_BTN = 'start-btn';
const ID_SQUARE_TEMPLATE = 'square-template';
const ID_POINTS = 'points';
const ID_SAVE_BTN = 'save-btn';
const ID_INPUT_NAME = 'input-name';
const ID_RESULT_TEMPLATE = 'result-template';
const ID_FINAL_POINTS_CONTAINER = 'exampleModalLabel';
const ID_RESULT_TABLE = 'result-table-container';
const ID_TIMER_INPUT = 'time';
const ID_PAUSE_BTN = 'pause-btn';
const ID_NEW_GAME_BTN = 'new-game-btn';
const CLASS_NAME_SQUARES = 'square';
const CLASS_RED_BACKGROUND = 'red-background';



function getRandomNumber(min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function getRandomColor(num){
    switch(num){
        case 1: return 'red'
        case 2: return 'green'
        case 3: return 'blue'
    }
}

function onStartBtnClick(){
    if(!gameArea.innerHTML){
    startGame();
    }
}

function startGame(){
    let newGameAreaHtml = '';
    for(let i = 0; i < getRandomNumber(1, 3); i++){
        newGameAreaHtml += squareTemplate
            .replace('{{class}}', 'square')
            .replace('{{styles}}', `margin-left:${getRandomNumber(0, window.innerWidth * 0.65 - 30)}px; margin-top:${getRandomNumber(0, 650)}px; background-color:${getRandomColor(getRandomNumber(1, 3))}`)
            .replace('{{id}}', getRandomNumber(1, 9000000000000000));
    }
    startTimer(59);
    setGameAreaHtml(newGameAreaHtml);
}

function onGameAreaClick(e){
    if(e.target.classList.contains('square') && pause === false){
        onSquareClick(e.target);
    }
}

function onSquareClick(element){
    const newSquares = Array.from(squares).filter((item) => item.id !== element.id);
    let newGameAreaHtml = '';
    newSquares.forEach((item) => {
        newGameAreaHtml += item.outerHTML;
    });
    newGameAreaHtml ? newGameAreaHtml += getSquaresHtml(getRandomNumber(0, 2)) : newGameAreaHtml = getSquaresHtml(2);
    setGameAreaHtml(newGameAreaHtml);
    addOnePoint();
}

function setGameAreaHtml(html){
    gameArea.innerHTML = html;
}

function getSquaresHtml(number){
    let squaresHtml = '';
    for(let i = 0; i < number; i++){
        squaresHtml += squareTemplate
            .replace('{{class}}', 'square')
            .replace('{{styles}}', `margin-left:${getRandomNumber(0, window.innerWidth * 0.65 - 30)}px; margin-top:${getRandomNumber(0, 650)}px; background-color:${getRandomColor(getRandomNumber(1, 3))}`)
            .replace('{{id}}', getRandomNumber(1, 9000000000000000));
    }
    return squaresHtml;
}

function addOnePoint(){
    pointsContainer.value = +pointsContainer.value + 1;
}

function startTimer(num){
    secondsLeft = num;
    timer = setInterval(() => {
        if (secondsLeft <= 0) {
            stopTimer(timer);
            stopGame();
        } else {
            timerInput.value = `00:${secondsLeft}`;
        }
        --secondsLeft;
    }, 1000);
}

function stopTimer(timer){
    timerInput.value = '01:00';
    clearInterval(timer);
}

function stopGame(){
    triggerModal();
    setGameAreaHtml('');
}

function triggerModal(){
    lastGamePoints = pointsContainer.value;
    setZeroPoints();
    finalPointsContainer.textContent = `Your score: ${lastGamePoints}`;
    $('#myModal').modal({
        keyboard: false
      });
}

function onSaveBtnClick(){
    let template = resultTemplate
        .replace('{{class}}', 'result')
        .replace('{{name}}', inputName.value)
        .replace('{{points}}', lastGamePoints);
    resultTable.innerHTML += template;
    $(".modal").modal("hide");
}

function onPauseBtnClick(){
    if(gameArea.innerHTML){
        pauseBtn.classList.toggle(CLASS_RED_BACKGROUND);
        if(pause){
            removeGamePause();
        } else {
            addGamePause();
        }
    }
}

function addGamePause(){
    clearInterval(timer);
    pause = true;
}

function removeGamePause(){
    startTimer(secondsLeft);
    pause = false;
}

function onNewGameClick(){
    setZeroPoints();
    setDefaultPauseState();
    stopTimer(timer);
    startGame();
}

function setDefaultPauseState(){
    pauseBtn.classList.remove(CLASS_RED_BACKGROUND);
    pause = false;
}

function setZeroPoints(){
    pointsContainer.value = 0;
}


let secondsLeft;
let timer;
let pause = false;
let lastGamePoints = 0;
const squares = document.getElementsByClassName(CLASS_NAME_SQUARES);
const gameArea = document.getElementById(ID_GAME_AREA);
const startBtn = document.getElementById(ID_START_BTN);
const saveBtn = document.getElementById(ID_SAVE_BTN);
const inputName = document.getElementById(ID_INPUT_NAME);
const squareTemplate = document.getElementById(ID_SQUARE_TEMPLATE).innerHTML;
const resultTemplate = document.getElementById(ID_RESULT_TEMPLATE).innerHTML;
const pointsContainer = document.getElementById(ID_POINTS);
const finalPointsContainer = document.getElementById(ID_FINAL_POINTS_CONTAINER);
const resultTable = document.getElementById(ID_RESULT_TABLE);
const timerInput = document.getElementById(ID_TIMER_INPUT);
const pauseBtn = document.getElementById(ID_PAUSE_BTN);
const newGameBtn = document.getElementById(ID_NEW_GAME_BTN);



startBtn.addEventListener('click', onStartBtnClick);
gameArea.addEventListener('click', onGameAreaClick);
saveBtn.addEventListener('click', onSaveBtnClick);
pauseBtn.addEventListener('click', onPauseBtnClick);
newGameBtn.addEventListener('click', onNewGameClick);