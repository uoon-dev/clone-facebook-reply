import React from 'react';
import { useSelector } from 'react-redux';
import Comment from 'components/Feed/Comment/Comment';

const Comments = props => {
  const { children } = props;
  
  const commentLists = (children || []).map((commentStatus, index) => {
    return (
      <li className="Comment" key={commentStatus.id}>
        <Comment
          id={commentStatus.id}
          user={commentStatus.user}
          commentContent={commentStatus.commentContent}
          likeCount={commentStatus.likeCount}
        />
        <Comments children={commentStatus.children} />
        { index === children.length - 1 ? 
          <Comment
            user={commentStatus.user}
            
          /> : null
        }
      </li>
    )
  })
  return (
      <ul className="CommentList">
        {commentLists}
      </ul>
  )
}

export default Comments;