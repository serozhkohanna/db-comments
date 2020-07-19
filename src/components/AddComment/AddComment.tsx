import React from'react';
import './AddComments.scss';
import CrossIcon from '../../assets/img/cross.svg';

const AddComment = () => {
  return <button className='button add-comment'>
    <span><img src={CrossIcon} alt="cross"/></span>
    add comment</button>
}

export default AddComment;