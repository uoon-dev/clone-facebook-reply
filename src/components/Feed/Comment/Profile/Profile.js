
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as styles from './profileStyle';

const profileImageUrl = 'https://picsum.photos/seed/picsum/32/32';

const profile = props => (
  <div>
    <img src={profileImageUrl} css={styles.proflieImage} alt="profile"></img>
  </div>
)

export default profile;