import React from 'react';
import './App.scss';
import axios from 'axios';

function App() {

  const getData = () => {
	axios.get('/comments')
	  .then((response) => {
		console.log(response.data)
	  })
  }

  return (
	<div className="App">
	  <button onClick={getData}>click</button>
	</div>
  );
}

export default App;
