/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useDispatch, useSelector } from 'react-redux';
import { FaUserFriends } from 'react-icons/fa'
import * as styles from './appStyle';

import Layout from 'hocs/Layout/Layout';
import CommentsWrapper from 'containers/Feed/Comments/CommentsWrapper';

/**
 * Todo
 * UX 개선사항
 * 1. 코멘트 입력창 브레이크 라인 구현
 * 2. 대댓글 가리기 - 보여주기
 * 3. 코멘트 입력창 오토 포커싱
 * 4. 수정 클릭 시 나머지 입력창 수정 취소 시키기
 * 5. 수정 취소 기능
 * 
 * 기능 개발
 * 1. 좋아요 기능
 * 2. localStorage 저장
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
