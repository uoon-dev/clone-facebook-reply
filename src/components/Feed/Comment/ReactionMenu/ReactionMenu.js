/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as styles from './reactionMenuStyle';

const reactionMenu = props => {
  return (
    <ul className="CommentReactionMenus" css={styles.commentReactionMenus}>
      <li className="CommentReactionMenu" css={styles.commentReactionMenu}>
        <button 
          className="CommentReactionMenu_Button" 
          css={styles.commentReactionMenuButton} 
          onClick={null}
        >
          좋아요
        </button>
      </li>
      <li className="CommentReactionMenu" css={styles.commentReactionMenu}>
        <button 
          className="CommentReactionMenu_Button" 
          css={styles.commentReactionMenuButton} 
          onClick={null}
        >
          답글 달기
        </button>
      </li>
      <li className="CommentReactionMenu" css={styles.commentReactionMenu}>
        1시간
      </li>
    </ul>
  )
}

export default reactionMenu;