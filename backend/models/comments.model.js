const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
	name: String,
	email: String,
	text: String
}, {
	timestamps: true,
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;