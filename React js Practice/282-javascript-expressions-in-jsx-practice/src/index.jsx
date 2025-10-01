//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from "react";
import ReactDOM from "react-dom";

const name = "Sachin";
const lastName = "Yadav";
const currentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name} {lastName}</p>
    <p>Copyright {new Date().getFullYear()}</p>
    <h1>Nithin Reddy</h1>
  </div>,
  document.getElementById("root")
);