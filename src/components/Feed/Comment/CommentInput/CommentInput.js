
/** @jsx jsx */
import { jsx } from '@emotion/core';
// import { useForm } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';

import { Comment } from 'constants/text';
import * as styles from './commentInputStyle';


const commentInput = props => {
  const isEditing = false;
  const onEnterSave = (e) => { 
    if (e.key === 'Enter') {
      e.preventDefault();
      if (props.id) {
        // props.updateCommentContent();
      } else {
        props.createCommentContent();
      }
    }
  }
  return (
    <div className="CommentInput">
      <TextareaAutosize
        defaultValue={props.commentContent} 
        placeholder={props.parentId ? Comment.CHILD_REPLY : Comment.CREATE_REPLY }
        onKeyDown={onEnterSave}
        onChange={props.onChangeCommentContent}
        minRows={1}
        name="commentContent"
        autoFocus
        css={styles.textarea}
      />
    </div>
  )
}

export default commentInput;