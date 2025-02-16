const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const router = require('./routes/userRoutes')

const cors = require('cors');


// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB using the connection string from .env
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Initialize Express app
const app = express();
app.use(cors());
app.use(bodyParser.json()); // Middleware to parse JSON requests

// Create a new user
app.use('/user',router)

app.get('/',(res,req)=>{
    res.send("Hello World!")
})


// Start the server
const PORT = process.env.PORT && 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});