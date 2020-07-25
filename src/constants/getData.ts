import axios from "axios";

export function getData(setComments?: any) {
  axios.get('http://localhost:5000/comments')
	.then(({data}) => {
	  setComments(data);
	})
	.catch(err => console.log(err));
}

//SORT DATE
export function getSortByDate(setComments?: any) {
  axios.get('http://localhost:5000/comments/sort/date')
	.then(({data}) => {
	  setComments(data);
	})
	.catch(err => console.log(err));
}

//Sort name
export function getSortByName(setComments?: any) {
  axios.get('http://localhost:5000/comments/sort/name')
	.then(({data}) => {
	  setComments(data);
	})
	.catch(err => console.log(err));
}