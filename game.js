let  musics = new Audio("music.mp3")
let  Audioturn = new Audio("ting.mp3")
let  gameovers = new Audio("gameover.mp3")
let gameover = false;

let turn = "X";
//Function to change the turn
const changeTurn = () => {

     return turn === "X" ? "O" : "X"

}

// function to check for win
const checkwin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e =>{
        musics.play()
      if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && ( boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "") ){
       document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won" 
    gameover = true; 
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "10rem"; 
    document.querySelector('.line').style.width = "22vw";
    document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
    } 
        
    })
}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=> {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            Audioturn.play()
            checkwin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText ="Turn for  " +turn;
            }

        }
    })
})

//add onclick listner to reset button
reset.addEventListener('click', () => {
    let boxtextss  = document.querySelectorAll('.boxtext');
    Array.from(boxtextss).forEach(element => {
        element.innerText = "";
        gameovers.play()
    });
    turn = "X";
    gameover = false
    document.querySelector('.line').style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0rem"; 
})