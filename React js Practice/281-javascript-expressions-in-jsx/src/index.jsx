import React from "react";
import ReactDOM from "react-dom";


const name = "Sachin";
const lastName = "Yadav";
const luckyNumber = 7;
ReactDOM.render(<h1>Hello {name + " " + lastName} {`This is the man whose name is ${name}`}</h1>
    
    , document.getElementById("root"));

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
