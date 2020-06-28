
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; 

import Profile from './Profile/Profile';
import CommentInput from './CommentInput/CommentInput';
import ReactionMenu from './ReactionMenu/ReactionMenu';

import * as styles from './commentStyle';

const Comment = props => {
  const { 
    commentContent,
    targetCommentInfo,
    setTargetCommentInfo, 
    parentId,
    id,
    likeUsers,
    user,
    isNewPendingComment
  } = props;

  const activeUser = useSelector(state => state.user.activeUser);
  const dispatch = useDispatch();
  const createCommentDispatch = (commentValue) => { 
    const copiedTargetCommentInfo = targetCommentInfo;
    if (setTargetCommentInfo) {
      setTargetCommentInfo({});
    }
    return dispatch({type: 'CREATE_COMMENT_CONTENT', payload: {
      id: uuidv4(),
      parentId,
      user: activeUser,
      commentContent: commentValue,
      likeCount: 0,
      children: [],
      targetCommentInfo: copiedTargetCommentInfo,
    }})
  };
  const updateCommentDispatch = (commentValue) => { 
    return dispatch({type: 'UPDATE_COMMENT_CONTENT', payload: {
      id: id,
      commentContent: commentValue
    }});
  }
  const isLikeChecked = (likeUsers || []).filter(likeUser => likeUser.id === activeUser.id).length;
  const reactionMenu = !isNewPendingComment ? 
    <ReactionMenu 
      id={id} 
      user={user}
      parentId={parentId}
      setTargetCommentInfo={setTargetCommentInfo}
      likeUsers={likeUsers}
      isLikeChecked={isLikeChecked}
    /> : null;

  return (
    <div       
      className={`CommentItem ${!isNewPendingComment ? 'CreatedComment' : ''}`} 
      css={styles.commentItem}
    >
      <Profile profileImageUrl={user.profileImageUrl} isChildComment={parentId} />
      <div css={styles.commentContent}>
        <CommentInput 
          id={id}
          isNewPendingComment={isNewPendingComment}
          parentId={parentId}
          targetCommentInfo={targetCommentInfo}
          user={user}
          likeUsers={likeUsers}
          isLikeChecked={isLikeChecked}
          commentContent={commentContent}
          createCommentContent={createCommentDispatch}
          updateCommentContent={updateCommentDispatch}
        />
        {reactionMenu}
      </div>
    </div>
  )
};

export default Comment;