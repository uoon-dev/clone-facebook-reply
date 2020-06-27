
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useRef, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';

import CommentSetting from './CommentSetting';
import * as styles from './commentInputStyle';
import { Comment } from 'constants/text';

const CommentInput = props => {
  const [isEditing, setIsEditing] = useState(false);
  const textarea = useRef();

  useEffect(() => {
    const commentTextArea = textarea.current;
    if (commentTextArea) {
      const commentLength = commentTextArea.value.length;
      commentTextArea.focus();
      commentTextArea.setSelectionRange(commentLength, commentLength)
    }
  }, [isEditing])

  const onEnterSave = (e) => { 
    e.preventDefault();
    if (props.isNewPendingComment) {
      props.createCommentContent();
    } else {
      props.updateCommentContent();
      setIsEditing(false);
    }
  }

  const targetCommentUser = (props.targetCommentInfo && props.targetCommentInfo.user) ? props.targetCommentInfo.user : {};
  const targetUserName = props.user.name !== targetCommentUser.name ? targetCommentUser.name : '';
  let userNames;
  if (props.id) {
    userNames = (
      <span>
        <a href="/" css={styles.userName}>{props.user.name}</a>
        {targetUserName ? <a href="/" css={styles.userName}>{targetUserName}</a> : ''}
      </span>
    )
  }

  const commentInputBody = (
    isEditing || props.isNewPendingComment ? 
      <TextareaAutosize
        ref={textarea}
        defaultValue={props.commentContent} 
        placeholder={props.parentId ? Comment.CHILD_REPLY : Comment.CREATE_REPLY }
        onKeyPress={(e) => e.key === 'Enter' ? onEnterSave(e) : ''}
        onChange={props.onChangeCommentContent}
        minRows={1}
        autoFocus={props.isNewPendingComment ? true : false}
        name="commentContent"
        css={styles.textarea}
      /> :
      <div className="CommentStaticInput" css={styles.commentInput}>
        <div css={styles.textarea}>
          {userNames} {props.commentContent}
        </div>
        <CommentSetting setIsEditing={setIsEditing}/>      
      </div>
  )
  
  return (
    <div>
        {commentInputBody}      
    </div>
  )
}

export default CommentInput;