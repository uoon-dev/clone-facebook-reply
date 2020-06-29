


/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaEllipsisH } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';
import { IoIosTrash } from 'react-icons/io';
import ReactTooltip from "react-tooltip";
import { v4 as uuidv4 } from 'uuid'; 

import * as styles from './commentSettingStyle';
import { white_0 } from 'styles/colors';

const CommentSetting = props => {
  const { icon } = props;
  const [isCommentSettingClicked, setIsCommentSettingClicked] = useState(false);
  const dispatch = useDispatch();
  const deleteCommentDispatch = () => dispatch({type: 'DELETE_COMMENT_CONTENT', payload: {
    id: props.commentId  
  }});

  const uuid = uuidv4();
  return (
    <div className="CommentSetting_Wrapper" css={styles.commentSettingWrapper}>
      <button
        className={`CommentSettingButton ${isCommentSettingClicked ? 'IsCommentSettingClicked' : ''}`} 
        css={styles.commentSettingButton} 
        data-tip
        data-for={`commentSettingHoverTooltip_${uuid}`}
      >
        <span
          css={styles.commentSettingButtonText}
          data-tip
          data-event="click"
          data-for={`commentSettingClickTooltip_${uuid}`}        
        >
          {icon ? <FaEllipsisH/> : '더보기'}
        </span>
      </button>
      <ReactTooltip 
        id={`commentSettingHoverTooltip_${uuid}`}
        effect="solid"
        globalEventOff="mousedown"
      >
        <span>수정 또는 삭제</span>
      </ReactTooltip>
      <ReactTooltip 
        place="bottom"
        id={`commentSettingClickTooltip_${uuid}`}
        effect="solid"
        globalEventOff="click"
        clickable={true}
        afterShow={() => setIsCommentSettingClicked(true)}
        afterHide={() => setIsCommentSettingClicked(false)}
        backgroundColor={white_0}
        border={true}
        borderColor="rgba(0, 0, 0, .15)"
        css={styles.commentSettingClickTooltip}
      >
        <button css={styles.updateCommentButton} onClick={() => props.setIsEditing(true)}>
          <MdModeEdit css={styles.buttonIcon}/> 수정
        </button>
        <button css={styles.deleteCommentButton} onClick={deleteCommentDispatch}>
          <IoIosTrash css={styles.buttonIcon}/> 삭제
        </button>
      </ReactTooltip>
    </div>
  )
}

export default CommentSetting;