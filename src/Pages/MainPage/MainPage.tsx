import React from 'react';
import './MainPage.scss';

import CommentList from "../../components/CommentList/CommentList";
import AddComment from "../../components/AddComment/AddComment";

const MainPage = () => {
  return <main>
	<div className="container">
	  <div className="page-title">
		<h1>Comments.</h1>
	  </div>
	  <div className="page-content">
		<CommentList/>
		<div className="button-wrapper">
		  <AddComment/>
		</div>
	  </div>
	</div>
  </main>
}

export default MainPage;

