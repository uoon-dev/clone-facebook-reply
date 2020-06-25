import React from 'react';
import { useSelector } from 'react-redux';
import Comment from 'components/Feed/Comment/Comment';

const Comments = props => {
  const commentsStatus = useSelector(state => state.comment.list);
  // const { children } = props;
  const commentLists = commentsStatus.map(commentStatus => {
    return (
      <li key={commentStatus.id}>
        <Comment
          id={commentStatus.id}
          user={commentStatus.user}
          commentContent={commentStatus.commentContent}
          likeCount={commentStatus.likeCount}
        />
        {/* <ul>
          <li>
            <Comments children={commentStatus.children} />
          </li>
        </ul> */}
      </li>
    )
  })
  return (
    <div className="CommentList_Wrapper">
      <ul className="CommentList">
        {commentLists}
      </ul>
      {/* <div className="NewComment">
        <Comment
          id={commentStatus.id}
          user={commentStatus.user}
          commentContent={commentStatus.commentContent}
          likeCount={commentStatus.likeCount}
        />      
      </div> */}
    </div>
  )
}

export default Comments;