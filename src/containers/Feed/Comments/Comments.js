/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import * as styles from './commentsStyle';

import Comment from 'components/Feed/Comment/Comment';

const Comments = props => {
  const { children } = props;
  const [targetCommentInfo, setTargetCommentInfo] = useState({});
  
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
        />
        <Comments children={commentStatus.children} />
        { index === children.length - 1 ? 
          <Comment
            parentId={commentStatus.parentId}
            user={commentStatus.user}  
            targetCommentInfo={targetCommentInfo}          
          /> : null
        }
      </li>
    )
  })
  return (
      <ul className={`CommentList_Group`} css={styles.commentListGroup}>
        {commentLists}
      </ul>
  )
}

export default Comments;