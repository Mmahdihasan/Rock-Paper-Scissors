let usersco = 0;
let compsco = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score")

const getcomchoice = () => {
    const arr = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return arr[randidx];
}
const drawgame = () => {
    msg.innerText = "Draw";
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin){
        usersco++; 
      userscore.innerText = usersco;  
      msg.innerText = `you win! ${userchoice} beats ${compchoice}`; 
      msg.style.backgroundColor = "green";
    }else{
      compsco++;
      compscore.innerText = compsco;
      msg.innerText = `you lose! ${compchoice} beats ${userchoice}`;
      msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
   console.log("user choice = ", userchoice);
   const compchoice = getcomchoice();
   console.log("com-choice = ",compchoice);

   if(userchoice === compchoice){
    drawgame();
   }
   else{
    let userwin = true;
    if(userchoice === "rock"){
        userwin = compchoice === "paper" ? false : true;
    }else if(userchoice === "paper"){
        userwin = compchoice === "scissors" ? false : true;
    }else if(userchoice === "scissors"){
        userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin, userchoice, compchoice);
   }
}

choices.forEach((choice) => {
     choice.addEventListener("click", () => {
      const userchoice = choice.getAttribute("id");
      playgame(userchoice);
     })
});