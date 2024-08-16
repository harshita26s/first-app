const express = require("express");
const fs = require('fs')
// const mongoose = require("mongoose");

const
const userRouter = require("./routes/user")

// const users = require("./MOCK_DATA.json");
// const { log } = require("console");


const app = express();
const PORT = 3000;

// connection


// Middleware - plugin 
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    // console.log("Hello from middleware 1");
    // // return res.json({ mgs: "Hello from middleware 1" });
    // next();
    fs.appendFile(
        "log.txt",
        `\n${Date.now()}:${req.ip} ${req.method}: ${req.path}\n`, (err, data) => {
           next();
        }
    );

});


// app.use((req, res, next) => {
//     console.log("Hello from middleware 2");
//     // db query
//     // create card info
//     req.creditCardNumber = "123";
//     // return res.end("Hey");
//     next();
// });

//Routes
app.use("user", userRouter);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));