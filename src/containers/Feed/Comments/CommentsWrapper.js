import React from 'react';
import { useSelector } from 'react-redux';
import Comments from './Comments';

const CommentsWrapper = props => {
  const commentsStatus = useSelector(state => state.comment.list);
  return (
    <div className="CommentList_Wrapper" style={{marginTop: '60px'}}>
      <Comments children={commentsStatus}/>
    </div>
  )
}

export default CommentsWrapper;