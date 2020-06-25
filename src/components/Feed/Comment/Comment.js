import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Profile from './Profile/Profile';
import CommentInput from './CommentInput/CommentInput';

const Comment = props => {
  const dispatch = useDispatch();
  const createCommentDispatch = () => dispatch({type: 'CREATE_COMMENT_CONTENT', payload: {
    id: 3,
    user: props.user,
    commentContent: '',
    likeCount: 0,
  }});

  return (
    <div>
      <Profile profileImageUrl={props.user.profileImageUrl} />
      <CommentInput 
        value={props.commentContent}
        createCommentContent={createCommentDispatch}
      />
    </div>
  )
}

export default Comment;