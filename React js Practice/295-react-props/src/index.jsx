import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div> 
 <Card name = "Sachin"
  img = "https://th.bing.com/th/id/OIP.4JHh5f0bX3k9vU8m7c0y7AHaHa?pid=ImgDet&rs=1"
  phone = "1234567890"
  email = "addd@gmail.com"
 />
 
 <Card name = "Sachin"
  img = "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg"
  phone = "1234567890"
  email = "addd@gmail.com"
 />

  </div>
,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
