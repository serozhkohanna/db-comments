import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import './ModalUpdate.scss';
import '../Modal/Modal.scss';
import IconClose from "../../assets/img/close.svg";
import axios from "axios";

interface Props {
  isEditModalOpen: boolean;
  getCallback: any
}

const ModalUpdate = ({isEditModalOpen, getCallback}: Props) => {
  const history = useHistory();

  useEffect(() => {
	axios.get(`http://localhost:5000/comments/5f1c744af267a702de7a4671`)
	  .then(res => console.log(res))
	  .catch(err => console.log(err))
	console.log(history);
  }, [])

  const handleModalClose = () => {
	getCallback();
  }

  const handleUpdateComment = () => {

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
			<input type="text" id="name" required placeholder='name'/>
		  </div>
		  <div className="input-field">
			<label htmlFor="email">Email</label>
			<input type="text" id="email" required placeholder='email'/>
		  </div>
		  <div className="input-field">
			<label htmlFor="text">Text</label>
			<textarea id="text" placeholder='text'/>
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