const squares= document.querySelectorAll('.square');
const mole= document.querySelector('.mole');
var timeLeft= document.querySelector('#time-left');
var score= document.querySelector('#score');

let result=0;let hitPosition; let currentTime=60; let timerId=null;

function randomSquare(){
    squares.forEach(square =>{square.classList.remove('mole')});

    let randomSquare= squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add('mole');
    hitPosition=randomSquare.id;

}

squares.forEach(square=>{
    square.addEventListener('mousedown',()=>{
        if(square.id ==hitPosition){
            result++;
            score.textContent =result;
            hitPosition=null;

        }


    })
})

function reset(){
    var boton_reinicio= document.getElementById('boton');
    boton_reinicio.hidden=true;
    console.log("reset");

    result=0;
    currentTime=60;

    score.textContent=0;
    timeLeft.textContent=60;

    moveMole();
    countDownTimerId= setInterval(countDown,1000);
}


function moveMole(){
    timerId=setInterval(randomSquare,500);
}

moveMole();

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime ==0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('GAME OVER! Puntuacion final es: '+result);

        var boton_reinicio= document.getElementById('boton');
        boton_reinicio.hidden=false;
        boton_reinicio.onclick=function(){reset()};


    }
}

let countDownTimerId= setInterval(countDown,1000);



