import React from 'react';
import { useSelector } from 'react-redux';
import Comment from 'components/Feed/Comment/Comment';

const Comments = props => {
  const commentsStatus = useSelector(state => state.comment.list);
  const commentLists = commentsStatus.map(commentStatus => {
    return (
      <li key={commentStatus.id}>
        <Comment
          id={commentStatus.id}
          user={commentStatus.user}
          commentContent={commentStatus.commentContent}
          likeCount={commentStatus.likeCount}
        />
      </li>
    )
  })
  return (
    <div>
      <ul className="CommentList">
        {commentLists}
      </ul>
      {/* <Comment 
        id={commentStatus.id}
        name={commentStatus.name}
        profileImageUrl={commentStatus.profileImageUrl}
        commentContent={commentStatus.commentContent}
        likeCount={commentStatus.likeCount}
      /> */}
    </div>
  )
}

export default Comments;