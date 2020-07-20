import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Modal.scss';
import axios from 'axios';

const Modal = () => {
  const [commentInfo, setCommentInfo] = useState({name: '', email: '', text: ''});
  let history = useHistory();

  const handlePostComment = () => {

	let {name, email, text} = commentInfo;

	let postData = {
	  name,
	  email,
	  text
	}

	if (name && email && text) {
	  axios.post('http://localhost:5000/comments/add', postData)
		.then(res => console.log(res))
		.catch(err => console.log(err))

	  history.push('/');
	}
  }

  const handleNameChange = (e: any) => {
	setCommentInfo({...commentInfo, name: e.target.value});
  }

  const handleEmailChange = (e: any) => {
	setCommentInfo({...commentInfo, email: e.target.value});
  }

  const handleTextChange = (e: any) => {
	setCommentInfo({...commentInfo, text: e.target.value});
  }

  return <section className='modal-wrapper'>
	<div className="modal">
	  <div className="modal-title">
		<p>Add comment</p>
	  </div>
	  <div className="modal-body">
		<form>
		  <div className="input-field">
			<label htmlFor="name">Name</label>
			<input onChange={handleNameChange} type="text" id="name" required placeholder='name'/>
		  </div>
		  <div className="input-field">
			<label htmlFor="email">Email</label>
			<input onChange={handleEmailChange} type="text" id="email" required placeholder='email'/>
		  </div>
		  <div className="input-field">
			<label htmlFor="text">Text</label>
			<textarea onChange={handleTextChange} id="text" placeholder='text'></textarea>
		  </div>
		  <button onClick={handlePostComment} className="submit">
			add
		  </button>
		</form>
	  </div>
	</div>
  </section>
}

export default Modal;