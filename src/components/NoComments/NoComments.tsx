import React from "react";
import './NoComments.scss';
import NoCommentsIcon from '../../assets/img/no-comments.png';

const NoComments = () => {
  return <section className='no-comments'>
	<h3>No comments</h3>
	<div className="img-wrapper">
	  <img src={NoCommentsIcon} alt="no-comments"/>
	</div>
  </section>
}

export default NoComments;