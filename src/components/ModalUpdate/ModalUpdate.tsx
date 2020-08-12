import React, { FormEvent, useState } from 'react';
import './ModalUpdate.scss';
import '../Modal/Modal.scss';
import IconClose from "../../assets/img/close.svg";
import axios from "axios";
import { postData } from "../../constants/postData";

interface Props {
  isEditModalOpen: boolean;
  getCallback: any;
  currentRecord: any;
  getUpdate: Function;
}

const ModalUpdate = ({isEditModalOpen, getCallback, currentRecord, getUpdate}: Props) => {
  const [commentInfo, updateCommentInfo] = useState({
	name: currentRecord.name,
	email: currentRecord.email,
	text: currentRecord.text
  });

  const handleModalClose = () => {
	getCallback();
  }

  const handleUpdateComment = (e: FormEvent) => {
	let {name, email, text} = commentInfo;
	e.preventDefault();

	let data = {
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