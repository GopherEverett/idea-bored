const express = require('express');
const app = express();
const userController = require('./controllers/userController.js')

app.use(express.static(__dirname + '/client/build/'));
app.use(express.json());
app.use('/api/users', userController);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Doin It on port" + PORT);
})