const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
    songname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
});

// Create the User model
const User = mongoose.model('accept ', userSchema);

// Export the User model
module.exports = User;