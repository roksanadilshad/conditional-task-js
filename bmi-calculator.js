let weight = 80; //in kg
let height = 1.75;// in meter

let bmi = weight / (height * height);
console.log("Your BMI is:", bmi.toFixed(2));

if(bmi < 18.5){
    console.log("You are UnderWeight");
}
else if(bmi >= 18.5 && bmi <= 24.9){
    console.log("You are normal");
}
else if(bmi >= 25 && bmi <= 29.9){
    console.log("You are overweight");
}
else{
    console.log("you are obese");
}