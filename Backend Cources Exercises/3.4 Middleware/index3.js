import express from "express";


const app = express();
const port = 3000;

function logger (req, res, next) {  // Custom middleware function
  console.log(`${req.method} ${req.url}`);
  next();  // Call next() to pass control to the next middleware or route handler
};
app.use(logger);  // Use the custom middleware

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
