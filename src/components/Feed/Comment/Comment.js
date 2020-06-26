
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Profile from './Profile/Profile';
import CommentInput from './CommentInput/CommentInput';
import * as styles from './commentStyle';

const Comment = props => {
  const [commentContent, onChangeCommentContent] = useState('');
  const dispatch = useDispatch();
  const createCommentDispatch = () => dispatch({type: 'CREATE_COMMENT_CONTENT', payload: {
      id: Date.now(),
      parentId: props.parentId,
      user: props.user,
      commentContent,
      likeCount: 0,
      children: []
    }});
  // const updateCommentInputDispatch = () => dispatch({type: 'UPDATE_COMMENT_INPUT', payload: {
  //   commentContent: 
  // }});

  return (
    <div className="CommentItem" css={styles.commentItem}>
      <Profile profileImageUrl={props.user.profileImageUrl} isChildComment={props.parentId} />
      <CommentInput 
        id={props.id}
        commentContent={props.commentContent}
        createCommentContent={createCommentDispatch}
        onChangeCommentContent={(e) => onChangeCommentContent(e.target.value)}
      />
    </div>
  )
}

export default Comment;