
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import { v4 as uuidv4 } from 'uuid'; 

import CommentSetting from '../CommentSetting/CommentSetting';
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
    setTargetCommentInfo,
    isEditing,
    setIsEditing
  } = props;

  
  const activeUser = useSelector(state => state.user.activeUser);
  const textarea = useRef();
  const dispatch = useDispatch();
  const targetCommentUser = (targetCommentInfo && targetCommentInfo.user) ? targetCommentInfo.user : {};
  const targetUserName = user.id !== targetCommentUser.id ? targetCommentUser.name : '';
  const canEditable = user.id === activeUser.id;

  const createCommentDispatch = () => dispatch({type: 'CREATE_COMMENT_CONTENT', payload: {
      id: uuidv4(),
      parentId,
      user: activeUser,
      commentContent: textarea.current.value,
      likeCount: 0,
      children: [],
      targetCommentInfo,
    }});

  const updateCommentDispatch = () => dispatch({type: 'UPDATE_COMMENT_CONTENT', payload: {
      id: id,
      commentContent: textarea.current.value
    }});

  const linkCommentInputs = useCallback(() => dispatch({type: 'LINK_COMMENT_INPUTS', payload: {
      ref: textarea.current,
      parentId,
    }}), [dispatch, parentId]);

  const onKeyPressHandler = (e) => { 
    const isEnterPressed = e.key === 'Enter';
    const isShiftPressed = e.shiftKey;

    if (isEnterPressed && !isShiftPressed) {
      e.preventDefault();
      const value = e.target.value;
      if (value.length === 0) return;
      if (isNewPendingComment) {
        createCommentDispatch();
        if (setTargetCommentInfo) {
          setTargetCommentInfo({});
        }
      } else {
        updateCommentDispatch();
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
  }, [isEditing, isNewPendingComment, linkCommentInputs]);

  const userNames = id ? (
    <span>
      <a href="/" css={styles.userName}>{user.name}</a>
      {targetUserName ? <a href="/" css={styles.userName}>{targetUserName}</a> : ''}
    </span>
  ) : null;  

  const likeStatus = (likeUsers || []).length > 0 ? 
    <LikeStatus 
      id={id}
      likeUsers={likeUsers}
    /> : null;

  return (
    <div>
      {isEditing || isNewPendingComment ? 
        <TextareaAutosize
          ref={textarea}
          defaultValue={commentContent} 
          placeholder={parentId ? Comment.CHILD_REPLY : Comment.CREATE_REPLY }
          onKeyPress={onKeyPressHandler}
          minRows={1}
          cols={200}
          name="commentContent"
          css={[styles.commentBody, styles.textArea]}
        /> : 
        <div className="CommentStaticBody" css={styles.commentStaticBodyWrapper}>
          <div className="CommentLikeStatus_Wrapper" css={[styles.commentBody, likeStatus ? styles.hasLikeStatus : '']}>
            {userNames} {commentContent}
            {likeStatus}
          </div>
          {
            canEditable ? 
            <CommentSetting
              icon={true}
              setIsEditing={setIsEditing} 
              commentId={id}
            /> : null
          }
        </div>
      }
    </div>
  )
}

export default CommentInput;