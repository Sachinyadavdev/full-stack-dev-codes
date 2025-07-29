

 var img = ["./images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

 var img2 = ["./images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

var count = Math.random();
count = Math.floor(count*6); 

var count2 = Math.random();
count2 = Math.floor(count2*6); 

document.querySelector(".img1").setAttribute("src", img[count]) ;

document.querySelector(".img2").setAttribute("src", img2[count2]) ;

if(count2>count){
    document.getElementById("Message").innerHTML = "🚩 Payer 2 Won the Match ";
}
else if(count === count2){
    document.getElementById("Message").innerHTML = "Draw!"; 
}
else{
    document.getElementById("Message").innerHTML = " 🚩 Payer 1 Won the Match "; 
}