
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; 

import Profile from './Profile/Profile';
import CommentInput from './CommentInput/CommentInput';
import ReactionMenu from './ReactionMenu/ReactionMenu';
import * as styles from './commentStyle';

const Comment = props => {
  const [commentContent, onChangeCommentContent] = useState('');
  const dispatch = useDispatch();
  const createCommentDispatch = () => dispatch({type: 'CREATE_COMMENT_CONTENT', payload: {
      id: uuidv4(),
      parentId: props.parentId,
      user: props.user,
      commentContent: `<a>${props.user.name}</a>`+ commentContent,
      likeCount: 0,
      children: []
    }});
  const updateCommentDispatch = () => dispatch({type: 'UPDATE_COMMENT_CONTENT', payload: {
      id: props.id,
      commentContent: commentContent
    }});
  const isNewPendingComment = typeof props.id === "undefined"; 
  const reactionMenu = !isNewPendingComment ? <ReactionMenu /> : null;

  return (
    <div className={`CommentItem ${!isNewPendingComment ? 'CreatedComment' : ''}`} css={styles.commentItem}>
      <Profile profileImageUrl={props.user.profileImageUrl} isChildComment={props.parentId} />
      <div>
        <CommentInput 
          id={props.id}
          isNewPendingComment={isNewPendingComment}
          parentId={props.parentId}
          commentContent={props.commentContent}
          createCommentContent={createCommentDispatch}
          updateCommentContent={updateCommentDispatch}
          onChangeCommentContent={(e) => onChangeCommentContent(e.target.value)}
        />
        {reactionMenu}
      </div>
    </div>
  )
}

export default Comment;