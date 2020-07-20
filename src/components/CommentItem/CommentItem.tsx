import React from 'react';
import './CommentItem.scss';
import UserIcon from '../../assets/img/user.svg';

interface Props {
  comment: any;
}

const CommentItem = ({comment}: Props) => {
  console.log(comment, 'comment');
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
	</div> : null
  )
}

export default CommentItem;