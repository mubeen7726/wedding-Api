const express = require('express');
const User = require('../schema/UserSchema');
const RejectUser  = require('../schema/RejectUser');
const router = express.Router();

// Accept user
router.post('/accept', async (req, res) => {
    try {
        // Optional: Validate req.body here
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error('Error saving accepted user:', error); // Log the error
        res.status(400).json({ error: error.message });
    }
});

// Reject user
router.post('/reject', async (req, res) => {
    try {
        // Optional: Validate req.body here
        const user = new RejectUser (req.body);
        await user.save();
        res.status(201).json(user); 
    } catch (error) {
        console.error('Error saving rejected user:', error); // Log the error
        res.status(400).json({ error: error.message }); 
    }
});

module.exports = router;