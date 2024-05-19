const mongoose = require("mongoose");

const designSchema = new mongoose.Schema({
    image:{
        type: String,
        require:true
    },
    proname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Items = mongoose.model("Items", designSchema);

module.exports = Items;
