require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { fetchJobs } = require('./jobs');
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send('Job Notifier App is running.')
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

fetchJobs();

mongoose
    .connect(process.env.MONGO_URI) 
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error('MongoDB connection error:', err));