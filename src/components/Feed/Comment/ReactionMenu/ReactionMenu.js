/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useDispatch, useSelector } from 'react-redux';
import * as styles from './reactionMenuStyle';

const ReactionMenu = props => {
  // comment id,
  // comment likeUsers
  // added likeUser
  const dispatch = useDispatch();
  const activeUser = useSelector(state => state.user.activeUser);
  const updateCommenLikeUser = (method) => { 
    return dispatch({type: 'UPDATE_COMMENT_LIKE_USER', payload: {
      id: props.id,
      likeUsers: method === 'add' ? props.likeUsers.concat(activeUser) : 
        props.likeUsers.filter(likeUser => likeUser.id !== activeUser.id)
    }});
  }
    
  const onClickLike = () => 
    props.isLikeChecked ? updateCommenLikeUser('remove') : updateCommenLikeUser('add');

  const onClickReply = () => 
    props.setTargetCommentInfo({
      targetId: props.id,
      user: props.user,
    });
  
  return (
    <ul className="CommentReactionMenus" css={styles.commentReactionMenus}>
      <li className="CommentReactionMenu" css={styles.commentReactionMenu}>
        <button 
          className="CommentReactionMenu_Button" 
          css={[styles.commentReactionMenuButton, props.isLikeChecked ? styles.isLikeChecked : '']} 
          onClick={onClickLike}
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