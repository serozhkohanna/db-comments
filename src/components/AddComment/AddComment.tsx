import React from 'react';
import './AddComments.scss';
import CrossIcon from '../../assets/img/cross.svg';
interface Props {
  getCallback: any
}

const AddComment = ({getCallback}: Props) => {

  const handleOpenModal = () => {
	getCallback();
  }

  return <button className='button add-comment' onClick={handleOpenModal}>
	<span><img src={CrossIcon} alt="cross"/></span>
	add comment</button>
}

export default AddComment;