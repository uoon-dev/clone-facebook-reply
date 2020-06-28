/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaUserFriends } from 'react-icons/fa'
import * as styles from './appStyle';

import localStorageManager from 'utils/localStorageManager';
import Layout from 'hocs/Layout/Layout';
import CommentsWrapper from 'containers/Feed/Comments/CommentsWrapper';

const App = () => {
  const dispatch = useDispatch();  
  const isFetched = useSelector(state => state.comment.isFetched);
  const activeUser = useSelector(state => state.user.activeUser);
  const testUser1 = useSelector(state => state.user.testUser1);
  const testUser2 = useSelector(state => state.user.testUser2);

  const changeUserInfo = () => dispatch({type: 'CHANGE_USER_INFO', payload: {
    activeUser: activeUser === testUser1 ? testUser2 : testUser1
  }});

  useEffect(() => {
    dispatch({type: 'LOAD_COMMENTS', payload: {
      comments: localStorageManager.load('comments') || [] 
    }});
  }, [dispatch]);

  const commentWrapper = isFetched ? (
    <div>
      <button css={styles.changeUserButton} onClick={changeUserInfo}>
        <FaUserFriends size="1.5em"/><span>Change User</span>
      </button>
      <CommentsWrapper/>
    </div>
  ): ''

  return (
    <Layout css={styles.layout}>
      {commentWrapper}
    </Layout>
  );
}

export default App;
