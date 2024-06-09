// const boxes=document.querySelectorAll('.box');
// const gameinfo=document.querySelector('.game-info');
// const gamebtn=document.querySelector('.btn');

// let currentPlayer;
// let gg;

// const wp=[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,5],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ]
// function inigame(){
//     currentPlayer="X";
//     gg=["","","","","","","",""];
//     boxes.forEach((box,index)=>{
//         box.innerText="";
//         boxes[index].style.poitErevents="all";
//         box.classList=`box box${index+1}`;
//     });
//     gamebtn.classList.remove("active");
//     gameinfo.innerText=`current Player-${currentPlayer}`;
// }
// inigame();


// function swapturn(){
//     if(currentPlayer==="X"){currentPlayer="O"}
//     else{
//         currentPlayer="X";
//     }
//     gameinfo.innerText=`current Player-${currentPlayer}`;
// }
// function checkgameover(){
//     let ans="";
//     wp.forEach((position)=>{
//         if((gg[position[0]]!==""||gg[position[1]]!==""||gg[position[2]]!=="")
//             &&(gg[position[0]]===gg[position[1]])&&(gg[position[0]]===gg[position[0]]))
// {if(gg[position[0]]==="X"){
//     ans="X";}
//     else 
//       ans="O";
//     boxes.forEach((box)=>{
//         box.style.poitErevent="none";
//     })
// }
    
// box[position[0]].classList.add("win");
// box[position[1]].classList.add("win");
// box[position[2]].classList.add("win");
//     })

// if(ans!==""){
//     gameinfo.innerText=`winner Player-${ans}`;
//     newgamebtn.classList.add("active");
//     return ;
// }
// let fillcount=0;
// gg.forEach((box)=>){
//     if(box!=="")
//         fillcount++;  
// }
// if(fillcount===9){
//     gameinfo.innerText='game-tied!';
//     newgamebtn.classList.add("active");
// }}
// function handleclick(index){if(gg===""){
//     boxes[index].innerText=currentPlayer;
//     gg[index]=currentPlayer;
//     boxes[index].style.pointerEvents="none";
//     swapturn();
//     checkgameover();
// }}
// boxes.forEach((box,index)=>{
//     box.addEventListener('click',()=>{
//         handleclick(index);
//     })
// });
// gamebtn.addEventListener('click',inigame);

const boxes = document.querySelectorAll('.box');
const gameinfo = document.querySelector('.game-info');
const gamebtn = document.querySelector('.btn');

let currentPlayer;
let gg;

const wp = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function inigame() {
    currentPlayer = "X";
    gg = ["", "", "", "", "", "", "", "", ""];
    boxes.forEach((box, index) => {
        box.innerText = "";
        box.style.pointerEvents = "all";
        box.className =`box box${index + 1}`;
    });
    gamebtn.classList.remove("active");
    gameinfo.innerText =` Current Player - ${currentPlayer}`;
}

function swapturn() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    gameinfo.innerText = `Current Player - ${currentPlayer}`;
}

function checkgameover() {
    let ans = "";
    wp.forEach((position) => {
        if (gg[position[0]] !== "" && gg[position[0]] === gg[position[1]] && gg[position[0]] === gg[position[2]]) {
            ans = gg[position[0]];
             boxes[position[0]].classList.add("win");
              boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            });
        }
    });

    if (ans !== "") {
        gameinfo.innerText = `Winner Player - ${ans}`;
        gamebtn.classList.add("active");
        return;
    }

    let fillcount = 0;
    gg.forEach((box) => {
        if (box !== "") {
            fillcount++;
        }
    });

    if (fillcount === 9) {
        gameinfo.innerText = 'Game Tied!';
        gamebtn.classList.add("active");
    }
}

function handleclick(index) {
    if (gg[index] === "") {
        boxes[index].innerText = currentPlayer;
        gg[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        swapturn();
        checkgameover();
    }
}

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        handleclick(index);
    });
});

gamebtn.addEventListener('click', inigame);

// Initialize the game when the script loads
inigame();


