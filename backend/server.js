const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/database');
const wordRoutes = require('./routes/wordRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
connectDB();

app.use('/api/words', wordRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Vocab Builder API is running!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});