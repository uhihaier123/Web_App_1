const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema(
    {
    
    english: {
        type: String,
        required: true,
        trim: true  
    },
    
    german: {
        type: String,
        required: true,
        trim: true
    },
    
    french: {
        type: String,
        required: true,
        trim: true
    }
    },
    {
    timestamps: true
    }
);

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;