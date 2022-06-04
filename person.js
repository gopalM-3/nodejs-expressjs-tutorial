const express = require("express")
const Person = require("./schema and models/person")
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const people = await Person.find()
        res.json(people)
    }
    catch(err) {
        res.send("Error!")
        console.log(err);
    }
})

router.post("/post", async (req, res) => {
    const person = new Person({
        name: req.body.name,
        gender: req.body.gender
    })

    try {
        const p = await person.save()
        res.json(p)
    }
    catch(err) {
        console.log(err);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const people = await Person.findById(req.params.id)
        res.json(people)
    }
    catch(err) {
        res.send("Error!")
        console.log(err);
    }
})

router.put("/:id", async (req, res) => {
    try {
        const people = await Person.findById(req.params.id)
        people.water = req.body.water
        const p = await people.save()
        res.json(p)
    }
    catch(err) {
        res.send("Error!")
        console.log(err);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        await Person.findByIdAndDelete(req.params.id)
        res.send("Deleted!")
    }
    catch(err) {
        res.send("Error!")
        console.log(err);
    }
})

module.exports = router