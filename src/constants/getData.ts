import axios from "axios";

export default function getData(setComments?: any) {
  axios.get('http://localhost:5000/comments')
	.then(({data}) => {
	  setComments(data);
	})
	.catch(err => console.log(err));
}