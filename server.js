const express = require('express');
const mongoose = require('mongoose');
const employee = require('./route/employee');
const cors = require('cors');

//
const app = express();

// cors
app.use(cors());

// using express as a body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// db config
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// routes
app.use('/employees', employee);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started at port ${port}`));
