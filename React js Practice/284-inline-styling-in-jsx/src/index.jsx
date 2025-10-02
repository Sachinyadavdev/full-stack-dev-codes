import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "blue",
  fontSize: "40px",
  border: "2px solid red"
};

ReactDOM.render(<h style={customStyle}>Hello World!</h>, document.getElementById("root"));

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
