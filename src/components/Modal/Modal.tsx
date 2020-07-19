import React, { useState } from 'react';
import './Modal.scss';
import axios from 'axios';

const Modal = (name?: any, email?: any, text?: any) => {
  const [commentInfo, setCommentInfo] = useState({});

  const handlePostComment = (event: any) => {
    event.preventDefault();
	setCommentInfo({
	  name: name.value,
	  email: email.value,
	  text: text.value
	})

	axios.post('http://localhost:5000/comments/add', commentInfo)
	  .then(res => console.log(res))
	  .catch(err => console.log(err))
  }

  console.log(commentInfo);
  return <section className='modal-wrapper'>
	<div className="modal">
	  <div className="modal-title">
		<p>Add comment</p>
	  </div>
	  <div className="modal-body">
		<form>
		  <div className="input-field">
			<label htmlFor="name">Name</label>
			<input ref={(input ) => name = input} type="text" id="name" required placeholder='name'/>
		  </div>
		  <div className="input-field">
			<label htmlFor="email">Email</label>
			<input ref={(input ) => email = input} type="text" id="email" required placeholder='email'/>
		  </div>
		  <div className="input-field">
			<label htmlFor="text">Text</label>
			<input ref={(input ) => text = input} type="text" id="text" required placeholder='text'/>
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