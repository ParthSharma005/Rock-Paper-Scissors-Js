function pickCompMove(){
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "Rock";
    }
    else if (num === 1) {
        return  "Paper";
    }
    else{
        return "Scissors";
    }
}

let score = JSON.parse(localStorage.getItem('scoreStr')) || {
    win: 0,
    lose: 0,
    tie: 0
};

function judge(playermove){
    let compMove = pickCompMove();
    if (playermove === compMove){
        score.tie+=1;
        document.querySelector('#js-result').innerHTML=`It's a tie!`;
        document.querySelector('#js-moves').innerHTML=`You Picked ${playermove}, Computer Picked ${compMove}`
    }
    else if ((playermove === "Rock" && compMove === "Scissors") || (playermove === "Paper" && compMove === "Rock") || (playermove === "Scissors" && compMove === "Paper")){
        score.win+=1;
        document.querySelector('#js-result').innerHTML=`You Win!`;
        document.querySelector('#js-moves').innerHTML=`You Picked ${playermove}, Computer Picked ${compMove}`
    }
    else{
        score.lose+=1;
        document.querySelector('#js-result').innerHTML=`You Lose!`;
        document.querySelector('#js-moves').innerHTML=`You Picked ${playermove}, Computer Picked ${compMove}`
    }
    updateScore();
    localStorage.setItem('scoreStr',JSON.stringify(score))
}  

function reset(){
    score.win=0;
    score.lose=0;
    score.tie=0;
    updateScore();
    alert(`Score Reset`);
    localStorage.removeItem(`scoreStr`);
}

function updateScore(){
    document.querySelector('#js-scoreText').innerHTML=`Won:${score.win} Lost:${score.lose} Tie:${score.tie}`;
}