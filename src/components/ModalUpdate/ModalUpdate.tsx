import React, { FormEvent, useState, FC } from 'react';
import './ModalUpdate.scss';
import '../Modal/Modal.scss';
import IconClose from "../../assets/img/close.svg";

import { postData } from "../../constants/postData";
import { Comment } from "../../constants/comment.interface";

interface Props {
  isEditModalOpen: boolean;
  getCallback: Function;
  currentRecord: Comment;
  getUpdate: Function;
}

const ModalUpdate: FC<Props> = ({isEditModalOpen, getCallback, currentRecord, getUpdate}) => {
  const [commentInfo, updateCommentInfo] = useState({
	_id: currentRecord._id,
	name: currentRecord.name,
	email: currentRecord.email,
	text: currentRecord.text
  });

  const handleModalClose = () => {
	getCallback();
  }

  const handleUpdateComment = (e: FormEvent) => {
	let {name, email, text, _id} = commentInfo;
	e.preventDefault();

	let data = {
	  _id,
	  name,
	  email,
	  text
	}

	if (name || email || text) {
	  postData(`http://localhost:5001/comments/update/${currentRecord._id}`, data)
		.then(res => getUpdate(res))

	  getCallback();
	}
  }

  const handleNameChange = (e: FormEvent<HTMLInputElement>) => {
	updateCommentInfo({...commentInfo, name: e.currentTarget.value});
  }

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
	updateCommentInfo({...commentInfo, email: e.currentTarget.value});
  }

  const handleTextChange = (e: FormEvent<HTMLTextAreaElement>) => {
	updateCommentInfo({...commentInfo, text: e.currentTarget.value});
  }

  return <section className={`modal-wrapper ${isEditModalOpen && 'isOpen'}`}>
	<div className="modal">
	  <div className="modal-title">
		<p>Update record</p>
	  </div>
	  <div className="modal-body">
		<form>
		  <div className="input-field">
			<label htmlFor="name">Name</label>
			<input type="text" id="name" onChange={handleNameChange} placeholder={currentRecord.name}/>
		  </div>
		  <div className="input-field">
			<label htmlFor="email">Email</label>
			<input type="text" id="email" onChange={handleEmailChange} placeholder={currentRecord.email}/>
		  </div>
		  <div className="input-field">
			<label htmlFor="text">Text</label>
			<textarea id="text" onChange={handleTextChange} placeholder={currentRecord.text}/>
		  </div>
		  <button className="submit" onClick={handleUpdateComment}>
			update
		  </button>
		</form>
		<button className="modal-close" onClick={handleModalClose}>
		  <img src={IconClose} alt="close-btn"/>
		</button>
	  </div>
	</div>
  </section>
}

export default ModalUpdate;