// Creating Our First Server with Express
// 1. Crete Directory
// 2. Create index.js file.
// 3. Initialise NPM
// 4. Install the express package 
// 5. Write server application in index.js 
// 6. Start server.

import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

