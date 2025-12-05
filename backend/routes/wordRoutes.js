const express = require('express');
const router = express.Router();
const Word = require('../models/Word');

router.get('/', async (req, res) => {
    try {
    
    const words = await Word.find();
    
    res.json(words);
    } catch (error) {
    
    res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
    
    const word = await Word.findById(req.params.id);
    
    if (!word) {
        return res.status(404).json({ message: 'Word not found' });
    }
    
    res.json(word);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
    
    const newWord = new Word({
        english: req.body.english,
        german: req.body.german,
        french: req.body.french
    });
    
    const savedWord = await newWord.save();
    
    res.status(201).json(savedWord);
    } catch (error) {
    res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
    
    const updatedWord = await Word.findByIdAndUpdate(
        req.params.id,
        {
        english: req.body.english,
        german: req.body.german,
        french: req.body.french
        },
        { new: true } 
    );
    
    if (!updatedWord) {
        return res.status(404).json({ message: 'Word not found' });
    }
    
    res.json(updatedWord);
    } catch (error) {
    res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
    
    const deletedWord = await Word.findByIdAndDelete(req.params.id);
    
    if (!deletedWord) {
        return res.status(404).json({ message: 'Word not found' });
    }
    
    res.json({ message: 'Word deleted successfully' });
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
});


module.exports = router;