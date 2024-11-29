require('dotenv').config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const connectDB = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');
const contactRoute = require("./router/contact-router");
const cors =  require("cors");
const serviceRoute = require("./router/service-route");


// cors implementation
const corsOptions = {
    origin: function (origin, callback) {
        const allowedOrigins = ["http://localhost:5173"];
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());


app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);

app.use(errorMiddleware)


const PORT = 5000;
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on : ${PORT}`)
    });
});

