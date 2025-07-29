let age = 53;
let ticketFare = 800;

if(age < 10){
    console.log("Your ticket fare is:", 0 + "tk");
}
else if(age < 28){
   console.log("Your ticket fare is:", ticketFare * 0.5 + "tk");
}
else if(age >= 60){
    console.log("Your ticket fare is:", ticketFare * 0.85 + "tk");
}
else{
    console.log("Your ticket fare is:", ticketFare + "tk");
}
 
 
