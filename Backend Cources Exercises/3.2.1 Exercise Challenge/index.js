import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log(req.rawHeaders);
    res.send('Hello, Sachin!');
});

// Handing the About Page End point 
app.get('/about', (req, res) => {
    console.log(req.rawHeaders);
    res.send('<h2>About Us</h2><p>We are a team of developers.</p>');
});

// Handing the Contact Page End point
app.get('/contact', (req, res) => {
    console.log(req.rawHeaders);
    res.send('<h2>Contact Us</h2><p>You can reach us at');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});