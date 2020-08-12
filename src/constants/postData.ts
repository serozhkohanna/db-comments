import axios from "axios";

export function postData(url: string, postData: object) {
  return axios.post(url, postData)
	.then(res => res.data)
	.catch(err => console.log(err))
}

