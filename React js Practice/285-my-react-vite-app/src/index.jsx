import React from "react";
import ReactDOM from "react-dom";


const dateTime = new Date(2025, 1, 1, 19).getHours();
var message = "";
var colorStyle = {};

if (dateTime >= 1 && dateTime < 12) {
  console.log("Good Morning!");
  message = "Good Morning!";
   colorStyle = { color: "red" };  
}   else if (dateTime >= 12 && dateTime < 19) {
  console.log("Good Afternoon!");
     message = "Good Afternoon!";
     colorStyle = { color: "green" };
} else {
  console.log("Good Night!");
     message = "Good Night!";
     colorStyle = { color: "blue" };
}

ReactDOM.render(
  <div>
    <h1 style ={colorStyle}>{message} </h1> 
    <h1>Hello World! {dateTime}</h1>   
    <p>This is my first React App!</p>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser