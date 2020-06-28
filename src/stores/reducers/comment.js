import { handleActions } from 'redux-actions';

import * as actions from '../actions/comment';
import rejectDeepById from 'utils/rejectDeepById';
import updateDeep from 'utils/updateDeep';

const initialState = {
  list: [],
  newPendingComments: [],
  isFetched: false
};

export default handleActions (
  {
    [actions.loadComments]: (state, action) => {
      return ({
        ...state,
        list: action.payload.comments,
        isFetched: true
      })
    }, 
    [actions.createCommentContent]: (state, action) => {
      const createdCommentData = {
        id: action.payload.id,
        parentId: action.payload.parentId,
        user: action.payload.user,
        commentContent: action.payload.commentContent,
        targetCommentInfo: action.payload.targetCommentInfo,
        likeUsers: [],
        children: []
      }
      
      return ({
      ...state,
      list: action.payload.parentId ? 
        state.list.map(comment => {
          if (comment.id === action.payload.parentId) {
            comment.children.push(createdCommentData);
          }
          
          return comment;
        }) :
        state.list.concat(createdCommentData)
     })
    },
    [actions.updateCommentContent]: (state, action) => {
      const copiedList = [...state.list];
      const identity = {
        id: action.payload.id,
        key: 'commentContent'
      }
      const value = action.payload.commentContent;
      copiedList.forEach(comment => updateDeep(comment, identity, value));

      return (
        {
          ...state,
          list: [...copiedList]
        }
      )      
    },
    [actions.deleteCommentContent]: (state, action) => { 
      const copiedList = [...state.list];
      copiedList.forEach((comment, i) => rejectDeepById(comment, copiedList, action.payload.id, i));

      return (
        {
          ...state,
          list: [...copiedList]
        }
      )
    },
    [actions.updateCommentLikeUser]: (state, action) => {
      const copiedList = [...state.list];
      const identity = {
        id: action.payload.id,
        key: 'likeUsers'
      }
      const value = action.payload.likeUsers;
      copiedList.forEach(comment => updateDeep(comment, identity, value));

      return (
        {
          ...state,
          list: [...copiedList]
        }
      )      
    },
    [actions.linkCommentInputs]: (state, action) => {
      return ({
        ...state,
        newPendingComments: 
          state.newPendingComments
          .filter(newPendingComment => newPendingComment.parentId !== action.payload.parentId)
          .concat({
          ref: action.payload.ref,
          parentId: action.payload.parentId
        })
      })
    },
  },
  initialState
)