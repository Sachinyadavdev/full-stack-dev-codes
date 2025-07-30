import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;



app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    
    const today = new Date("August 4, 2025 01:15:00");
    let day = today.getDay();

    let daytype = "Weekday ";
    let advice = "Keep working hard!";

    if (day === 0 || day === 6) {
        daytype = "Weekend ";
        advice = "Enjoy your day!";
    }

    // res.sendFile(__dirname + '/public/index.html');
    res.render('index.ejs',{ daytype , advice });
    console.log(day);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 

