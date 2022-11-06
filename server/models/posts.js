const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    myDiary: String,
    quotes: String,
    image: String,
    created: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Post', postSchema);