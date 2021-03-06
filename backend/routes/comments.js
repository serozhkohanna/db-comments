const router = require('express').Router();
let Comments = require('../models/comments.model');

//End point to handle GET req
router.route('/').get((req, res) => {
	Comments.find()
		.then(comments => res.json(comments))
		.catch(err => res.status(400).json('Error: ' + err));
});

//End point to sort data created/updated
router.route('/sort/date').get((req, res) => {
	Comments.find().sort({createdAt: -1})
		.then(comments => res.json(comments))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/sort/name').get((req, res) => {
	Comments.find().sort({name: 1})
		.then(comments => res.json(comments))
		.catch(err => res.status(400).json('Error: ' + err));
});

//Second end point to handle POST req
router.route('/add').post((req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const text = req.body.text;

	const newComment = new Comments({
		name,
		email,
		text
	});

	newComment.save()
		.then(({data}) => res.json(data))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	Comments.findById(req.params.id)
		.then(comment => res.json(comment))
		.catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
	Comments.findByIdAndDelete(req.params.id)
		.then(() => res.json('Delete comment successfully'))
		.catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
	Comments.findById(req.params.id)
		.then(comment => {
			comment.name = req.body.name;
			comment.email = req.body.email;
			comment.text = req.body.text;

			comment.save()
				.then(() => res.json('Comment updated!'))
				.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;