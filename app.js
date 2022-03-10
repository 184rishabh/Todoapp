const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://rishabh:Rishabh123@cluster0.oqhsx.mongodb.net/Tododb?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('Connected to DB');
}).catch((error) => {
    console.log(error);
});

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(require('./routes/index'));
app.use(require('./routes/todo'));
app.use(require('./routes/register'));
app.use(require('./routes/auth'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`sever listening on port: ${PORT}`);
});

