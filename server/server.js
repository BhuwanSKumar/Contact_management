// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Hardcoded MongoDB connection string
const mongoURI = 'mongodb+srv://engbhuwansk:0wDHnmasXc0l1LYx@cluster0.qhioj.mongodb.net/contact_management';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/contacts', contactRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
