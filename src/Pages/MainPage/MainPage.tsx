import React, { useState } from 'react';
import './MainPage.scss';

import CommentList from "../../components/CommentList/CommentList";
import AddComment from "../../components/AddComment/AddComment";
import Modal from "../../components/Modal/Modal";

const MainPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
	setModalOpen(!isModalOpen);
  }

  return <main>
	<div className="container">
	  <div className="page-title">
		<h1>Comments.</h1>
	  </div>
	  <div className="page-content">
		<CommentList/>
		<div className="button-wrapper">
		  <AddComment getCallback={handleOpenModal}/>
		</div>
	  </div>
	  <Modal isModalOpen={isModalOpen} getCallback={handleOpenModal}/>
	</div>
  </main>
}

export default MainPage;

