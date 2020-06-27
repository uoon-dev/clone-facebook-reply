/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import * as styles from './commentsStyle';
import { v4 as uuidv4 } from 'uuid'

import Comment from 'components/Feed/Comment/Comment';

const Comments = props => {
  const { id, user, parentId, children } = props;
  const [targetCommentInfo, setTargetCommentInfo] = useState({});
  const isRootComment = (children || []).length === 0 && !parentId;
  const firstNewPendingComment = isRootComment ? (
    <Comment
      parentId={id}
      user={user}
      targetCommentInfo={targetCommentInfo}
      isNewPendingComment={true}
      key={uuidv4()}
    />
  ) : null;
  
  const commentLists = (children || []).map((commentStatus, index) => {
    return (
      <li className="CommentList" css={styles.commentList} key={commentStatus.id}>
        <Comment
          id={commentStatus.id}
          parentId={commentStatus.parentId}
          user={commentStatus.user}
          commentContent={commentStatus.commentContent}
          likeCount={commentStatus.likeCount}
          setTargetCommentInfo={setTargetCommentInfo}
          targetCommentInfo={commentStatus.targetCommentInfo}
          key={uuidv4()}
        />
        <Comments 
          id={commentStatus.id}
          user={commentStatus.user}
          parentId={commentStatus.parentId}
          children={commentStatus.children} 
        />
        { index === children.length - 1 ? 
          <Comment
            parentId={commentStatus.parentId}
            user={commentStatus.user}  
            targetCommentInfo={targetCommentInfo}
            isNewPendingComment={true}
            key={uuidv4()}
          /> : null
        }
      </li>
    )
  }).concat(firstNewPendingComment);
  return (
      <ul className={`CommentList_Group`} css={styles.commentListGroup}>
        {commentLists}
      </ul>
  )
}

export default Comments;