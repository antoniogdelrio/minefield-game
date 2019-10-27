//instantiating the variables
let gameArray, activePlayer, score, bombsSample, winTheGame;

//init the game
gameInit();

//adding the reset button event listener
document.querySelector('.reset-button').addEventListener('click', function(){
    resetGame();
})

//adding the buttons events listeners - (1)with bomb, (2)without bomb
document.getElementById('zone-0-0').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[0][0]){
            bombHandler(0,0);
        }
        else{
            scoreHandler(0,0);
        }  
    }  
})

document.getElementById('zone-0-1').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[0][1]){
            bombHandler(0,1); 
        }   
        else{
            scoreHandler(0,1);
        }
    }
})

document.getElementById('zone-0-2').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[0][2]){
            bombHandler(0,2);
        }    
        else{
            scoreHandler(0,2);
        }
    }
})

document.getElementById('zone-0-3').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[0][3]){
            bombHandler(0,3);
        }   
        else{
            scoreHandler(0,3);
        }        
    }
})

document.getElementById('zone-0-4').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[0][4]){
            bombHandler(0,4);
        }
        else{
            scoreHandler(0,4);
        }  
    }  
})

document.getElementById('zone-1-0').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[1][0]){
            bombHandler(1,0); 
        }   
        else{
            scoreHandler(1,0);
        }
    }
})

document.getElementById('zone-1-1').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[1][1]){
            bombHandler(1,1);
        }    
        else{
            scoreHandler(1,1);
        }
    }
})

document.getElementById('zone-1-2').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[1][2]){
            bombHandler(1,2);
        }   
        else{
            scoreHandler(1,2);
        }        
    }
})

document.getElementById('zone-1-3').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[1][3]){
            bombHandler(1,3);
        }   
        else{
            scoreHandler(1,3);
        }        
    }
})

document.getElementById('zone-1-4').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[1][4]){
            bombHandler(1,4);
        }   
        else{
            scoreHandler(1,4);
        }        
    }
})

document.getElementById('zone-2-0').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[2][0]){
            bombHandler(2,0);
        }
        else{
            scoreHandler(2,0);
        }  
    }  
})

document.getElementById('zone-2-1').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[2][1]){
            bombHandler(2,1); 
        }   
        else{
            scoreHandler(2,1);
        }
    }
})

document.getElementById('zone-2-2').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[2][2]){
            bombHandler(2,2);
        }    
        else{
            scoreHandler(2,2);
        }
    }
})

document.getElementById('zone-2-3').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[2][3]){
            bombHandler(2,3);
        }   
        else{
            scoreHandler(2,3);
        }        
    }
})

document.getElementById('zone-2-4').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[2][4]){
            bombHandler(2,4);
        }
        else{
            scoreHandler(2,4);
        }  
    }  
})

document.getElementById('zone-3-0').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[3][0]){
            bombHandler(3,0); 
        }   
        else{
            scoreHandler(3,0);
        }
    }
})

document.getElementById('zone-3-1').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[3][1]){
            bombHandler(3,1);
        }    
        else{
            scoreHandler(3,1);
        }
    }
})

document.getElementById('zone-3-2').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[3][2]){
            bombHandler(3,2);
        }   
        else{
            scoreHandler(3,2);
        }        
    }
})

document.getElementById('zone-3-3').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[3][3]){
            bombHandler(3,3);
        }   
        else{
            scoreHandler(3,3);
        }        
    }
})
document.getElementById('zone-3-4').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[3][4]){
            bombHandler(3,4);
        }   
        else{
            scoreHandler(3,4);
        }        
    }
})

document.getElementById('zone-4-0').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[4][0]){
            bombHandler(4,0);
        }
        else{
            scoreHandler(4,0);
        }  
    }  
})

document.getElementById('zone-4-1').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[4][1]){
            bombHandler(4,1); 
        }   
        else{
            scoreHandler(4,1);
        }
    }
})

document.getElementById('zone-4-2').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[4][2]){
            bombHandler(4,2);
        }    
        else{
            scoreHandler(4,2);
        }
    }
})

document.getElementById('zone-4-3').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[4][3]){
            bombHandler(4,3);
        }   
        else{
            scoreHandler(4,3);
        }        
    }
})

document.getElementById('zone-4-4').addEventListener('click', function(){
    if(activePlayer){
        if(gameArray[4][4]){
            bombHandler(4,4);
        }
        else{
            scoreHandler(4,4);
        }  
    }  
})

function gameInit(){
    //initial variables config
    activePlayer = 1;
    score = 0;
    bombsSample = 0;
    winTheGame = 0;

    //creating the game array
    gameArray = [[0,0,0,0,0],
                 [0,0,0,0,0], 
                 [0,0,0,0,0],
                 [0,0,0,0,0],
                 [0,0,0,0,0]]

  
    //initial panel config
    document.querySelector('.panel-score').textContent = 'SCORE: ' + score;
    document.querySelector('.end-message').textContent = 'GOOD LUCKY!';

    //fill the field with bombs
    for(let lineIterator=0; lineIterator < gameArray.length ; lineIterator++){
        for(let arrayIterator = 0; arrayIterator < gameArray[lineIterator].length; arrayIterator++){
            let randomBomb = Math.floor(Math.random() * 2);
            gameArray[lineIterator][arrayIterator] = randomBomb;
            if(randomBomb){
                bombsSample++;
            }
        }
    } 
}

function bombHandler(lineIndex, columnIndex){
    //replacing button <-> bomb image
    let bombImage = document.createElement("img");
    bombImage.classList.add('bomb-image');
    bombImage.src = "img/bomb.jpg";
    let oldButton = document.querySelector("#zone-button-"+lineIndex+'-'+columnIndex);
    oldButton.style.display = 'none';
    document.querySelector('#zone-'+lineIndex+'-'+columnIndex).appendChild(bombImage);

    //changing the background of game screen and showing the lose message
    document.querySelector('.game-screen').classList.toggle('game-over');
    document.querySelector('.end-message').textContent = "GAME OVER!"

    //ending the game
    activePlayer = 0;
}

function scoreHandler(lineIndex, columnIndex){
    //changing the button style and turn it disabled
    let button = document.querySelector('#zone-button-'+lineIndex+'-'+columnIndex);
    button.classList.add('no-bomb');
    button.disabled = 'true';

    //updating the score
    score++;
    document.querySelector('.panel-score').textContent = 'SCORE: ' + score;

    //ending the game
    if(score === 25-bombsSample ){
        winTheGame = 1;
        activePlayer = 0;
        document.querySelector('.end-message').textContent = "YOU WIN THE GAME!"
    }
}

function resetGame(){
    //reseting the game - (1)game over way, (2)during the game way
    if(!activePlayer && !winTheGame){
        gameInit();
        document.querySelector('.bomb-image').remove();
        buttonsReturn();
        document.querySelector('.game-screen').classList.remove('game-over');
    }
    else if( activePlayer && score>0 || !activePlayer && winTheGame){
        gameInit();
        buttonsReturn();
    }
}

function buttonsReturn(){
    //returning the initial style of the buttons
    allButtons = document.querySelectorAll('.zone-button');
    for(let buttonsIterator = 0; buttonsIterator<allButtons.length; buttonsIterator++){
        allButtons[buttonsIterator].classList.remove('no-bomb');
        allButtons[buttonsIterator].style.display = '';
        allButtons[buttonsIterator].removeAttribute('disabled');
    }
}