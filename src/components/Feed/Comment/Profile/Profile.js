
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as styles from './profileStyle';

const profile = props => (
  <div>
    <img src={props.profileImageUrl} css={styles.proflieImage} alt="profile"></img>
  </div>
)

export default profile;