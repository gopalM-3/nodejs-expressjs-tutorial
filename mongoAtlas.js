const express = require("express")
const mongoose = require("mongoose")
const Blog = require("./schema and models/blog")

const app = express()

const dbURI = "mongodb+srv://zer0:zer0sama123@learning-mongodb.fcqng.mongodb.net/learning-mongodb?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(5000, () => {
            console.log("Server listening to port at 5000...");
        })
    })
    .catch((err) => {
        console.log(err);
    })

app.get("/", (req, res) => {
    res.status(200).send("<h1>Home page</h1>")
    console.log("User hit the home page");
})
app.get("/add-blog", (req, res) => {
    const blog = new Blog({
        title: "New Blog 1",
        body: "Blog body"
    })
    
    blog.save()
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err);
        })
    console.log("User created a blog");
})
app.get("/all-blogs", (req, res) => {
    Blog.find()
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err);
        })
    console.log("User accessed the blogs");
})
app.get("/find-blog", (req, res) => {
    Blog.findById('622c509d1c81448b1434c749')
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err);
        })
})
app.all("*", (req, res) => {
    res.status(404).send("<h1>Error page</h1>")
    console.log("User hit the error page");
})