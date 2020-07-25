import React, { useState } from 'react';
import './ModalUpdate.scss';
import '../Modal/Modal.scss';
import IconClose from "../../assets/img/close.svg";
import axios from "axios";

interface Props {
  isEditModalOpen: boolean;
  getCallback: any;
  currentRecord: any
}

const ModalUpdate = ({isEditModalOpen, getCallback, currentRecord}: Props) => {
  const [commentInfo, updateCommentInfo] = useState({
	name: currentRecord.name,
	email: currentRecord.email,
	text: currentRecord.text
  });

  const handleModalClose = () => {
	getCallback();
  }

  const handleUpdateComment = () => {
	let {name, email, text} = commentInfo;

	let postData = {
	  name,
	  email,
	  text
	}

	if (name || email || text) {
	  axios.post(`http://localhost:5000/comments/update/${currentRecord._id}`, postData)
		.then(res => console.log(res, 'Updated successfully! '))
		.catch(err => console.log(err, 'Can not perform update operation'))

	  getCallback();
	}
  }

  const handleNameChange = (e: any) => {
	updateCommentInfo({...commentInfo, name: e.target.value});
  }

  const handleEmailChange = (e: any) => {
	updateCommentInfo({...commentInfo, email: e.target.value});
  }

  const handleTextChange = (e: any) => {
	updateCommentInfo({...commentInfo, text: e.target.value});
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