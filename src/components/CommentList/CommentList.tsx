import React, { FC, useEffect, useState } from 'react';
import './CommentList.scss';
import getData from "../../constants/getData";

import CommentItem from "../CommentItem/CommentItem";
const CommentList = () => {
  const [comments, setComments] = useState([]);

  // const updateList = () => {
	// axios.get('http://localhost:5000/comments')
	//   .then(({data}) => {
	// 	setComments(data);
	//   })
	//   .catch(err => console.log(err));
  // }

  useEffect(() => {
	getData(setComments);
  }, [])

  return <section className='comment-list'>
	{comments.map((item, i) => {
	  return <CommentItem isUpdated={() => getData(setComments)} key={i} comment={item}/>
	})}
  </section>
}

export default CommentList;