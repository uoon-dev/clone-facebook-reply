/** @jsx jsx */
import { jsx } from '@emotion/core';
import ReactTooltip from "react-tooltip";

import * as styles from './likeStatusStyle';
import { black_100 } from 'styles/colors';
import likeIconImage from 'images/icn-like.png'

const likeStatus = props => {
  const { likeUsers, id } = props;
  const likeUserList = (
    likeUsers.map(likeUser => <li key={likeUser.id} css={styles.likeUserItem}>{likeUser.name}</li>)          
  )
  return (
    <div 
      className="LikeStatus" 
      css={styles.likeStatus} 
      data-tip
      data-for={`likeUserList_${props.id}`}
    >
      <img 
        src={likeIconImage} 
        css={styles.likeStatusIcon} 
        alt="likeIcon"
      />
      <span>{likeUsers.length}</span>
      <ReactTooltip 
        place="top"
        id={`likeUserList_${props.id}`}
        effect="solid"
        backgroundColor={black_100}
      > 
        <div css={styles.tooltipTop}>
          <img 
            src={likeIconImage} 
            css={styles.likeStatusIcon} 
            alt="likeIcon"
          />
          <span>{likeUsers.length}</span>
        </div>
        <ul css={styles.likeUserGroup}>
          {likeUserList}
        </ul>  
      </ReactTooltip>  
    </div>
  )
}

export default likeStatus;