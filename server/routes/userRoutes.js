const express = require('express')
const User = require('../schema/UserSchema');
const rejectHandle = require('../schema/RejectUser');
const router = express.Router();
router.post('/accpet', async  (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.post('/reject', async (req, res) => {
    try {
        const user = new rejectHandle(req.body);
        await user.save();
        res.status(201).json(user); 
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
});


module.exports= router;