const router = require('express').Router();
let Comments = require('../models/comments.model');

//End point to handle GET req
router.route('/').get((req, res) => {
	Comments.find()
		.then(comments => res.json(comments))
		.catch(err => res.status(400).json('Error: ' + err));
});

//Second end point to handle POST req
router.route('/add').post((req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const text = req.body.text;

	const newComment = new Comments({
		name: 'Anna',
		email: 'New mail',
		text: 'review'
	});

	newComment.save()
		.then(() => res.json('Comment is added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;