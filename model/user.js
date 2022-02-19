const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    companyName: { type: String, required: true },

    password: { type: String, required: true },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

module.exports = mongoose.model("user", userSchema);