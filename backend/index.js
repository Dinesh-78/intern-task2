const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const designRoutes = require("./routes/DesignRoute"); // Adjust the path as needed

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/JhoriDB", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log(err);
    });

// Use the design routes
app.use("/design", designRoutes);  // Note the corrected base path "/design"

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`);
});
