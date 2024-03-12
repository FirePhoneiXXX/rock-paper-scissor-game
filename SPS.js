let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#your-score");
const CompScorePara = document.querySelector("#comp-score")



const genCompChoice = () =>{
   const options = ["Rock","Paper","Scissor"];
   const randIdx = Math.floor(Math.random () * 3 );
   return options[randIdx];

  //rock,paper,scissor
}

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    user++;
    userScorePara.innerText = user ;
    console.log("you Win!");
    msg.innerText = (`you Win!...your ${userChoice} beats ${compChoice}`);
    msg.style.backgroundColor = "#004b23" ;
    msg.style.color = "#f2e8cf";

  }else{
    comp++;
    CompScorePara.innerText = comp;
    console.log("you Lose")
    msg.innerText = (`you lose... your ${compChoice} beats ${userChoice}`);
    msg.style.backgroundColor = "#bc4749";
    msg.style.color = "#f2e8cf";
  }

 };


 const drawgame = () => {
  console.log("Game was draw");
  msg.innerText = ("Game was draw. play again..");
  msg.style.backgroundColor = "#f2e8cf";
  msg.style.color = "#bc4749"
 
 }



const playGame = (userChoice) => {
  // console.log("user choice is =" , userChoice);
  //Generate computer choice
  const compChoice = genCompChoice();
  // console.log("comp choice is =" , compChoice);

  if (userChoice === compChoice){
          //Draw Game
      drawgame();    
  }else{
    let userWin = true;  //we assume we win
    if (userChoice === "Rock"){
      //Scisssor, Paper
      userWin = compChoice === "Paper"? false : true;  //if comp choice is paper comp win otherwisw lose
     } else if (userChoice === "Paper"){
        //rock, Scisssor
        userWin = compChoice === "Scissor"? false : true;
      } else { 
          //rock, paper
          userWin = compChoice === "Rock"? false : true;
    }
      showWinner(userWin , userChoice, compChoice);
  }
};



choices.forEach((choice)  => {
    //  console.log(choice);
     choice.addEventListener ("click" , () => {
      const userChoice = choice.getAttribute("id");
      //  console.log("Choice was clicked",userChoice);
       playGame(userChoice);
     });
});