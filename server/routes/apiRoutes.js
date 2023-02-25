const mongoose = require("mongoose")
const express = require("express")
const router = express.Router()
const students = require("../models/students")


router.get("/spells", (req, res) => {
    res.status(200).json(spells)
})
router.get("/staff", (req, res) => {
    res.status(200).json(staff)
})
router.get("/api/v1/students", async (req, res) => {
    try {
        const stud = await students.find()
        res.json(stud)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get("/house/gryffindor", (req, res) => {
    res.status(200).json(gryffindor)
})
router.get("/house/slytherin", (req, res) => {
    res.status(200).json(slytherin)
})
router.get("/house/ravenclaw", (req, res) => {
    res.status(200).json(ravenclaw)
})
router.get("/house/hufflepuff", (req, res) => {
    res.status(200).json(hufflepuff)
})

module.exports = router