const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    user_id : mongoose.SchemaTypes.ObjectId,
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