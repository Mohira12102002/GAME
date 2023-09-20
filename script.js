'use strict';
// document.querySelector('.number');
// document.querySelector('.number').textContent=12;


document.querySelector('.uz').addEventListener('click', function(){
    //document.querySelector('.number');
    document.querySelector('h1').textContent="Men o'ylagan sonni top!";
    document.querySelector('p').textContent="1 dan 20 gacha";
    document.querySelector('.again').textContent="Qayta!";
    document.querySelector('.check').textContent="Bosing!";
    document.querySelector('.message').textContent="Taxmin qilishni boshlang...";

    document.querySelector('.label-score').innerHTML='💯 Ball: <span class="score">20</span> ';
    document.querySelector('.label-highscore').innerHTML='🥇 Yuqori Ball:<span class="highscore">0';




})


document.querySelector('.eng').addEventListener('click', function(){
    //document.querySelector('.number');
    document.querySelector('h1').textContent="Guess My Number!";
    document.querySelector('p').textContent="Between 1 and 20";
    document.querySelector('.again').textContent="Again!";
    document.querySelector('.check').textContent="Check!";
    document.querySelector('.message').textContent="Start guessing...";
    

    document.querySelector('.label-score').innerHTML='💯 Score: <span class="score">20</span>';
    //document.querySelector('.score').textContent="20"
    document.querySelector('.label-highscore').innerHTML='🥇 Highscore: <span class="highscore">0';
    //document.querySelector('.highscore').textContent="0"



    

})


// document.querySelector('.check').addEventListener('click', function(){

    
//     //document.querySelector('.number');
//     document.querySelector('h1').textContent="Guess My Number!";
//     document.querySelector('p').textContent="Between 1 and 20";
//     document.querySelector('.again').textContent="Again!";
//     document.querySelector('.check').textContent="Check!";
//     document.querySelector('.message').textContent="Start guessing...";

//     document.querySelector('.label-score').textContent="Score: 20 ";
//     document.querySelector('.label-highscore').textContent="🥇 Highscore: 0";


    

// })



let computerNumber = Math.trunc(Math.random()*20)+1;

let score =20;
let highScore = 0;
let x = window.matchMedia("(min-width:360px) and (max-width: 480px)")
let y = window.matchMedia("(min-width: 481px) and (max-width: 768px)")




document.querySelector('.check').addEventListener('click', ()=>{
   let guessNumber = Number (document.querySelector('.guess').value);

   if(score>1){
    if(!guessNumber){
    document.querySelector('.message').textContent = 'No number!';

   }else if(guessNumber !== computerNumber){

    document.querySelector('.message').textContent = (guessNumber>computerNumber)?'Too High!':'Too Low!';
    score--;
    document.querySelector('.score').textContent = score;

   }else {

    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent=computerNumber;
    highScore = (score>highScore)?score:highScore;
    document.querySelector('.highscore').textContent=highScore;
    document.querySelector('body').style.backgroundColor= '#60b347';
    document.querySelector('.number').style.width= '25rem';
    // if(x.matches || y.matches){
    //     document.querySelector('body').style.backgroundColor= '#60b347';
    // }

   }
}else{
    document.querySelector('.message').textContent = 'You Lost Game!';
}

})



document.querySelector('.again').addEventListener('click', ()=>{
    computerNumber = Math.trunc(Math.random()*20)+1;
    score = 20;
    document.querySelector('.guess').value = "";
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor= '#222';
    document.querySelector('.number').style.width= '15rem';
    // highScore = (score>highScore)?score:highScore;
    // document.querySelector('.highscore').textContent=highScore;

    if(x.matches || y.matches){
        document.querySelector('body').style.backgroundColor= '#eee';
    }

})