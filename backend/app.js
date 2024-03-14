// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors())
app.use(express.json());

// Routes
// Define your routes here
const mongoURI = "mongodb+srv://saheeda342:FoGPcBlLtywa8wYN@cluster0.l6faj8y.mongodb.net/"

mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB Atlas connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err.message);
  });


// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
