const express = require("express");
const router = express.Router();
const Items = require("../models/Design"); 
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // specify the destination directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // specify the file naming convention
    }
});

const upload = multer({ storage: storage });

router.post("/adddesign", async (req, res) => {  // Note the corrected route path "/adddesign"
    const { proname, description } = req.body;
    const image = req.file ? req.file.filename : null;
    // Create a new design item
    const newItem = new Items({
        image,
        proname,
        description
    });

    try {
        // Save the new design item to the database
        const savedItem = await newItem.save();
        res.status(201).json(savedItem); // Send back the saved item with a 201 status code
    } catch (error) {
        res.status(500).json({ message: "Error saving design item", error });
    }
});

module.exports = router;
