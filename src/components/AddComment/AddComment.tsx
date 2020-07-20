import React from 'react';
import './AddComments.scss';
import CrossIcon from '../../assets/img/cross.svg';
import { useHistory } from "react-router-dom";

const AddComment = () => {
  let history = useHistory();

  const handleOpenModal = () => {
	history.push('/comments/addComment');
  }

  return <button className='button add-comment' onClick={handleOpenModal}>
	<span><img src={CrossIcon} alt="cross"/></span>
	add comment</button>
}

export default AddComment;