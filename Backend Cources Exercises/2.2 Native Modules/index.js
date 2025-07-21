
const fs = require("fs");

// fs.writeFile("sachin.txt","Hello Sachin",(error)=>{
//     if (error) throw error;
//     console.log("The File has been saved"); 
// })

fs.readFile("sachin.txt",(err,data)=>{
    if (err) throw err;
    console.log(data);
})