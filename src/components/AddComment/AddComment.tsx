import React, { FC } from 'react';
import './AddComments.scss';
import CrossIcon from '../../assets/img/cross.svg';
interface Props {
  getCallback: Function
}

const AddComment:FC<Props> = ({getCallback}) => {

  const handleOpenModal = () => {
	getCallback();
  }

  return <button className='button add-comment' onClick={handleOpenModal}>
	<span><img src={CrossIcon} alt="cross"/></span>
	add comment</button>
}

export default AddComment;