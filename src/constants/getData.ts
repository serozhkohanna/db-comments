import axios from "axios";

export function getData(requestedUrl: string, setComments: any) {
  axios.get(requestedUrl)
	.then(({data}) => {
	  setComments(data);
	})
	.catch(err => console.log(err));
}
