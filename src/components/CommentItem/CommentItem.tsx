import React from 'react';
import './CommentItem.scss';
import UserIcon from '../../assets/img/user.svg';
import axios from 'axios';

interface Props {
  comment: any;
  isUpdated: any;
}

const CommentItem = ({comment, isUpdated}: Props) => {
  const sendData = () => {
	isUpdated();
  }

  const handleDeleteRecord = (id: string) => {
	console.log(id);
	axios.delete(`http://localhost:5000/comments/${id}`)
	  .then(res => sendData())
	  .catch(err => console.log(err))
  }

  return (
	comment ? <div className='comment-item'>
	  <div className="comment-item-header">
		<div className="icon-wrapper">
		  <img src={UserIcon} alt="user-icon"/>
		</div>
		<div className="user-data">
		  <p className="name">
			{comment.name}
		  </p>
		  <p className="email">
			{comment.email}
		  </p>
		</div>
	  </div>
	  <div className="comment-item-body">
		<p>{comment.text}</p>
	  </div>
	  <button onClick={() => handleDeleteRecord(comment._id)} className="delete-btn">
		delete
	  </button>
	</div> : null
  )
}

export default CommentItem;