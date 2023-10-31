import React from 'react'
import { getAuthUser } from '../../helpers/functions'
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../store/comments/commentsActions';

const CommentItem = ({comment}) => {
  const currentUser = getAuthUser().email;
  const dispatch = useDispatch();

  return (
    <div style={{padding:'5px', color: "black", margin:"8px", backgroundColor:"white", width: '25rem', border: '1px solid orange', borderRadius:"3px"}}>
        <div style={{fontSize:'0.8rem', color:"purple"}}>@{comment.author}</div>
        <p>{comment.content}</p>
        {currentUser === comment.author && (
          <button style={{padding:"0.5rem", marginLeft:"5px", borderRadius:'5px', border:"none", backgroundColor:"#e50914", color:'white', cursor:'pointer'}}
          onClick={()=>dispatch(deleteComment(comment.id))}
          >Удалить</button>
        )} 
    </div>
  )
}

export default CommentItem