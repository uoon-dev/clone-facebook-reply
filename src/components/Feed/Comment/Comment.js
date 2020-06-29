
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useSelector } from 'react-redux';

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
          setTargetCommentInfo={setTargetCommentInfo}
        />
        {reactionMenu}
      </div>
    </div>
  )
};

export default Comment;