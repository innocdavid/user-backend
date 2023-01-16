// modules required for the application
const express = require("express");
const cors = require("cors");
const db = require("./config/config");
const colors = require("colors");
const userRoute = require("./routes/users");
const { errorHandler } = require("./middlewares/error-handler");

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

// parse requests of content type - application/json
app.use(express.json());

// parse requests of content type - applicaton/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// basic route
app.get("/", (req, res) => {
    res.json({ message: "this is a restful applicaton demonstration crud operations"});
});

// user routes
app.use("/api/users", userRoute);

// errorhandler
app.use(errorHandler);

// set port, listen for request
const PORT = process.env.PORT || 8080;

// db configurations
db.sync()
    .then((result) => {
        console.log("Generate Table".green);
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}.`.yellow);
        });
         
    }).catch((err) => {
        console.log(err.message);
    });




