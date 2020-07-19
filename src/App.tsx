import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import MainPage from "./Pages/MainPage/MainPage";
import Modal from "./components/Modal/Modal";

function App() {
  return (
	<div className="page">
	  <Header/>
	  <div className="page-content">
		<Route path='/' component={MainPage}/>
		<Route path='/:id' component={Modal}/>
	  </div>
	</div>
  );
}

export default App;
