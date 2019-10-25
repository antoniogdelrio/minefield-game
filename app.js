var gameArray, activePlayer, score, bombsSample;
activePlayer = 1;
score = 0;
bombsSample = 0;
gameArray = [[0,0,0,0,0],
             [0,0,0,0,0], 
             [0,0,0,0,0],
             [0,0,0,0,0],
             [0,0,0,0,0]]

document.querySelector('.score').textContent = score;
if(activePlayer){
    for(var lineIterator=0; lineIterator < gameArray.length ; lineIterator++){
        for(var arrayIterator = 0; arrayIterator < gameArray[lineIterator].length; arrayIterator++){
            var randomBomb = Math.floor(Math.random() * 2);
            gameArray[lineIterator][arrayIterator] = randomBomb;
            if(randomBomb){
                bombsSample++;
            }
        }
    } 
}
console.log(bombsSample);
console.log(gameArray);

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

function bombHandler(lineIndex, columnIndex){
    //replace button <-> bomb image
    var bombImage = document.createElement("img");
    bombImage.classList.add('bomb-image');
    bombImage.src = "bomb.jpg";
    var oldButton = document.querySelector("#zone-button-"+lineIndex+'-'+columnIndex);
    document.querySelector('#zone-'+lineIndex+'-'+columnIndex).replaceChild(bombImage, oldButton);
    
    //ending the game
    activePlayer = 0;
}

function scoreHandler(lineIndex, columnIndex){
    var button = document.querySelector('#zone-button-'+lineIndex+'-'+columnIndex);
    button.classList.add('no-bomb');
    button.disabled = 'true';
    score++;
    document.querySelector('.score').textContent = score;

    if(score === 25-bombsSample ){
        activePlayer = 0;
        document.querySelector('.score').innerHTML = "<h1>WIN THE GAME!</h1>"
    }
    
}