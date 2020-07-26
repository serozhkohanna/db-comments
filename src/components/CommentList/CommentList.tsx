import React, { useEffect, useState } from 'react';
import './CommentList.scss';
import { getData } from "../../constants/getData";

import CommentItem from "../CommentItem/CommentItem";
import NoComments from "../NoComments/NoComments";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [sortParam, setSortParam] = useState();

  useEffect(() => {
	getData('http://localhost:5000/comments', setComments);
  }, [])

  const handleSort = (type: string) => {
	setSortParam(type);
	getData(`http://localhost:5000/comments/sort/${type}`, setComments);
  }

  return <section className='comment-list'>
	<div className="comment-list-params">
	  <div className="total">
		<p>{comments.length} items</p>
	  </div>
	  <div className="sort-button">
		<button className={`${sortParam === 'name' && 'isActive'}`} onClick={() => handleSort('name')}>
		  <svg xmlns="http://www.w3.org/2000/svg" id="Layer" enableBackground="new 0 0 64 64" height="512px"
			   viewBox="0 0 64 64" width="512px">
			<g>
			  <path
				d="m31.414 15.586-7-7c-.78-.781-2.048-.781-2.828 0l-7 7c-.781.781-.781 2.047 0 2.828.78.781 2.048.781 2.828 0l3.586-3.586v39.172c0 1.104.896 2 2 2s2-.896 2-2v-39.172l3.586 3.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828z"
				data-original="#000000" className="active-path" data-old_color="#000000" fill="#333333"/>
			  <path
				d="m49.414 45.586c-.781-.781-2.047-.781-2.828 0l-3.586 3.586v-39.172c0-1.104-.896-2-2-2s-2 .896-2 2v39.172l-3.586-3.586c-.781-.781-2.048-.781-2.828 0-.781.781-.781 2.047 0 2.828l7 7c.391.391.902.586 1.414.586s1.023-.195 1.414-.586l7-7c.781-.781.781-2.047 0-2.828z"
				data-original="#000000" className="active-path" data-old_color="#000000" fill="#333333"/>
			</g>
		  </svg>
		  Name
		</button>
		<button className={`${sortParam === 'date' && 'isActive'}`} onClick={() => handleSort('date')}>
		  <svg xmlns="http://www.w3.org/2000/svg" id="Layer" enableBackground="new 0 0 64 64" height="512px"
			   viewBox="0 0 64 64" width="512px">
			<g>
			  <path
				d="m31.414 15.586-7-7c-.78-.781-2.048-.781-2.828 0l-7 7c-.781.781-.781 2.047 0 2.828.78.781 2.048.781 2.828 0l3.586-3.586v39.172c0 1.104.896 2 2 2s2-.896 2-2v-39.172l3.586 3.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828z"
				data-original="#000000" className="active-path" data-old_color="#000000" fill="#333333"/>
			  <path
				d="m49.414 45.586c-.781-.781-2.047-.781-2.828 0l-3.586 3.586v-39.172c0-1.104-.896-2-2-2s-2 .896-2 2v39.172l-3.586-3.586c-.781-.781-2.048-.781-2.828 0-.781.781-.781 2.047 0 2.828l7 7c.391.391.902.586 1.414.586s1.023-.195 1.414-.586l7-7c.781-.781.781-2.047 0-2.828z"
				data-original="#000000" className="active-path" data-old_color="#000000" fill="#333333"/>
			</g>
		  </svg>
		  Date added
		</button>
	  </div>
	</div>
	{comments.length > 0 ? comments.map((item, i) => {
	  return <CommentItem isUpdated={() => getData('http://localhost:5000/comments', setComments)} key={i}
						  comment={item}/>
	}) : <NoComments/>}
  </section>
}

export default CommentList;