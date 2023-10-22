const express = require("express")
const mongoose = require("mongoose")
const personRouter = require("./person")
const Person = require("./schema and models/person")
const dbURI = // MongoDB URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection
    .once("open", () => {
        console.log("Database connected...");
    })
    .on("error", (error) => {
        console.log(error);
    })

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/person", personRouter)

app.listen(5000, () => {
    console.log("Server listening to port at 5000...");
})
