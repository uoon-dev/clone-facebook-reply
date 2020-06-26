
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Profile from './Profile/Profile';
import CommentInput from './CommentInput/CommentInput';
import ReactionMenu from './ReactionMenu/ReactionMenu';
import * as styles from './commentStyle';

const Comment = props => {
  const [commentContent, onChangeCommentContent] = useState('');
  const dispatch = useDispatch();
  const createCommentDispatch = () => dispatch({type: 'CREATE_COMMENT_CONTENT', payload: {
      id: Date.now(),
      parentId: props.parentId,
      user: props.user,
      commentContent: `<a>${props.user.name}</a>`+ commentContent,
      likeCount: 0,
      children: []
    }});
  const reactionMenu = props.id ? <ReactionMenu /> : null;
  // const updateCommentInputDispatch = () => dispatch({type: 'UPDATE_COMMENT_INPUT', payload: {
  //   commentContent: 
  // }});

  return (
    <div className={`CommentItem ${props.id ? 'CreatedComment' : ''}`} css={styles.commentItem}>
      <Profile profileImageUrl={props.user.profileImageUrl} isChildComment={props.parentId} />
      <div>
        <CommentInput 
          id={props.id}
          parentId={props.parentId}
          commentContent={props.commentContent}
          createCommentContent={createCommentDispatch}
          onChangeCommentContent={(e) => onChangeCommentContent(e.target.value)}
        />
        {reactionMenu}
      </div>
    </div>
  )
}

export default Comment;