let userScore=0;
let compScore=0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const choices= ['r','p','s'];
    const randomNum=Math.floor(Math.random()*3);
    return choices[randomNum];
}

function readConvert(letter){
    if(letter==='r') return "Rock";
    if(letter==='p') return "Paper";
    if(letter==='s') return "Scissors";
}

function win(userChoice,computerChoice){
    const smallUser="user".fontsize(3).sub();
    const smallComp="comp".fontsize(3).sub();
    const theGlow=  document.getElementById(userChoice).classList;
    userScore++;
    userScore_span.innerHTML= userScore;
    compScore_span.innerHTML= compScore;
    result_p.innerHTML=`${readConvert(userChoice)}${smallUser} beats ${readConvert(computerChoice)}${smallComp}. You Win!`;
    theGlow.add("greenGlow");
    setTimeout(function(){theGlow.remove("greenGlow")}, 500);
}

function lose(userChoice,computerChoice){
    const smallUser="user".fontsize(3).sub();
    const smallComp="comp".fontsize(3).sub();
    const theGlow=  document.getElementById(userChoice).classList;
    compScore++;
    userScore_span.innerHTML= userScore;
    compScore_span.innerHTML= compScore;
    result_p.innerHTML=`${readConvert(userChoice)}${smallUser} looses to ${readConvert(computerChoice)}${smallComp}. You Loooooose`;
    theGlow.add("redGlow");
    setTimeout(function(){theGlow.remove("redGlow")},500);
}

function draw(userChoice,computerChoice){
    const smallUser="user".fontsize(3).sub();
    const smallComp="comp".fontsize(3).sub();
    const theGlow=  document.getElementById(userChoice).classList;
    result_p.innerHTML=`${readConvert(userChoice)}${smallUser} equals ${readConvert(computerChoice)}${smallComp}. Its a draw ---`;
    theGlow.add("yellowGlow");
    setTimeout(function(){theGlow.remove("yellowGlow")},500);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice){
        case 'rs':
        case 'sp':
        case 'pr':
            win(userChoice,computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice,computerChoice);
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            draw(userChoice,computerChoice);
            break;                            
    }

}

function main(){

    rock_div.addEventListener('click',function(){
        game('r');
    })

    paper_div.addEventListener('click',function(){
        game('p');
    })

    scissor_div.addEventListener('click',function(){
        game('s');
    })
}

main();