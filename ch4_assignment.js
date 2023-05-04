const myArr = ["Rock", "Paper", "Scissors"];

let computer = Math.floor(Math.random() * 3);
let player = Math.floor(Math.random() * 3);
let message = "player " + myArr[player] + " vs computer " + myArr[computer] + " ";//write you're if statement (player === computer)

if (player === computer) {                   // Statment "It is a tie";
    message += "it's a tie";
}                                           
else if (player > computer) {                   //continue checking else "player Wins"
    
    if (computer == 0 && player == 2) {
       
        message +="player wins!"; 
    
    }else {
        
        message+="computer loses";
  }
}else{

    if (computer > 2 && player == 0) {
        messsage += "computer wins!";
    }else {
        message += "player lose";
    }
}
console.log(message);


//console.log(message) 