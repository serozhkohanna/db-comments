import React, { useEffect, useState } from 'react';
import './CommentList.scss';
import axios from 'axios';

import CommentItem from "../CommentItem/CommentItem";

const CommentList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
	axios.get('http://localhost:5000/comments')
	  .then(({data}) => {
		setComments(data);
	  })
	  .catch(err => console.log(err));
  }, [])

  return <section className='comment-list'>
	{comments.map((item, i) => {
	  return <CommentItem key={i} comment={item}/>
	})}
  </section>
}

export default CommentList;