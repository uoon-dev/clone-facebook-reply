/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as styles from './profileStyle';

const profile = props => {
  const { isChildComment } = props;
  return (
    <div className="CommentProfile">
      <img 
        src={props.profileImageUrl} 
        className={isChildComment ? 'IsChildComment' : ''} 
        css={styles.proflieImage} alt="profile"/>
    </div>
  )
}

export default profile;