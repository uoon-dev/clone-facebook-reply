
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
  
  const onEnterSave = (e) => { 
    e.preventDefault();
    props.createCommentContent();
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
        name="commentContent"
        autoFocus
        css={styles.textarea}
      /> :
      <div className="CommentStaticInput" css={styles.commentInput}>
        <div css={styles.textarea}>
          {props.commentContent}
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