const mongoose = require('mongoose');

// Define the User Schema
const reject = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
});

// Create the User model
const rejectHandle = mongoose.model('reject ', reject);

// Export the User model
module.exports = rejectHandle;