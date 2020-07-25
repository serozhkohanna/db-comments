import React, { FC, useEffect, useState } from 'react';
import './CommentList.scss';
import getData from "../../constants/getData";

import CommentItem from "../CommentItem/CommentItem";

const CommentList = () => {
  const [comments, setComments] = useState([]);

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