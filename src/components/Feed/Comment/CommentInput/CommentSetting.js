


/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';
import { IoIosTrash } from 'react-icons/io';
import ReactTooltip from "react-tooltip";
import { v4 as uuidv4 } from 'uuid'; 

import * as styles from './commentSettingStyle';
import { white_0 } from 'styles/colors';

const CommentSetting = props => {
  const [isCommentSettingClicked, setIsCommentSettingClicked] = useState(false);
  const uuid = uuidv4();
  return (
    <div>
      <button
        className={`CommentSettingButton ${isCommentSettingClicked ? 'IsCommentSettingClicked' : ''}`} 
        css={styles.commentSettingButton} 
        data-tip
        data-for={`commentSettingHoverTooltip_${uuid}`}
      >
        <FaEllipsisH
          data-tip
          data-event="click"
          data-for={`commentSettingClickTooltip_${uuid}`}
        >
        </FaEllipsisH>
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
        <button css={styles.deleteCommentButton}>
          <IoIosTrash css={styles.buttonIcon}/> 삭제
        </button>
      </ReactTooltip>
    </div>
  )
}

export default CommentSetting;