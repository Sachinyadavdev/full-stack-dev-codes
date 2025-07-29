
var houseKeeper1 = {    // creating the object
    nameOfHouseKeeper : "Snata",
    age : 23,
    numberOfLanguage : ['English','Marathi'],
}

console.log(houseKeeper1);

function HouseKeeper(name1, age1, language1) {    // Creating Function Cunstructor
    this.name1 = name1;   
    this.age1 = age1;
    this.language1 = language1;
    this.clean = function (){
        console.log("Cleaning is in the process");
    }
} 

var Sachin = new HouseKeeper("Sachin", 24, ["Hindi","English"]);  // Creating new Object 

console.log(Sachin);

Sachin.clean();