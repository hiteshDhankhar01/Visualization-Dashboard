const express = require('express');
const mongoose = require('mongoose');
const Article = require('./models/article');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/Blackcoffer', {
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.get('/api/data', async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});