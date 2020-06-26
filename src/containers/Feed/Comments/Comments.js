/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as styles from './commentsStyle';

import Comment from 'components/Feed/Comment/Comment';

const Comments = props => {
  const { children } = props;
  
  const commentLists = (children || []).map((commentStatus, index) => {
    return (
      <li className="CommentList" css={styles.commentList} key={commentStatus.id}>
        <Comment
          id={commentStatus.id}
          parentId={commentStatus.parentId}
          user={commentStatus.user}
          commentContent={commentStatus.commentContent}
          likeCount={commentStatus.likeCount}
        />
        <Comments children={commentStatus.children} />
        { index === children.length - 1 ? 
          <Comment
            parentId={commentStatus.parentId}
            user={commentStatus.user}            
          /> : null
        }
      </li>
    )
  })
  return (
      <ul className={`CommentList_Group ${children.parentId ? 'IsChildComments' : ''}`} css={styles.commentListGroup}>
        {commentLists}
      </ul>
  )
}

export default Comments;