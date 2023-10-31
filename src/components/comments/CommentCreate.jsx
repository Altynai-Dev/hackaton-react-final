import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getAuthUser } from '../../helpers/functions';
import { createComment } from '../../store/comments/commentsActions';

const CommentCreate = ({slug}) => {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const user = getAuthUser();

    const addComment = () =>{
        if(!comment.trim()) return alert('Напишите комментарий!');

        const commentObj = {
            content: comment,
            series : slug,
            user: user.email
        }
        dispatch(createComment(commentObj))
        
        setComment({
            comment:''
        })
    }
  return (
    <div>
        <input
        onChange={(e)=>setComment(e.target.value)}
        type='text'
        placeholder='Напишите комментарий'
        style={{width: "20rem", padding:"0.5rem", border:'none'}}
        />
        <button style={{padding:"0.5rem", marginLeft:"5px", borderRadius:'5px', border:"none", backgroundColor:"#e50914", color:'white', cursor:'pointer'}} onClick={()=>addComment()}>Опубликовать</button>
    </div>
  )
}

export default CommentCreate