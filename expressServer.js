const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.status(200).send("<h1>Home page</h1>")
    console.log("User hit the home page");
})
app.get("/about", (req, res) => {
    res.status(200).send("<h1>About page</h1>")
    console.log("User hit the about page");
})
app.get("/contact", (req, res) => {
    res.status(200).send("<h1>Contact us</h1>")
    console.log("User hit the contact page");
})
app.all("*", (req, res) => {
    res.status(404).send("<h1>Error page</h1>")
    console.log("User hit the error page");
})

app.listen(5000, () => {
    console.log("Server listening to port at 5000...");
})