
/** @jsx jsx */
import { jsx } from '@emotion/core';
// import { useForm } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';

import * as text from 'constants/text';
// import * as styles from './commentInputStyle';


const commentInput = props => {
  return (
    <div className="CommentForm">
      <TextareaAutosize 
        placeholder={text.comment.reply}
        onKeyDown={(e) => e.key === 'Enter' ? props.createCommentContent() : null}
        minRows={1}
        value={props.content}
        name="commentContent"
      />
    </div>
  )
}

export default commentInput;