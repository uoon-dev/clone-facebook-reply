/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useDispatch, useSelector } from 'react-redux';
import { FaUserFriends } from 'react-icons/fa'
import * as styles from './appStyle';

import Layout from 'hocs/Layout/Layout';
import CommentsWrapper from 'containers/Feed/Comments/CommentsWrapper';

/**
 * Todo
 * 1. 코멘트 입력창 브레이크 라인 구현
 * 2. 삭제 기능
 * 3. 좋아요 기능
 * 4. 코멘트 입력창 오토 포커싱
 * 5. 대댓글 가리기 - 보여주기
 */

const App = () => {
  const dispatch = useDispatch();
  const activeUser = useSelector(state => state.user.activeUser);
  const testUser1 = useSelector(state => state.user.testUser1);
  const testUser2 = useSelector(state => state.user.testUser2);

  const changeUserInfo = () => dispatch({type: 'CHANGE_USER_INFO', payload: {
    activeUser: activeUser === testUser1 ? testUser2 : testUser1
  }});

  return (
    <Layout css={styles.layout}>
      <button css={styles.changeUserButton} onClick={changeUserInfo}>
        <FaUserFriends size="1.5em"/><span>Change User</span>
      </button>
      <CommentsWrapper/>
    </Layout>
  );
}

export default App;
