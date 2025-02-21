const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

// Initialize the app
const app = express();

// Middlewares
// form data middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

// Json body Middleware
app.use(bodyParser.json());

// CORS middleware
app.use(cors());

// USe the passport middleware
app.use(passport.initialize());
// Bring in the Passport Strategy
require('./config/passport')(passport);

// Setting up the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Bring in the database config & connect with the database
const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser:true, useUnifiedTopology: true 
}).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});


// app.get('/', (req,res) =>{
//     return res.send("<h1>Hello World</h1>")
// });
// Bring in the Users route
const users = require('./routes/api/users');
app.use('/api/users', users);

// for any other response it will open index.html in public dir
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})