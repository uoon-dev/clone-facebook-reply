
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useForm } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';

import CommentSetting from './CommentSetting/CommentSetting';
import LikeStatus from './LikeStatus/LikeStatus';
import * as styles from './commentInputStyle';
import { Comment } from 'constants/text';

const CommentInput = props => {
  const [isEditing, setIsEditing] = useState(false);
  const textarea = useRef();
  const activeUser = useSelector(state => state.user.activeUser);
  
  useEffect(() => {
    const commentTextArea = textarea.current;
    if (commentTextArea) {
      const commentLength = commentTextArea.value.length;
      commentTextArea.focus();
      commentTextArea.setSelectionRange(commentLength, commentLength)
    }
  }, [isEditing])

  const onKeyHandler = (e) => { 
    const isEnterPressed = e.key === 'Enter';
    const isShiftPressed = e.shiftKey;

    if (isEnterPressed && !isShiftPressed) {
      e.preventDefault();
      const value = e.target.value;
      if (e.target.value.length === 0) return;
      if (props.isNewPendingComment) {
        props.createCommentContent(value);
      } else {
        props.updateCommentContent(value);
        setIsEditing(false);
      }
    }
  }

  const targetCommentUser = (props.targetCommentInfo && props.targetCommentInfo.user) ? props.targetCommentInfo.user : {};
  const targetUserName = activeUser.id !== targetCommentUser.id ? targetCommentUser.name : '';
  let userNames;
  
  if (props.id) {
    userNames = (
      <span>
        <a href="/" css={styles.userName}>{props.user.name}</a>
        {targetUserName ? <a href="/" css={styles.userName}>{targetUserName}</a> : ''}
      </span>
    )
  }

  const likeStatus = (props.likeUsers || []).length > 0 ? 
    <LikeStatus 
      id={props.id}
      likeUsers={props.likeUsers}
    /> : null  

  const commentInputBody = (
    isEditing || props.isNewPendingComment ? 
      <TextareaAutosize
        ref={textarea}
        defaultValue={props.commentContent} 
        placeholder={props.parentId ? Comment.CHILD_REPLY : Comment.CREATE_REPLY }
        onKeyPress={onKeyHandler}
        minRows={1}
        name="commentContent"
        css={styles.textarea}
      /> :
      <div className="CommentStaticInput" css={styles.commentInput}>
        <div css={[styles.textarea, likeStatus ? styles.hasLikeStatus : '']}>
          {userNames} {props.commentContent}
          {likeStatus}
        </div>
        <CommentSetting 
          setIsEditing={setIsEditing} 
          commentId={props.id}
        />
      </div>
  )
  
  return (
    <div>
        {commentInputBody}      
    </div>
  )
}

export default CommentInput;