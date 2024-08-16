const express = require("express");

// const mongoose = require("mongoose");
const {connectMongoDb} = require('./connection');

const userRouter = require("./routes/user");

const {logReqRes} = require("./middlewares");

// const users = require("./MOCK_DATA.json");
// const { log } = require("console");


const app = express();
const PORT = 3000;

// connection
connectMongoDb(" mongodb://127.0.0.1:27017/mongodb-practise").then(
    console.log("Mongodb connected!")
);

// Middleware - plugin 
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));
    // console.log("Hello from middleware 1");
    // // return res.json({ mgs: "Hello from middleware 1" });
    // next();
   

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