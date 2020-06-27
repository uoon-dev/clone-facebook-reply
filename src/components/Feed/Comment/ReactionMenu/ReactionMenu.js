/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useDispatch } from 'react-redux';
import * as styles from './reactionMenuStyle';

const ReactionMenu = props => {
  const dispatch = useDispatch();
  const setTargetInfoDispatch = () => dispatch({type: 'SET_COMMENT_TARGET_INFO', payload: {
      id: props.id,
      user: props.user,
    }});
  const onClickReply = () => {
    if (props.parentId) {
      props.setTargetCommentInfo({
        id: props.id,
        user: props.user,
      });
      // setTargetInfoDispatch();
    } else {

    }
  }

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
          onClick={onClickReply}
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

export default ReactionMenu;