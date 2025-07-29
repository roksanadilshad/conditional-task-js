let friendScore = 63;
let myScore = 88;


if  (myScore > 80){
     console.log("You got more then 80");

     if(friendScore > 80){
    console.log("Let's go for lunch");
  }
    else if(friendScore >= 60){
            console.log("Good luck next time");
      }
    else if(friendScore >= 40){
           console.log("Message is unseen");
      }
    else{
           console.log("Friend is Blocked");
  }

}
else{
    console.log("Sleep and act sad");
}