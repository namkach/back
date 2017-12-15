const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    room: {
        type: String,
        required: true,
        trim: true
    },
    time: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('topic', TopicSchema);
