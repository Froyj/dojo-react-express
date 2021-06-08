require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.BACKEND_PORT || 4000

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

require('./routes/index')(app);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})