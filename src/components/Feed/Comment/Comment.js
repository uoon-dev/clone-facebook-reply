
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; 

import Profile from './Profile/Profile';
import CommentInput from './CommentInput/CommentInput';
import ReactionMenu from './ReactionMenu/ReactionMenu';

import * as styles from './commentStyle';

const Comment = props => {
  const activeUser = useSelector(state => state.user.activeUser);
  const dispatch = useDispatch();
  const createCommentDispatch = (commentValue) => { 
    return dispatch({type: 'CREATE_COMMENT_CONTENT', payload: {
      id: uuidv4(),
      parentId: props.parentId,
      user: activeUser,
      commentContent: commentValue,
      likeCount: 0,
      children: [],
      targetCommentInfo: props.targetCommentInfo
    }})
  };
  const updateCommentDispatch = (commentValue) => { 
    return dispatch({type: 'UPDATE_COMMENT_CONTENT', payload: {
      id: props.id,
      commentContent: commentValue
    }});
  }
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
      <div css={styles.commentContent}>
        <CommentInput 
          id={props.id}
          isNewPendingComment={props.isNewPendingComment}
          parentId={props.parentId}
          targetCommentInfo={props.targetCommentInfo}
          user={props.user}
          likeUsers={props.likeUsers}
          commentContent={props.commentContent}
          createCommentContent={createCommentDispatch}
          updateCommentContent={updateCommentDispatch}
        />
        {reactionMenu}
      </div>
    </div>
  )
}

export default Comment;