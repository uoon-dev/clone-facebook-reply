/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as styles from './reactionMenuStyle';
import CommentSetting from '../CommentSetting/CommentSetting';

const ReactionMenu = props => {
  const { 
    setTargetCommentInfo, 
    id,
    parentId,
    likeUsers,
    user,
    isLikeChecked,
    setIsEditing
  } = props;  
  const menuGroupRef = useRef();
  const dispatch = useDispatch();
  const activeUser = useSelector(state => state.user.activeUser);
  const canEditable = user.id === activeUser.id;
  const newPendingComments = useSelector(state => state.comment.newPendingComments);
  
  const updateCommenLikeUser = (method) => { 
    return dispatch({type: 'UPDATE_COMMENT_LIKE_USER', payload: {
      id,
      likeUsers: method === 'add' ? likeUsers.concat(activeUser) : 
        likeUsers.filter(likeUser => likeUser.id !== activeUser.id)
    }});
  }
    
  const onClickLike = () => 
    isLikeChecked ? updateCommenLikeUser('remove') : updateCommenLikeUser('add');

  const onClickReply = () => {
    if (!parentId) {
      newPendingComments.forEach(input => {
        if (input.parentId === id) {
          input.ref.focus();
        }
      });
    } else {
      setTargetCommentInfo({
        targetId: id,
        user: user,
      });
    }
  }
  
  return (
    <ul className="CommentReactionMenus" css={styles.commentReactionMenus} ref={menuGroupRef}>
      <li className="CommentReactionMenu" css={styles.commentReactionMenu}>
        <button 
          className="CommentReactionMenu_Button" 
          css={[styles.commentReactionMenuButton, isLikeChecked ? styles.isLikeChecked : '']} 
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
      {
        canEditable ? 
        <li className="CommentReactionMenu" css={[styles.commentReactionMenu, styles.commentSettingInMobile ]}>
          <CommentSetting
            setIsEditing={setIsEditing} 
            commentId={id}
          />
        </li> : 
        null
      }
    </ul>
  )
}

export default ReactionMenu;