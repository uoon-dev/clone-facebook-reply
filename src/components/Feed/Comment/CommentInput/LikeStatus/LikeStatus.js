/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as styles from './likeStatusStyle';
import likeIconImage from 'images/icn-like.png'

const profile = props => {
  const { likeUsers } = props;
  return (
    <div className="LikeStatus" css={styles.likeStatus}>
      <img 
        src={likeIconImage} 
        css={styles.likeStatusIcon} alt="likeIcon"/>
      <span>{likeUsers.length}</span>
    </div>
  )
}

export default profile;