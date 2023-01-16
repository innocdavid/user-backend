// modules required for the application
const express = require("express");
const cors = require("cors");
const db = require("./config/config");
const colors = require("colors");
const userRoute = require("./routes/users");
const { errorHandler } = require("./middlewares/error-handler");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

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

// swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            description: "This is a simple documentation of a NodeJS API project for user registration",
            title: "Users API",
            version: "1.0.0",
            contact: {
                email: "innocdavid@gmail.com"
            },
            license: {
                name: "Apache 2.0",
                url: "http://www.apache.org/licenses/LICENSE-2.0.html"
            }
        }
    },
    apis: ["./routes/*.js"]
}

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));




