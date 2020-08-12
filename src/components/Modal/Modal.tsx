import React, { useState, FC, FormEvent } from 'react';
import './Modal.scss';
import axios from 'axios';

import IconClose from '../../assets/img/close.svg';

interface Props {
  isModalOpen: boolean;
  getCallback: Function
}

const Modal: FC<Props> = ({isModalOpen, getCallback}) => {
  const [commentInfo, setCommentInfo] = useState({name: '', email: '', text: ''});

  const handlePostComment = () => {

	let {name, email, text} = commentInfo;

	let postData = {
	  name,
	  email,
	  text
	}

	if (name && email && text) {
	  axios.post('http://localhost:5001/comments/add', postData)
		.then(res => console.log(res, 'Added comment successfully'))
		.catch(err => console.log(err, 'Can not perform update operation'))

	  handleModalClose();
	}
  }

  const handleNameChange = (e: FormEvent<HTMLInputElement>) => {
	setCommentInfo({...commentInfo, name: e.currentTarget.value});
  }

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
	setCommentInfo({...commentInfo, email: e.currentTarget.value});
  }

  const handleTextChange = (e: FormEvent<HTMLTextAreaElement>) => {
	setCommentInfo({...commentInfo, text: e.currentTarget.value});
  }

  const handleModalClose = () => {
	getCallback();
  }

  return <section className={`modal-wrapper ${isModalOpen && 'isOpen'}`}>
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
			<textarea onChange={handleTextChange} id="text" placeholder='text'/>
		  </div>
		  <button onClick={handlePostComment} className="submit">
			add
		  </button>
		</form>
		<button className="modal-close" onClick={handleModalClose}>
		  <img src={IconClose} alt="close-btn"/>
		</button>
	  </div>
	</div>
  </section>
}

export default Modal;