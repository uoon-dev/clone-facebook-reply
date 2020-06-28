
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';

import CommentSetting from './CommentSetting/CommentSetting';
import LikeStatus from './LikeStatus/LikeStatus';
import * as styles from './commentInputStyle';
import { Comment } from 'constants/text';

const CommentInput = props => {
  const { 
    commentContent,
    targetCommentInfo,
    parentId,
    id,
    likeUsers,
    user,
    isNewPendingComment,
    createCommentContent,
    updateCommentContent
  } = props;

  const [isEditing, setIsEditing] = useState(false);
  const activeUser = useSelector(state => state.user.activeUser);
  const textarea = useRef();
  const dispatch = useDispatch();
  const linkCommentInputs = useCallback(() => {
    return dispatch({type: 'LINK_COMMENT_INPUTS', payload: {
      ref: textarea.current,
      parentId,
    }})
  }, [dispatch, parentId]);  
  const targetCommentUser = (targetCommentInfo && targetCommentInfo.user) ? targetCommentInfo.user : {};
  const targetUserName = user.id !== targetCommentUser.id ? targetCommentUser.name : '';
  const canEditable = user.id === activeUser.id;
  let userNames;
  
  if (id) {
    userNames = (
      <span>
        <a href="/" css={styles.userName}>{user.name}</a>
        {targetUserName ? <a href="/" css={styles.userName}>{targetUserName}</a> : ''}
      </span>
    )
  }

  const onKeyPressHandler = (e) => { 
    const isEnterPressed = e.key === 'Enter';
    const isShiftPressed = e.shiftKey;

    if (isEnterPressed && !isShiftPressed) {
      e.preventDefault();
      const value = e.target.value;
      if (e.target.value.length === 0) return;
      if (isNewPendingComment) {
        createCommentContent(value);
      } else {
        updateCommentContent(value);
        setIsEditing(false);
      }
    }
  }

  useEffect(() => {
    const commentTextArea = textarea.current;
    if (commentTextArea) {
      const commentLength = commentTextArea.value.length;
      commentTextArea.focus();
      commentTextArea.setSelectionRange(commentLength, commentLength)
    }
    if (isNewPendingComment) {
      linkCommentInputs();
    }
  }, [isEditing, isNewPendingComment, linkCommentInputs])  

  const likeStatus = (likeUsers || []).length > 0 ? 
    <LikeStatus 
      id={id}
      likeUsers={likeUsers}
    /> : null  

  const commentInputBody = (
    isEditing || isNewPendingComment ? 
      <TextareaAutosize
        ref={textarea}
        defaultValue={commentContent} 
        placeholder={parentId ? Comment.CHILD_REPLY : Comment.CREATE_REPLY }
        onKeyPress={onKeyPressHandler}
        minRows={1}
        cols={200}
        name="commentContent"
        css={styles.textarea}
      /> :
      <div className="CommentStaticInput" css={styles.commentInput}>
        <div css={[styles.textarea, likeStatus ? styles.hasLikeStatus : '']}>
          {userNames} {commentContent}
          {likeStatus}
        </div>
        {
          canEditable ? 
          <CommentSetting 
            setIsEditing={setIsEditing} 
            commentId={id}
          /> : ''
        }
      </div>
  )
  
  return (
    <div>
        {commentInputBody}      
    </div>
  )
}

export default CommentInput;