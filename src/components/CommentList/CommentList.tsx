import React, { useEffect, useState } from 'react';
import './CommentList.scss';
import axios from 'axios';

import CommentItem from "../CommentItem/CommentItem";

const CommentList = () => {
  const [comments, setComments] = useState([]);

  const updateList = () => {
	axios.get('http://localhost:5000/comments')
	  .then(({data}) => {
		setComments(data);
	  })
	  .catch(err => console.log(err));
  }

  useEffect(() => {
	updateList();
  }, [])

  return <section className='comment-list'>
	{comments.map((item, i) => {
	  return <CommentItem isUpdated={updateList} key={i} comment={item}/>
	})}
  </section>
}

export default CommentList;