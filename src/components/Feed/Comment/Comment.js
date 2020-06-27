
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; 

import Profile from './Profile/Profile';
import CommentInput from './CommentInput/CommentInput';
import ReactionMenu from './ReactionMenu/ReactionMenu';
import * as styles from './commentStyle';

const Comment = props => {
  const [commentContent, onChangeCommentContent] = useState('');
  const activeUser = useSelector(state => state.user.activeUser);
  const dispatch = useDispatch();
  const createCommentDispatch = () => { 
    return dispatch({type: 'CREATE_COMMENT_CONTENT', payload: {
      id: uuidv4(),
      parentId: props.parentId,
      user: activeUser,
      commentContent,
      likeCount: 0,
      children: [],
      targetCommentInfo: props.targetCommentInfo
    }})
  };
  const updateCommentDispatch = () => dispatch({type: 'UPDATE_COMMENT_CONTENT', payload: {
      id: props.id,
      commentContent
    }});
  const reactionMenu = !props.isNewPendingComment ? 
    <ReactionMenu 
      id={props.id} 
      user={props.user}
      parentId={props.parentId}
      setTargetCommentInfo={props.setTargetCommentInfo}
    /> : null;

  return (
    <div className={`CommentItem ${!props.isNewPendingComment ? 'CreatedComment' : ''}`} css={styles.commentItem}>
      <Profile profileImageUrl={props.user.profileImageUrl} isChildComment={props.parentId} />
      <div>
        <CommentInput 
          id={props.id}
          isNewPendingComment={props.isNewPendingComment}
          parentId={props.parentId}
          targetCommentInfo={props.targetCommentInfo}
          user={props.user}
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